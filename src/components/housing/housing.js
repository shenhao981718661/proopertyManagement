import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddHousing from './addHousing.js'
import EditHousing from './editHousing.js'

class Housing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            editSource: null,
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
                    <a href="javascript:;" onClick={() => {
                    this.setState({
                        editSource: text,
                    })
                    this.props.dispatch({
                        type: 'example/changeEdit',
                        payload: {
                            data: true
                        }
                    })
                    }}>编辑</a>
                    <Divider type="vertical" />
                    <Popconfirm title="确定删除？" onConfirm={() => {
                        this.props.dispatch({
                            type: 'example/removeHousing',
                            payload: {
                                data: {_id: text._id}
                            }
                        })
                    }}>
                        <a href="#">删除</a>
                    </Popconfirm>
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
        console.log("123")
        this.setState({
            showModal: false
        })
        this.props.dispatch({
            type: 'example/changeEdit',
            payload: {
                data: false
            }
        })
    }
    render(){
        const {housingSource, showEdit} = this.props
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
                <Modal
                    visible={showEdit}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <EditHousing
                        cancel={this.cancel}
                        editSource={this.state.editSource}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={housingSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {housingSource, showEdit} = state.example
    return{
        showEdit: showEdit,
        housingSource: housingSource
    }
})(Housing);
