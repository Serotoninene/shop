import React, { useState, useRef, useLayoutEffect } from "react";
// Wouter
import { useRoute } from "wouter";
//  Stripe
import StripeCheckout from "react-stripe-checkout";
// Gsap
import gsap, { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Components
import Button from "../Components/Button";
// Assets
import { illustrationsData } from "../Utilitaries/Data/illustrationsData";
import arrow from "../Assets/Icons/arrow.svg";

export default function IllustrationPage(props) {
  gsap.registerPlugin(ScrollTrigger);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [match, params] = useRoute("/illustrations/:id");
  const id = params.id;
  const CTAContainerRef = useRef();
  const mainImgRef = useRef();
  const secondaryImgRef = useRef();
  const arrowRef = useRef();

  let illustrationDisplayed = {};

  // Picks up the correct illustration to be displayed
  illustrationsData.forEach((illu) => {
    if (illu.id === Number(id)) {
      illustrationDisplayed = illu;
    }
  });
  const product = {
    name: illustrationDisplayed.title,
    price: illustrationDisplayed.price,
    productBy: "Serotoninene",
  };

  // Main animations
  useLayoutEffect(() => {
    // Timelines
    const mainTl = gsap.timeline(
      {
        defaults: {
          ease: Power1.easeOut,
        },
        scrollTrigger: {
          trigger: "#IllustrationPage",
          start: "top top",
          end: `bottom bottom`,
          id: "illustrationPageAnim",
          snap: 1 / 2,
          pin: true,
          scrub: true,
          pinSpacing: false,
        },
      },
      []
    );

    // Scrolltriggered animation - main one
    // first move
    mainTl.to(CTAContainerRef.current, {
      yPercent: -90,
    });
    mainTl.to(
      mainImgRef.current,
      {
        yPercent: -100,
      },
      "<"
    );
    mainTl.to(
      secondaryImgRef.current,
      {
        yPercent: -40,
      },
      "<"
    );
    mainTl.to(
      arrowRef.current,
      {
        yPercent: -300,
      },
      "<"
    );
    // second move
    mainTl.to(
      mainImgRef.current,
      {
        yPercent: -200,
      },
      ">1"
    );
    mainTl.to(
      secondaryImgRef.current,
      {
        yPercent: -125,
      },
      "<"
    );
    mainTl.to(
      arrowRef.current,
      {
        yPercent: -1000,
      },
      "<"
    );

    return () => {
      ScrollTrigger.getAll().forEach((ST) => ST.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  // Linking with the back end
  const makePayment = (token) => {
    const body = {
      token: token,
      product: product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`https://serotonineneshop.herokuapp.com/payment`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE : ", response);
        const { status } = response;
        console.log("STATUS : ", status);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="IllustrationPage" className="relative">
      <div
        className={`frameContainer flex justify-end relative ${
          backgroundLoaded ? "" : "transparent"
        }`}
        style={{
          backgroundImage: `url(${illustrationDisplayed.compressedMockUp})`,
        }}
        onLoad={() => {
          setBackgroundLoaded(true);
        }}
      >
        <div
          ref={arrowRef}
          className="arrow absolute flex justify-center align-center"
        >
          <img src={arrow} alt="arrow down"></img>
        </div>
      </div>
      <div ref={CTAContainerRef} className="absolute CTA-container flex-column">
        <h2> {product.name} - A4 </h2>
        <p>
          Printed with high quality ink on 200g paper. Pieces numbered and
          signed by hand.
        </p>
        <p>Limited edition (20 illustrations)</p>
        <StripeCheckout
          stripeKey={process.env.REACT_APP_KEY}
          token={makePayment}
          name="Buy Product"
          amount={product.price * 100}
          shippingAddress
          billingAddress
        >
          <Button content="Purchase a print" />
        </StripeCheckout>
      </div>

      <div ref={mainImgRef} className="mainImg img absolute">
        <img
          src={illustrationDisplayed.img}
          data-src="https://s-media-cache-ak0.pinimg.com/474x/50/1b/74/501b74902935b063816ea8e14f460ca0.jpg"
          alt="amazing illustration of a girl with an eyepatch"
          className="img-fluid"
        />
      </div>
      <div ref={secondaryImgRef} className="secondaryImg img absolute">
        <img
          src={illustrationDisplayed.img}
          alt="amazing illustration of a girl with an eyepatch"
          className="img-fluid"
        />
      </div>
    </div>
  );
}
