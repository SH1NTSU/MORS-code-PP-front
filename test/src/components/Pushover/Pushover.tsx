import "./Pushover.scss";
import axios from 'axios';
import React, { useState } from 'react';
const Pushover: React.FC = () => {
    const [message, setMessage] = useState<string>('')
    const handleSubmit = async () => {
        const response = await axios.post('http://localhost:3000/message', {text: message})
        console.log(response)

    }
    return (
        <div className="Pushover">
            <form >
                <input type="text" placeholder="input message" onChange={(e) => {setMessage(e.target.value)}}/>
                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    );
    }

export default Pushover;