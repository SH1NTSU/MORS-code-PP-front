import "./App.css";
import Home from "./Components/Home/Home";
import MORS from "./Components/MORS/MORS";
import Pushover from "./Components/Pushover/Pushover";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mors" element={<MORS />} />
          <Route path="/pushover" element={<Pushover />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
