const CACHE = 'baccarat-v3';   // 已升級到 v3，強制更新最新程式

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
