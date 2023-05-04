import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb"); // import a 3d model

  //create texture
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecall);

  return <div>Shirt</div>;
};

export default Shirt;
