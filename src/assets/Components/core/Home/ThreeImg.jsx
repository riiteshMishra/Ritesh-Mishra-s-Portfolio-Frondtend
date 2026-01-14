import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

const ImagePlane = () => {
  const meshRef = useRef();
  const materialRef = useRef();
  const texture = useTexture("/ritesh_mishra.jpeg");
  const [hovered, setHovered] = useState(false);

  useFrame(({ mouse, clock }) => {
    if (!meshRef.current) return;

    const t = clock.elapsedTime;

    // 🌊 Floating
    meshRef.current.position.y = Math.sin(t) * 0.18;

    // 🖱️ Mouse tilt (cinematic)
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouse.x * 0.6,
      0.08
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouse.y * 0.4,
      0.08
    );

    // 🧬 Distortion wave
    if (materialRef.current) {
      materialRef.current.displacementScale = hovered ? 0.25 : 0.15;
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={[3, 4.2, 1]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <planeGeometry args={[1, 1, 64, 64]} />

      {/* 🧊 Glass + distortion */}
      <meshPhysicalMaterial
        ref={materialRef}
        map={texture}
        displacementMap={texture}
        displacementScale={0.15}
        roughness={0.3}
        metalness={0
        }
        clearcoat={0.8}
        clearcoatRoughness={0.15}
        envMapIntensity={0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const ThreeImage = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 38 }}
      style={{ width: "340px", height: "460px" }}
    >
      {/* 🌈 Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 5]} intensity={1.2} />
      <pointLight position={[-4, -3, 3]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[3, -3, 3]} intensity={0.6} color="#22d3ee" />

      {/* 🔥 Rim light glow */}
      <mesh position={[0, 0, -0.2]}>
        <planeGeometry args={[3.2, 4.4]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.08} />
      </mesh>

      <ImagePlane />
    </Canvas>
  );
};

export default ThreeImage;
