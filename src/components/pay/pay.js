import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddPay from './addPay.js'
import EditPay from './editPay.js'

class Pay extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            editSource: null,
        }
        this.addPay = this.addPay.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'example/pay',
        })
    }
    columns = [{
        title: '房号',
        dataIndex: 'room'
    },
    {
        title: '物业费',
        dataIndex: 'property'
    },
    {
        title: '车位费',
        dataIndex: 'car'
    },
    {
        title: '月份',
        dataIndex:'month'
    },
    {
        title: '缴费时间',
        dataIndex:'date'
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
                            type: 'example/removePay',
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
    addPay(){
        this.setState({
            showModal: true
        })
    }
    cancel(){
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
        const {paySource, showEdit} = this.props
        return(
            <div>
                <Button onClick={this.addPay}>
                    添加维修
                </Button>
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <AddPay
                        cancel={this.cancel}
                    />
                </Modal>
                <Modal
                    visible={showEdit}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <EditPay
                        editSource={this.state.editSource}
                        cancel={this.cancel}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={paySource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {paySource, showEdit} = state.example
    return{
        showEdit,
        paySource: paySource
    }
})(Pay);
