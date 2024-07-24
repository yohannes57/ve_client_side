import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner from "./components/BannerMap/Banner";
import SectionOne from "./components/Sections/SectionOne";

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
      <Header />
      <Banner />
      <SectionOne />
      <Footer />
    </>
  );
}

export default App;
