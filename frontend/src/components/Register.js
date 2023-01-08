import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import '../styles/Register.css'

function Register() {
    // let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [warn, SetWarn] = useState("No error");
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [number, setNumber] = React.useState();
    const [aadhar, setAadhar] = React.useState();
    const [password, setPassword] = React.useState();
    const [confirm, setConfirm] = React.useState();

    axios.defaults.withCredentials = true;

    const checkAndSubmit = (event) => {
        if (name !== "" && name !== undefined && email !== "" && email !== undefined && number !== "" && number !== undefined && aadhar !== "" && aadhar !== undefined && password !== "" && password !== undefined && confirm !== "" && confirm !== undefined) {
            event.preventDefault();
            var regNameM = /^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/;
            var regNameL = /^[a-zA-Z]+ [a-zA-Z]+$/;
            var regNameF = /^[a-zA-Z]+$/;
            var regex = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
            if (!regNameM.test(name) && !regNameL.test(name) && !regNameF.test(name)) {
                setShow(true);
                SetWarn("Enter proper name");
            }
            else if(number<=0 || number.length>10 || number.length<10){
                setShow(true);
                SetWarn("Please enter a valid phone number");
            }
            else if (!regex.test(aadhar)) {
                setShow(true);
                SetWarn("Please enter the valid aadhar number");
            }
            else if (password !== confirm) {
                setShow(true);
                SetWarn("Both passwords should match");
            }
            else {
                var lastName = name.split(' ').slice(-1).join(' ');
                if (lastName === undefined) {
                    lastName = "";
                }
                var firstName = name.split(' ')[0];
                var num = number.toString();
                axios.post("http://localhost:3001/register", {
                    name: name,
                    password: password,
                    number: number,
                    email: email,
                    aadhar: aadhar,
        
                }).then((response) => {
                    console.log(response);
                });
            }
        }

    }
    return (
        <div>
            <div className="registerPage">
                <div id="register">
                    <h1>Registration Form</h1>
                    <form method="POST">
                        <input type="text" placeholder="Your name.." required onChange={(event) => {
                            setName(event.target.value);
                        }} />
                        <input type="email" placeholder="Your email.." required onChange={(event) => {
                            setEmail(event.target.value);
                        }} />
                        <input type="number" placeholder="Your Mobile number.." maxLength={10} required onChange={(event) => {
                            setNumber(event.target.value);
                        }} />
                        <input type="text" placeholder="Your Aadhar number (xxx xxxx xxxx)" maxLength={14} required onChange={(event) => {
                            setAadhar(event.target.value);
                        }} />
                        <input type="password" placeholder="Your password.." required maxLength={6} onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                        <input type="password" placeholder="Confirm password.." required maxLength={6} onChange={(event) => {
                            setConfirm(event.target.value);
                        }} />
                        <button onClick={(event) => { checkAndSubmit(event) }} type="submit" id="button" variant="contained">Register</button>
                        <p>Already have a account? <a href="/login">login</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register