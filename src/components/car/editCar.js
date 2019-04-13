import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button } from 'antd'
import { Rules } from 'tslint';

class EditCar extends React.Component{
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
                    type: 'example/editCar',
                    payload: {
                        data: values
                    }
                })
                this.props.dispatch({
                    type: 'example/changeEdit',
                    payload: {
                        data: false
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
                        label="车位"
                    >
                        {getFieldDecorator('parkingLog',{rules:[{required: true}],initialValue:data.parkingLog})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="车牌"
                    >
                        {getFieldDecorator('licensePlate',{rules:[{required: true}],initialValue:data.licensePlate})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="车型"
                    >
                        {getFieldDecorator('model',{rules:[{required: true}],initialValue:data.model})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="业主"
                    >
                        {getFieldDecorator('name',{rules:[{required: true}],initialValue:data.name})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="房号"
                    >
                        {getFieldDecorator('room',{rules:[{required: true}],initialValue:data.room})(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('_id',{initialValue:data._id})(
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
EditCar = Form.create({})(EditCar)
export default connect((state) => {
    console.log(state)
})(EditCar)