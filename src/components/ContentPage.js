import React from "react";
import '../App.css';
import 'antd/dist/antd.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import { useState } from 'react';
import Navigation from './Navigation'
import SiderPage from "./SiderPage";


const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const menuNavigation = [{ labelicon: "Inscription", icon: UserOutlined }, { labelicon: "Encaissement", icon: LaptopOutlined }, { labelicon: "Atelier Administratif", icon: NotificationOutlined }]
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


function ContentPage(props) {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
 <div className="App-style">
      <Navigation />
      <div className="content-flex">
      <SiderPage /> 

        <Content
          className="site-layout-background"
        >
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label="Form Size" name="size">
              <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Last Name">
              <Input />
            </Form.Item>
            <Form.Item label="First Name">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Année scolaire">
              <TreeSelect
                treeData={[
                  {
                    title: '2022-2021',
                    value: '2022-2021',

                  },
                ]}
              />
            </Form.Item>

            <Form.Item label="Date de naissance">
              <DatePicker />
            </Form.Item>


            <Form.Item label="Inscrit" valuePropName="checked">
              <Switch />
            </Form.Item>

            <Button>Valider Inscription</Button>

          </Form>
        </Content>
      </div>
 
      </div>
 
  )
}

export default ContentPage
