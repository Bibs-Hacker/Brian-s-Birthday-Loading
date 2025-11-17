const CACHE_NAME = 'birthday-countdown-v1';
const urlsToCache = [
  '/',
  'index.html',
  'https://files.catbox.moe/bs9a82.mp4',
  'https://files.catbox.moe/5k3bpf.m4a',
  'https://files.catbox.moe/90r1g5.jpg',
  'https://files.catbox.moe/530bbs.jpg',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Dancing+Script:wght@700&family=Montserrat+Alternates&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
