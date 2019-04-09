import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddRepair from './addRepair.js'

class Repair extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false
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
                    <a href="#">编辑</a>
                    <Divider type="vertical" />
                    <a href="javascript:;">Delete</a>
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
    }
    render(){
        const {repairSource} = this.props
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
                <Table columns={this.columns} dataSource={repairSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {repairSource} = state.example
    return{
        repairSource: repairSource
    }
})(Repair);
