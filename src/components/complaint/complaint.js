import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddComplaint from './addComplaint.js'

class Complaint extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false
        }
        this.addComplaint = this.addComplaint.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'example/complaint',
        })
    }
    columns = [{
        title: '业主姓名',
        dataIndex: 'name'
    },
    {
        title: '投诉内容',
        dataIndex: 'content'
    },
    {
        title: '投诉日期',
        dataIndex: 'date'
    },
    {
        title: '处理结果',
        dataIndex:'result'
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
    addComplaint(){
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
        const {complaintSource} = this.props
        return(
            <div>
                <Button onClick={this.addComplaint}>
                    添加投诉
                </Button>
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <AddComplaint
                        cancel={this.cancel}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={complaintSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {complaintSource} = state.example
    return{
        complaintSource: complaintSource
    }
})(Complaint);
