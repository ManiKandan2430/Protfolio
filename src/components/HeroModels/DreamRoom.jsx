
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function DreamRoom(props) {
  const { nodes, materials } = useGLTF('/models/sci-fi_computer_room.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Desk_1} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Posters} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Keyboard} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.speaker_2} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.BG_Dark} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Carpet} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Emission} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Emission_Blue} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Foam_Acoustic} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Foam_Acoustic} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Trim_Sheet_Wall} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Monitor_Single} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/sci-fi_computer_room.glb')
