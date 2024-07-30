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
        // this save the loged user to localstorage and keeps available if the page referesh
        let userEmail = formData.email;
        localStorage.setItem("user", userEmail);
        dispatch({ type: "set_user", user: userEmail });
        nav("/dashboard");
        // console.log(userEmail);
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
    nav("/signup");
  };
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <Link to="/">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.wHdxy8gVNs18QY6viBke3AAAAA&pid=Api&P=0&h=180"
          alt="Logo"
          style={{ width: "30px", height: "30px" }}
          className="login__logo mb-1"
        />
      </Link>
      <div className="login__container">
        <h1 className="mb-4 text-center">Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="mb-1">
            <input
              type="text"
              name="email"
              placeholder="Type your email"
              className="form-control"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-40 mb-3">
            Sign In
          </button>
        </form>
        <button onClick={handleClick} className="btn btn-secondary w-30">
          No account? Create a new account
        </button>
      </div>
    </div>
  );
}

export default Login;
