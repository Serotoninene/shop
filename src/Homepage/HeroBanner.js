import React from "react";

export default function HeroBanner() {
  return (
    <div id="HeroBanner" className="flex-column justify-between relative">
      <div className="exploration flex justify-center">
        <h1>An Exploration</h1>
      </div>
      <div className="illustrationFrame absolute flex justify-center align-center">
        <div className="illustrationEyes"></div>
      </div>
      <div className="color flex justify-center align-end">
        <h1>IN COLOR</h1>
      </div>
    </div>
  );
}
