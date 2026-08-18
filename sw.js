/* Network-first with cache fallback.
   The question bank gets updated, so a cache-first strategy would pin the app to whatever
   version was installed first. This fetches fresh content when online and falls back to the
   cached copy when offline, which is what an offline-capable study app actually needs. */
const CACHE_NAME = 'gorilla-prep-v8';
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
  './questions-eng-3.js',
  './questions-eng-4.js',
  './questions-eng-5.js',
  './questions-eng-c1.js',
  './questions-judgment.js',
  './questions-judgment-2.js',
  './audio/eng-322.mp3',
  './audio/eng-323.mp3',
  './audio/eng-324.mp3',
  './audio/eng-325.mp3',
  './audio/eng-326.mp3',
  './audio/eng-327.mp3',
  './audio/eng-328.mp3',
  './audio/eng-329.mp3',
  './audio/eng-330.mp3',
  './audio/eng-331.mp3',
  './audio/eng-332.mp3',
  './audio/eng-333.mp3',
  './audio/eng-334.mp3',
  './audio/eng-335.mp3',
  './audio/eng-336.mp3',
  './audio/eng-337.mp3',
  './audio/eng-366.mp3',
  './audio/eng-367.mp3',
  './audio/eng-368.mp3',
  './audio/eng-369.mp3',
  './audio/eng-370.mp3',
  './audio/eng-371.mp3',
  './audio/eng-372.mp3',
  './audio/eng-373.mp3',
  './audio/eng-374.mp3',
  './audio/eng-375.mp3',
  './audio/eng-376.mp3',
  './audio/eng-377.mp3',
  './audio/eng-378.mp3',
  './audio/eng-379.mp3',
  './audio/eng-380.mp3',
  './audio/eng-381.mp3',
  './audio/eng-382.mp3',
  './audio/eng-383.mp3',
  './audio/eng-384.mp3',
  './audio/eng-385.mp3',
  './audio/eng-386.mp3',
  './audio/eng-387.mp3',
  './audio/eng-388.mp3',
  './audio/eng-389.mp3',
  './audio/eng-390.mp3',
  './audio/eng-391.mp3',
  './audio/eng-392.mp3',
  './audio/eng-393.mp3',
  './audio/eng-394.mp3',
  './audio/eng-395.mp3',
  './audio/eng-396.mp3',
  './audio/eng-397.mp3',
  './audio/eng-398.mp3',
  './audio/eng-399.mp3',
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
