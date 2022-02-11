import React from "react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <div id="Footer" className="flex-column align-center">
      <h3>
        <Link href="/illustrations"> View All Prints </Link>{" "}
      </h3>{" "}
      <ul className="flex justify-between">
        <li>
          <Link href="/"> Shop </Link>{" "}
        </li>{" "}
        <li>
          <Link href="/"> About </Link>{" "}
        </li>{" "}
        <li>
          <a href="https://www.instagram.com/"> Instagram </a>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
}
