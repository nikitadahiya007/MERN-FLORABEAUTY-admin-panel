import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { Height } from "@material-ui/icons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>LOGIN</button> 
    </div>
  );
};

export default Login;
