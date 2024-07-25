import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Routings from "./Routings";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Routings />
    </>
  );
}

export default App;
