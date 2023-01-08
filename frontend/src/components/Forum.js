import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import '../styles/Forum.css'

function Forum() {
    const [thought, setThought] = useState("");
    const [tag, setTag] = useState("");
    const [stuffList, setStuffList] = useState([]);
    const { id } = useParams();
    const addStuff = () => {
        Axios.post("http://localhost:3001/postforum", {
            thought: thought,
            tag: tag,
            // id: id,
        }).then(() => {
            setStuffList([
                ...stuffList,
                {
                    thought: thought,
                    tag: tag,
                    // id: id,
                },
            ]);
        });
    };

    const getStuff = () => {
        Axios.get("http://localhost:3001/getForum").then((response) => {
            setStuffList(response.data);
        });
    };
    const getCatStuff = () => {
        Axios.get("http://localhost:3001/getforum/cats").then((response) => {
            setStuffList(response.data);
        });
    };

    return (
        <>
            <div id='forum-page' className='full-page'>
                <h2>
                    WELCOME TO THE FORUM
                </h2>

                <div className="information">
                    <label>Enter Your Thoughts To Share With The Community:</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setThought(event.target.value);
                        }}
                    />
                    <label>Enter Tag:</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setTag(event.target.value);
                        }}
                    />
                </div>
                <button onClick={addStuff}>Post Your Thoughts</button>

                <button onClick={getStuff}>Show All Thoughts</button>

                
                {stuffList.map((val, key) => {
                    return (
                        <div>
                            <div>
                                <h3>{val.thought}</h3>
                                <h4>Tag: {val.tag}</h4>
                            </div>

                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Forum