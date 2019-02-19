import React from 'react';
import { Row,Col,Layout,Menu,Icon  } from 'antd'
import Navleft from '../navleft/nevleft'
import './index.less'

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
                <Layout style={{height:'100%'}}>
                <Sider
                  trigger={null}
                  collapsible
                  collapsed={this.state.collapsed}
                >
                  <Navleft/>
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
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </div>
        )
    }
}
export default Main;
