import React from "react";
// Component
import Button from "./Button";

export default function ShowcaseOneIllu(props) {
  const { illustration, illustrationName, illustrationDescription } = props;

  return (
    <div id="ShowcaseOneIllu" className="flex justify-between align-center">
      <div className="illustration">
        <img src={illustration} alt="illustration" className="img-fluid"></img>{" "}
      </div>
      <div className="illustrationPresentation flex-column justify-around align-center">
        <h3>{illustrationName}</h3>
        <p>{illustrationDescription}</p>
        <Button content="Purchase a print" linkTo="#" />
      </div>
    </div>
  );
}
