import React from 'react';
import { connect } from 'dva';
import {Table,Divider,Popconfirm, Button, Modal} from 'antd';
import AddPerson from './addPerson'
import EditPerson from './editPersonnel'
const { Column, ColumnGroup } = Table;



class Personnel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false,
            editSource: {},
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
                    type: 'example/removePerson',
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
        this.props.dispatch({
            type: 'example/changeEdit',
            payload: {
                data: false
            }
        })
    }
    render(){
        const {dataSource, showEdit} = this.props
        return(
            <div>
                <Button onClick={this.addPerson}>
                    添加管理员
                </Button>
                <Modal
                    visible={this.state.showModal}
                    destroyOnClose={true}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <AddPerson cancel={this.cancel}></AddPerson>
                </Modal>
                <Modal
                    destroyOnClose={true}
                    visible={showEdit}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <EditPerson
                        cancel={this.cancel}
                        editSource={this.state.editSource}
                     />
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
    const {data, type, userList, showEdit} = state.example
    return{
        data: data,
        type: type,
        dataSource: userList,
        showEdit: showEdit,
    }
}
)(Personnel);
