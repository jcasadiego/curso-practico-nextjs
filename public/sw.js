if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/540-46481d80000d2091.js",revision:"46481d80000d2091"},{url:"/_next/static/chunks/framework-caa50651a91d07b1.js",revision:"caa50651a91d07b1"},{url:"/_next/static/chunks/main-205b553bfee013bc.js",revision:"205b553bfee013bc"},{url:"/_next/static/chunks/pages/CreateAccount-0205d4d924edb7d7.js",revision:"0205d4d924edb7d7"},{url:"/_next/static/chunks/pages/Home-18ed1f3ee82e8921.js",revision:"18ed1f3ee82e8921"},{url:"/_next/static/chunks/pages/Login-486d059bb66a9881.js",revision:"486d059bb66a9881"},{url:"/_next/static/chunks/pages/MyAccount-bd6b6a9c2d196a4a.js",revision:"bd6b6a9c2d196a4a"},{url:"/_next/static/chunks/pages/NewPassword-dd9ac7e6ff80d912.js",revision:"dd9ac7e6ff80d912"},{url:"/_next/static/chunks/pages/NotFound-bc11d4584810146d.js",revision:"bc11d4584810146d"},{url:"/_next/static/chunks/pages/Orders-d69bf066f858311c.js",revision:"d69bf066f858311c"},{url:"/_next/static/chunks/pages/PasswordRecovery-36e21db10b702b9f.js",revision:"36e21db10b702b9f"},{url:"/_next/static/chunks/pages/SendEmail-b41dbabbc9fe152f.js",revision:"b41dbabbc9fe152f"},{url:"/_next/static/chunks/pages/_app-20f1aa4276229f06.js",revision:"20f1aa4276229f06"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/checkout-f12ecfe4d0442705.js",revision:"f12ecfe4d0442705"},{url:"/_next/static/chunks/pages/index-657c9900adfe7a55.js",revision:"657c9900adfe7a55"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/258d696b927529b6.css",revision:"258d696b927529b6"},{url:"/_next/static/css/2af02a3fffe31f31.css",revision:"2af02a3fffe31f31"},{url:"/_next/static/css/401d940848205d32.css",revision:"401d940848205d32"},{url:"/_next/static/css/44ca21dc1581e404.css",revision:"44ca21dc1581e404"},{url:"/_next/static/css/44f6fc49849cc92d.css",revision:"44f6fc49849cc92d"},{url:"/_next/static/css/61eace8b93ac8452.css",revision:"61eace8b93ac8452"},{url:"/_next/static/css/795ff8480f8d774a.css",revision:"795ff8480f8d774a"},{url:"/_next/static/css/7a39526128f8dd21.css",revision:"7a39526128f8dd21"},{url:"/_next/static/css/9c3d98860ed40ec1.css",revision:"9c3d98860ed40ec1"},{url:"/_next/static/css/fe51d85c837d0be7.css",revision:"fe51d85c837d0be7"},{url:"/_next/static/media/bt_add_to_cart.fb1463ea.svg",revision:"71145515323e376971e1802aa000b90e"},{url:"/_next/static/media/bt_added_to_cart.45632f53.svg",revision:"63405dfb04c4269ecfcc8dfd667cc12f"},{url:"/_next/static/media/email.d46af11e.svg",revision:"1a348c2540a98537a3257bdc67bd5667"},{url:"/_next/static/media/flechita.1c152575.svg",revision:"5d3b853e10a449f36ca6a3f9e8ea95a6"},{url:"/_next/static/media/icon_close.e791344b.png",revision:"e9796d47eb72b46bcaa1f27a41a0ff4b"},{url:"/_next/static/media/icon_menu.b70fc14a.svg",revision:"23ae2bbff5a3a0e37d238045dd321760"},{url:"/_next/static/media/icon_shopping_cart.665a6046.svg",revision:"cd2cb126a70d30fd14c927571fd1920e"},{url:"/_next/static/media/logo_yard_sale.ab5a49e4.svg",revision:"4db98c8925bc0ef833d3a32307652a83"},{url:"/_next/static/mxLjyDlZsPYV4okIONVOn/_buildManifest.js",revision:"72d340dce48908b0c0a629860861df65"},{url:"/_next/static/mxLjyDlZsPYV4okIONVOn/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"7667919932fcba62d2a1cbe9b2485ea7"},{url:"/icon-256x256.png",revision:"efc3421ecfdb1e193f90e8f073ec4ac1"},{url:"/icon-384x384.png",revision:"25fc46b5cf10040aaa20fd99fcc68ce5"},{url:"/icon-512x512.png",revision:"b72c34c12ec88dd0c08c8d8ab51cfbef"},{url:"/manifest.json",revision:"544184eebfc4af072da977e250ddd229"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));