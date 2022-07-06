import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import '../SignIn.css';

function SignIn(props) {
    return (
        <div className="global-content">
            <div className="SingnIn-picture">
                <img src="/photo_SignIN.png" alt="logo" width="100%" height="100%" />
            </div>

            <div className="signIn-form">
                <p style={{ color: 'white', fontSize: "45px", textAlign: 'center', marginTop: '250px' }}> Bienvenue dans votre espace privé</p>
                <p style={{ color: 'white', fontSize: "20px", textAlign: 'center', marginBottom: "50px", marginLeft: "10px" }}> Subrini vous rapproche le plus de la vie scolaire de votre enfant avec son nouveau système de gestion scolaire</p>
                

                <div style={{ display: 'flex',flexDirection:'row', justifyContent:'center' }} >
                <p style={{ color: "white" }}>Vous êtes ?</p>
                    <li className="choice">
                        <ul className="unordred-list" onClick={()=>console.log('Administration')} >Administration</ul>
                        <ul className="unordred-list" onClick={()=>console.log('Enseignant')}>Enseignant</ul>
                        <ul className="unordred-list" onClick={()=>console.log('Parents')}>Parents</ul>
                        <ul className="unordred-list"onClick={()=>console.log('Eleves')}>Elève</ul>
                    </li>
                </div>
                <Form inline style={{ width: "60%", textAlign: 'center', margin: '0 250px' }}>

                    <FormGroup floating>

                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Email"
                            type="email"

                        />
                        <Label for="exampleEmail">
                            Identifiant de connexion
                        </Label>
                    </FormGroup>
                    {' '}
                    <FormGroup floating>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        <Label for="examplePassword">
                            Mot de passe
                        </Label>
                    </FormGroup>
                    {' '}
                    <Link to='/home'>
                        <Button style={{ marginLeft: '65%', width: "200px", height: "60px" }} to="/home">
                            Connexion
                        </Button>
                    </Link>


                </Form>
                <Link style={{ width: "60%", margin: '0 25%', color: "white" }}> Mot de passe oublié?</Link>
            </div>
        </div>
    )
}

export default SignIn


