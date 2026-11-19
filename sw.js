// Bump VERSION whenever you upload new files so every device updates.
const VERSION='lifters-v8',FILES=['./','./index.html','./firebase-config.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-180.png','./logo.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||/googleapis\.com|firebasestorage|accounts\.google/.test(u.host))return;
 e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(n=>{if(n.ok||n.type==='opaque'&&u.origin!==location.origin){const cp=n.clone();caches.open(VERSION).then(c=>c.put(e.request,cp))}return n}).catch(()=>e.request.mode==='navigate'?caches.match('./index.html'):Response.error())))});
