import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button } from 'antd'
import { Rules } from 'tslint';

class AddOwner extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                this.props.dispatch({
                    type: 'example/addOwner',
                    payload: {
                        data: values
                    }
                })
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form
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
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="房号"
                    >
                        {getFieldDecorator('room',{rules:[{required: true}]})(
                            <Input />
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
                    >
                        {getFieldDecorator('date',{rules:[{required: true}]})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="备注"
                    >
                        {getFieldDecorator('remarks',{rules:[{required: true}]})(
                            <Input />
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
AddOwner = Form.create({})(AddOwner)
export default connect()(AddOwner)