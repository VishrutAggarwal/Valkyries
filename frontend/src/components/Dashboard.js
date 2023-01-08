import React from 'react'
import '../styles/Dashboard.css'

function Dashboard() {
    return (
        <div id='dashboard-page'>
            {/* <div id='greetings'>
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
        </div> */}

            <div class="wrapper3">
                <div class="static-txt">&nbsp&nbsp&nbspHello, Welcome</div>
            </div>
            <div class="wrapper3">
                <div class="static-txt">&nbsp&nbsp&nbspHere you can</div>
            </div>




            <div class="wrapper2">

                <div class="static-txt"></div>
                <ul class="dynamic-txts">
                    <li><span>Report an Incident</span></li>
                    <li><span>Get resources</span></li>
                    <li><span>Talk to the community</span></li>


                </ul>
            </div>

            <br />

            <a rel="noopener" target="_blank" href="https://www.litmus.com/"
                style="background-color:  #994e8a ; font-size: 18px; font-family: Helvetica, Arial, sans-serif; font-weight: bold; text-decoration: none; padding: 14px 20px; color: #ffffff; border-radius: 5px; display: inline-block; mso-padding-alt: 0;">

                <span style="mso-text-raise: 15pt;">&nbsp&nbsp&nbsp&nbsp&nbspReport an Incident&nbsp&nbsp&nbsp&nbsp&nbsp
                    &rarr;</span>
            </a>


            <br />
            <br />
            <a rel="noopener" target="_blank" href="https://www.litmus.com/"
                style="background-color:  #994e8a ; font-size: 18px; font-family: Helvetica, Arial, sans-serif; font-weight: bold; text-decoration: none; padding: 14px 20px; color: #ffffff; border-radius: 5px; display: inline-block; mso-padding-alt: 0;">

                <span style="mso-text-raise: 15pt;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGet
                    resources&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &rarr;</span>

            </a>
            <br />

            <br />
            <a rel="noopener" target="_blank" href="https://www.litmus.com/"
                style="background-color:  #994e8a ; font-size: 18px; font-family: Helvetica, Arial, sans-serif; font-weight: bold; text-decoration: none; padding: 14px 20px; color: #ffffff; border-radius: 5px; display: inline-block; mso-padding-alt: 0;">

                <span style="mso-text-raise: 15pt;">Talk to the community &rarr;</span>

            </a>


            <br /><br />

        </div >
    )
}

export default Dashboard