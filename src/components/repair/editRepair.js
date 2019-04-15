import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button } from 'antd'
import { Rules } from 'tslint';

class EditRepair extends React.Component{
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
                    type: 'example/editRepair',
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
                        label="维修项目"
                    >
                        {getFieldDecorator('name',{rules:[{required: true}],initialValue: data.name})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="维修内容"
                    >
                        {getFieldDecorator('content',{rules:[{required: true}],initialValue: data.content})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="维修费用"
                    >
                        {getFieldDecorator('money',{rules:[{required: true}],initialValue: data.money})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="维修日期"
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
                            添加
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
EditRepair = Form.create({})(EditRepair)
export default connect()(EditRepair)