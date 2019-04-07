import React from 'react';
import { connect } from 'dva';
import './IndexPage.less';
import { Form,Icon,Input,Button,Select } from 'antd';
const Option = Select.Option


class IndexPage extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'example/login',
          payload: {
            data: values
          }
        })
      }
    });
  }

  render(){
    const {getFieldDecorator} = this.props.form
  return (
    <div className='normal'>
      <div className='title'>东通物业管理系统</div>
      <Form className='form'  layout='vertical' onSubmit={this.handleSubmit}>
        <Form.Item style={{ width: 200,margin: '0 auto' }}>
        {getFieldDecorator('userName',{rules:[{required:true}]})(
          <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        )}
        </Form.Item>
        <Form.Item style={{ width: 200,margin: '0 auto' }}>
        {getFieldDecorator('password',{rules:[{required:true}]})(
          <Input  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        )}
        </Form.Item>
        <Form.Item style={{ width: 200,margin: '0 auto' }}>
          {getFieldDecorator('type',{rules:[{required:true}]})(
            <Select placeholder="请选择用户身份">
              <Option value='1'>用户</Option>
              <Option value='2'>管理员</Option>
              <Option value='3'>超级管理员</Option>
            </Select>
          )}
          
        </Form.Item>
        <Form.Item>
          <Button type="primary"
            htmlType="submit">Log In</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
}

IndexPage.propTypes = {
};
IndexPage = Form.create({})(IndexPage)
export default connect()(IndexPage);
