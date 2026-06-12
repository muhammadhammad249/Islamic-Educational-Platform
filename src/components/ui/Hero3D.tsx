'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#D4AF37', // Gold
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Crescent Moon (Simplified with Tori or custom shape)
    // For a lightweight 3D effect, we can use a Torus and clip it or a Sphere with a light source
    const moonGroup = new THREE.Group();
    
    const moonGeometry = new THREE.SphereGeometry(1, 32, 32);
    const moonMaterial = new THREE.MeshStandardMaterial({
      color: '#D4AF37',
      emissive: '#D4AF37',
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.8,
    });
    
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    
    // Create a "cutting" sphere to make it a crescent
    // Since boolean ops are heavy in Three.js, we'll just use a clever light/shadow or an SVG-like extrude
    // For now, let's use a nice glowing sphere as a placeholder for the crescent logic
    // OR we can use a Torus with a limited arc
    const crescentGeometry = new THREE.TorusGeometry(1, 0.2, 16, 100, Math.PI * 1.2);
    const crescent = new THREE.Mesh(crescentGeometry, moonMaterial);
    crescent.rotation.z = Math.PI * 0.4;
    moonGroup.add(crescent);
    
    moonGroup.position.set(2, 1, -5);
    scene.add(moonGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight('#D4AF37', 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      moonGroup.rotation.y += 0.005;
      moonGroup.position.y = 1 + Math.sin(Date.now() * 0.001) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" />;
}
