import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState({ userName: "", id: null });

  useEffect(() => {
    axios.get("/api").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/login">
          <Login user={user} setUser={setUser} />
        </Route>

        <Route exact path="/signup">
          <Signup user={user} setUser={setUser} />
        </Route>

        <Route exact path="/dashboard">
          <Dashboard user={user} setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
