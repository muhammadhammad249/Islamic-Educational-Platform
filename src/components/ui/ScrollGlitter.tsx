'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ScrollGlitter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles Geometry
    const particlesCount = 5000; // Increased count
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      // Wider range for full-page coverage
      posArray[i] = (Math.random() - 0.5) * 20; 
    }
    for (let i = 0; i < particlesCount; i++) {
      scaleArray[i] = Math.random();
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('aScale', new THREE.BufferAttribute(scaleArray, 1));

    // Custom Shader Material for "Glitter"
    const particlesMaterial = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uSize: { value: 25.0 }, // Larger particles
        uColor: { value: new THREE.Color('#D4AF37') },
        uScroll: { value: 0 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        uniform float uSize;
        uniform float uScroll;
        attribute float aScale;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          
          // Move particles based on scroll with wider range
          modelPosition.y -= uScroll * 2.0; 
          modelPosition.y = mod(modelPosition.y + 10.0, 20.0) - 10.0; 

          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPosition = projectionMatrix * viewPosition;

          gl_Position = projectionPosition;

          // Intense Glitter effect
          float glitter = sin(uTime * 5.0 + aScale * 200.0) * 0.5 + 0.5;
          gl_PointSize = uSize * aScale * uPixelRatio * (glitter + 0.2);
          gl_PointSize *= (1.0 / - viewPosition.z);

          vOpacity = pow(glitter, 2.0) * 0.9; // Sharper glitter
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vOpacity;

        void main() {
          float strength = distance(gl_PointCoord, vec2(0.5));
          strength = 1.0 - strength;
          strength = pow(strength, 8.0); // Softer edges but bright center

          gl_FragColor = vec4(uColor, strength * vOpacity);
        }
      `
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    // Scroll handling
    let currentScroll = 0;
    const handleScroll = () => {
      currentScroll = window.scrollY / window.innerHeight;
    };
    window.addEventListener('scroll', handleScroll);

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      particlesMaterial.uniforms.uTime.value = elapsedTime;
      particlesMaterial.uniforms.uScroll.value = currentScroll;
      
      particlesMesh.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      particlesMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-40 transition-opacity duration-1000"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
