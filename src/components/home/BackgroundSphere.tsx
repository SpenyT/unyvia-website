import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import "../../styles/componentStyles/hero.css";

function createParticleTexture() {
    const size = 256; // Better resolution and softer gradient
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext('2d')!;
    const gradient = context.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');    // center
    gradient.addColorStop(0.2, 'rgba(255,255,255,0.6)');
    gradient.addColorStop(0.4, 'rgba(255,255,255,0.2)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0)');  // fade out earlier

    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}

export default function BackgroundSphere() {
    const animationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!animationRef.current) return;
    
        const container = animationRef.current;
    
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
    
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
    
        // Parameters
        const particleCount = 500;
        const radius = 60;
    
        // Geometry setup using Fibonacci sphere
        const particlesGeometry = new THREE.BufferGeometry();
        const originalPositions = new Float32Array(particleCount * 3);
        const positions = new Float32Array(particleCount * 3); // animated positions
        const randomOffsets = new Float32Array(particleCount);
    
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        for (let i = 0; i < particleCount; i++) {
            const theta = 2 * Math.PI * i / goldenRatio;
            const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
    
            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);
    
            originalPositions[i * 3] = x;
            originalPositions[i * 3 + 1] = y;
            originalPositions[i * 3 + 2] = z;
    
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
    
            randomOffsets[i] = Math.random() * Math.PI * 2;
        }
    
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x45972f,
            size: 4,
            transparent: true,
            opacity: 1,
            map: createParticleTexture(),
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        });

        const particleSystem = new THREE.Points(particlesGeometry, particleMaterial);
        const sphereGroup = new THREE.Object3D();
        sphereGroup.add(particleSystem);
        particleSystem.rotation.z = THREE.MathUtils.degToRad(23.5);
        scene.add(sphereGroup);
    
        camera.position.z = 200;
        // camera.position.x = -125;
        // camera.position.y = 100;
    
        const clock = new THREE.Clock();
    
        const animate = () => {
            requestAnimationFrame(animate);
        
            const elapsedTime = clock.getElapsedTime();
            
            for (let i = 0; i < particleCount; i++) {
                const idx = i * 3;
        
                const baseX = originalPositions[idx];
                const baseY = originalPositions[idx + 1];
                const baseZ = originalPositions[idx + 2];
        
                const baseDistance = radius;
                const offset = 2.5 * Math.sin(elapsedTime + randomOffsets[i]);
                const scale = (baseDistance + offset) / baseDistance;
        
                positions[idx] = baseX * scale;
                positions[idx + 1] = baseY * scale;
                positions[idx + 2] = baseZ * scale;
            }
        
            particlesGeometry.attributes.position.needsUpdate = true;
        
            // Rotate around true north-south axis correctly
            sphereGroup.rotation.y += 0.001;
        
            renderer.render(scene, camera);
        };
        animate();
    
        const handleResize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
    
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(container);
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            particlesGeometry.dispose();
            particleMaterial.dispose();
        };
    }, []);
    


    return (
        <div className="background-sphere-container" ref={animationRef}>
            
        </div>
    );
}