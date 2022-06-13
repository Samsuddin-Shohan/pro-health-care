import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    //console.log(email, password);
    const { emailSignIn, user, googleSignIn } = useAuth();
    const handleLogin = (e) => {
        e.preventDefault();
        emailSignIn(email, password)
        console.log(user);
        history.push('/')
    }
    const handleGoogleSignIn = () => {
        googleSignIn().then(result => {
            history.push('/');

        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div id='login'>


                <Form className=' d-flex flex-column  align-items-center' onSubmit={handleLogin} id='login-form'>
                    <h1 className='text-white text-center fw-bolder'>Please Login</h1>
                    <input onChange={(e) => setEmail(e.target.value)} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = 'Name'} id='form-element' type="text" name="" placeholder='Email' />

                    <input onChange={(e) => setPassword(e.target.value)} onBlur={(e) => e.target.placeholder = 'Password'} onFocus={(e) => e.target.placeholder = ""} id='form-element' type="password" name="" placeholder='Password' />


                    <button id='form-element' className='btn btn-primary' type='submit' >Log In</button>
                    {/* <p className='fs-2'>or</p> */}

                    {/* <button id='login-link' className='btn ' onClick={handleGoogleSignIn} >Google Sign In</button> */}


                </Form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;