import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddSecurity from './addSecurity.js'
import EditSecurity from './editSecurity.js'

class Security extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            editSource: null,
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
                    type: 'example/removeSecurity',
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
    addSecurity(){
        this.setState({
            showModal: true
        })
    }
    cancel(){
        this.props.dispatch({
            type: 'example/changeEdit',
            payload: {
                data: false
            }
        })
        this.setState({
            showModal: false
        })
    }
    render(){
        const {securitySource, showEdit} = this.props
        return(
            <div>
                <Button onClick={this.addSecurity}>
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
                <Modal
                    visible={showEdit}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <EditSecurity
                        editSource={this.state.editSource}
                        cancel={this.cancel}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={securitySource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {securitySource, showEdit} = state.example
    return{
        securitySource: securitySource,
        showEdit: showEdit,
    }
})(Security);
