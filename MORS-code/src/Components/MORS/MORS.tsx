import "./MORS.scss";
import axios from "axios";
import React, { useState } from "react";

const MORS = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/convert", {
      text: message,
    });
    console.log(response);
  };

  return (
    <div className="mors">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MORS;
