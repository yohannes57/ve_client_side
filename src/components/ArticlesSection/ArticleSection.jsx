// components/ArticleSection.js
import React from "react";
import MainArticles from "./MainArticles";
import SideArticls from "./SideArticls";
import { Link } from "react-router-dom";
// import MainArticle from './MainArticle';
// import SidebarArticle from './SidebarArticle';

const ArticleSection = () => {
  const mainArticle = {
    title: "Quality of Life in Ethiopia: The Secrets to Know Before Visiting",
    description:
      "Discover the unique lifestyle and rich culture in Ethiopia. Here are top tips for travelers to experience Ethiopia's quality of life, cherished by local residents.",
    imgSrc:
      "https://www.youramazingplaces.com/wp-content/uploads/2014/05/Gondar-Ethiopia.jpg",
  };

  const sidebarArticles = [
    {
      title: "Historical Sites in Ethiopia",
      imgSrc: "https://i.imgur.com/spqP3vK.jpeg",
    },
    {
      title: "The Ethiopian Highlands",
      imgSrc: "https://i.imgur.com/gft45NR.jpg",
    },
    {
      title: "Travel Safety in Ethiopia",
      imgSrc: "https://i.imgur.com/hcYk8cD.png",
    },
    { title: "Rift Valley Lakes", imgSrc: "https://i.imgur.com/8wxIVsP.jpeg" },
    {
      title: "Addis Ababa Highlights",
      imgSrc:
        "https://holidaynomad.com/wp-content/uploads/2020/07/beautiful-ethiopian-scenery.png",
    },
    {
      title: "Ethiopian Coffee Culture",
      imgSrc: "https://i.ytimg.com/vi/sq_xjXk1BGo/maxresdefault.jpg",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-left">Explore Ethiopia</h1>
      <p className="text-left">
        Read handpicked articles to get you inspired by Ethiopia
      </p>
      <div className="row">
        <MainArticles {...mainArticle} />
        <div
          className="col-md-6"
          style={{ maxHeight: "400px", overflowY: "scroll" }}
        >
          {sidebarArticles.map((article, index) => (
            <SideArticls key={index} {...article} />
          ))}
        </div>
      </div>
      <div className="text-right mt-2">
        <button className="btn btn-outline-dark">See All Articles</button>
      </div>
    </div>
  );
};

export default ArticleSection;
