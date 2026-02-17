import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles, Float, Sphere, Environment, Lightformer } from '@react-three/drei';

const ThreeScene = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                {/* 
                    Painting the Sphere with Light 
                    Using Lightformers to create the "Smoke/Aurora" reflections from the reference
                */}
                <Environment resolution={512}>
                    <group rotation={[0, 0, 1]}>
                        {/* The Large Blue Swoosh */}
                        <Lightformer
                            form="ring"
                            intensity={2}
                            color="#0040ff"
                            scale={[10, 5]}
                            target={[0, 0, 0]}
                            position={[0, 0, -5]}
                        />
                        {/* The White Highlight Swoosh */}
                        <Lightformer
                            form="ring"
                            intensity={5}
                            color="#ffffff"
                            scale={[10, 5]}
                            target={[0, 0, 0]}
                            position={[0, 5, -8]}
                            rotation={[1, 0, 0]}
                        />
                        {/* Subtle Fill */}
                        <Lightformer intensity={0.5} color="#00ffff" position={[5, 1, -1]} scale={[2, 2]} />
                    </group>
                </Environment>

                <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
                    <group>
                        {/* The Sphere (Matte/Satin Finish) */}
                        <Sphere args={[1.5, 64, 64]}>
                            <meshStandardMaterial
                                color="#080808"
                                roughness={0.4}    /* Satin finish - blurs the reflections */
                                metalness={0.1}    /* Not metallic */
                            />
                        </Sphere>

                        {/* Orbit Line 1 (Thin Blue) */}
                        <mesh rotation={[1, 0.5, 0]}>
                            <torusGeometry args={[1.9, 0.005, 16, 100]} />
                            <meshBasicMaterial color="#00aaff" transparent opacity={0.6} />
                        </mesh>

                        {/* Orbit Line 2 (Thin White) */}
                        <mesh rotation={[-0.5, 1, 0]}>
                            <torusGeometry args={[2.3, 0.005, 16, 100]} />
                            <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
                        </mesh>

                        {/* Orbit Line 3 (Thin Cyan) */}
                        <mesh rotation={[0, 0, 1]}>
                            <torusGeometry args={[1.7, 0.005, 16, 100]} />
                            <meshBasicMaterial color="#00ffff" transparent opacity={0.3} />
                        </mesh>
                    </group>
                </Float>

                {/* Stars - Background Texture */}
                <Sparkles
                    count={200}
                    scale={8}
                    size={2}
                    speed={0.4}
                    opacity={0.4}
                    color="#ffffff"
                />
            </Canvas>
        </div>
    );
};

export default ThreeScene;
