import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddHousing from './addHousing.js'

class Housing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false
        }
        this.addHousing = this.addHousing.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'example/housing',
        })
    }
    columns = [{
        title: '姓名',
        dataIndex: 'name'
    },
    {
        title: '年龄',
        dataIndex: 'age'
    },
    {
        title: '性别',
        dataIndex: 'sex'
    },
    {
        title: '房号',
        dataIndex:'room'
    },
    {
        title: '电话',
        dataIndex: 'tel'
    },
    {
        title: '入住时间',
        dataIndex: 'date'
    },
    {
        title: '备注',
        dataIndex: 'remarks'
    },
    {
        title: '操作',
        render: (text, record) => {
            return(
                <span>
                    <a href="#">编辑</a>
                    <Divider type="vertical" />
                    <a href="javascript:;">Delete</a>
                </span>
            )
        }
    }
    ]
    addHousing(){
        this.setState({
            showModal: true
        })
    }
    cancel(){
        this.setState({
            showModal: false
        })
    }
    render(){
        const {housingSource} = this.props
        return(
            <div>
                <Button onClick={this.addHousing}>
                    添加业主
                </Button>
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <AddHousing
                        cancel={this.cancel}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={housingSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {housingSource} = state.example
    return{
        housingSource: housingSource
    }
})(Housing);
