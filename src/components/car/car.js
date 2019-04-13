import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddCar from './addCar.js'
import EditCar from './editCar.js'

class Car extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            editSource: {},
        }
        this.addCar = this.addCar.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'example/car',
        })
    }
    columns = [{
        title: '车位',
        dataIndex: 'parkingLog'
    },
    {
        title: '车牌',
        dataIndex: 'licensePlate'
    },
    {
        title: '车型',
        dataIndex: 'model'
    },
    {
        title: '业主',
        dataIndex:'name'
    },
    {
        title: '房号',
        dataIndex:'room'
    },
    {
        title: '操作',
        render: (text, record) => {
            console.log(text)
            return(
                <span>
                    <a href="javascript:;" onClick={()=>{
                        this.showedit()
                        this.setState({
                            editSource: text,
                        })
                    }}>编辑</a>
                    <Divider type="vertical" />
                    <Popconfirm title="确定删除？" onConfirm={() => {
                        this.props.dispatch({
                            type: 'example/removeCar',
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
    showedit(){
        this.props.dispatch({
            type: 'example/changeEdit',
            payload: {
                data: true
            }
        })
    }
    addCar(){
        this.setState({
            showModal: true
        })
    }
    cancel(){
        this.setState({
            showModal: false,
        })
        this.props.dispatch({
            type: 'example/changeEdit',
            payload: {
                data: false
            }
        })
        this.props.dispatch({
            type: 'example/car',
        })
    }
    render(){
        const {carSource, showEdit} = this.props
        return(
            <div>
                <Button onClick={this.addCar}>
                    添加车位信息
                </Button>
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    destroyOnClose={true}
                    onCancel={this.cancel}
                >
                    <AddCar
                        cancel={this.cancel}
                    />
                </Modal>
                <Modal
                    visible={showEdit}
                    footer={null}
                    keyboard
                    destroyOnClose={true}
                    onCancel={this.cancel}
                >
                    <EditCar
                        editSource={this.state.editSource}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={carSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {carSource,showEdit} = state.example
    return{
        carSource: carSource,
        showEdit: showEdit
    }
})(Car);
