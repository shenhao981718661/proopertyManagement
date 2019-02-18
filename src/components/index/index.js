import React from 'react';
import { Row,Col,Layout,Menu,Icon  } from 'antd'
import Navleft from '../navleft/nevleft'
import './index.less'
import logo from '../../assets/logo.jpg'
const { Header,Footer,Sider,Content} = Layout
class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={collapsed: false,}
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    render(){
        return(
            <div style={{height:'100%'}}>
                {/* <Row>
                    <Col span='6'>
                        <Navleft/>
                    </Col>
                    <Col span='18'>
                        123
                    </Col>
                </Row> */}
                <Layout style={{height:'100%'}}>
                <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" ><img src={logo}/></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            东通物业管理系统
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            Content
          </Content>
        </Layout>
                </Layout>
            </div>
        )
    }
}
export default Main;
