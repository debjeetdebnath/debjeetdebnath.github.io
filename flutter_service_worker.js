'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4ab379f14be1b8118cad98a0fd7bcfbf",
".git/config": "a6a59e9f3e364c0436e5cfdc65f8a886",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cbeb504da4b1ad9d8869d703be0d516d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f36866f96a8c44966d244d858d99c357",
".git/logs/refs/heads/main": "94a03c0efa616f2684b3a50f4e03ba85",
".git/logs/refs/remotes/origin/main": "dc5b7c9a2f82ce808b42ff0f8672ed77",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/2f5efdf24aa8b0f706a9e95ddc620b53670efc": "8d4f1501e72ccbffbc8180034d6af2da",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/c3756d8bf6109a124dee9df7f3ddb0091e58d8": "9364042c3c7f7a9a8ec7b15812396a91",
".git/objects/35/35e20dd4e9324034ab1246d9c16efd584115c0": "edf325c6e679b1489902bcc458398b84",
".git/objects/3f/467e1dafffaead7850541ae56cb2842e6ba03b": "e9810c63c0c3bc0e5edc1b64d55f85b4",
".git/objects/45/2c639190b2fddafc03281658cf967da9c1a237": "fed3e1df63e128513ffeb17f31ee5986",
".git/objects/46/f0bb71b545245b0c9b43659aef9a4cb0026fad": "8f6419c5f4ef167cba0b6aa9dcc08f70",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/1aa4c762c53c1fdb57a24b40a7999d2b38e165": "e4eefd8cb8b9e9ae41075cbe758bb9ae",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/6b/843c4cd4c0dc1edf3fa54e1fa80bf49f7c4c6f": "92f51480f94fc1c03480316890b9257e",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/b515143a28b39842bcb2d07e0431b1ae54a7b0": "dcb0abd096d834bfa41a59cac1acd219",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4b25b83f52299564e88338484d55c520cb640a": "c48a9ffcfed2bb2da4f6fc3849c1bc7c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/1f9a4fef483928cbb4e96dd5428b1a7fa7056f": "865a36e791e1bb2d0b09bf2f5e4ef308",
".git/objects/91/aa73ec295ad84434b15deedaa11bdc1cbff5e1": "19e1e482356c3ee77b49cbd3d32cb3d6",
".git/objects/95/1c6f0eeb3c7eb1e355895dc41e5d071d2a3e1d": "4387b00daa21a8f835c58c75f68fc002",
".git/objects/9d/3608db030a10ec6cbe576fc668a2be00a29758": "1a5a05ccc465b764e585b26c7728635c",
".git/objects/9f/f06205135b9121d871b1dbc38eba03f15e2af8": "f7c9455da52f3b2d1ee1b838a4540119",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/521f013fbb59b451b2fc1b9460d80182076307": "a52df4bb4937a0f5810d1a40c8630f2b",
".git/objects/a5/4f42ec75bc15db850f144fd8e756706a927cf0": "6b888529459ec20ab7cf2ee1272d404d",
".git/objects/ae/443c6041c6947bbe4543c4915e1ab05e0b36c6": "56bbd65027ed8b35f1e749b49b8b115d",
".git/objects/af/7fc9a1e13a2e24593c2f8a5260147bf1984b98": "91c3b1f7912aec5928bb74861e32e3cd",
".git/objects/b4/4f1a85110e8a27837e619481c3a9d3cc9de268": "c8e88cdde4b3f7e2933d8edb94e634d3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/4602446176ba2af1c5d636d6e3cfe9b251cc49": "940815e5eaf2705095af2e467a1cd90e",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/7a5265b2cf924b7eefadfef7738233de4f18bb": "06692360ebf9d1e69fcceb6238b7882b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/0eceb806763d5b16233cc065fc46e752f06ab0": "f98c8bccf68cee0fb5552036ef3b6b5a",
".git/objects/df/f8d392bd90ce974b3ef2df10339c7a52635048": "c3dae253d3b3869aca5c1c293477c101",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/4b758f399cebceeec6238140a72df6eb54d663": "c9f0317ffdbd6280bcbaf9af8c0936c3",
".git/refs/heads/main": "bbf9090a2d4835ec6118f2af21ce4952",
".git/refs/remotes/origin/main": "bbf9090a2d4835ec6118f2af21ce4952",
"assets/AssetManifest.json": "2428398bcb5b11a4f9096cdba98ffb29",
"assets/assets/bluetooth.png": "110c382aa501a53dcce067a8ae52fe60",
"assets/assets/flutter1.png": "d2bd931d26b8d8375ff140ebb21967f4",
"assets/assets/followme.png": "1626e79699fc3341c498434901bc8fc7",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/logo.png": "c7df0d1313c5a2f7abc872c8ade95e10",
"assets/assets/me.png": "8abe27ee5f2143ed74772a735b6f8b5f",
"assets/assets/myexp.png": "5a8216fe489da02b7df81155c678bedd",
"assets/assets/project1.png": "2da4659840ff61bb9bfd6345324d7086",
"assets/assets/splash.gif": "eaabf0bbc43f43cadf9ca8c377ca3f21",
"assets/assets/tezy.png": "fab2a56d5e198f1d36513c4643fe6173",
"assets/assets/years.png": "448984c0770fb2f69352b5a2a0b6cb77",
"assets/FontManifest.json": "ffd0fb88a70ae17e3266a011a0eeab32",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "aeb8e74ed69cbf163c976870aacb288c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "6019ce48b19acf660e72c2cb3d0697a4",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "4514b9cb92b074884eafaac5d2f6a8af",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c9af36b8b3bcadc58854268ab2de4f98",
"/": "c9af36b8b3bcadc58854268ab2de4f98",
"main.dart.js": "2d3a3ccf38a68126bc914cbe8c79ded3",
"manifest.json": "fbe0d81ee84ed7d782561150eb5c8631",
"version.json": "dc7a41dc17f14a65b744f589d6704d0e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
