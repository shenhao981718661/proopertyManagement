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