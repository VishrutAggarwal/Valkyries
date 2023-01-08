import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import '../styles/Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        // if (email !== "" && email !== undefined && password !== "" && password !== undefined) {
        //     event.preventDefault();
        // axios({
        //     method: "POST",
        //     url: "http://localhost:8080/login",
        //     data: {
        //         email: `${email}`,
        //         password: `${password}`
        //     }
        // }).then((res) => {
        //     console.log(res);
        //     if (res.status == 200) {
        //         const id = res.data.id;
        //         const expires = new Date();
        //         expires.setTime(expires.getTime() + 7 * (1000 * 60 * 60 * 24));
        //         setCookies("id", res.data.id, { path: '/', expires });
        //         setCookies("mail", email, { path: '/', expires });
        //         navigate(`/dashboard/${id}`);
        //     }
        //     else {
        //         alert("Either email/password wrong");
        //     }
        // }).catch((err) => {
        //     alert("Some error occurred. Please try again after some time");
        // })
        // }
    }
    const login = () => {
        axios.post("http://localhost:3001/login", {
          email: email,
          password: password,
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus(response.data[0].email);
          }
        });
      };
    
      useEffect(() => {
        axios.get("http://localhost:3001/login").then((response) => {
          if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].email);
          }
        });
      }, []);
    return (
        <div className="loginForm">
            <div className="header-text">
                Login Form
            </div>
            <form method='POST'>
                <input onChange={(event) => {
                    setEmail(event.target.value);
                }} placeholder="Your Email Address" type="email" required />

                <input onChange={(event) => {
                    setPassword(event.target.value);
                }} placeholder="Your Password" type="password" required />
                
                <button onClick={(event) => { login(event) }} type="submit" id="button" variant="contained">Login</button>

                <span>Or Click here to <a href="/register">Register</a></span>
            </form>
        </div>
    )
}

export default Login