import React from 'react';
import '../styles/Landing.css'

function Helpline() {
    return (
        <div>
            <div id='page'>
                    <h2>
                        Helpline Numbers
                        </h2>
                <div id='container'>
                    <div className='card'>
                        <a href='/login'>
                            <h3>New Delhi</h3>
                            <p>011-23237166</p>
                            <p>011-23234918</p>
                            <p>011-23379181</p>
                            <p>011-24673366</p>
                        </a>
                    </div>
                    <div className='card'>
                        <a href='/register'>
                            <h3>Gurgaon</h3>
                            <p>011-23237166</p>
                            <p>011-23234918</p>
                            <p>011-23379181</p>
                            <p>011-24673366</p>
                        </a>
                    </div>
                    <div className='card'>
                        <a href='/register'>
                            <h3>Noida</h3>
                            <p>011-23237166</p>
                            <p>011-23234918</p>
                            <p>011-23379181</p>
                            <p>011-24673366</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Helpline