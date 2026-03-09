const CACHE_NAME = 'maxdrugshop-v1';
const ASSETS = [
  './',
  './index.html',
  './logo.jpg',
  './manifest.json'
];

// Install: Save the files to the phone's memory
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch: If offline, grab files from the cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});