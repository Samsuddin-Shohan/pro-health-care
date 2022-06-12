import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

const Registraion = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <div>
            <NavBar></NavBar>
            <div id="login">
                <Form
                    className=" d-flex flex-column  align-items-center"
                    id="login-form"
                >

                    <input
                        onFocus={(e) => (e.target.placeholder = "")}

                        onBlur={(e) => (e.target.placeholder = "Name")}
                        onChange={(e) => setName(e.target.value)}

                        id="form-element"
                        type="text"
                        name=""
                        placeholder="Name"
                    />
                    <input

                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "Email")}
                        onChange={(e) => setEmail(e.target.value)}


                        id="form-element"
                        type="text"
                        name=""
                        placeholder="Email"
                    />

                    <input

                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "Password")}
                        onChange={(e) => setPassword(e.target.value)}


                        id="form-element"
                        type="password"
                        name=""
                        placeholder="Password"
                    />

                    <input

                        onBlur={(e) => (e.target.placeholder = "Confirm Password")}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onChange={(e) => setConfirmPassword(e.target.value)}


                        id="form-element"
                        type="password"
                        name=""
                        placeholder="Confirm Password"
                    />

                    <button
                        id="form-element"
                        className="btn btn-primary"

                    >
                        Sign Up
                    </button>
                    <p className="fs-2">or</p>

                    <button
                        id="login-link"
                        className="btn btn-outline-primary mb-4 "

                    >
                        Google Sign In
                    </button>
                </Form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registraion;