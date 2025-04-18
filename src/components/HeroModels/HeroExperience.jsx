import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { DreamRoom } from "./DreamRoom";
import Particles from "./Particles";
import {
  EffectComposer,
  BrightnessContrast,
} from "@react-three/postprocessing";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width : 1440px)" });
  const isMobile = useMediaQuery({ query: "(max-width : 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      {/* Lights */}
      <ambientLight intensity={5} color="cyan" />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Particles count={100} />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[4, -0.5, -1]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <DreamRoom />
      </group>

      <EffectComposer>
        <BrightnessContrast brightness={0.1} contrast={0.5} />
      </EffectComposer>
    </Canvas>
  );
};

export default HeroExperience;
