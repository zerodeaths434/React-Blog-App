import React, { useContext } from "react";
import Topbar from "./components/topbar/topbar";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/singlePost/Single";
import Write from "./pages/write/write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

const App = () => {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
};

export default App;
