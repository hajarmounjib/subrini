import React from "react";
import '../App.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';




const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const menuNavigation =[{labelicon:"Inscription",icon:UserOutlined}, {labelicon:"Encaissement",icon:LaptopOutlined}, {labelicon:"Atelier Administratif",icon:NotificationOutlined} ]
const items2 = menuNavigation.map((menu, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(menu.icon),
    label: `${menu.labelicon}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

function SiderPage (props) {

  return(

    <div className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{
          height: '100%',
          borderRight: 0,
        }}
        items={items2}
      />
    </div>


  )

};

export default SiderPage;
