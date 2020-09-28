import React, { useState } from "react";

const Signup = () => {
  const [info, setInfo] = useState({
    userName: "",
    firstName: "",
    password: "",
  });

  const updateInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div className="row container center" style={{ marginTop: "2rem" }}>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s4 offset-s4">
            <input
              type="text"
              className="validate"
              id="firstName"
              name="firstName"
              onChange={updateInfo}
            />
            <label for="firstName">First Name</label>
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
            <label for="userName">User Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s4 offset-s4">
            <input
              type="text"
              className="validate"
              id="password"
              name="password"
              onChange={updateInfo}
            />
            <label for="password">Password</label>
          </div>
        </div>

        <a className="waves-effect waves-light btn">Sign Up</a>
      </form>
    </div>
  );
};

export default Signup;
