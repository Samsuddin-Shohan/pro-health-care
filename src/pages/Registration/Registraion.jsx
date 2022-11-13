import axios from 'axios';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

const Registraion = () => {
    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [confirmPassword, setConfirmPassword] = useState('');
    console.log('hello');
    const handleRegistration = (e) => {
        e.preventDefault();
        e.target.reset();


        if (password != confirmPassword) {
            alert('please type your password correctly')

        }
        else {
            axios.post('https://powerful-reef-73334.herokuapp.com/users', {
                name,
                email,
                password
            })
                .then(res => console.log(res))
            alert('Your registraion is completed successfully');
            history.push('/login');

        }

    }

    return (
        <div>
            <NavBar></NavBar>
            <div id="login">

                <Form
                    className=" d-flex flex-column  align-items-center"
                    id="login-form"
                    onSubmit={handleRegistration}

                >
                    <h1 className='text-white text-center fw-bolder'>Please Register</h1>

                    <input
                        onFocus={(e) => (e.target.placeholder = "")}

                        onBlur={(e) => (e.target.placeholder = "Name")}
                        onChange={(e) => setName(e.target.value)}

                        id="form-element"
                        type="text"
                        name=""
                        placeholder="Name"
                        required
                    />
                    <input

                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "Email")}
                        onChange={(e) => setEmail(e.target.value)}


                        id="form-element"
                        type="email"
                        name=""
                        placeholder="Email"
                        required
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
                        type='submit'
                    >
                        Sign Up
                    </button>


                </Form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registraion;