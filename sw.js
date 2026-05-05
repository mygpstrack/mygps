self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => {
  // MyGpsLive: не кэшируем Firebase/карты/live-данные, чтобы не показывать старую позицию.
});
