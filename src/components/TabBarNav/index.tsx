import React , { useState }  from "react";
import { Badge, TabBar } from 'antd-mobile'
import { history } from 'umi';

const TabBars: React.FC = (props: any) => {
  const [activeKey, setActiveKey] = useState(history.location.pathname.split('/')[1])
  
  const tabs = [
    {
      key: 'home',
      title: '首页',
      link:'/home'
    },
    {
      key: 'mine',
      title: '个人中心',
      link:'/mine'
    },
  ]
  const InfoActiveKey = (e: string) =>{
    setActiveKey(e)
    let InfoActiveKeyData = tabs.filter(item => item.key.includes(e) )
    history.replace(InfoActiveKeyData[0].link);
  }
  return (
   <div>
      {props.children}  // 显示子路由页面
      <div>
        <TabBar
          activeKey={activeKey} onChange={InfoActiveKey}
        >
          {tabs.map(item => {
            return (
              <TabBar.Item
                key={item.key}
                icon={item.icon}
                title={item.title}
                badge={item.badge}
              />
            )
          })}
        </TabBar>
      </div>
    </div>
  )
}
export default TabBars;