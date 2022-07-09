import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './Inscription.css';
import {
    DesktopOutlined,
    FileOutlined,
    BarChartOutlined,
    UnorderedListOutlined,
    UserOutlined,
    CarOutlined,
    DollarCircleOutlined,
    ContainerOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    Filler,
} from 'chart.js';
import { PolarArea, Radar } from 'react-chartjs-2';
import { ListGroup, ListGroupItem } from 'reactstrap';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);
export const data2 = {
    labels: ['inscrits', 'Non Inscrit', 'Visite', 'Liste Attente', 'Reçu ',],
    datasets: [
        {
            label: '# of Votes',
            data: [200, 200, 250, 100, 250],
            backgroundColor: 'rgba(1, 20, 42, .3)',
            borderColor: 'rgba(1, 20, 41, 1)',
            borderWidth: 1,
        },
    ],
};

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
        },
    ],
};

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('DashBoard', '1', <BarChartOutlined />),
    getItem('Gestion Elèves', '2', <DesktopOutlined />),
    getItem('Gestion Familles', 'sub1', <UserOutlined />),
    getItem('Liste Elèves', 'sub2', <UnorderedListOutlined />),
    getItem('Attestations', '9', <FileOutlined />),
    getItem('Encaissement', '9', <DollarCircleOutlined />),
    getItem('Transport', '9', <CarOutlined />),
    getItem('Archives', '9', <ContainerOutlined />),
];

const Inscription = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ width: "200px" }}>

                <img className="logo" src="/logo.png" alt="logo" width="350" height="80" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        minWidth: '100vw'
                    }}

                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0', color: 'red', fontWeight: 'bold', fontSize: '20px'
                        }}
                    > Bienvenue HAJAR !!!
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: '100vh', minWidth: '87.5vw'
                        }}
                    >
                        <div class="grid-item-7"><h5 style={{ margin: '15px',color:'rgba(1, 20, 41)', textDecoration:'underline' }} > Tâches du jour</h5>
                            <ListGroup>
                                <ListGroupItem>
                                    Cras justo odio
                                </ListGroupItem>
                                <ListGroupItem>
                                    Cras justo odio
                                </ListGroupItem>
                                <ListGroupItem>
                                    Cras justo odio
                                </ListGroupItem>
                             
                            </ListGroup>
                        </div>
                        <div class="grid-item-1" >
                        <h5 style={{ margin: '15px',color:'rgba(1, 20, 41)', textDecoration:'underline' }} > Elèves Inscrits</h5>
                            <PolarArea style={{ maxHeight: '80%' }} data={data} />

                        </div>
                        <div class="grid-item-2">
                            <h5 style={{ margin: '15px',color:'rgba(1, 20, 41)', textDecoration:'underline' }} > Elèves NoN-Inscrits</h5> 
                         <Radar style={{ maxHeight: '80%' }} data={data} />
                         
                         </div>
                        <div class="grid-item-3">
                        <h5 style={{ margin: '15px',color:'rgba(1, 20, 41)', textDecoration:'underline' }} > Nbr de Visite</h5>

                        <PolarArea style={{ maxHeight: '80%' }} data={data} />
                        </div>
                        <div class="grid-item-4">
                        <h5 style={{ margin: '15px',color:'rgba(1, 20, 41)', textDecoration:'underline' }} > Liste d'attente</h5>

                        <Radar style={{ maxHeight: '80%' }} data={data2} />
                        </div>
                        <div class="grid-item-5"></div>
                        <div class="grid-item-6"></div>


                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ecole SUBRINI ©2022 Created by Hajar
                </Footer>
            </Layout>
        </Layout>
    );
};

export default Inscription;



