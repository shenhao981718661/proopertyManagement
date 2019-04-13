import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button } from 'antd'
import { Rules } from 'tslint';

class EditSecurity extends React.Component{
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
                    type: 'example/editSecurity',
                    payload: {
                        data: values
                    }
                })
                this.props.cancel()
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form
        const data = this.props.editSource
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
                        label="类型"
                    >
                        {getFieldDecorator('type',{rules:[{required: true}],initialValue: data.type})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="安保区域"
                    >
                        {getFieldDecorator('region',{rules:[{required: true}],initialValue: data.region})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="上班时间"
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
                            添加
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
EditSecurity = Form.create({})(EditSecurity)
export default connect()(EditSecurity)