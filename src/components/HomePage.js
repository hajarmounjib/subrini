import React from "react";
import '../App.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import Navigation from './Navigation'
import SiderPage from "./SiderPage";


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

function HomePage (props) {

  return(
   <Layout>
     
    <Navigation/>
    <SiderPage/>
  
    </Layout>
  )

};

export default HomePage;
