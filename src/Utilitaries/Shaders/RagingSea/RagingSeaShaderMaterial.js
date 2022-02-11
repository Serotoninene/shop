// ThreeJs
import * as THREE from "three";
// React Three Fiber
import {
  extend
} from "@react-three/fiber";
import {
  shaderMaterial
} from "@react-three/drei";
import glsl from "glslify";

const RagingSeaShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
  },
  // Vertex Shader
  glsl `
  varying vec2 vUv;

  void main(){
   vec4 modelPosition = modelMatrix * vec4(position, 1.0);
   vec4 viewPosition = viewMatrix * modelPosition;
   vec4 projectedPosition = projectionMatrix * viewPosition;

   vUv = uv;

   gl_Position = projectedPosition;
  }
  `,
  // Fragment Shader
  glsl `
  precision mediump float;
  varying vec2 vUv;
                                                                                  
 

  void main(){
    float leftSide = vUv.y;
    vec4 shadow = vec4(vec3(leftSide), 1.0);
    vec4 color = vec4(0.0,0.4,1.0,1.0);
	  gl_FragColor = shadow * color;
  }
  `
);
extend({
  RagingSeaShaderMaterial
})

export default RagingSeaShaderMaterial