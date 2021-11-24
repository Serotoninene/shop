import React from "react";

export default function Button(props) {
  const { content, linkTo } = props;
  return (
    <div id="Button" className="relative">
      <a href={linkTo}>{content}</a>
    </div>
  );
}
