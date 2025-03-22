// src/types/global.d.ts
declare module 'three/examples/jsm/loaders/FontLoader' {
    export class FontLoader {
      constructor();
      load(
        url: string,
        onLoad?: (font: THREE.Font) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
    }
  }
  
  declare module 'three/examples/jsm/geometries/TextGeometry' {
    import * as THREE from 'three';
    export class TextGeometry extends THREE.BufferGeometry {
      constructor(text: string, parameters: {
        font: THREE.Font;
        size?: number;
        height?: number;
        curveSegments?: number;
        bevelEnabled?: boolean;
        bevelThickness?: number;
        bevelSize?: number;
        bevelSegments?: number;
      });
    }
  }
  
  declare module 'three/examples/jsm/controls/OrbitControls' {
    import * as THREE from 'three';
    export class OrbitControls {
      constructor(object: THREE.Camera, domElement: HTMLElement);
      update(): void;
      enableDamping: boolean;
      dampingFactor: number;
    }
  }