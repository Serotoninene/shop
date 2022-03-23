import { useRef } from "react";
// R3F
import { Canvas } from "@react-three/fiber";
//Components
import { Section, useSection } from "../3DElements/Section";
import { Html } from "@react-three/drei";
// Assets
import { illustrationsData } from "../Utilitaries/Data/illustrationsData";
// State
import state from "../3DElements/state";

const aspect = 1.75;
const size = 1;

const Content = ({ children, factor, offset, domContent, left }) => {
  const {
    contentMaxWidth: w,
    canvasWidth,
    margin,
    canvasHeight,
  } = useSection();
  const alignRight = (canvasWidth - w - margin) / 1.2;

  return (
    <Section factor={factor} offset={offset}>
      <mesh
        scale={[(w * size) / aspect, canvasHeight / 1.2, 1]}
        args={[1, 1, 32, 32]}
        position={[alignRight * (left ? -1 : 1), 0, 0]}
      >
        <planeBufferGeometry />
        <meshBasicMaterial />
      </mesh>
      <Html fullscreen portal={domContent}>
        {children}
      </Html>
    </Section>
  );
};

export default function Test_3DHomepage() {
  const scrollArea = useRef();
  const domContent = useRef();

  const onScroll = (e) => (state.top.current = e.target.scrollTop);

  const illustrationsDisplayed = [];

  illustrationsData.forEach((illu) => {
    if (
      illu.id === Number(1) ||
      illu.id === Number(2) ||
      illu.id === Number(3)
    ) {
      illustrationsDisplayed.push(illu);
    }
  });

  return (
    <>
      <div id="Test2">
        <Canvas orthographic camera={{ position: [0, 0, 12], fov: 70 }}>
          {illustrationsData.map((illu, idx) => (
            <Content
              illustrationData={illu}
              left
              domContent={domContent}
              factor={1}
              offset={idx}
            >
              <div className="section flex justify-center align-center">
                {illu.title}
              </div>
            </Content>
          ))}
          {/* <Content left domContent={domContent} factor={1} offset={0}>
            <div className="border section flex justify-center align-center">
              Hello
            </div>
          </Content>
          <Content domContent={domContent} factor={1} offset={1}>
            <div className="section flex justify-center align-center border">
              Pres
            </div>
          </Content> */}
        </Canvas>
        <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
          <div style={{ position: "sticky", top: 0 }} ref={domContent} />
          <div style={{ height: `${state.pages * 100}vh` }} />
        </div>
      </div>
    </>
  );
}
