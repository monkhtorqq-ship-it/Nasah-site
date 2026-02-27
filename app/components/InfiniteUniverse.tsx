"use client";
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function DeepSpaceScene() {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  const [map, normal, spec, clouds, night] = useTexture([
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.png',
  ]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (earthRef.current) earthRef.current.rotation.y = t * 0.1; 
    if (cloudsRef.current) cloudsRef.current.rotation.y = t * 0.12;
  });

  return (
    <group ref={groupRef}>
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={10} color="#ffffff" />
      <directionalLight position={[-5, 5, 5]} intensity={2} />
      
      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial 
          map={map} 
          normalMap={normal} 
          specularMap={spec} 
          emissiveMap={night}
          emissive={new THREE.Color("#ffffaa")}
          emissiveIntensity={0.5}
          shininess={5} 
        />
      </mesh>

      <mesh ref={cloudsRef} scale={[1.01, 1.01, 1.01]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial map={clouds} transparent opacity={0.3} depthWrite={false} />
      </mesh>

      <Sparkles count={500} scale={20} size={1} speed={0.1} />
    </group>
  );
}

export default function InfiniteUniverse() {
  return (
    <div className="w-full h-full bg-black">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }} 
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          <DeepSpaceScene />
          <OrbitControls 
            enableZoom={true} 
            minDistance={3} 
            maxDistance={20}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}