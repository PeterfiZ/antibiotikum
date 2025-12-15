const CACHE_NAME = 'ab-oktato-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './antibiotics_hu.js',
  './antibiotics_en.js',
  './antibiotics_de.js',
  './diseases_hu.js',
  './diseases_en.js',
  './diseases_de.js',
  './pathogens_hu.js',
  './pathogens_en.js',
  './pathogens_de.js',
  './test_hu.js',
  './test_en.js',
  './test_de.js',
  './renal_dose_hu.js',
  './renal_dose_en.js',
  './renal_dose_de.js',
  './pediatric_doses_en.js',
  './pediatric_doses_de.js',
  './pediatric_doses_hu.js',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});