import React from "react";
import { Link, useLocation } from "wouter";

export default function Button(props) {
  const { content, linkTo } = props;
  const [location, setLocation] = useLocation();
  const redirect = () => {
    linkTo && setLocation(linkTo);
  };

  return (
    <div
      id="Button"
      className="relative flex justify-center"
      onClick={() => {
        redirect();
      }}
    >
      <Link href={`/illustrations`}> {content} </Link>
    </div>
  );
}
