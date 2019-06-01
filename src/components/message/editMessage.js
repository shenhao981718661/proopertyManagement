import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button,  } from 'antd'
const { TextArea } = Input;
class EditMessage extends React.Component{
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
                    type: 'example/editMessage',
                    payload: {
                        data: values
                    }
                }).then(res => {
                    this.props.dispatch({
                        type: 'example/message',
                    })
                })
            }
            this.props.cancel()
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
                            <Input disabled={true}/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="住址"
                    >
                        {getFieldDecorator('room',{rules:[{required: true}],initialValue: data.room})(
                            <Input disabled={true}/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="留言内容"
                    >
                        {getFieldDecorator('content',{rules:[{required: true}],initialValue: data.content})(
                            <TextArea disabled={true}/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="回复"
                    >
                        {getFieldDecorator('back',{rules:[{required: true}]})(
                            <TextArea />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('_id',{initialValue: data._id})(
                            <Input hidden={true} />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('date',{initialValue: data.date})(
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
EditMessage = Form.create({})(EditMessage)
export default connect()(EditMessage)