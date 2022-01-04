import React from "react";

export default function Button(props) {
  const { content, linkTo } = props;
  return (
    <div id="Button" className="relative flex justify-center">
      <a href={linkTo}> {content} </a>{" "}
    </div>
  );
}
