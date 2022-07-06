import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSchoolFlag , faGraduationCap, faChalkboardTeacher, faPeopleRoof} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


function SignIn (props) {
    return (
        <div >
            <div  className="logo">
                  <img src="/logo.png" alt="logo" width="500" height="150"/>
            </div>

            <div className="content-signin">

                <div className="block-content">
                <FontAwesomeIcon icon={faSchoolFlag} color="black" className="icon-size fa-thin " />
                <Link className="title-icon" to="/home">Administration</Link>
                </div>
                
                <div className="block-content">
                <FontAwesomeIcon icon={faChalkboardTeacher} color="black" className="icon-size" />
                <Link className="title-icon" to="/navigation">Enseignants</Link>
                </div>
                <div className="block-content">
                <FontAwesomeIcon icon={faGraduationCap} color="black" className="icon-size" />
                <Link className="title-icon" to="/home2">Elèves</Link>
                </div>
                <div className="block-content">
                <FontAwesomeIcon icon={faPeopleRoof} color="black" className="icon-size" />
                <Link className="title-icon" to="/home12">Parents</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn


