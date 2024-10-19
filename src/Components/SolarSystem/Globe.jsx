import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Sub-component to handle Earth rotation and texture
const RotatingGlobe = () => {
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.009; // Earth's rotation speed
    }
  });

  return (
    <mesh ref={earthRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        map={new THREE.TextureLoader().load(
          'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/land_ocean_ice_cloud_2048.jpg'
        )}
      />
    </mesh>
  );
};

// Sub-component to handle Moon rotation and texture
const Moon = () => {
  const moonRef = useRef();

  // For simulating moon's orbit
  useFrame(({ clock }) => {
    if (moonRef.current) {
      const t = clock.getElapsedTime() * 0.9; // Moon's orbit speed
      moonRef.current.position.x = 5 * Math.sin(t); // Moon's orbit radius
      moonRef.current.position.z = 5 * Math.cos(t);
    }
  });

  return (
    <mesh ref={moonRef} position={[5, 0, -20]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        map={new THREE.TextureLoader().load(
          "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/moon_1024.jpg"
           // Reliable moon texture
        )}
      />
    </mesh>
  );
};

const GlobeWithMoon = () => {
  return (
    <Canvas>
      {/* Ambient and directional lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={1} />

      {/* Background stars */}
      <Stars />

      {/* Rotating Earth */}
      <RotatingGlobe />

      {/* Rotating Moon */}
      <Moon />

      {/* Orbit controls */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default GlobeWithMoon;
