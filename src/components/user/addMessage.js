import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button, Select, DatePicker, Radio } from 'antd'
import { Rules } from 'tslint';
import moment from 'moment'

const Option = Select.Option;
const Group = Radio.Group;
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
            if(!err){
                this.props.dispatch({
                    type: 'example/addHousing',
                    payload: {
                        data: values
                    }
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
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="姓名"
                    >
                        {getFieldDecorator('name',{rules:[{required: true}]})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="年龄"
                    >
                        {getFieldDecorator('age',{rules:[{required: true}]})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="性别"
                    >
                        {getFieldDecorator('sex',{rules:[{required: true}]})(
                            <Group>
                            <Radio value='男'>男</Radio>
                            <Radio value='女'>女</Radio>
                        </Group>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="房号"
                    >
                        {getFieldDecorator('room',{rules:[{required: true}]})(
                             <Select>
                             {option}
                         </Select>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="电话"
                    >
                        {getFieldDecorator('tel',{rules:[{required: true}]})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="入住时间"
                        style={{overflow: 'hidden'}}
                    >
                        {getFieldDecorator('date',{rules:[{required: true}],initialValue: moment()})(
                            <DatePicker
                            
                            allowClear
                        />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('_id')(
                            <Input hidden={true} />
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