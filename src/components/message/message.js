import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
// import AddCar from './addCar.js'

class Message extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false
        }
        // this.addCar = this.addCar.bind(this)
        // this.cancel = this.cancel.bind(this)
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
        dataIndex:'date'
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
    // addCar(){
    //     this.setState({
    //         showModal: true
    //     })
    // }
    // cancel(){
    //     this.setState({
    //         showModal: false
    //     })
    // }
    render(){
        const {messageSource} = this.props
        return(
            <div>
                {/* <Button onClick={this.addCar}>
                    添加维修
                </Button> */}
                {/* <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <AddCar
                        cancel={this.cancel}
                    />
                </Modal> */}
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
