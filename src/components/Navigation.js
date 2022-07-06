import React from 'react'
import { Layout, Menu } from 'antd';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
const { Header, Content, Sider } = Layout;




function HomePagev2(props) {


    return (
        <div className="navBar">
            <img src="/logo.png" alt="logo" width="250" height="80" />
            <div className="navBar-details">
                <div className="search"> recherche </div>

                <Badge badgeContent={4} color="primary">
                        <MailIcon color="action" />
                    </Badge>
               
                <div style={{ padding: 25 }}>Hajar Mounjib </div>
                <div className="avatar-style">  <Avatar style={{ width: 50, height: 50, padding: 5 }} src="/broken-image.jpg" />
                </div>

            </div>


        </div>



    )
}

export default HomePagev2
