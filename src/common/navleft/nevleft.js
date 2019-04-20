import React from 'react'
import { Menu,Icon  } from 'antd'
import {Link} from 'dva/router'
import './navleft.less'
import logo from '../../assets/logo.jpg'
import { connect } from 'dva';
import {managerMenuList,userMenuList,adminMenuList} from './menuList'
const SubMenu = Menu.SubMenu

class Navleft extends React.Component{
    constructor(props){
        super(props)
        this.setState({
      })
    }
      componentWillMount(){
        const menulist = this.chooseMenu();
        const treeNode = this.treeNode(menulist)
        this.setState({
            treeNode
        })
      }
    
    chooseMenu(){
      const type = this.props.type
      let x = ''
      if(type === '1'){
        x = userMenuList;
      }else if(type === 2){
        x = managerMenuList;
      }else{
        x = adminMenuList
      }
      return x;
    }
    

    treeNode(menulist){
      return menulist.map((item) => {
        if(item.children){
          return (
            <SubMenu key={item.key} title={item.title}>
                {this.treeNode(item.children)}
            </SubMenu>
          )
        }
        return <Menu.Item key={item.key} title={item.title}>
                <Link to={item.key}>{item.title}</Link>
        </Menu.Item>
      })
    }

    render(){
      const type = this.props.type
        return(
            <div>
                <div className="logo" ><img src={logo}/></div>
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {/* {(type == 2 || type == 3) ?  */}
                      {/* <Menu.Item key="1">
                      <Link to='/index/personnel'>人事管理</Link>
                    </Menu.Item> */}
                    {/* } */}
                    {/* <Menu.Item key="2">
                      <Link to='/index/equipment'>设置管理</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link to ='/index/security'>保安管理</Link>
                    </Menu.Item>
                    <SubMenu key="4" title={<span><span>住房资料管理</span></span>}>
                      <Menu.Item key="4-1"><Link to ='/index/owner'>业主管理</Link></Menu.Item>
                      <Menu.Item key="4-2"><Link to ='/index/housing'>住房管理</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="5">
                      <Link to ='/index/complaint'>投诉管理</Link>
                    </Menu.Item>
                    <SubMenu key="6" title={<span><span>住房报修管理</span></span>}>
                      <Menu.Item key="6-1"><Link to ='/index/repair'>维修管理</Link></Menu.Item>
                      <Menu.Item key="6-2"><Link to ='/index/report'>报修管理</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="7">
                      <Link to ='/index/pay'>物业缴费管理</Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                      <Link to ='/index/car'>住房停车车位管理</Link>
                    </Menu.Item>
                    <Menu.Item key="9">
                      <Link to ='/index/message'>留言管理</Link>
                    </Menu.Item>
                    <Menu.Item key="10">
                      <Link to ='/index/'>退出系统</Link>
                    </Menu.Item> */}
                    {this.state.treeNode}
                  </Menu>
            </div>
        )
    }
}
export default connect((state) =>{
    const { type } = state.example;
    return{
      type: type
    }
})(Navleft)