import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button } from 'antd'
import { Rules } from 'tslint';

class EditEquipment extends React.Component{
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
                    type: 'example/editEquipment',
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
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="设备名称"
                    >
                        {getFieldDecorator('name',{rules:[{required: true}],initialValue:data.name})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="设备价格"
                    >
                        {getFieldDecorator('money',{rules:[{required: true}],initialValue:data.money})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="设备规格"
                    >
                        {getFieldDecorator('norms',{rules:[{required: true}],initialValue:data.norms})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="备注"
                    >
                        {getFieldDecorator('remarks',{rules:[{required: true}],initialValue:data.remarks})(
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
EditEquipment = Form.create({})(EditEquipment)
export default connect()(EditEquipment)