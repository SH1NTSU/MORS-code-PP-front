import "./Home.scss";

import React from "react";
import { useNavigate } from "react-router-dom";
const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="home">
        <button onClick={() => navigate("/Mors")}>MORS-code</button>
        <button onClick={() => navigate("/Pushover")}>Send messages</button>
        </div>
    );
    }

export default Home;