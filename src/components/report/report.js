import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import EditReport from './editReport.js'

class Report extends React.Component{
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
            type: 'example/report',
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
        this.props.dispatch({
            type: 'example/changeEdit',
            payload: {
                data: false
            }
        })
    }
    render(){
        const {reportSource, showEdit} = this.props
        return(
            <div>
                <Button onClick={this.addReport}>
                    添加报修
                </Button>
                <Modal
                    visible={showEdit}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <EditReport
                        cancel={this.cancel}
                        editSource={this.state.editSource}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={reportSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {reportSource, showEdit} = state.example
    return{
        reportSource: reportSource,
        showEdit: showEdit,
    }
})(Report);
