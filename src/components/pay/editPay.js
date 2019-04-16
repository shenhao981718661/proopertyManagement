import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button } from 'antd'
import { Rules } from 'tslint';

class EditPay extends React.Component{
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
                    type: 'example/editPay',
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
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="房号"
                    >
                        {getFieldDecorator('room',{rules:[{required: true}],initialValue: data.room})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="物业费"
                    >
                        {getFieldDecorator('property',{rules:[{required: true}],initialValue: data.property})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="车位费"
                    >
                        {getFieldDecorator('car',{rules:[{required: true}],initialValue: data.car})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="月份"
                    >
                        {getFieldDecorator('month',{rules:[{required: true}],initialValue: data.month})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="缴费日期"
                    >
                        {getFieldDecorator('date',{rules:[{required: true}],initialValue: data.date})(
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
EditPay = Form.create({})(EditPay)
export default connect()(EditPay)