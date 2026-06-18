"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Glasses({ model }: { model: string }) {
  const gltf = useGLTF(model);

  return <primitive object={gltf.scene} scale={0.1} />;
}

function ViewerContent() {
  const searchParams = useSearchParams();

  const model =
    searchParams.get("model") || "/models/lunette1.glb";

  return (
    <main className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} />

        <Glasses model={model} />

        <OrbitControls />
      </Canvas>
    </main>
  );
}

export default function ViewerPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <ViewerContent />
    </Suspense>
  );
}