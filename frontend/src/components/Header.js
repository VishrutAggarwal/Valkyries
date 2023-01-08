import React from 'react';
// import '../styles/Header.css'
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id='header-component'>
      <div class="wrapper">
        <nav>
          <div class="content">
            <div class="logo">
              <a href="/#">Valkyries</a>
            </div>
            <ul class="links">
              <li><a href="/">Home</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/resources">Resources</a></li>
              <li>
                <a href="/helpline" class="desktop-link">Helpline</a>
              </li>
              <li>
                <a href="/forum" class="desktop-link">Forum</a>
              </li>
              <li><a href="/#">About us</a></li>
              <li><a href="/#">Contact us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header