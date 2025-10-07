// Service Worker for Dastyare AI PWA - Optimized Version
const CACHE_NAME = 'dastyare-ai-v2';
const CRITICAL_CACHE = 'dastyare-ai-critical-v2';

// Only cache critical files for initial load
const criticalUrls = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install event - only cache critical files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CRITICAL_CACHE)
      .then((cache) => {
        console.log('Caching critical files');
        return cache.addAll(criticalUrls);
      })
      .then(() => self.skipWaiting())
  );
});

// Fetch event - Network first, then cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone the response
        const responseToCache = response.clone();
        
        // Cache the fetched response for future use
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, responseToCache);
          });
        
        return response;
      })
      .catch(() => {
        // If network fails, try cache
        return caches.match(event.request)
          .then((response) => {
            return response || caches.match('/');
          });
      })
  );
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, CRITICAL_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => self.clients.claim())
  );
});
