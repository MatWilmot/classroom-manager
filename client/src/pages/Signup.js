import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const [info, setInfo] = useState({
    userName: "",
    firstName: "",
    password: "",
  });
  let history = useHistory();

  const updateInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   // history.push is a redirect, put dashboard in here when done
  //   if (props.user.userName) history.push("/");
  // }, [props.user.userName, history]);

  const signup = (e) => {
    e.preventDefault();
    axios.post("/signup", info).then((res) => {
      console.log(res.data);
      props.setUser(res.data);
    });
  };
  const logout = () => {
    axios.get("/logout").then((res) => console.log(res.data));
    props.setUser({});
    history.push("/");
  };

  return (
    <div className="row container center" style={{ marginTop: "2rem" }}>
      <form className="col s12" onSubmit={signup}>
        <div className="row">
          <div className="input-field col s4 offset-s4">
            <input
              type="text"
              className="validate"
              id="firstName"
              name="firstName"
              onChange={updateInfo}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s4 offset-s4">
            <input
              type="text"
              className="validate"
              id="userName"
              name="userName"
              onChange={updateInfo}
            />
            <label htmlFor="userName">User Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s4 offset-s4">
            <input
              type="password"
              className="validate"
              id="password"
              name="password"
              onChange={updateInfo}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>

        <button className="waves-effect waves-light btn" type="submit">
          Sign Up
        </button>
      </form>
      <button className="waves-effect waves-light btn" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default Signup;
