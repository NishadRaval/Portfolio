import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Sparkles } from '@react-three/drei';

const TechGlobe = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.y = time * 0.15; // Smooth rotation
    });

    return (
        <group>
            {/* Main Wireframe Globe */}
            <Sphere args={[1.5, 64, 64]} ref={meshRef}>
                <meshStandardMaterial
                    color="#4ecdc4"
                    emissive="#4ecdc4"
                    emissiveIntensity={0.5}
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </Sphere>

            {/* Particles Floating Around */}
            <Sparkles count={100} scale={3} size={2} speed={0.4} opacity={0.5} color="#4ecdc4" />
        </group>
    );
};

const Globe = () => {
    return (
        <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
            <Canvas camera={{ position: [0, 0, 4.5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <TechGlobe />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Globe;
