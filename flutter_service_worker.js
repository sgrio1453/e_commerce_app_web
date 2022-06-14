'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1813b2b3231cc55647cc51ad05aac84e",
".git/config": "fe102dda033c4bacba8845b799b6f918",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "7d5cbd5eec157c30cbe180bb99aed1d0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6204a2456a3e009057e8fad1240ce597",
".git/logs/refs/heads/master": "6204a2456a3e009057e8fad1240ce597",
".git/logs/refs/remotes/origin/master": "0f529bde79817ef81ad38da47ecc42d4",
".git/objects/03/5a9435f17c881bb1ae8cd1df255bdb96810fd9": "122a8e5b009fdc7fead8c677a0708627",
".git/objects/03/7ad47f870a001b44b4477cab3525ef08cc5cb3": "e24921a042544fdcf3d9f373db0130b8",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/dbd8d08000c9dfbefec1ad241d7dd15e25e675": "269f3327c6ea6b952bc082df9cf3b958",
".git/objects/0e/4532c48d77758b53fdaf5f85f72b7bdd644eb8": "4c765b02c074d6ef2d389b775c0eef7e",
".git/objects/10/d2021aff0523e5864bbf209451618b26d8cac5": "3fab9cc7a43816ef51b60029ec68e701",
".git/objects/17/a36e3461730a6c00351c7bc11646477f51da7a": "486fcb92ae88ee7c1149dc0f80262a86",
".git/objects/22/54a5c58300011600b752d0f0c41dc53b5fbc18": "fc8f256c36cfb852087c56caa1f1e7f9",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2c/6f5b78183f2653f22cd16e859dcfd6c33bf36e": "1ce219eb8052e11502a542f2df64c75f",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/9dd5d12ddc0cf6888931bb05721c14d69aee57": "45d24303d8b7929431c17cf4153ccdf6",
".git/objects/37/f202017b3f78df1f3e865b70578becc0976556": "620a0b041519a4ec6b06baaa5101f5ed",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5c/3071c053bf773de2455ef173a33d4601b10d54": "7fa908f61f0ce23f6effe2d85f7f777e",
".git/objects/5f/56852f72cda5f92c4315ca5ca2d5b5537d23dc": "30bf504c314fce956da88d3688f53926",
".git/objects/62/0c057e0fdcfd01864a41befcbdc2b7d46b69bd": "aff36b2d8973e1b9044b27eb796f8800",
".git/objects/65/e2e0e095901e85012d3bc3634feea2e838b590": "8db7b8a2bf56f240adf14d2c26f87822",
".git/objects/69/0ed65efe1d81397b200b3428b54cde69e5ddbb": "e5d69556689c3442f0f8d326681ec49f",
".git/objects/6b/1b6f495edb7b68f61236c81fd80f7e4b4eaca5": "da5ad161fa35b690ff55f134d12f09a6",
".git/objects/72/cfafa9364389ee132d1fc873f4486da9064451": "cebaf3ef77f370a7a9d2162ae6e9f05a",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/63836d2be09f40a629cfa140866a76c94aa4c4": "99a72cf80c6a26b42e1fa27f971d7958",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/f4ae536dbe14eddd92b1b6691d4a88d313edcb": "55c453a7b11cd0f33705e330a0eded03",
".git/objects/9a/cf456d08f7c4d1648ecc2f968235703da6aaf1": "56e8b0167414a3593683feecbb4143cd",
".git/objects/9e/c01d085af4526beb2332e8b1366d1e4a2b89d3": "4ad14c2971264fc9cec50164dd56a980",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e8ffcff69ecfd5679a7742e35af5c049e9dba4": "385a339cec464313c14c412d2dacd72b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/72cc2622c5f4bf8939f8b30bf0a5b3941487cf": "1f31a9bcf2e354fbd6cf87ed84599950",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/1c7b9866cd9793170ce884d85435291a36a540": "0633e4292b428123c0c372f5c8a59c5a",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cb/045371a62d5ac1069d7d78b93dc516901a6140": "c5bf0e862207e8a183416b2cf17aa2d5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/b7144d1a0d72a4410e5338a4cc489569fee0e1": "a465d0af57950e067512f0a7405da233",
".git/objects/fb/7810177172693e0bb91b23158d0781909b80b1": "017dc2ec256ed4702fa2fc15765b71b1",
".git/refs/heads/master": "e72128bb7b2612f56ffd213d9c785215",
".git/refs/remotes/origin/master": "e72128bb7b2612f56ffd213d9c785215",
"assets/AssetManifest.json": "be41bede0fe7ff54cb274ea71e257599",
"assets/assets/images/alisveris.jpg": "d233fbedbe5b4160967282bb7f3a8dce",
"assets/assets/images/alisveriss.png": "d67a656fbe6a7586f02ad413f4c5213c",
"assets/assets/images/aycicek.png": "9358a29bf735bb762f0b8fb53fbbe8a4",
"assets/assets/images/barbie.png": "30b470ff006339856be62941999aaa06",
"assets/assets/images/ben.png": "aaae6fe086cc25a34bd02560ac8f1378",
"assets/assets/images/benzin.png": "7b8c357159458a28e3425937917ffd13",
"assets/assets/images/benzinn.png": "c237961ad5edfe16a294da2469e07dbb",
"assets/assets/images/bos.png": "620aacffe8492c62a443581b36ae7e95",
"assets/assets/images/bulutlu.jpg": "5696457790a1721c002876e60890fbf0",
"assets/assets/images/compass.png": "33b8542975c4182b2ae36d6eebda625c",
"assets/assets/images/e-ticaret.gif": "e7cb1d91e5fc8df0441217a6a3a85210",
"assets/assets/images/elon.png": "71c93a709ef305599e05e98658e2acec",
"assets/assets/images/elonn.png": "03961f2aff1fffddfec1b49e8e70559e",
"assets/assets/images/enuygun.gif": "9d6c25f9d63cb0d60d7f557c1ea31009",
"assets/assets/images/gece.jpg": "f74e0e41d5eb6624cf0319e4d957a748",
"assets/assets/images/gunesli.jpg": "157522315124694ba0a1c974502427be",
"assets/assets/images/hediye1.jpg": "a996ad93fde0820010f28deba23a3278",
"assets/assets/images/ip.png": "eda18d246896cae0f4dbc819d77ce629",
"assets/assets/images/iph.png": "70266ce9f9f8c031aa645a114ceec02f",
"assets/assets/images/ipho.png": "26a7b7bddb9a026801b52accf499e53b",
"assets/assets/images/iphone.png": "4ed2b2674c2f3f7e910ec9866d28046e",
"assets/assets/images/kulak.png": "c5b371e92589dabdb3b0ee0f5ca77c02",
"assets/assets/images/monster.png": "27f2ccf7fd99d39dce572ca7496f5ba3",
"assets/assets/images/monsterrrr.png": "531f49eda00ec84d59c9c3e26794c6d3",
"assets/assets/images/nokia.png": "c66c4628135125661644b8a77965c61a",
"assets/assets/images/oscar.png": "fbf0da6fc1a1d54baa59949fd91aa537",
"assets/assets/images/oscarr.png": "c3c468f4094d9f2916fff87c53b51f8b",
"assets/assets/images/ramazan.gif": "7d7baa49d8a24c246410f5c090c2099c",
"assets/assets/images/recep.png": "85f27970a39b4be0fe7ac0fa289a6e05",
"assets/assets/images/yilin.png": "b710bb16709dccda95aefa10d30b6622",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "d41f94e159147f7969c0304cfdf98961",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "89892c28ac14d62ab770a872b977ade1",
"/": "89892c28ac14d62ab770a872b977ade1",
"main.dart.js": "e2a7759170972063980e5adcf185a182",
"manifest.json": "dd061ff9afd4bfab0232ab769a7b3142",
"version.json": "ba25f2269e75c151e76606c6a42d2177"
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
