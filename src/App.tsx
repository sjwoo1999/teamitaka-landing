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
    scene.background = new THREE.Color(0xffffff); // 흰색 배경
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 100); // 카메라 위치 설정
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // OrbitControls로 마우스 인터랙션 추가
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // 폰트 로드 및 3D 텍스트 생성
    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/optimer_bold.typeface.json",
      (font) => {
        const textGeometry = new TextGeometry("Teamitaka", {
          font: font,
          size: 80,          // 텍스트 크기
          height: 20,        // 두께
          curveSegments: 24, // 곡선 세분화
          bevelEnabled: true, // 경사 효과 활성화
          bevelThickness: 2,  // 경사 두께
          bevelSize: 1.5,     // 경사 크기
          bevelSegments: 10,  // 경사 세분화
        });

        const textMaterial = new THREE.MeshPhongMaterial({
          color: 0xf76241,    // 텍스트 색상 (주황색)
          specular: 0xffffff, // 반사광 색상
          shininess: 50,      // 광택 정도
        });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        // 텍스트를 화면 중앙에 배치
        textGeometry.computeBoundingBox();
        const boundingBox = textGeometry.boundingBox!;
        const center = boundingBox.getCenter(new THREE.Vector3());
        textMesh.position.set(-center.x, -center.y, 0);
        scene.add(textMesh);

        // 조명 추가
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // 주변광
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9); // 방향성 조명
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

    // 창 크기 조정 시 반응형 처리
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