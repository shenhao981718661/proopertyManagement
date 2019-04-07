import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddEquipment from './addEquipment.js'

class Equipment extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false
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
                    <a href="#">删除</a>
                    <Divider type="vertical" />
                    <a href="javascript:;">Delete</a>
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
        this.setState({
            showModal: false
        })
    }
    render(){
        const {equipmentSource} = this.props
        return(
            <div>
                <Button onClick={this.addEquipment}>
                    添加管理员
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
                <Table columns={this.columns} dataSource={equipmentSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {equipmentSource} = state.example
    return{
        equipmentSource: equipmentSource
    }
})(Equipment);
