import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { NeonCurvesGenerator, CurveObject } from '@/components/animations/curves';
import { ParticleSystem } from '@/components/animations/ParticleSistem';

const NeonDrawingEffect = ({ activePage }: { activePage: string }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#111207'); // Change the background color here

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 14;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    // Establecer el estilo del canvas
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.pointerEvents = 'none';
    // Curves setup
    const curvesGenerator = new NeonCurvesGenerator();
    const curves = curvesGenerator.generateCurves();
    curves.forEach(curve => scene.add(curve.mesh));

    // Particles setup
    const particleSystem = new ParticleSystem(scene, 25);
    particleSystem.spawnInitialParticles(25, new THREE.Vector3(0, 0, 0));
    particleSystemRef.current = particleSystem;

    // Post-processing setup
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 1.6;
    bloomPass.radius = 0;
    composer.addPass(bloomPass);

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation
    let startTime = Date.now();
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const globalProgress = Math.min(elapsed / 8000, 1.1) * 5;

      curves.forEach((curve, i) => {
        curve.material.uniforms.progress.value = Math.max(
          Math.min(globalProgress - i * 0.03, 1.1),
          0
        );
        curve.material.uniforms.time.value = elapsed * 0.001;
      });

      particleSystem.update(0.016);
      composer.render();
      requestAnimationFrame(animate);
    };

    animate();

    if (activePage === '/particulas') {
      const mouse = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();

      const onClick = (event: MouseEvent): void => {
        // Calculate normalized coordinates
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the raycaster
        raycaster.setFromCamera(mouse, camera);

        // Calculate a point in 3D space
        const position = new THREE.Vector3();
        raycaster.ray.at(5, position);

        particleSystem.createParticle(position, undefined, true);
      };

      window.addEventListener('click', onClick);

      // Cleanup click event listener
      return () => {
        window.removeEventListener('click', onClick);
      };
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      composer.dispose();
      curves.forEach(curve => {
        curve.mesh.geometry.dispose();
        curve.material.dispose();
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [activePage]); // Add activePage to the dependency array

  return (
    <div 
      ref={containerRef}
     
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
       zIndex:-10,
      }}
    />
  );
};

export default NeonDrawingEffect;