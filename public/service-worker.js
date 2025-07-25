const CACHE_NAME = "cosmofusion-v1";
const STATIC_CACHE = "cosmofusion-static-v1";
const DYNAMIC_CACHE = "cosmofusion-dynamic-v1";

// Critical resources to cache immediately
const STATIC_ASSETS = [
  "/",
  "/static/css/main.56f32fe4.css",
  "/static/js/main.bb4fed7c.js",
  "/favicon.ico",
  "/manifest.json",
];

// Images to cache
const IMAGE_ASSETS = [
  "/static/media/astronaut-optimized-optimized.jpg",
  "/static/media/cosmoFusion_dao-optimized.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log("Opened cache");
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return caches.open(DYNAMIC_CACHE);
      })
      .then((cache) => {
        return cache.addAll(IMAGE_ASSETS);
      })
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Handle different types of requests
  if (request.destination === "image") {
    event.respondWith(handleImageRequest(request));
  } else if (
    request.destination === "style" ||
    request.destination === "script"
  ) {
    event.respondWith(handleStaticRequest(request));
  } else {
    event.respondWith(handlePageRequest(request));
  }
});

async function handleImageRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a fallback image if available
    const fallbackResponse = await cache.match(
      "/static/media/astronaut-optimized-optimized.jpg"
    );
    return (
      fallbackResponse || new Response("Image not available", { status: 404 })
    );
  }
}

async function handleStaticRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return new Response("Resource not available", { status: 404 });
  }
}

async function handlePageRequest(request) {
  try {
    const networkResponse = await fetch(request);
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match("/");
    return (
      cachedResponse || new Response("Page not available", { status: 404 })
    );
  }
}

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
