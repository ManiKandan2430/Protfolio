import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import {
  EffectComposer,
  BrightnessContrast,
} from "@react-three/postprocessing";
import Particles from "./Particles";
import { HeroGaming } from "./HeroGaming";
import Loader from "../Loader";

const RotatingGroup = ({ isMobile }) => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <group
      ref={ref}
      scale={isMobile ? 0.7 : 0.7}
      position={[isMobile ? 0.5: 3, -1.5, -1]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <HeroGaming />
    </group>
  );
};

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1440px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {!isMobile && <Particles count={100} />}

      <Suspense fallback={<Loader />}>
        <RotatingGroup isMobile={isMobile} />
      </Suspense>
      <EffectComposer>
        <BrightnessContrast brightness={0.1} contrast={0.4} />
      </EffectComposer>
    </Canvas>
  );
};

export default HeroExperience;
