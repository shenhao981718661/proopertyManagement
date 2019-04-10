import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button } from 'antd'
import { Rules } from 'tslint';

class AddPay extends React.Component{
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
                    type: 'example/addPay',
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
                        label="房号"
                    >
                        {getFieldDecorator('room',{rules:[{required: true}]})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="物业费"
                    >
                        {getFieldDecorator('property',{rules:[{required: true}]})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="车位费"
                    >
                        {getFieldDecorator('car',{rules:[{required: true}]})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="月份"
                    >
                        {getFieldDecorator('month',{rules:[{required: true}]})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="缴费日期"
                    >
                        {getFieldDecorator('date',{rules:[{required: true}]})(
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
AddPay = Form.create({})(AddPay)
export default connect()(AddPay)