import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
// import AddReport from './addReport.js'

class Report extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false
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
    {
        title: '报修时间',
        dataIndex:'date'
    },
    {
        title: '状态',
        dataIndex:'statu',
        render: (text,record) => {
            if(text == 1){
                return <span>提交报修</span>
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
                    <a href="#">编辑</a>
                    <Divider type="vertical" />
                    <a href="javascript:;">Delete</a>
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
    render(){
        const {reportSource} = this.props
        return(
            <div>
                <Button onClick={this.addReport}>
                    添加报修
                </Button>
                {/* <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <AddReport
                        cancel={this.cancel}
                    />
                </Modal> */}
                <Table columns={this.columns} dataSource={reportSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {reportSource} = state.example
    return{
        reportSource: reportSource
    }
})(Report);
