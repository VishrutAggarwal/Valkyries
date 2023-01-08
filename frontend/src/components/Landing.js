import React from 'react'
import '../styles/Landing.css'
import '../styles/Dashboard.css'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <div id='landing-page'>
      {/* <Header/> */}
      <div id='about-section'>
        <h1>Valkyries</h1>
        <img className='img-landing' src='https://media.discordapp.net/attachments/794519160746541108/1061560277168029756/valky.png'></img>
        <h5>For our fierce warriors and their never diminishing light.</h5>
      </div>
      <div id='page'>
        <div id='container'>
          <div className='card'>
            <Link to='/login'>
            <p>Login</p>
              <img className='card-imagess' src='https://cdn.discordapp.com/attachments/794519160746541108/1061576560043380746/295128.png'></img>
            </Link>
            </div>
            <div className='card'>
            <Link to='/register'>
            <p>Register</p>
              <img className='card-imagess' src='https://media.discordapp.net/attachments/794519160746541108/1061576977099800616/203-2035339_register-user-register-online-icon-png.png'></img>
            </Link>
          </div>
        </div>
      </div>
      </div>
      )
}

      export default Landing