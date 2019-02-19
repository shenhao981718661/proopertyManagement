import React from 'react'
import { Menu,Icon  } from 'antd'
import {Link} from 'dva/router'
import './navleft.less'
import logo from '../../assets/logo.jpg'

class Navleft extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                <div className="logo" ><img src={logo}/></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to='/index/personnel'><Icon type="user" />nav 1</Link>
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
            </div>
        )
    }
}
export default Navleft