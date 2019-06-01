import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import EditMessage from './editMessage.js'
import moment from 'moment'
class Message extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            editSource: {}
        }
        // this.addCar = this.addCar.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'example/message',
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
        render:(text, record) => {
            return (
                <span>{moment(text).format("YYYY-MM-DD")}</span>
            )
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
                        showModal: true
                    })
                    this.props.dispatch({
                        type: 'example/changeEdit',
                        payload: {
                            data: true
                        }
                    })
                    }}>编辑</a>
                </span>
            )
        }
    }
    ]
    // addCar(){
    //     this.setState({
    //         showModal: true
    //     })
    // }
    cancel(){
        console.log("rvtf")
        this.setState({
            showModal: false
        })
    }
    render(){
        const {messageSource} = this.props
        return(
            <div>
                {/* <Button onClick={this.addCar}>
                    添加维修
                </Button> */}
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <EditMessage
                        cancel={this.cancel}
                        editSource={this.state.editSource}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={messageSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {messageSource} = state.example
    return{
        messageSource: messageSource
    }
})(Message);
