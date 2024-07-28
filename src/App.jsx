import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Routings from "./Routings";
import { useStateValue } from "./pages/StateProvider/StateProvider";

function App() {
  const [{ styles }] = useStateValue().state;

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
