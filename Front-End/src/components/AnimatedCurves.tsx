import { join } from 'path';
import React, { useEffect, useRef } from 'react';
import { createNoise2D } from 'simplex-noise';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

interface CurveObject {
    mesh: THREE.Mesh;
    material: THREE.ShaderMaterial;
}

const NeonDrawingEffect = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0c0a09');
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const curves: CurveObject[] = [];
    const numCurves = 5; // Increased for more contour layers

    // Calculate optimal positions for contour-like distribution
    const calculateContourPositions = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      const numClusters = 3; // Reduced number of clusters for larger shapes
      const positions = [];
      const noise2D = createNoise2D();

      // Create organic cluster positions using noise
      for (let i = 0; i < numClusters; i++) {
        const angle = (i / numClusters) * Math.PI * 2;
        const radius = 9; // Increased radius for larger spread

        const baseX = Math.cos(angle) * radius;
        const baseY = Math.sin(angle) * radius * (1 / aspectRatio);

        // Add noise-based offset for more natural positioning
        const noiseOffset = 2;
        const x = baseX + noise2D(baseX * 0.1, baseY * 0.1) * noiseOffset;
        const y = baseY + noise2D(baseX * 0.1 + 100, baseY * 0.1 + 100) * noiseOffset;

        positions.push({ x, y });
      }

      return positions;
    };

    const createContourCurve = (x0: number, y0: number, index: number, color: THREE.Color, radius: number) => {
      const points = [];
      const segments = 70; // Increase segments for smoother curves
      const noise2D = createNoise2D();

      const createOrganicShape = (t: number, baseRadius: number) => {
        const angle = t * Math.PI * 2;

        // Layer multiple noise frequencies for more organic shape
        const noiseScale1 = 0.5;
        const noiseScale2 = 2.0;
        const noiseScale3 = 4.0;

        const noise1 = noise2D(Math.cos(angle) * noiseScale1, Math.sin(angle) * noiseScale1);
        const noise2 = noise2D(Math.cos(angle) * noiseScale2, Math.sin(angle) * noiseScale2) * 0.5;
        const noise3 = noise2D(Math.cos(angle) * noiseScale3, Math.sin(angle) * noiseScale3) * 0.25;

        const combinedNoise = (noise1 + noise2 + noise3) / 1.75;

        // Create contour-like variations
        const contourFactor = Math.sin(angle * 3 + index * 0.5) * 0.3;
        const radiusMod = baseRadius * (1 + combinedNoise * 0.5 + contourFactor);

        return {
          x: radiusMod * Math.cos(angle),
          y: radiusMod * Math.sin(angle),
          z: combinedNoise * 0.2
        };
      };

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const { x, y, z } = createOrganicShape(t, radius);

        points.push(new THREE.Vector3(x - x0, y - y0, z));
      }

      const curve = new THREE.CatmullRomCurve3(points, true);
      const geometry = new THREE.TubeGeometry(curve, 200, 0.03 + Math.random() * 0.02, 8, true);

      // Modify glowIntensity for more glow
      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          progress: { value: 0 },
          colorA: { value: color },
          glowIntensity: { value: 0.3 + Math.random() * 0.4 }
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPosition;
          varying vec3 vNormal;

          void main() {
            vUv = uv;
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform float progress;
          uniform vec3 colorA;
          uniform float glowIntensity;

          varying vec2 vUv;
          varying vec3 vNormal;

          void main() {
            float modifiedProgress = progress * 1.1;
            float drawingProgress = smoothstep(0.0, 1.0, (modifiedProgress - vUv.x));
            float closePoint = smoothstep(0.9, 1.0, modifiedProgress) * smoothstep(0.0, 0.1, vUv.x);

            drawingProgress = max(drawingProgress, closePoint);
            if (drawingProgress <= 0.0) discard;

            float pulseRate = 1.5; // Slower pulse for more ethereal look
            float glowPulse = sin(time * pulseRate) * 0.15 + 0.85;
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);

            vec3 color = colorA;
            float brightness = 1.0 - abs(vUv.y - 0.5) * 2.0;
            brightness = pow(brightness, 2.0);

            color *= glowPulse * glowIntensity;
            color += color * fresnel * 2.5;
            color += brightness * color * 1.5;

            float alpha = (0.7 + brightness * 0.3) * max(drawingProgress, closePoint);
            alpha *= (0.85 + fresnel * 0.15);

            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(geometry, shaderMaterial);
      return { mesh, material: shaderMaterial };
    };

    const colors = [
      new THREE.Color(0x005FFF), // Electric Blue
      new THREE.Color(0x800080), // Purple
      new THREE.Color(0xFF4040)  // Vibrant Red
    ];
    

    const positions = calculateContourPositions();
    const baseRadius = 6; // Larger base radius
    const nA = Math.random()*3 //random number for random start in colours
    positions.forEach((pos, clusterIndex) => {
      for (let i = 0; i < numCurves; i++) {
        const radius = baseRadius + (i * 0.3); // Larger spacing between contours
        const curve = createContourCurve(pos.x, pos.y, i, colors[(clusterIndex) % colors.length], radius);
        curves.push(curve);
        scene.add(curve.mesh);
      }
    });

    camera.position.z = 14; // Adjusted for larger curves

    // Setup post-processing
    const renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
    const composer = new EffectComposer(renderer, renderTarget);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 1.6;
    bloomPass.radius = 0;
    composer.addPass(bloomPass);

    let startTime = Date.now();
    const animationDuration = 8000;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const globalProgress = Math.min(elapsed / animationDuration, 1.1) * 5;

      curves.forEach((curve, i) => {
        const curveProgress = Math.max(Math.min(globalProgress - (i * 0.03), 1.1), 0);
        curve.material.uniforms.progress.value = curveProgress;
        curve.material.uniforms.time.value = elapsed * 0.001;

        // Gentler movement for larger curves
        const uniquePhase = i * 0.5;
        curve.mesh.position.y += Math.sin(elapsed * 0.0001 + uniquePhase) * 0.0002;
        curve.mesh.position.x += Math.cos(elapsed * 0.00015 + uniquePhase) * 0.0002;
        curve.mesh.rotation.z += Math.sin(elapsed * 0.00005 + uniquePhase) * 0.00002;
      });

      composer.render();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      curves.forEach(curve => {
        curve.mesh.geometry.dispose();
        curve.material.dispose();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'black' }}
    />
  );
};

export default NeonDrawingEffect;
