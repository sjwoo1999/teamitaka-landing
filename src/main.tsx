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

// PWA 등록
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    if (registrations.length > 0) {
      console.log("⚠️ 기존 서비스 워커 제거 중...");
      registrations.forEach((reg) => reg.unregister());
    }
    console.log("✅ 새 서비스 워커 등록");
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("✅ Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("❌ Service Worker registration failed:", error);
      });
  });
}

