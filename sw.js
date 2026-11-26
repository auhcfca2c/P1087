// Offline cache for P1087 Pendulum Check. Bump VERSION when any file changes.
const VERSION = "p1087-pendulum-v1.0";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
    // cache same-origin files and Google Fonts so the app works offline at the quay
    const u = new URL(e.request.url);
    if (u.origin === location.origin || u.host.endsWith("fonts.googleapis.com") || u.host.endsWith("fonts.gstatic.com")) {
      const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy));
    }
    return res;
  }).catch(() => caches.match("index.html"))));
});
