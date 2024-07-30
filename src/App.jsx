import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Routings from "./Routings";
import { useStateValue } from "./pages/StateProvider/StateProvider";

function App() {
  const [{ styles, user }, dispatch] = useStateValue().state;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: "set_user", user: storedUser });
    }
  }, [dispatch]);

  //these are css properties ,used globaly
  const appStyles = {
    fontFamily: styles.fontStyle,
    backgroundColor: styles.bgColor,
    color: styles.textColor,
    minHeight: "100vh",
  };
  return (
    <div style={appStyles}>
      <Header />
      <Routings />
    </div>
  );
}

export default App;
