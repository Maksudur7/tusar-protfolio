import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    // Particle geometry
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const color1 = new THREE.Color('#7B2FBE');
    const color2 = new THREE.Color('#E040FB');
    const color3 = new THREE.Color('#00E5FF');

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const mix = Math.random();
      const c = mix < 0.4 ? color1 : mix < 0.7 ? color2 : color3;
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      sizes[i] = Math.random() * 3 + 1;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // Torus ring
    const torusGeo = new THREE.TorusGeometry(2, 0.02, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({ color: '#7B2FBE', transparent: true, opacity: 0.3 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torus);

    const torusGeo2 = new THREE.TorusGeometry(3, 0.01, 16, 100);
    const torusMat2 = new THREE.MeshBasicMaterial({ color: '#E040FB', transparent: true, opacity: 0.2 });
    const torus2 = new THREE.Mesh(torusGeo2, torusMat2);
    torus2.rotation.x = Math.PI / 3;
    scene.add(torus2);

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      particles.rotation.y = t * 0.04;
      particles.rotation.x = t * 0.02;
      torus.rotation.z = t * 0.3;
      torus.rotation.x = t * 0.1;
      torus2.rotation.y = t * 0.2;
      camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="hero" id="home">
      <canvas id="hero-canvas" ref={canvasRef} />
      <div className="hero-content">
        <div className="hero-badge">✦ Available for Projects</div>
        <h1 className="hero-name">
          MD. MUSFIQUR<br />
          <span className="grad-text">RAHAMAN SIKDER</span>
        </h1>
        <p className="hero-title">GRAPHIC DESIGNER</p>
        <p className="hero-desc">
          Crafting visual experiences through the art of Photoshop, Illustrator &amp; 3D Design.
          Transforming ideas into stunning digital realities that leave a lasting impression.
        </p>
        <div className="hero-buttons">
          <a href="#portfolio" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Hire Me</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>SCROLL</span>
      </div>
    </section>
  );
}
