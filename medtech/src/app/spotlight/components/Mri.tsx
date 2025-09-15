import { useGLTF } from '@react-three/drei'
import React from 'react'
import { ThreeElements } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh
  }
  materials: {
    [key: string]: THREE.Material
  }
}

export function Mri(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/models/mri_machine.glb') as unknown as GLTFResult

  return (
    <group {...props} dispose={null}>
      {Object.keys(nodes).map((key) => {
        const mesh = nodes[key] as THREE.Mesh
        if (!mesh.geometry) return null

        let material: THREE.Material | undefined
        if (!Array.isArray(mesh.material)) {
          const materialName = mesh.material?.name
          material = materials[materialName] || mesh.material
        }
        
        return (
          <mesh
            key={key}
            geometry={mesh.geometry}
            material={material}
            castShadow
            receiveShadow
          />
        )
      })}
    </group>
  )
}

useGLTF.preload('/models/mri_machine.glb')
