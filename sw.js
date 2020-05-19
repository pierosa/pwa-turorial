// install service worker
self.addEventListener('install', evt => {
  console.log("service worker installed correctly");
});
// activate service worker
self.addEventListener('activate', evt => {
  console.log("service acivated correctly !!!");
});
// fetch event
self.addEventListener('fetch', evt => {
  console.log('fetch event: ', evt);
});