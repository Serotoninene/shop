import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
// gsap
import gsap, { Power3 } from "gsap";
// Assets
import blaspheme from "../Assets/Images/blaspheme.jpg";

export default function Menu(props) {
  const { open, setOpen } = props;
  const firstSliderRef = useRef();
  const menuRef = useRef();
  const illustrationLinkRef = useRef();
  const aboutLinkRef = useRef();
  const instagramLinkRef = useRef();
  const illustrationRef = useRef();

  useEffect(() => {
    const contentRefs = [
      illustrationLinkRef.current,
      aboutLinkRef.current,
      instagramLinkRef.current,
      illustrationRef.current,
    ];
    const slidersRefs = [firstSliderRef.current, menuRef.current];
    const tl = gsap.timeline();

    if (open) {
      tl.to(slidersRefs, {
        xPercent: -100,
        stagger: 0.2,
      });
      tl.to(contentRefs, {
        yPercent: -100,
        ease: Power3.easeOut,
        stagger: 0.1,
      });
    } else {
      tl.to(contentRefs, {
        yPercent: 100,
        ease: Power3.easeIn,
        stagger: 0.1,
      });
      tl.to(menuRef.current, {
        xPercent: 0,
      });
      tl.to(
        firstSliderRef.current,
        {
          xPercent: 0,
        },
        ">-=0.02"
      );
    }
  }, [open]);

  return (
    <div id="Menu" className="">
      <div className="firstSlider absolute" ref={firstSliderRef}></div>
      <div className="menu absolute flex-column justify-between" ref={menuRef}>
        <Link
          href="/"
          onClick={() => {
            setOpen(false);
          }}
        >
          <div className="hidden link">
            <span ref={illustrationLinkRef}>1/ Homepage</span>
          </div>
        </Link>
        <Link
          href="/illustrations"
          onClick={() => {
            setOpen(false);
          }}
        >
          <div className="hidden link">
            <span ref={aboutLinkRef}>2/ Illustrations</span>
          </div>
        </Link>
        <Link
          href="/illustrations/2"
          onClick={() => {
            setOpen(false);
          }}
        >
          <div className="hidden link">
            <span ref={instagramLinkRef}>3/ Instagram</span>
          </div>
        </Link>

        <div className="pictureContainer absolute hidden">
          <img
            ref={illustrationRef}
            src={blaspheme}
            alt="illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
