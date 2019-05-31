const adminMenuList = [
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
      key: '/'
    },
    
  ]
  const managerMenuList = [
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
      key: '/'
    },
    
  ]
  const userMenuList = [
    {
      title: '个人信息',
      key: '/index/user/user'
    },
    {
      title: '费用管理',
      key: '/index/user/pay'
    },
    {
      title: '报修管理',
      key: '/index/user/repair'
    },
    {
      title: '车位管理',
      key: '/index/user/car'
    },
    {
      title: '留言',
      key: '/index/user/message'
    },
    {
      title: '退出系统',
      key: '/'
    },
  ]
  
export {managerMenuList,userMenuList,adminMenuList};