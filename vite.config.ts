import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // 자동 업데이트 활성화
      injectRegister: "auto", // 또는 "script"
      filename: "sw.js",
      includeAssets: ['favicon.ico', 'robots.txt', 'icons/icon-192x192.png', 'icons/icon-512x512.png'],
      devOptions: {
        enabled: true, // 개발 모드에서도 서비스 워커 활성화
      },
      workbox: {
        cleanupOutdatedCaches: true, // 이전 캐시 정리
        navigateFallback: "/index.html", // PWA에서 SPA 지원
      },
      manifest: {
        name: "Teamitaka Landing",
        short_name: "Teamitaka",
        description: "대학 팀 프로젝트를 효율적으로 관리하는 서비스",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
