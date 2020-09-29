import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Dashboard = (props) => {
  let history = useHistory();

  useEffect(() => {
    // history.push is a redirect, put dashboard in here when done
    if (!props.user.userName) history.push("/");
  }, [props.user.userName, history]);

  return (
    <div>
      <h1>
        This is a protected page! You can only see this if you're logged in!
      </h1>
      <h1>User Name: {props.user.userName}</h1>
      <h1>User id: {props.user.id}</h1>
    </div>
  );
};

export default Dashboard;
