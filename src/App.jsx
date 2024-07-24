import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner from "./components/BannerMap/Banner";
import SectionOne from "./components/Sections/SectionOne";
import SectionThree from "./components/Sections/SectionThree";
import Routings from "./Routings";
import StateProvider from "./pages/StateProvider/StateProvider";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/*
    // header
    // banner 
    // first section infor image
    // destination place to be visite
    // place with differnt format
    // sumbit
    // thank you
    // foooter
    */}
      <StateProvider>
        <Header />
        <Routings />
      </StateProvider>
    </>
  );
}

export default App;
