import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //console.log(email, password);
    return (
        <div>
            <NavBar></NavBar>
            <div id='login'>
                <Form className=' d-flex flex-column  align-items-center' id='login-form'>

                    <input onChange={(e) => setEmail(e.target.value)} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = 'Name'} id='form-element' type="text" name="" placeholder='Email' />

                    <input onChange={(e) => setPassword(e.target.value)} onBlur={(e) => e.target.placeholder = 'Password'} onFocus={(e) => e.target.placeholder = ""} id='form-element' type="password" name="" placeholder='Password' />


                    <button id='form-element' className='btn btn-primary' >Log In</button>
                    <p className='fs-2'>or</p>

                    <button id='login-link' className='btn ' >Google Sign In</button>


                </Form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;