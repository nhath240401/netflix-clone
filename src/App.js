import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = null;
  return (
    <Router>
      {!user ? (
        <SignUp />
      ) : (
        <Routes>
          <Route path="/">
            <Route index element={Home} />
          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;
