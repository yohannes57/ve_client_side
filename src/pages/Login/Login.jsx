import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";

//--------------------------
function Login() {
  // const [isAdmin, setisAdmin] = useState(false);
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, signUp, logout } = useStateValue().auth;
  const [{ user, data }, dispatch] = useStateValue().state;

  const nav = useNavigate();

  //handle the form
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      if (response) {
        let userEmail = formData.email;
        localStorage.setItem("user", userEmail);
        dispatch({ type: "set_user", user: userEmail });
        nav("/dashboard");
        console.log(userEmail);
      } else {
        nav("/");
        alert("Your email or password is Incorrect");
      }
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
            name="email"
            placeholder="type your email"
            onChange={handleOnChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleOnChange}
          />
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        {/* if you dont have account ,create first */}
        <button onClick={handleClick} className="login__registerButton">
          No account? Create a new account
        </button>
      </div>
    </div>
  );
}

export default Login;
