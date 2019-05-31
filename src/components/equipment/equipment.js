import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddEquipment from './addEquipment.js'
import EditEquipment from './edit.js'

class Equipment extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            editSource: null,
        }
        this.addEquipment = this.addEquipment.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'example/equipment',
        })
    }
    columns = [{
        title: '设备名称',
        dataIndex: 'name'
    },
    {
        title: '设备价格',
        dataIndex: 'money'
    },
    {
        title: '设备规格',
        dataIndex: 'norms'
    },
    {
        title: '备注',
        dataIndex:'remarks'
    },
    {
        title: '操作',
        render: (text, record) => {
            return(
                <span>
                    <a href="javascript:;" onClick = {() => {
                        this.props.dispatch({
                            type: 'example/changeEdit',
                            payload: {
                                data: true
                            }
                        })
                        this.setState({
                            editSource: text,
                        })
                    }}>编辑</a>
                    <Divider type="vertical" />
                    <Popconfirm cancelText='返回' okText='确定' title="确定删除？" onConfirm={() => {
                        this.props.dispatch({
                            type: 'example/removeEquipment',
                            payload: {
                                data: {_id: text._id}
                            }
                        })
                    }}>
                        <a href="javascript:;">删除</a>
                    </Popconfirm>
                </span>
            )
        }
    }
    ]
    addEquipment(){
        this.setState({
            showModal: true
        })
    }
    cancel(){
        this.props.dispatch({
            type: 'example/changeEdit',
            payload: {
                data: false
            }
        })
        this.setState({
            showModal: false
        })
    }
    render(){
        const {equipmentSource, showEdit} = this.props
        return(
            <div>
                <Button onClick={this.addEquipment}>
                    添加设备
                </Button>
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <AddEquipment
                        cancel={this.cancel}
                    />
                </Modal>
                <Modal
                    visible={showEdit}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <EditEquipment
                        editSource={this.state.editSource}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={equipmentSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {equipmentSource, showEdit} = state.example
    return{
        equipmentSource: equipmentSource,
        showEdit: showEdit,
    }
})(Equipment);
