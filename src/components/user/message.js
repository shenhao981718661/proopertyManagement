import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddMessage from './addMessage'
import moment from 'moment'

class Message extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            Pagination: {
                defaultCurrent:1,
                pageSize:10,
            } 
        }
        this.addCar = this.addCar.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'user/userMessage',
            payload: {
                data: {room: this.props.room}
            }
        }).then(res=> {
            this.props.dispatch({
                type: 'example/messagE',
                payload: {
                    data: {room: this.props.room}
                }
            })
        })
        
    }
    columns = [{
        title: '姓名',
        dataIndex: 'name'
    },
    {
        title: '房号',
        dataIndex: 'room'
    },
    {
        title: '留言内容',
        dataIndex: 'content'
    },
    {
        title: '回复',
        dataIndex:'back'
    },
    {
        title: '留言时间',
        dataIndex:'date',
        render: (text,record) => {
            return(
                <span>{moment(text).format("YYYY-MM-DD")}</span>
            )
        }
    },
    {
        title: '操作',
        render: (text, record) => {
            return(
                <span>
                    <Popconfirm cancelText='返回' okText='确定' title="确定删除？" onConfirm={() => {
                        this.props.dispatch({
                            type: 'example/removeMessage',
                            payload: {
                                data: {_id: text._id}
                            }
                        }).then(() => {
                            this.props.dispatch({
                                type: 'user/userMessage',
                                payload: {
                                    data: {room: this.props.room}
                                }
                            })
                        })
                    }}>
                        <a href="javascript:;">删除</a>
                    </Popconfirm>
                </span>
            )
        }
    }
    ]
    addCar(){
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
        const {messageSource} = this.props
        const legnth = messageSource.legnth
        return(
            <div>
                <Button onClick={this.addCar}>
                    添加留言
                </Button>
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <AddMessage
                        cancel={this.cancel}
                    />
                </Modal>
                <Table columns={this.columns} pagination={{
                    pageSize:12,
                    total: legnth
                }} dataSource={messageSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const { userInformation } = state.example
    const {messageSource} = state.user
    return{
        room: userInformation.room,
        messageSource: messageSource
    }
})(Message);
