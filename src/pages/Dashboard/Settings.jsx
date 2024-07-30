import React, { useState } from "react";
import { useStateValue } from "../StateProvider/StateProvider";

function Settings() {
  const [fontStyle, setFontStyle] = useState("Arial");
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [{ user, data, styles }, dispatch] = useStateValue().state;

  //setting features applied for the page
  const stylesSetting = {
    fontFamily: fontStyle,
    backgroundColor: bgColor,
    color: textColor,
    padding: "20px",
    height: "100vh",
  };
  function handleSubmit() {
    dispatch({
      type: "set_settings",
      styles: { fontStyle, bgColor, textColor },
    });
    console.log(styles);
  }
  return (
    <div className="container mt-2" style={{ margTop: "150px" }}>
      <div className="row" style={stylesSetting}>
        <h1 className="col-12 mt-5">Settings</h1>
        <div className="form-group">
          <label htmlFor="fontStyle">Font Style</label>
          <select
            id="fontStyle"
            value={fontStyle}
            onChange={(e) => setFontStyle(e.target.value)}
            className="form-control"
          >
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bgColor">Background Color</label>
          <select
            id="bgColor"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="form-control"
          >
            <option value="white">White</option>
            <option value="lightgray">Light Gray</option>
            <option value="lightblue">Light Blue</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="textColor">Text Color</label>
          <select
            id="textColor"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="form-control"
          >
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
          <button onClick={handleSubmit}>Save Change</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
