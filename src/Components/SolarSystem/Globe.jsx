import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Sub-component to handle Earth and Moon's group
const EarthWithMoon = () => {
  const earthRef = useRef();
  const moonRef = useRef();

  // Rotate the Earth
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.009; // Earth's rotation speed
    }
  });

  // Rotate the Moon around the Earth
  useFrame(({ clock }) => {
    if (moonRef.current) {
      const t = clock.getElapsedTime() * 0.5; // Moon's orbit speed
      const orbitRadius = 5; // Distance of the Moon from the Earth
      moonRef.current.position.x = orbitRadius * Math.sin(t); // Moon's orbit radius on the X-axis
      moonRef.current.position.z = orbitRadius * Math.cos(t); // Moon's orbit radius on the Z-axis
    }
  });

  return (
    <group>
      {/* Earth */}
      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(
            'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/land_ocean_ice_cloud_2048.jpg'
          )}
        />
      </mesh>

      {/* Moon (Orbiting around the Earth) */}
      <mesh ref={moonRef} position={[5, 0, 0]}> {/* Initially placed at some distance from Earth */}
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(
            "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/moon_1024.jpg"
          )}
        />
      </mesh>
    </group>
  );
};

const GlobeWithMoon = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      {/* Ambient and directional lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={1} />

      {/* Background stars */}
      <Stars />

      {/* Earth with Moon in Orbit */}
      <EarthWithMoon />

      {/* Orbit controls */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default GlobeWithMoon;
