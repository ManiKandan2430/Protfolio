import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Computer } from "./Computer-optimized";

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 3, 7], fov: 45 }} shadows>
      {/* Soft ambient light to brighten the whole scene */}
      <ambientLight intensity={4.8} />

      {/* Directional light for sunlight effect */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={8.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* SpotLight for dramatic highlights and shadows */}
      <spotLight
        position={[-5, 10, 5]}
        angle={0.25}
        penumbra={0.5}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Model */}
      <group scale={0.03} position={[0, -1.5, -2]} castShadow>
        <Computer />
      </group>
      <group scale={[1,1,1]}>
        <mesh receiveShadow position={[0,-1.5,0]} rotation={[-Math.PI / 2,0,0]}>
        <planeGeometry args={[30,30]}/>
        <meshStandardMaterial color='#a46b2d'/>
        </mesh>
      </group>
    </Canvas>
  );
};

export default ContactExperience;
