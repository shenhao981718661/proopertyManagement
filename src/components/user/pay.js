import React from 'react'
import {connect} from 'dva'
import { Form, Table, Divider, Popconfirm } from 'antd'

class UserPay extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidMount(){
        this.props.dispatch({
            type: 'user/queryPay',
            payload: {
                data: {room: this.props.room}
            }
        })
    }

    columns = [
        {
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
                        }}>编辑</a>
                        <Divider type="vertical" />
                        <Popconfirm cancelText='返回' okText='确定' title="确定删除？" onConfirm={() => {

                        }}>
                            <a href="#">删除</a>
                        </Popconfirm>
                    </span>
                )
            }
        }
    ]

    render(){
        const { paySource } = this.props
        console.log(paySource)
        return(
            <div>
                <Table columns={this.columns} dataSource={paySource}></Table>
            </div>
        )
    }
}

export default connect((state) => {
    const { userInformation } = state.example;
    const { paySource } = state.user
    return{
        room: userInformation.room,
        userInformation,
        paySource: paySource,
    }
    
})(Form.create({})(UserPay))