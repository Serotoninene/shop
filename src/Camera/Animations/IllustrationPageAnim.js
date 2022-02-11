import {
  useEffect
} from "react";
// React Three Fiber
import {
  useFrame,
  useThree
} from "@react-three/fiber";
// Gsap
import gsap, {
  Power3
} from "gsap";
// Utils
import lerp from "../../Utilitaries/Tools/lerp";

export default function IllustrationPageAnim() {
  const {
    camera
  } = useThree();

  useFrame((state) => {
    // I save the coordinates of the mouse to use in my parralax
    let mouseX = state.mouse.x;
    let mouseY = state.mouse.y;
    let amp = 3;


    camera.lookAt(lerp(camera.position.x, mouseX * amp, 0.05), lerp(camera.position.y, mouseY * amp, 0.05), 0)

    camera.position.x = lerp(camera.position.x, mouseX, 0.1);
    camera.position.y = lerp(camera.position.y, mouseY, 0.1);
  });

  // // Animating the camera on load
  // useEffect(() => {
  //   let tl = gsap.timeline();
  //   tl.to(camera.position, {
  //     x: 27,
  //     y: -14,
  //     z: 19.65461440193874,
  //     duration: 2,
  //     ease: Power3.easeOut,
  //     delay: 2,
  //   });

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  return null;
}