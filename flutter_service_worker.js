'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "78d4f0c8ac2b594d55170d3c6c63e586",
"version.json": "3c99eee40e136ef814a096d8321faa56",
"index.html": "a01497ba46dff5674797825b4539d020",
"/": "a01497ba46dff5674797825b4539d020",
"main.dart.js": "e9a1fcb5537edcc43360b448e80bfa21",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "4573234093096449232c9b53cfeef6a4",
"icons/favicon-16x16.png": "4312d3aa436c780e7c3323641af1fcb4",
"icons/favicon.ico": "9aafea38df80894b7804864daad9969d",
"icons/apple-icon.png": "8dff260124250f80aa5261fdacaa236c",
"icons/apple-icon-144x144.png": "d6390263b41d53173b42b992c498e175",
"icons/android-icon-192x192.png": "96b14b29be4b217239646553ffb29f9d",
"icons/apple-icon-precomposed.png": "8dff260124250f80aa5261fdacaa236c",
"icons/apple-icon-114x114.png": "af218c170ee33f93ccc869888534717b",
"icons/ms-icon-310x310.png": "51a2dfd3d89b094eefec1736e059eb3d",
"icons/Icon-192.png": "3d6322f99262bc7593f21bff43967bdc",
"icons/Icon-maskable-192.png": "52dc3b617ea7e7f39f6e3361fb7a274c",
"icons/ms-icon-144x144.png": "2a445c0c951d0afe636c85ce2a36a0f1",
"icons/apple-icon-57x57.png": "d49b095b9c15ea9bf509b00c99c99f55",
"icons/apple-icon-152x152.png": "461e0d0393b78cdba5887ea94ee82d58",
"icons/ms-icon-150x150.png": "fff61ca59b8d1d3dd8a61b2ea256609f",
"icons/android-icon-72x72.png": "b4ff5b801b69de255d28c0a468946ec5",
"icons/android-icon-96x96.png": "3a8866c0ab4af07d68cbd6762c1bcc9c",
"icons/android-icon-36x36.png": "667ec1ea7e1e959bf26ae56137bf2277",
"icons/apple-icon-180x180.png": "291641fde1a7d9466afc9a7d4c3b4d19",
"icons/favicon-96x96.png": "12983b89197d88558b8628f14332626b",
"icons/android-icon-48x48.png": "d9003eefaf95b7d1a9178ec6c051ae3d",
"icons/apple-icon-76x76.png": "773d4f4861696fc20659110f90684a9c",
"icons/apple-icon-60x60.png": "64fa70b2f73229a8c9a7ecebc443e6f1",
"icons/Icon-maskable-512.png": "098066c51425344a24ee66c0680fde10",
"icons/android-icon-144x144.png": "d6390263b41d53173b42b992c498e175",
"icons/apple-icon-72x72.png": "b4ff5b801b69de255d28c0a468946ec5",
"icons/apple-icon-120x120.png": "f8d4a269a116fd1bc2c1677edb9d0ad7",
"icons/Icon-512.png": "3843d9598ea709208fd1f8014cf138a3",
"icons/favicon-32x32.png": "af0d8300f8b08864ec95392ab9510f6b",
"icons/ms-icon-70x70.png": "73fb71decb0378636aaccda42b38b98b",
"manifest.json": "349e86aaada6496a571c755b0eecc2e8",
"assets/AssetManifest.json": "70d916c1e0be627a4ebc8255d2d853d4",
"assets/NOTICES": "a401bb4e553fc8cc3641a6866d322b7e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "681c50e1d049cc9d8776cab6b3f4ef3c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3fa389f4d01d7f84c9b61bec60f149a3",
"assets/fonts/MaterialIcons-Regular.otf": "217bba2a208ba60607aa9ac24e27f72b",
"assets/assets/images/achievement/hki_harry_salon.png": "8de62b8ac41aa8e467e835e73f448441",
"assets/assets/images/achievement/lomba_uiux.png": "9d0ce6e16bf8ace91bda23b12f29268f",
"assets/assets/images/achievement/lomba_playbox.png": "a7e6b57fff88e361bf3806d03d7b194c",
"assets/assets/images/achievement/hki_digilib_1.png": "461e5740f2789c972eabf73703d8369e",
"assets/assets/images/achievement/hki_digilib_2.png": "027bef88467e0f1a58d941d598519083",
"assets/assets/images/achievement/hki_panjunan_2.png": "51070fe2cbdbc7484afe2c1de2e22e43",
"assets/assets/images/achievement/hki_smartfarming_2.png": "6f8ee9d65d2a7c2c808570c2ac8d6737",
"assets/assets/images/achievement/hki_panjunan_1.png": "e4368764081dda1878abfa664f0db2cb",
"assets/assets/images/achievement/hki_smartfarming_1.png": "35b5766f06044346a73a1f104ad2cc7b",
"assets/assets/images/projects/kinerjio.png": "1bcbd5cdf368521ca4ccfdf4d8fdac64",
"assets/assets/images/projects/donorin-cover.png": "0e5d07764116aa540255b5ffc167180d",
"assets/assets/images/projects/harry-salon.png": "22369873c4ecf5c3209fc6a193070c53",
"assets/assets/images/projects/digilib-1.png": "b107a1880b56f3bc57f7da3ec1c181e5",
"assets/assets/images/projects/digilib-2.png": "27a0a33eb1a7c6c479b981e92a1dd668",
"assets/assets/images/projects/pemilu-cover.png": "1e2e24cb48893afcb01d32e7cfae9c98",
"assets/assets/images/projects/wonderful-surabaya-cover.png": "20165b1a1aa94fead0bf823c88bfd424",
"assets/assets/images/projects/digilib-cover.png": "082cc8aff098d9a0523a9fca010ba749",
"assets/assets/images/projects/smart-farmer.png": "540b365ed3c264f58d479efc340e31cb",
"assets/assets/images/projects/harry-salon-cover.png": "ab57e7185740fa4d3530e88d51130533",
"assets/assets/images/projects/donorin.png": "a36cca887d93b49877886e77a228fe12",
"assets/assets/images/projects/wonderful-surabaya.png": "d1daf712d5bb26eeb7b8dbf58252597d",
"assets/assets/images/projects/smart-farmer-cover.png": "d5337086c8f179f4c7ab3297326a3d33",
"assets/assets/images/projects/laperin.png": "10800c054a3d28108f0d02bd617e69ff",
"assets/assets/images/projects/laperin-cover.png": "88d21d81c89949ffa3ceead8c6649e8f",
"assets/assets/images/projects/kinerjio-cover.png": "719e349a6784d47458da02670a13285a",
"assets/assets/images/projects/pemilu.png": "5455edc1760d5d5341ba7e97591fe5fd",
"assets/assets/images/logo.png": "4c29e22ca4fb0470f22bf1dbec67e159",
"assets/assets/images/certifications/pemrograman_kotlin.png": "3f71cce01021d139c02b1254e2b4a9a7",
"assets/assets/images/certifications/android_intermediate.png": "e146fe754b9c635291414bfc684a232e",
"assets/assets/images/certifications/pemrograman_dart.png": "1217cf2bbb70d2b7d1bee8c82e77a1e0",
"assets/assets/images/certifications/android_pemula.png": "edfddb24d8e297e05e2b612f1869226d",
"assets/assets/images/certifications/github_dasar.png": "492174ec9b013e1547da5cf2953ce65e",
"assets/assets/images/certifications/dasar_pemrograman.png": "f1dcb86ab78c080036765cd46cc73bac",
"assets/assets/images/certifications/jetpack_compose.png": "572cb1838ef504492547a9b187853b7a",
"assets/assets/images/certifications/pemrograman_solid.png": "58817d75dbd16b64d56cf574d0ea38c6",
"assets/assets/images/certifications/flutter_fundamental.png": "60783bacf6eb04570ac18016a978cfaf",
"assets/assets/images/certifications/flutter_intermediate.png": "fe1197026425276c4983be824906ba2b",
"assets/assets/images/certifications/flutter_pemula.png": "b04cc8e86a3c5057b3d400f5b77cce64",
"assets/assets/images/certifications/logika_pemrograman.png": "1528cf26179c852ca2ad1e488631f10a",
"assets/assets/images/certifications/android_fundamental.png": "af3255e8e3b7911836cf053ac2c674ed",
"assets/assets/images/image1.png": "c4e4d0dadf16c83d644132c08fe06335",
"assets/assets/images/image2.png": "2551cc0b1aac0cf50e1528540fced934",
"assets/assets/images/image.png": "dd4d98135ee09142c6b6f92584547f53",
"assets/assets/images/image3.png": "4a3b462a195dc43f13acbadd57255018",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/java.png": "517980d8feaa893d36c82fb421710a00",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/figma.png": "3598c6842f965e551bbc59ff19f921d6",
"assets/assets/icons/node.png": "f8dab57d048fabd69ea16c67e1615b86",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/dicoding.png": "d78de1897798c30dc6f382cd5eaa8d94",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/kotlin.png": "35ebe84a18760b6f3dfb52b20fd089ac",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
