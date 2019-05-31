import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button, Select, Radio } from 'antd'
import { Rules } from 'tslint';

const Option = Select.Option;
const Group = Radio.Group;

class EditOwner extends React.Component{
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
                    type: 'example/editOwner',
                    payload: {
                        data: values
                    }
                })
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const data = this.props.editSource;
        const option = this.state.roomList.map((item, index) => {
            return <Option key={item._id} value={item.room}>{item.room}</Option>
        })
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="姓名"
                    >
                        {getFieldDecorator('name',{rules:[{required: true}],initialValue: data.name})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="年龄"
                    >
                        {getFieldDecorator('age',{rules:[{required: true}],initialValue: data.age})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="性别"
                    >
                        {getFieldDecorator('sex',{rules:[{required: true}],initialValue: data.sex})(
                            <Group>
                                <Radio value='男'>男</Radio>
                                <Radio value='女'>女</Radio>
                             </Group>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="房号"
                    >
                        {getFieldDecorator('room',{rules:[{required: true}],initialValue: data.room})(
                        <Select>
                            {option}
                        </Select>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="电话"
                    >
                        {getFieldDecorator('tel',{rules:[{required: true}],initialValue: data.tel})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="入住时间"
                    >
                        {getFieldDecorator('date',{rules:[{required: true}],initialValue: data.date})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="备注"
                    >
                        {getFieldDecorator('remarks',{rules:[{required: true}],initialValue: data.remarks})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('_id',{initialValue: data._id})(
                            <Input hidden={true} />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            修改
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
EditOwner = Form.create({})(EditOwner)
export default connect()(EditOwner)