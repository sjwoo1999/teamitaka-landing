/// <reference lib="webworker" />

self.addEventListener("install", (event) => {
  const swEvent = event as ExtendableEvent; // 타입 캐스팅 추가
  swEvent.waitUntil(
    caches.open("teamitaka-cache").then((cache) => {
      return cache.addAll(["/", "/index.html", "/assets/main.css"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  const swEvent = event as FetchEvent; // 타입 캐스팅 추가
  swEvent.respondWith(
    caches.match(swEvent.request).then((response) => {
      return response || fetch(swEvent.request).then((networkResponse) => {
        return caches.open("teamitaka-cache").then((cache) => {
          cache.put(swEvent.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => caches.match("/index.html") as Promise<Response>) // 기본 페이지 반환
  );
});
