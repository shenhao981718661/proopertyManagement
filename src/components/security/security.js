import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddSecurity from './addSecurity.js'

class Security extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false
        }
        this.addSecurity = this.addSecurity.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'example/security',
        })
    }
    columns = [{
        title: '姓名',
        dataIndex: 'name'
    },
    {
        title: '类型',
        dataIndex: 'type'
    },
    {
        title: '安保区域',
        dataIndex: 'region'
    },
    {
        title: '上班时间',
        dataIndex:'date'
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
                    <a href="#">设备</a>
                    <Divider type="vertical" />
                    <a href="javascript:;">Delete</a>
                </span>
            )
        }
    }
    ]
    addSecurity(){
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
        const {securitySource} = this.props
        return(
            <div>
                <Button onClick={this.addEquipment}>
                    添加保安信息
                </Button>
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <AddSecurity
                        cancel={this.cancel}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={securitySource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {securitySource} = state.example
    return{
        securitySource: securitySource
    }
})(Security);
