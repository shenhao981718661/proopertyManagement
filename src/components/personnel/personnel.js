import React from 'react';
import { connect } from 'dva';
import {Table,Divider,Popconfirm, Button, Modal} from 'antd';
import AddPerson from './addPerson'
const { Column, ColumnGroup } = Table;



class Personnel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false
        }
        this.addPerson = this.addPerson.bind(this)
        this.cancel = this.cancel.bind(this)
        
    }
    con(text){
        this.props.dispatch({
            type: 'example/queryUser',
            payload: {
                data: this.props.type
            }
        })
    }
    columns =[{
        title: 'ID',
        dataIndex: '_id'
    },{
        title: '用户名',
        dataIndex: 'userName'
    },{
        title: '用户类型',
        dataIndex: 'type',
        render: (type) => {
            let tag = 0
            if(type == 2){
                tag = "管理员"
            }else{
                tag = "户主"
            }
            return <span>{tag}</span>
        }
    },{
        title: '操作',
        render: (text,record) => {
            const Id = record._id;
            return(
            <span>
            <Popconfirm title="确定删除？" onConfirm={() => this.con(Id)}>
                <a href="#">删除</a>
            </Popconfirm>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
          )
    }
    }
    
]
    
    componentDidMount(){
        this.props.dispatch({
            type: 'example/queryUser',
            payload: {
                data: this.props.type
            }
        })
    }
    addPerson(){
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
        console.log(this.props.type)
        const {dataSource} = this.props
        return(
            <div>
                <Button onClick={this.addPerson}>
                    添加管理员
                </Button>
                <Modal
                    visible={this.state.showModal}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <AddPerson cancel={this.cancel}></AddPerson>
                </Modal>
                <Table
                    columns={this.columns} dataSource={dataSource}
                />
                {this.props.data}
            </div>
        )
    }
}

export default connect((state) => {
    const {data, type, userList} = state.example
    return{
        data: data,
        type: type,
        dataSource: userList
    }
}
)(Personnel);
