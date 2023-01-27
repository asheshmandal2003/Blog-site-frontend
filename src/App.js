import "./App.css";
import Home from "./pages/home/Home";
import Topbar from "./topbar/Topbar";
import Write from "./write.jsx/Write";
import { Routes, Route } from "react-router-dom";
import LogIn from "./login/LogIn";
import SignUp from "./signup/SignUp";
import SinglePost from "./singlepost/SinglePost";
import Settings from "./settings/Settings";

function App() {
  const user = true;
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="write" element={<Write />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/:item" element={<SinglePost />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
