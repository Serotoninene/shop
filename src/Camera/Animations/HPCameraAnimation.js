import { useEffect } from "react";
// React Three Fiber
import { useFrame, useThree } from "@react-three/fiber";
// Gsap
import gsap, { Power3 } from "gsap";
// Utils
import lerp from "../../Utilitaries/Tools/lerp";

export default function HPCameraAnimation() {
  const { camera } = useThree();

  useFrame((state) => {
    // I save the coordinates of the mouse to use in my parralax
    let mouseX = state.mouse.x;
    let mouseY = state.mouse.y;

    camera.position.x = lerp(camera.position.x, 27 + mouseX, 0.05);
    camera.position.y = lerp(camera.position.y, -14 + mouseY, 0.05);
  });

  // Animating the camera on load
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(camera.position, {
      x: 27,
      y: -14,
      z: 19.65461440193874,
      duration: 2,
      ease: Power3.easeOut,
      delay: 2,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return null;
}
