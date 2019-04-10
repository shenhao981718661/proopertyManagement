import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider, Button, Modal } from 'antd'
import AddCar from './addCar.js'

class Car extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            editSource: {}
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
                        this.setState({
                            editSource: text,
                            showModal: true
                        })
                    }}>编辑</a>
                    <Divider type="vertical" />
                    <a href="javascript:;">Delete</a>
                </span>
            )
        }
    }
    ]
    // edit(e,text){
    //     e.preventDefault()
    //     console.log(text)
    // }
    addCar(){
        this.setState({
            showModal: true
        })
    }
    cancel(){
        this.setState({
            showModal: false,
            editSource: null
        })
    }
    render(){
        const {carSource} = this.props
        return(
            <div>
                <Button onClick={this.addCar}>
                    添加维修
                </Button>
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    destroyOnClose={true}
                    onCancel={this.cancel}
                >
                    <AddCar
                        editSource={this.state.editSource}
                        cancel={this.cancel}
                    />
                </Modal>
                <Table columns={this.columns} dataSource={carSource}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {carSource} = state.example
    return{
        carSource: carSource
    }
})(Car);
