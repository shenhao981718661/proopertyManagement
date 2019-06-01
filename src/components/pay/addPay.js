import React from 'react'
import { connect } from 'dva'
import { Form, Input, Button, Select, DatePicker } from 'antd'
import { Rules } from 'tslint';
const { MonthPicker } = DatePicker;
const Option = Select.Option
class AddPay extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            roomList: []
        }
    }
    componentDidMount() {
        this.props.dispatch({
            type: 'example/owner',
        }).then(res => {
            console.log(res)
            this.setState({
                roomList: res.data
            })
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                this.props.dispatch({
                    type: 'example/addPay',
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
        const option = this.state.roomList.map((item,index) => {
            return <Option key={index} value={item.room}>{item.room}</Option>
        })
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="房号"
                    >
                        {getFieldDecorator('room',{rules:[{required: true}]})(
                            <Select>
                                {option}
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="物业费"
                    >
                        {getFieldDecorator('property',{rules:[{required: true}]})(
                            <Input />
                        )}
                    </Form.Item>
                    {/* <Form.Item
                        label="车位费"
                    >
                        {getFieldDecorator('car',{rules:[{required: true}]})(
                            <Input />
                        )}
                    </Form.Item> */}
                    <Form.Item
                        label="月份"
                    >
                        {getFieldDecorator('month',{rules:[{required: true}]})(
                            <MonthPicker />
                        )}
                    </Form.Item>
                    {/* <Form.Item
                        label="缴费日期"
                    >
                        {getFieldDecorator('date')(
                            <DatePicker
                                disabled
                            />
                        )}
                    </Form.Item> */}
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
AddPay = Form.create({})(AddPay)
export default connect()(AddPay)