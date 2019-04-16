const menuList = [
    {
      title: '首页',
      key: '/index'
    },
    {
      title: '人事管理',
      key: '/index/personnel'
    },
    {
      title: '设备管理',
      key: '/index/equipment'
    },
    {
      title: '保安管理',
      key: '/index/security'
    },
    {
      title: '住房资料管理',
      // key: '/index/security'
      children: [
        {
          title: '业主管理',
          key: '/index/owner'
        },{
          title: '住户管理',
          key: '/index/housing'
        }
      ]
    },
    {
      title: '投诉管理',
      key: '/index/complaint'
    },
    {
      title: '住房报修管理',
      // key: '/index/security'
      children: [
        {
          title: '维修管理',
          key: '/index/repair'
        },{
          title: '报修管理',
          key: '/index/report'
        }
      ]
    },
    {
      title: '物业缴费管理',
      key: '/index/pay'
    },
    {
      title: '车位管理',
      key: '/index/car'
    },
    {
      title: '留言管理',
      key: '/index/message'
    },
    {
      title: '退出系统',
      key: '/index/quit'
    },
    
  ]
  
export default menuList;