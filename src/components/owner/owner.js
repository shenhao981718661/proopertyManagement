import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddOwner from './addOwner.js'
import EditOwner from './editOwner.js'

class Owner extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            editSource: null,
        }
        this.addOwner = this.addOwner.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'example/owner',
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
                        console.log(text)
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
                    type: 'example/removeOwner',
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
    addOwner(){
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
        const {ownerSource, showEdit} = this.props
        return(
            <div>
                <Button onClick={this.addOwner}>
                    添加业主
                </Button>
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <AddOwner
                        cancel={this.cancel}
                    />
                </Modal>
                <Modal
                    visible={showEdit}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <EditOwner
                        editSource={this.state.editSource}
                        cancel={this.cancel}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={ownerSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {ownerSource, showEdit} = state.example
    return{
        ownerSource: ownerSource,
        showEdit: showEdit,
    }
})(Owner);
