import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
// import "./Signup.css";

const SignUp = () => {
  const [{ user }, dispatch] = useStateValue().state;
  const { login, signUp, logout } = useStateValue().auth;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.password2) {
        throw "password not match";
      }
      let response = await signUp(formData);
      if (response) {
        //local storage to keep the user loged in while the page refreshing
        let userEmail = formData.email;
        localStorage.setItem("user", userEmail);
        nav("/dashboard");
        dispatch({ type: "set_user", user: userEmail });
      } else {
        nav("/");
        alert("Something is Wrong,Try Again Please!!!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(formData.email);
  };

  // console.log(formData.email);
  const handleClick = () => {
    nav("/login");
  };

  return (
    <div className="container" style={{ marginTop: "85px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <Link to="/">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.wHdxy8gVNs18QY6viBke3AAAAA&pid=Api&P=0&h=180"
                  alt="Logo"
                  style={{ width: "30px", height: "30px" }}
                  className="login__logo "
                />
              </Link>
              <h2 className="card-title text-center">Sign Up</h2>
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="mb-1">
                  <input
                    type="text"
                    className="form-control"
                    id="name1"
                    name="name"
                    placeholder="First and Last Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-1">
                  <input
                    type="email"
                    className="form-control"
                    id="email1"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-1">
                  <input
                    type="password"
                    className="form-control"
                    id="password1"
                    name="password"
                    placeholder="Password"
                    minLength="6"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-1">
                  <input
                    type="password"
                    className="form-control"
                    id="password2"
                    name="password2"
                    placeholder="Confirm Password"
                    minLength="6"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-50">
                  Sign Up
                </button>
              </form>
              <p className="mt-1 text-center">
                Already have an account?
                <button onClick={handleClick} className="btn btn-link">
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
