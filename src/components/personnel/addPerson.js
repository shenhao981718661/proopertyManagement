import React from 'react';
import { connect } from 'dva';
import {Table, Form, Button, Input, Icon} from 'antd';
const { Column, ColumnGroup } = Table;


class AddPerson extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (e) => {
        console.log("321")
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.dispatch({
                type: 'example/addUser',
                payload:{
                    data: values
                } 
            })
          }
        });
      }
    render(){
        const { getFieldDecorator } = this.props.form
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="用户名"
                    >
                        {getFieldDecorator('userName',{rules:[{required:true}]})(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="密　码"
                    >
                        {getFieldDecorator('password',{rules:[{required:true}]})(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('type',{rules:[{required:true}],initialValue:'2'})(
                            <Input name="type" value="2" hidden={true}/>
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

AddPerson = Form.create({})(AddPerson)
export default connect()(AddPerson)