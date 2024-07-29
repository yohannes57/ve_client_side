import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
// import "./Signup.css";

const SignUp = ({ setNewUser }) => {
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
    // setNewUser(false);
    nav("/login");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Sign Up</h2>
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name1"
                    name="name"
                    placeholder="First and Last Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email1"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
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
                <div className="mb-3">
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
              <p className="mt-3 text-center">
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
