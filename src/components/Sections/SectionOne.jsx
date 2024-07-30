import React from "react";
import Props_one from "./Props_one";
import Props_two from "./Props_two";
import "bootstrap/dist/css/bootstrap.min.css";

const imageUrl = "https://i.imgur.com/MTYfhft.jpeg";
const two = "https://i.imgur.com/1MuvhWe.jpeg";
//
const imageU = "https://i.imgur.com/mMFrZnc.jpeg";
const two2 = "https://i.imgur.com/ixW3jOA.jpeg";
const three3 = "https://i.imgur.com/PImm8O2.jpeg";

function SectionOne() {
  return (
    <div className="section container">
      <div className="section-title text-center my-4">Best Destinations</div>
      <div className="section-content">
        <Props_one
          imageUrl={imageUrl}
          content="Gondar, located in the Amhara region of northwest Ethiopia, was once the royal capital of Ethiopia. Known as the 'Camelot of Africa', it is famous for its medieval castles and churches, including the Fasil Ghebbi, a royal enclosure that is a UNESCO World Heritage site. The city's historical architecture and the annual Timkat festival, which celebrates the Epiphany, make Gondar a must-visit destination."
        />
        <Props_two
          imageUrl={imageU}
          content={
            "The Danakil Depression, located in the Afar region of northeastern Ethiopia, is one of the hottest and most inhospitable places on Earth. Despite its extreme environment, it is a geological wonderland with active volcanoes, sulfur springs, and vast salt flats. The unique landscape of the Danakil Depression offers a surreal and otherworldly experience for adventurous travelers."
          }
        />
        <Props_one
          imageUrl={two2}
          content="Lalibela, situated in the Amhara region of northern Ethiopia, is renowned for its monolithic rock-hewn churches, which were carved out of solid rock in the 12th century. These churches are still in use today and are a major pilgrimage site for Ethiopian Orthodox Christians. Lalibela is often referred to as the 'New Jerusalem' due to its significant religious history and its churches, which are a UNESCO World Heritage site."
        />
        <Props_two
          imageUrl={three3}
          content="The Nile River, often referred to as the Giyon in ancient texts, holds immense value for Ethiopia both historically and economically. Originating from Lake Tana in the Ethiopian Highlands, the Blue Nile—one of the Nile's two major tributaries—flows through the country, providing essential water resources for agriculture, drinking, and hydroelectric power. "
        />
        <Props_one
          imageUrl={two}
          content="Aksum Tsion, located in Aksum, is one of the most important religious sites in Ethiopia. It is believed to be the resting place of the Ark of the Covenant in the Church of St. Mary of Zion. This site holds great significance for Ethiopian Orthodox Christians and attracts pilgrims from all over the country. The church and its surrounding area offer a profound spiritual experience."
        />
      </div>
    </div>
  );
}

export default SectionOne;
