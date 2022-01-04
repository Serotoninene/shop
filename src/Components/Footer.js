import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="Footer" className="flex-column align-center">
      <h3>
        <Link to="/illustrations"> View All Prints </Link>{" "}
      </h3>{" "}
      <ul className="flex justify-between">
        <li>
          <Link to="/"> Shop </Link>{" "}
        </li>{" "}
        <li>
          <Link to="/"> About </Link>{" "}
        </li>{" "}
        <li>
          <a href="https://www.instagram.com/"> Instagram </a>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
}
