// Files to cache
var PRECACHE_URLS = [
    '/',
    '/index.html',
    '/css/libraries.css',
    '/css/responsive1.css',
    '/css/style.css',

    '/fonts/fontawesome-webfont.eot',
    '/fonts/fontawesome-webfont.svg',
    '/fonts/fontawesome-webfont.ttf',
    '/fonts/fontawesome-webfont.woff',
    '/fonts/fontawesome-webfont.woff2',
    '/fonts/fontawesome-webfont3e6e.eot',
    '/fonts/fontawesome-webfont3e6e.svg',
    '/fonts/fontawesome-webfont3e6e.ttf',
    '/fonts/fontawesome-webfont3e6e.woff',
    '/fonts/fontawesome-webfont3e6e.woff2',
    '/fonts/fontawesome-webfontd41d.eot',
    '/fonts/icomoon.eot',
    '/fonts/icomoon.svg',
    '/fonts/icomoon.ttf',
    '/fonts/icomoon.woff',

    '/images/logo/ressortir-logo.png',
    'images/favicon/favicon.png',
    'images/favicon/favicon-r.png',
    'images/icons/account.png',
    'images/icons/diesel.png',
    'images/icons/freight.png',
    'images/icons/gas.png',
    'images/icons/history.png',
    'images/icons/lpg.svg',
    'images/icons/mission.png',
    'images/icons/policy.png',
    'images/sliders/dashboard.jpg',
    'images/sliders/diesel.png',
    'images/sliders/bdressortir-team.jpg',
    'images/sliders/bdressortir-team2.jpg',
    'images/sliders/bdressortir-team3.jpg',
    'images/sliders/bdressortir-team4.jpg',
    'images/sliders/diesel.jpg',
    'images/sliders/page-gradient.png',


    '/js/jquery-3.3.1.min.js',
    '/js/app.js',
    '/js/plugins.js',
    '/js/main.js',
    '/192x192.png',
    '/512.png'
];

const PRECACHE = 'ressortir-pwa-prod';
const RUNTIME = 'runtime';


// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(PRECACHE)
            .then(cache => cache.addAll(PRECACHE_URLS))
            .then(self.skipWaiting())
    );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return caches.open(RUNTIME).then(cache => {
                    return fetch(event.request).then(response => {
                        // Put a copy of the response in the runtime cache.
                        return cache.put(event.request, response.clone()).then(() => {
                            return response;
                        });
                    });
                });
            })
        );
    }
});


let deferredPrompt;
//
// window.addEventListener('beforeinstallprompt', (e) => {
//     // Prevent the mini-infobar from appearing on mobile
//     e.preventDefault();
//     // Stash the event so it can be triggered later.
//     deferredPrompt = e;
//     // Update UI notify the user they can install the PWA
//     showInstallPromotion();
//     btnAdd.style.display = 'none';
//     // Show the prompt
//     deferredPrompt.prompt();
//     // Wait for the user to respond to the prompt
//     deferredPrompt.userChoice
//         .then((choiceResult) => {
//             if (choiceResult.outcome === 'accepted') {
//                 console.log('User accepted the A2HS prompt');
//             } else {
//                 console.log('User dismissed the A2HS prompt');
//             }
//             deferredPrompt = null;
//         });
// });
