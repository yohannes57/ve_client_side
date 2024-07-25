import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";

//--------------------------
function Login({ setNewUser }) {
  // const [isAdmin, setisAdmin] = useState(false);
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, signUp, logout } = useStateValue().auth;

  const nav = useNavigate();
  //-------------------------
  //handle the form
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      nav("/dashboard");
      // else navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  //-------------------------
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    // setNewUser(false);
    nav("/signup");
  };
  return (
    <div className="forms">
      <Link to="/">
        <img src="" alt="" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="type your email"
            onChange={handleOnChange}
          />
          <input
            type="password"
            placeholder="password"
            onChange={handleOnChange}
          />
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        {/* onClick={() => navigate("/signup")} */}
        <button onClick={handleClick} className="login__registerButton">
          No account? Create new account
        </button>
      </div>
    </div>
  );
}

export default Login;
