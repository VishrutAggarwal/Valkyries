import React from 'react'
// import '../styles/Dashboard.css'

function Dashboard(props) {
  return (
    <div id='dashboard-page'>
        <div id='greetings'>
            <p className='heading-highest'>Hi, {props.name}</p>
        </div>
        <div>
            <div className='card' id='incident-card'>
                <p>Incident</p>
            </div>
            <div className='card' id='forum-card'>
                <p>Forum</p>
            </div>
            <div className='card' id='resources-card'>
                <p>Resources</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard