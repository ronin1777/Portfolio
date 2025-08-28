import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { DRACOLoader } from "three-stdlib";

// یک loader مشترک برای DRACO بساز
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/"); // مسیر public/draco/

export function My3DModel() {
  // useGLTF با loader مخصوص DRACO
  const { scene } = useGLTF("/guts-draco.glb", true, dracoLoader);
  return <primitive object={scene} scale={1} position={[0, -1.5, 0]} />;
}

export default function ModelViewer() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <div className="model-wrapper">
        <Canvas camera={{ position: [0, 1, 8], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Suspense fallback={null}>
            <My3DModel />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}
