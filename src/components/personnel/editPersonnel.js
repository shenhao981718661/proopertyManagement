import React from 'react';
import { connect } from 'dva';
import {Table, Form, Button, Input, Icon, message} from 'antd';
const { Column, ColumnGroup } = Table;


class EditPerson extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.dispatch({
                type: 'example/editPerson',
                payload:{
                    data: values
                } 
            })
          }
        });
      }
    render(){
        const { getFieldDecorator } = this.props.form
        const data = this.props.editSource
        console.log(data)
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="用户名"
                    >
                        {getFieldDecorator('userName',{rules:[{required:true}],initialValue:data.userName})(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="密　码"
                    >
                        {getFieldDecorator('password',{rules:[{required:true}],initialValue:data.password})(
                            <Input type="password" prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('type',{rules:[{required:true}],initialValue:'2'})(
                            <Input name="type" value="2" hidden={true}/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('_id',{rules:[{required:true}],initialValue:data._id})(
                            <Input name="type" hidden={true}/>
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

EditPerson = Form.create({})(EditPerson)
export default connect()(EditPerson)