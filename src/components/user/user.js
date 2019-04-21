import React from 'react';
import { connect } from 'dva';
import { Table, Input, Divider, Button, Modal, Form, message } from 'antd'
class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
        this.showModal = this.showModal.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'user/questInfoByRoom',
            payload: {
                data: {room: this.props.room}
            }
        })
    }
    
    showModal(){
        this.props.dispatch({
            type: 'user/isShowEdit',
            payload: {
                data: true
            }
        })
    }
    cancel(){
        this.props.dispatch({
            type: 'user/isShowEdit',
            payload: {
                data: false
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(values.password !== values.deteminePassword){
                message.error("密码不一致")
                return
            }
            if(!err){
                delete values.deteminePassword;
                this.props.dispatch({
                    type: 'user/changePassword',
                    payload: {
                        data: values
                    }
                })
                this.props.cancel()
            }
        })
    }
    render(){
        const {userName, showEdit, userinfo} = this.props
        console.log(userinfo)
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <div>
                    欢迎您<span style={{color: 'red'}}>{userName}</span>使用本系统
                    <Button onClick={this.showModal}>修改密码</Button>
                </div>
                <Modal
                    visible={showEdit}
                    footer={null}
                    keyboard
                    onCancel={this.cancel}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item
                            label='用户名'
                        >
                        {getFieldDecorator('name',{initialValue: this.props.userName})(
                            <Input disabled={true}/>
                        )}
                        </Form.Item>
                        <Form.Item
                            label='新密码'
                        >
                        {getFieldDecorator('password')(
                            <Input type='password' />
                        )}
                        </Form.Item>
                        <Form.Item
                            label='确认密码'
                        >
                        {getFieldDecorator('deteminePassword')(
                            <Input type='password' />
                        )}
                        </Form.Item>
                        <Form.Item
                        >
                        {getFieldDecorator('_id',{initialValue: this.props._id})(
                            <Input hidden={true}/>
                        )}
                        </Form.Item>
                        <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            添加
                        </Button>
                    </Form.Item>
                    </Form>
                </Modal>
                
            </div>
        )
    }
}

export default connect((state) => {
    const {userInformation} = state.example;
    const {showEdit,userinfo} = state.user;
    return{
        userName: userInformation.userName,
        _id: userInformation._id,
        showEdit,
        room: userInformation.room,
        userinfo,
    }
})(Form.create({})(User));
// AddSecurity = Form.create({})(AddSecurity)
// export default connect()(AddSecurity)