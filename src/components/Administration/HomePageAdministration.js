import React, { useState } from "react";
import '../../App.css';
import 'antd/dist/antd.css';
import Navigation from '../Navigation'
import SiderPage from "../SiderPage";


function HomePageAdministration(props) {

  return (
    <div className="App-style">
      <Navigation />

        <SiderPage />



    </div>

  )
}

export default HomePageAdministration
