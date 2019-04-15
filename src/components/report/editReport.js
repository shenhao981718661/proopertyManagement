import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button, Select } from 'antd'
import { Rules } from 'tslint';
const Option = Select.Option;

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
                    type: 'example/editReport',
                    payload: {
                        data: values
                    }
                })
                this.props.cancel();
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
                            <Input disabled={true} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="业主"
                    >
                        {getFieldDecorator('name',{rules:[{required: true}],initialValue: data.name})(
                            <Input disabled={true}/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="电话"
                    >
                        {getFieldDecorator('tel',{rules:[{required: true}],initialValue: data.tel})(
                            <Input disabled={true}/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="维修项目"
                    >
                        {getFieldDecorator('project',{rules:[{required: true}],initialValue: data.project})(
                            <Input disabled={true}/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="说明"
                    >
                        {getFieldDecorator('explain',{rules:[{required: true}],initialValue: data.explain})(
                            <Input disabled={true}/>
                        )}
                    </Form.Item>
                    {/* <Form.Item
                        label="报修时间"
                    >
                        {getFieldDecorator('date',{rules:[{required: true}],initialValue: data.date})(
                            <Input />
                        )}
                    </Form.Item> */}
                    <Form.Item
                        label="状态"
                    >
                        {getFieldDecorator('statu',{rules:[{required: true}],initialValue: data.statu})(
                            <Select>
                                <Option key='1' value="1">待处理</Option>
                                <Option key='2' value="2">处理中</Option>
                                <Option key='3' value="3">已完成</Option>
                            </Select>
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