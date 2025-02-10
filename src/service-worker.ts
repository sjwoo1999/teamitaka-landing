/// <reference lib="webworker" />

self.addEventListener("install", (event: ExtendableEvent) => {
    event.waitUntil(
      caches.open("teamitaka-cache").then((cache) => {
        return cache.addAll(["/", "/index.html", "/assets/main.css"]);
      })
    );
  });
  
  self.addEventListener("fetch", (event: FetchEvent) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((networkResponse) => {
          return caches.open("teamitaka-cache").then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      }).catch(() => caches.match("/index.html")) // 네트워크 오류 발생 시 기본 페이지 반환
    );
  });
  