/// <reference lib="webworker" />
declare var self: ServiceWorkerGlobalScope;

const CACHE_NAME = "teamitaka-cache-v1";
const CACHE_ASSETS = [
  "/",
  "/index.html",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

// 설치 단계에서 캐시 저장
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_ASSETS);
    })
  );
  self.skipWaiting(); // 즉시 활성화
});

// 활성화 단계에서 기존 캐시 정리
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log(`🗑️ 오래된 캐시 삭제: ${cache}`);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim(); // 새로운 서비스 워커가 즉시 페이지를 제어
});

// 네트워크 요청 가로채기
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return; // GET 요청만 캐시
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // 캐시된 데이터 반환
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse; // 정상 응답이 아니면 그대로 반환
          }

          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          return caches.match("/index.html").then((fallbackResponse) => {
            return fallbackResponse || new Response("Fallback page not available", { status: 404 });
          });
        });
    })
  );
});
