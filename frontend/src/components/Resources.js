import React from 'react';
import '../styles/Resources.css'

function Resources() {
    return (
        <div id='page'>
            <h2>Here are some resources that may help your Computer Science journey!!</h2>
            <div id='container'>
                <div className='card'>
                    <p>Communities</p>
                    <a href='https://codess.cafe/'>
                        Codess.Cafe
                    </a>
                    <a href='https://www.womenwhocode.com/delhi'>
                        Women Who Code Delhi
                    </a>
                    <a href='https://girlscript.tech/'>
                        GirlScript Foundation
                    </a>
                    <a href='https://developers.google.com/womentechmakers'>
                        Women TechMakers
                    </a>
                    <a href='https://codess.cafe/'>
                        Codess.Cafe
                    </a>
                </div>
                <div className='card'>
                    <p>Tutorials</p>
                    <a href='https://youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL'>
                        C++ Programming Playlist
                    </a>
                    <a href='https://youtube.com/playlist?list=PLmRclvVt5DtmcLF3ywxKg692lhfD6SUOr'>
                        Python Programming Playlist
                    </a>
                    <a href='https://youtube.com/playlist?list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y'>
                        Data Structures Playlist
                    </a>
                    <a href='https://youtube.com/playlist?list=PL-Jc9J83PIiEeD3I4VXETPDmzJ3Z1rWb4'>
                        Web Development Playlist
                    </a>
                    <a href='https://youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw'>
                        Machine Learning Playlist
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Resources