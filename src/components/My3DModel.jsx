import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

export function My3DModel() {
  const { scene } = useGLTF("/public/guts.glb");
  return <primitive object={scene} scale={1} position={[0, -1.5, 0]} />;
}
export default function ModelViewer() {
  return (
    <div
      style={{
        width: "100%px",
        height: "400px",
      }}
    >
      <div className="model-wrapper">
        <Canvas camera={{ position: [0, 1, 8], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Suspense fallback={null}>
            <My3DModel position={[0, -0.5, 0]} />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}
