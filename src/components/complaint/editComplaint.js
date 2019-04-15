import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button } from 'antd'
import { Rules } from 'tslint';

class EditComplaint extends React.Component{
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
                    type: 'example/editComplaint',
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
                        label="姓名"
                    >
                        {getFieldDecorator('name',{rules:[{required: true}],initialValue: data.name})(
                            <Input disabled={true} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="投诉内容"
                    >
                        {getFieldDecorator('content',{rules:[{required: true}],initialValue: data.content})(
                            <Input disabled={true} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="投诉日期"
                    >
                        {getFieldDecorator('date',{rules:[{required: true}],initialValue: data.date})(
                            <Input disabled={true} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="处理结果"
                    >
                        {getFieldDecorator('result',{rules:[{required: true}],initialValue: data.result})(
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
                            添加
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
EditComplaint = Form.create({})(EditComplaint)
export default connect()(EditComplaint)