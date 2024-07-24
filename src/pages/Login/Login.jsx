import React, { useState, useEffect } from "react";
import "./Login.css";
// import { useHistory } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
// import { useStateFromContext } from "../../stateProvider/StateProvider";

//--------------------------
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [{ user, cart }, dispatch] = useStateFromContext();
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    // dispatch({ type: "add_user", user: email });
    navigate("/");
  };

  return (
    <div className="forms">
      <Link to="/">
        <img src="" alt="" className="login__logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <input
            type="text"
            value={email}
            placeholder="type your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <button
          onClick={() => navigate("/signup")}
          className="login__registerButton"
        >
          No account? Create new account
        </button>
      </div>
    </div>
  );
}

export default Login;
