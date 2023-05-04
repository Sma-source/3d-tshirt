import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <canvas>
      Canvas
      <ambientLight intensity={0.5} />
    </canvas>
  );
};

export default CanvasModel;
