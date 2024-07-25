import React, { useState } from "react";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
//------------------------------
const Auth = () => {
  const [newUser, setNewUser] = useState(false);
  return (
    <>
      {newUser ? (
        <Signup setNewUser={setNewUser} />
      ) : (
        <Login setNewUser={setNewUser} />
      )}
    </>
  );
};

export default Auth;
