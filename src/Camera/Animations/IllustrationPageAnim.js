// React Three Fiber
import {
  useFrame,
  useThree
} from "@react-three/fiber";
// Utils
import lerping from "../../Utilitaries/Tools/lerping";

export default function IllustrationPageAnim() {

  const {
    camera,
    viewport
  } = useThree();


  useFrame(({
    mouse
  }) => {
    // I save the coordinates of the mouse to use in my parralax
    let mouseX = mouse.x;
    let mouseY = mouse.y;

    camera.lookAt(lerping(camera.position.x, (mouse.x * viewport.width) / 2, 0.1), lerping(camera.position.y, (mouse.y * viewport.height) / 2, 0.05), 0);
    camera.position.x = lerping(camera.position.x, mouseX, 0.1);
    camera.position.y = lerping(camera.position.y, mouseY, 0.05);
  });
  return null;
}