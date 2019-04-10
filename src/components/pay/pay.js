import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddPay from './addPay.js'

class Pay extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false
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
                    <a href="#">编辑</a>
                    <Divider type="vertical" />
                    <a href="javascript:;">Delete</a>
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
    }
    render(){
        const {paySource} = this.props
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
                <Table columns={this.columns} dataSource={paySource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {paySource} = state.example
    return{
        paySource: paySource
    }
})(Pay);
