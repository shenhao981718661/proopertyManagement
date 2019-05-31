import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal, Form, message, Input } from 'antd'
// import EditReport from './editReport.js'

class UserReport extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            editSource: null,
        }
        this.addReport = this.addReport.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'user/userReport',
            payload: {
                data: {room: this.props.room}
            }
        })
    }
    columns = [{
        title: '房号',
        dataIndex: 'room'
    },
    {
        title: '业主',
        dataIndex: 'name'
    },
    {
        title: '电话',
        dataIndex: 'tel'
    },
    {
        title: '维修项目',
        dataIndex:'project'
    },
    {
        title: '说明',
        dataIndex:'explain'
    },
    // {
    //     title: '报修时间',
    //     dataIndex:'date'
    // },
    {
        title: '状态',
        dataIndex:'statu',
        render: (text,record) => {
            if(text == 1){
                return <span>待处理</span>
            }else if(text == 2){
                return <span>处理中</span>
            }else{
                return <span>已处理</span>
            }
        }
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
                    <Popconfirm cancelText='返回' okText='确定' title="确定删除？" onConfirm={() => {
                        this.props.dispatch({
                            type: 'example/removeReport',
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
    addReport(){
        this.setState({
            showModal: true
        })
    }
    cancel(){
        this.setState({
            showModal: false
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                delete values.deteminePassword;
                this.props.dispatch({
                    type: 'user/addReport',
                    payload: {
                        data: values
                    }
                })
                this.cancel()
            }
        })
    }
    render(){
        const {getFieldDecorator} = this.props.form
        const {reportSource} = this.props
        const { room, userName, tel } = this.props.userInformation
        console.log(this.props.userInformation)
        return(
            <div>
                <Button onClick={this.addReport}>
                    添加报修
                </Button>
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <Form
                        onSubmit={this.handleSubmit}
                    >
                        <Form.Item
                            label='房号'
                        >
                        {getFieldDecorator('room',{initialValue: room})(
                            <Input disabled={true}/>
                        )}
                        </Form.Item>
                        <Form.Item
                            label='姓名'
                        >
                        {getFieldDecorator('name',{initialValue: userName})(
                            <Input disabled={true}/>
                        )}
                        </Form.Item>
                        <Form.Item
                            label='电话'
                        >
                        {getFieldDecorator('tel',{initialValue: tel})(
                            <Input />
                        )}
                        </Form.Item>
                        <Form.Item
                            label='维修项目'
                        >
                        {getFieldDecorator('project')(
                            <Input />
                        )}
                        </Form.Item>
                        <Form.Item
                            label='说明'
                        >
                        {getFieldDecorator('explain')(
                            <Input />
                        )}
                        </Form.Item>
                        <Form.Item
                        >
                        {getFieldDecorator('statu',{initialValue: '1'})(
                            <Input hidden={true}/>
                        )}
                        </Form.Item>
                        <Form.Item>
                            <Button 
                            type="primary"
                            htmlType="submit">添加</Button>
                        </Form.Item>
                    </Form>
                </Modal>
                <Table columns={this.columns} dataSource={reportSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const { userInformation } = state.example;
    const {reportSource} = state.user
    return{
        userInformation,
        reportSource,
        room: userInformation.room,
    }
})(Form.create({})(UserReport));
