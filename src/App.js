import "./App.css";
import Home from "./components/home/Home";
import Write from "./components/write/Write";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/login/LogIn";
import SignUp from "./components/signup/SignUp";
import Settings from "./components/settings/Settings";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <>
     <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="write" element={<Write />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
