import React, { useEffect, useRef, useState } from "react";
import { Noise } from "noisejs";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const BackgroundParticles = () => {
  const mountRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const maxDis = 50;

    const scene = new THREE.Scene();
    const noise = new Noise(Math.random());

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-10, 20, 30);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const pointLight = new THREE.PointLight(0xffffff, 1000);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;

    let particles = [];

    for (let x = -maxDis; x < maxDis; x += 1) {
      const row = [];
      for (let z = -maxDis; z < maxDis; z += 1) {
        const geometry = new THREE.SphereGeometry(0.04, 12, 12);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const particle = new THREE.Mesh(geometry, material);
        particle.position.set(x, 0, z);
        scene.add(particle);
        row.push(particle);
      }
      particles.push(row);
    }

    let frame = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      particles.forEach((row) => {
        row.forEach((p) => {
          p.position.y =
            Math.sin(
              Math.sqrt(
                (p.position.x + maxDis) ** 2 + (p.position.z + maxDis) ** 2
              ) /
                3 +
                frame
            ) * 2;
        });
      });

      frame += 0.02;

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true); // Trigger loader off

    // Handle resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      controls.dispose();
      if (
        renderer.domElement &&
        mountRef.current?.contains(renderer.domElement)
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      {!isLoaded && (
        <div className="flex items-center justify-center bg-black">
          <span className="text-white text-xl animate-pulse">Loading...</span>
        </div>
      )}
      <div
        ref={mountRef}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
    </>
  );
};

export default BackgroundParticles;
