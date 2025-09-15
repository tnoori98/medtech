"use client"

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Mri } from './Mri'

export default function MriPage() {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [1.5, 1.5, 2], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Environment preset="city" />
        <Mri scale={0.5} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}