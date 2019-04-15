import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddRepair from './addRepair.js'
import EditRepair from './editRepair.js'

class Repair extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            editSource: null,
        }
        this.addRepair = this.addRepair.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'example/repair',
        })
    }
    columns = [{
        title: '维修项目',
        dataIndex: 'name'
    },
    {
        title: '维修内容',
        dataIndex: 'content'
    },
    {
        title: '维修费用',
        dataIndex: 'money'
    },
    {
        title: '维修日期',
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
                            type: 'example/removeRepair',
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
    addRepair(){
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
        const {repairSource, showEdit} = this.props
        return(
            <div>
                <Button onClick={this.addRepair}>
                    添加维修
                </Button>
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <AddRepair
                        cancel={this.cancel}
                    />
                </Modal>
                <Modal
                    visible={showEdit}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <EditRepair
                        cancel={this.cancel}
                        editSource={this.state.editSource}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={repairSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {repairSource, showEdit} = state.example
    return{
        repairSource: repairSource,
        showEdit: showEdit,
    }
})(Repair);
