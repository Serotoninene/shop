import React, { useState, useEffect } from "react";
// React Router
import { useParams } from "react-router-dom";
// ProgressiveImage : allows to load a compressed version of an image before the good quality one -> improves performance
import ProgressiveImage from "react-progressive-image";
//  Stripe
import StripeCheckout from "react-stripe-checkout";
// Gsap
import gsap, { Power1, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Components
import Button from "../Components/Button";
// Assets
import { illustrationsData } from "../Utilitaries/Data/illustrationsData";

export default function IllustrationPage(props) {
  gsap.registerPlugin(ScrollTrigger);
  const { id } = useParams();
  let illustrationDisplayed = {};

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

  useEffect(() => {
    // Triggers
    const tl = gsap.timeline({
      defaults: {
        ease: Power3.easeOut,
        duration: 3,
      },
    });
    tl.to(
      ".CTA-container",
      {
        yPercent: -90,
      },
      "<"
    );
    tl.to(
      ".secondaryImg",
      {
        yPercent: -125,
      },
      "<"
    );
    tl.to(
      ".mainImg",
      {
        yPercent: -200,
        ease: Power3.easeOut,
        duration: 5,
      },
      "<"
    );

    ScrollTrigger.create({
      animation: tl,
      trigger: "#App",
      start: "top top",
      end: `bottom+=200vh bottom`,
      id: "illustrationPageAnim",
      snap: 1,
      // pin: true,
      scrub: true,
      pinSpacing: false,
    });
  }, []);

  const makePayment = (token) => {
    const body = {
      token: token,
      product: product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`http://localhost:8282/payment`, {
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
      <div className="frameContainer flex justify-end">
        <ProgressiveImage
          src={illustrationDisplayed.mockUp}
          placeholder={illustrationDisplayed.compressedMockUp}
        >
          {(src) => (
            <img
              src={src}
              alt="the illustration shown in a frame"
              className="img-fluid"
            />
          )}{" "}
        </ProgressiveImage>{" "}
      </div>{" "}
      <div className="absolute CTA-container flex-column">
        <h2> Regard Brulant - A4 </h2>{" "}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus
          purus tellus, cursus ut feugiat vel, convallis in nisl.Aenean lacinia
          justo metus.Quisque ut aliquam sem.{" "}
        </p>{" "}
        <StripeCheckout
          stripeKey={process.env.REACT_APP_KEY}
          token={makePayment}
          name="Buy Product"
          amount={product.price * 100}
          shippingAddress
          billingAddress
        >
          <Button content="Purchase a print" />
        </StripeCheckout>{" "}
      </div>{" "}
      <div className="mainImg img absolute">
        <ProgressiveImage
          src={illustrationDisplayed.img}
          placeholder={illustrationDisplayed.compressedImg}
        >
          {(src) => (
            <img
              src={src}
              alt="amazing illustration of a girl with an eyepatch"
              className="img-fluid"
            />
          )}{" "}
        </ProgressiveImage>{" "}
      </div>{" "}
      <div className="secondaryImg img absolute">
        <img
          src={illustrationDisplayed.img}
          alt="amazing illustration of a girl with an eyepatch"
          className="img-fluid"
        />
      </div>{" "}
    </div>
  );
}
