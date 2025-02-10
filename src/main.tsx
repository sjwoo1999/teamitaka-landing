import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

document.body.style.overflow = "auto"; // 스크롤 가능하도록 설정

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// PWA 서비스 워커 등록 (개선된 버전)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      // 개발 환경에서 서비스 워커 등록 여부를 결정
      const isLocalhost = Boolean(
        window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
      );

      if (isLocalhost) {
        console.log("🚧 개발 환경에서는 서비스 워커를 등록하지 않음");
        return;
      }

      // 기존 서비스 워커를 제거하지 않고 유지
      const registration = await navigator.serviceWorker.register("/service-worker.js", { scope: "/" });
      console.log("✅ Service Worker registered with scope:", registration.scope);

      // 새로운 서비스 워커 업데이트 감지
      registration.onupdatefound = () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.onstatechange = () => {
            if (newWorker.state === "installed") {
              console.log("🔄 새로운 서비스 워커가 설치됨");
              if (navigator.serviceWorker.controller) {
                console.log("🔔 새로운 버전의 서비스 워커가 감지됨. 페이지를 새로고침하세요.");
              }
            }
          };
        }
      };
    } catch (error) {
      console.error("❌ Service Worker registration failed:", error);
    }
  });
}
