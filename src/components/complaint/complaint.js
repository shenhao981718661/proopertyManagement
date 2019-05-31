import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddComplaint from './addComplaint.js'
import EditComplaint from './editComplaint.js'

class Complaint extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            editSource: null,
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
                            type: 'example/removeComplaint',
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
    addComplaint(){
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
        const {complaintSource, showEdit} = this.props
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
                <Modal
                    visible={showEdit}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <EditComplaint
                        cancel={this.cancel}
                        editSource={this.state.editSource}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={complaintSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {complaintSource, showEdit} = state.example
    return{
        complaintSource: complaintSource,
        showEdit: showEdit,
    }
})(Complaint);
