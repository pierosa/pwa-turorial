const staticCacheName = 'site-static';
const assets = [
  '/',
  '/index.html',
  '/css/materialize.min.css',
  '/css/styles.css',
  '/js/app.js',
  '/js/materialize.min.js',
  '/js/ui.js',
  '/pages/about.html',
  '/pages/contact.html',
  '/img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  '/manifest.json',
];

// install service worker
self.addEventListener('install', (evt) => {
  console.log('caching shell assets');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    }),
  );
});
// activate service worker
self.addEventListener('activate', (evt) => {
  //console.log("service acivated correctly !!!");
});
// fetch event
self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cachedRequest) => {
      return cachedRequest || fetch(evt.request);
    }),
  );
});
