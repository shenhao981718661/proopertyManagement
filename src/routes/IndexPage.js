import React from 'react';
import { connect } from 'dva';
import './IndexPage.less';
import { Form,Icon,Input,Button,Checkbox } from 'antd';


class IndexPage extends React.Component{
  render(){
  return (
    <div className='normal'>
      <div className='title'>东通物业管理系统</div>
      <Form className='form' layout='vertical'>
        <Form.Item>
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember Me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button>Log In</Button>
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
