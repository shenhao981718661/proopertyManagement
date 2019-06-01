import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button, Select, DatePicker, Radio } from 'antd'
import { Rules } from 'tslint';
import moment from 'moment'

const Option = Select.Option;
const Group = Radio.Group;
const { TextArea } = Input;
class AddMessage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            roomList: [],
        }
    }
    componentDidMount() {
        this.props.dispatch({
            type: 'example/room'
        }).then((res) => {
            this.setState({
                roomList: res.data
            })
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values)
            if(!err){
                this.props.dispatch({
                    type: 'example/addMessage',
                    payload: {
                        data: values
                    }
                }).then(res=> {
                    console.log(res)
                        this.props.dispatch({
                            type: 'user/userMessage',
                            payload: {
                                data: {room: this.props.room}
                            }
                        })
                })
                this.props.cancel()
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const option = this.state.roomList.map((item, index) => {
            return <Option key={item._id} value={item.room}>{item.room}</Option>
        })
        console.log(this.props)
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                    >
                        {getFieldDecorator('name',{initialValue: this.props.userName})(
                            <Input hidden={true} />
                        )}
                    </Form.Item>
                    <Form.Item
                    >
                        {getFieldDecorator('room',{initialValue: this.props.room})(
                            <Input hidden={true}/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="内容"
                    >
                        {getFieldDecorator('content')(
                            <TextArea type='textarea' placeholder='请输入您的留言'/>
                        )}
                    </Form.Item>
                    <Form.Item
                    >
                        {getFieldDecorator('date',{initialValue: moment()})(
                            <Input
                                hidden={true}
                        />
                        )}
                    </Form.Item>
                    {/* <Input name="date" value={moment()} hidden={true}> */}
                    {/* <Form.Item>
                        {getFieldDecorator('_id')(
                            <Input hidden={true} />
                        )}
                    </Form.Item> */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            添加
                        </Button>
                    </Form.Item>
                </Form>
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
        tel: userInformation.tel,
    }
})(Form.create({})(AddMessage));