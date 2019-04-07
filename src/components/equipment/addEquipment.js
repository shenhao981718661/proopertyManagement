import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button } from 'antd'
import { Rules } from 'tslint';

class AddEquipment extends React.Component{
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
                    type: 'example/addEquipment',
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
                        label="设备名称"
                    >
                        {getFieldDecorator('name',{rules:[{required: true}]})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="设备价格"
                    >
                        {getFieldDecorator('money',{rules:[{required: true}]})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="设备规格"
                    >
                        {getFieldDecorator('norms',{rules:[{required: true}]})(
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
AddEquipment = Form.create({})(AddEquipment)
export default connect()(AddEquipment)