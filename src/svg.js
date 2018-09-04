import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox="0 0 24 24"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`${className || ""}`}
    xmlnsXlink="http://www.w3.org/2000/svg"
  >
    <path fill={fill} d="M12 23.8C5.5 23.8.2 18.5.2 12 .2 5.5 5.5.2 12 .2 18.5.2 23.8 5.5 23.8 12c0 6.5-5.3 11.8-11.8 11.8zm0-22C6.3 1.8 1.8 6.3 1.8 12c0 5.7 4.6 10.2 10.2 10.2 5.7 0 10.2-4.6 10.2-10.2 0-5.7-4.5-10.2-10.2-10.2z"/>
    <path fill={fill} d="M11 6h2v8h-2zm0 10h2v2h-2z"/>
  </svg>
);

export default SVG;
