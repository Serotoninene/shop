import React, { useState } from "react";

export default function Button(props) {
  const { content, linkTo } = props;
  const [hovered, setHovered] = useState(true);

  return (
    <div id="Button" className="relative flex justify-center">
      <a href={linkTo}> {content} </a>{" "}
    </div>
  );
}
