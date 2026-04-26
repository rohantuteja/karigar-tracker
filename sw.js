// Minimal service worker - required for PWA install prompt
self.addEventListener('install', function(e) {
  self.skipWaiting();
});
self.addEventListener('activate', function(e) {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', function(e) {
  // Pass through - always use network (data is live from Google Sheets)
});
