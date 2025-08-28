import { OrbitControls, useGLTF, Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { DRACOLoader } from "three-stdlib";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");

function My3DModel() {
  const { scene } = useGLTF("/guts-draco.glb", true, dracoLoader);
  return <primitive object={scene} scale={1} position={[0, -1.5, 0]} />;
}

function ModelLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "1.2rem",
          background: "rgba(0,0,0,0.6)",
          padding: "1rem 2rem",
          borderRadius: "12px",
        }}
      >
        <div
          className="spinner"
          style={{
            border: "4px solid rgba(255,255,255,0.3)",
            borderTop: "4px solid #fff",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            marginBottom: "0.5rem",
            animation: "spin 1s linear infinite",
          }}
        />
        <div>{progress.toFixed(0)}%</div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Html>
  );
}

export default function ModelViewer() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas camera={{ position: [0, 1, 8], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={<ModelLoader />}>
          <My3DModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
