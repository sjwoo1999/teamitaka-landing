import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 장면, 카메라, 렌더러 설정
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 100);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // OrbitControls 설정
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // 폰트 로드 및 3D 텍스트 생성
    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/optimer_bold.typeface.json",
      (font: THREE.Font) => {
        const textGeometry = new TextGeometry("Teamitaka", {
          font: font,
          size: 80,
          height: 20,
          curveSegments: 24,
          bevelEnabled: true,
          bevelThickness: 2,
          bevelSize: 1.5,
          bevelSegments: 10,
        });

        const textMaterial = new THREE.MeshPhongMaterial({
          color: 0xf76241,
          specular: 0xffffff,
          shininess: 50,
        });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        textGeometry.computeBoundingBox();
        const boundingBox = textGeometry.boundingBox!;
        const center = boundingBox.getCenter(new THREE.Vector3());
        textMesh.position.set(-center.x, -center.y, 0);
        scene.add(textMesh);

        // 조명 추가
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
        directionalLight.position.set(50, 100, 75);
        scene.add(directionalLight);
      }
    );

    // 애니메이션 루프
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 창 크기 조정 처리
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 클린업
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}

export default App;