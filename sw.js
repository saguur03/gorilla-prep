/* Network-first with cache fallback.
   The question bank gets updated, so a cache-first strategy would pin the app to whatever
   version was installed first. This fetches fresh content when online and falls back to the
   cached copy when offline, which is what an offline-capable study app actually needs. */
const CACHE_NAME = 'gorilla-prep-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './questions-ct.js',
  './questions-ct-2.js',
  './questions-num.js',
  './questions-num-2.js',
  './questions-data.js',
  './questions-data-2.js',
  './questions-charts.js',
  './questions-eng.js',
  './questions-eng-2.js',
  './questions-eng-c1.js',
  './questions-judgment.js',
  './questions-judgment-2.js',
  './levels-eng.js',
  './guide-en.js',
  './guide-es.js',
  './es-explanations.js',
  './es-takeaways.js',
  './es-questions.js',
  './es-tables.js',
  './app.js',
  './takeaways.js',
  './app-ui.js',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});
