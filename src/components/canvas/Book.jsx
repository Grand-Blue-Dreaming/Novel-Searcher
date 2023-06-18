import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Book = () => 
{
  const book = useGLTF('./book/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.4}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={book.scene}
        scale={7.5}
        position={[0, 1.5, 0]}
        rotation={[0, 0, -0.25]}
      />
    </mesh>
  )
}

const BookCanvas = () =>
{
  return(
    <Canvas frameloop='demand' shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}  
    >
      <Suspense>
        <OrbitControls enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Book />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BookCanvas