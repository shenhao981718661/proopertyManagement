import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button } from 'antd'

class EditHousing extends React.Component{
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
                    type: 'example/editHousing',
                    payload: {
                        data: values
                    }
                })
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form
        const data = this.props.editSource
        console.log(data)
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
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="房号"
                    >
                        {getFieldDecorator('room',{rules:[{required: true}],initialValue: data.room})(
                            <Input />
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
                            添加
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
EditHousing = Form.create({})(EditHousing)
export default connect()(EditHousing)