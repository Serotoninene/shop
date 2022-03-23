import React, { useRef } from "react";
import useMousePosition from "../Utilitaries/Hooks/useMousePosition";

export default function Cursor() {
  let cursorRef = useRef();
  const { x, y } = useMousePosition();
  console.log(x);

  return (
    <div
      id="Cursor"
      style={{
        transform: `translate3d(${x - 20}px, ${y - 20}px, 0)`,
        // top: `${y - 20}px`,
        // left: `${x - 20}px`,
      }}
    ></div>
  );
}
