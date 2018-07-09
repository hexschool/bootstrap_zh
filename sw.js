/* global workbox:false */

self.importScripts('/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "404/index.html",
    "revision": "6e7b81fa569f0ae86939f58f20d6ea41"
  },
  {
    "url": "assets/brand/bootstrap-outline.svg",
    "revision": "9537646a9202cb5dca44e9034c1b414b"
  },
  {
    "url": "assets/brand/bootstrap-punchout.svg",
    "revision": "372e344ac243c4fa7c6c8b8a2af0e5ff"
  },
  {
    "url": "assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "assets/brand/bootstrap-solid.svg",
    "revision": "ea931a5b98a97e8b8658d9f6d537329e"
  },
  {
    "url": "assets/css/docs.min.css",
    "revision": "6e3cd62366e30b36d229cb7eb5c064ed"
  },
  {
    "url": "assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "assets/img/favicons/manifest.json",
    "revision": "eed73af41f4e55d335b5b3fa8c78538d"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "assets/img/favicons/safari-pinned-tab.svg",
    "revision": "6b6b78894033fd91ce75affb548d8e67"
  },
  {
    "url": "assets/js/docs.min.js",
    "revision": "9109c979ae60b0c5584b59ca6945d630"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "83edc01382cfd889f982162964ec374e"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "c6e7032adf9bd98ac39e83c83108977b"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "cac6034355863d6205e66862f6a729f7"
  },
  {
    "url": "assets/js/src/search.js",
    "revision": "5b8bb2081b9e10ee9a469dd5feca5996"
  },
  {
    "url": "assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/js/vendor/clipboard.min.js",
    "revision": "3f3688138a1b9fc4ef669ce9056b6674"
  },
  {
    "url": "assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "assets/js/vendor/jquery-slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "assets/js/vendor/workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/bootstrap-grid.css",
    "revision": "db438cff680b6d0c029f75647b4b138a"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "2206c9fb0197956129137af662b31115"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "cceed351e3a8401f573988a38e78d3a8"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "e2b23d34f3fcc9ce074c942e76f25d61"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "82252d754417f95f7779be349acc6361"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "a7022c6fa83d91db67738d6e3cd3252d"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "ee08eb7f44335a3cf385e03d4406e4a5"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "d70c474886678aebe3e9d91965dc8b62"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "c2cdb900858c3e63ce8cd9f69171d342"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "eb5fac582a82f296aeb74900b01a2fa3"
  },
  {
    "url": "docs/4.1/about/brand/index.html",
    "revision": "0e567ffc3668d5ec6e05da4df27d6f54"
  },
  {
    "url": "docs/4.1/about/index.html",
    "revision": "c3f9afe8bfc28063fcecea49378988c4"
  },
  {
    "url": "docs/4.1/about/license/index.html",
    "revision": "ed048a9b5ffb0a5d32644e0cc39ca73b"
  },
  {
    "url": "docs/4.1/about/overview/index.html",
    "revision": "39598abaf2fb2518e64c62b746823c78"
  },
  {
    "url": "docs/4.1/about/translations/index.html",
    "revision": "5bc3424a074520a3baa09bd4c5805f03"
  },
  {
    "url": "docs/4.1/browser-bugs/index.html",
    "revision": "4a09553fdad9783dad7598279f50c810"
  },
  {
    "url": "docs/4.1/components/alerts/index.html",
    "revision": "7a01afc14d79cbfd3a078582636d07a4"
  },
  {
    "url": "docs/4.1/components/badge/index.html",
    "revision": "9a3553d411e90bf33f5ee5096ce28e97"
  },
  {
    "url": "docs/4.1/components/breadcrumb/index.html",
    "revision": "8cc60e8fd43b3ff436a6dbf11fd91dc6"
  },
  {
    "url": "docs/4.1/components/button-group/index.html",
    "revision": "c1f981d5dbebfcb0d03efcc50a4191fc"
  },
  {
    "url": "docs/4.1/components/buttons/index.html",
    "revision": "50b019336419b46af6fb9b3ca73f82f5"
  },
  {
    "url": "docs/4.1/components/card/index.html",
    "revision": "b7c0d4acd4c6d7b6836124dcb843f8d6"
  },
  {
    "url": "docs/4.1/components/carousel/index.html",
    "revision": "cf4d8debd0ce566e9dfdc4a24f409389"
  },
  {
    "url": "docs/4.1/components/collapse/index.html",
    "revision": "3c60d247da35fd2df0207e42dfedf3ea"
  },
  {
    "url": "docs/4.1/components/dropdowns/index.html",
    "revision": "e024fcf284f370f0f7702652e41b4158"
  },
  {
    "url": "docs/4.1/components/forms/index.html",
    "revision": "cf8560a2c83ab9ddc53cfb914f4bbd05"
  },
  {
    "url": "docs/4.1/components/index.html",
    "revision": "da631e2d2a87420dcfb1f7d83127c988"
  },
  {
    "url": "docs/4.1/components/input-group/index.html",
    "revision": "032260b4a910b3810182c63e9edd6d25"
  },
  {
    "url": "docs/4.1/components/jumbotron/index.html",
    "revision": "aa12acee55a796b6494d517873624233"
  },
  {
    "url": "docs/4.1/components/list-group/index.html",
    "revision": "03700ec2c3093da3baafaa0b60dfd063"
  },
  {
    "url": "docs/4.1/components/modal/index.html",
    "revision": "c07d85bb898c1163e0739cd7d29b2ab1"
  },
  {
    "url": "docs/4.1/components/navbar/index.html",
    "revision": "72f8aec2e76b4395241de5683b04bb90"
  },
  {
    "url": "docs/4.1/components/navs/index.html",
    "revision": "102ba3db448454080b7f44c5541ae453"
  },
  {
    "url": "docs/4.1/components/pagination/index.html",
    "revision": "1ac8e0fc9e353fe4c8fce6ba41b454db"
  },
  {
    "url": "docs/4.1/components/popovers/index.html",
    "revision": "18cd0ed4436ba3d202944eff5a962ae7"
  },
  {
    "url": "docs/4.1/components/progress/index.html",
    "revision": "342b48719e93e7a6f957e0e83f662f02"
  },
  {
    "url": "docs/4.1/components/scrollspy/index.html",
    "revision": "2621db708f46ca114ec432d7b15e9d34"
  },
  {
    "url": "docs/4.1/components/tooltips/index.html",
    "revision": "6d0c608c0e8561784c0ed40d22aa9de3"
  },
  {
    "url": "docs/4.1/content/code/index.html",
    "revision": "d32ccf1aa8d7511e47814c96076fd3a1"
  },
  {
    "url": "docs/4.1/content/figures/index.html",
    "revision": "6f1c574732ad15d5c5748220c8f785ff"
  },
  {
    "url": "docs/4.1/content/images/index.html",
    "revision": "36a640bd77d7ea381f8cecbeef19b1e1"
  },
  {
    "url": "docs/4.1/content/index.html",
    "revision": "05df09abb99170e783e743c20d052526"
  },
  {
    "url": "docs/4.1/content/reboot/index.html",
    "revision": "19c7763f3fe778e3d02acb92625e99a5"
  },
  {
    "url": "docs/4.1/content/tables/index.html",
    "revision": "d2baf8826432e08319be905bc9912caf"
  },
  {
    "url": "docs/4.1/content/typography/index.html",
    "revision": "1751d301d3c3fc921be6834b38e7d845"
  },
  {
    "url": "docs/4.1/examples/album/album.css",
    "revision": "e8343131a0fefafe6ae0f37db6d10f3c"
  },
  {
    "url": "docs/4.1/examples/album/index.html",
    "revision": "8088e1d95bc9263681886821a80f5bcc"
  },
  {
    "url": "docs/4.1/examples/blog/blog.css",
    "revision": "095c85e484178b56ad0446775869e628"
  },
  {
    "url": "docs/4.1/examples/blog/index.html",
    "revision": "c1d0cf090944a6369dcfeaeebbf73eff"
  },
  {
    "url": "docs/4.1/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/4.1/examples/carousel/index.html",
    "revision": "b60a1b9d8a622551914f1869d2070ca6"
  },
  {
    "url": "docs/4.1/examples/checkout/form-validation.css",
    "revision": "d13d35a0c04021ceacd8c153719860bc"
  },
  {
    "url": "docs/4.1/examples/checkout/index.html",
    "revision": "79021acecd4d9e2e84e26cf84153153b"
  },
  {
    "url": "docs/4.1/examples/cover/cover.css",
    "revision": "211daf4eee015cb38fb10893c4645bbb"
  },
  {
    "url": "docs/4.1/examples/cover/index.html",
    "revision": "3c6d961d4b1d583a8cf972d66d6b8171"
  },
  {
    "url": "docs/4.1/examples/dashboard/dashboard.css",
    "revision": "419f2b36ccf58f5cb1b5b557658b65dd"
  },
  {
    "url": "docs/4.1/examples/dashboard/index.html",
    "revision": "de15dff920a3aebbb324d257985e4ba8"
  },
  {
    "url": "docs/4.1/examples/floating-labels/floating-labels.css",
    "revision": "0711f793d4f6bc20572f9b357c061b5b"
  },
  {
    "url": "docs/4.1/examples/floating-labels/index.html",
    "revision": "e16e25d95c2a41f6d3d8ff7b94b82936"
  },
  {
    "url": "docs/4.1/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.1/examples/grid/index.html",
    "revision": "1a634e4a3281204f8d46c5fdaea35a96"
  },
  {
    "url": "docs/4.1/examples/index.html",
    "revision": "321046795b3187055bcab6e573d504ce"
  },
  {
    "url": "docs/4.1/examples/jumbotron/index.html",
    "revision": "187a48844da8e19e0765d417a5077f81"
  },
  {
    "url": "docs/4.1/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.1/examples/navbar-bottom/index.html",
    "revision": "dd165c45857a4239ce7787aea5a7bff5"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/index.html",
    "revision": "1178a7c1f06eeeea76176173b2e0d7fd"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.1/examples/navbar-static/index.html",
    "revision": "8f818f7c1ab4e90bf1ea9b0bd0adb5b3"
  },
  {
    "url": "docs/4.1/examples/navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.1/examples/navbars/index.html",
    "revision": "84494d9562fd4bfb7a613cde029e839f"
  },
  {
    "url": "docs/4.1/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.1/examples/offcanvas/index.html",
    "revision": "7543497ce75575f523a11efb856b54e8"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.css",
    "revision": "b5d28d8db34c23de78c46784c4ba4331"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.1/examples/pricing/index.html",
    "revision": "418289199fbd0b6749424611483058fd"
  },
  {
    "url": "docs/4.1/examples/pricing/pricing.css",
    "revision": "1e170831b26afb7a6bcde4f0bc2cb29b"
  },
  {
    "url": "docs/4.1/examples/product/index.html",
    "revision": "7424fe35dc94c1190849c8627cc33ef0"
  },
  {
    "url": "docs/4.1/examples/product/product.css",
    "revision": "9db57bf56394ba8cd85abd5f7ebc8ef1"
  },
  {
    "url": "docs/4.1/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/4.1/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/4.1/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/4.1/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/4.1/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/4.1/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/4.1/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/4.1/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/4.1/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/4.1/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/4.1/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/4.1/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/4.1/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/4.1/examples/sign-in/index.html",
    "revision": "0739de40d4fb2333772503ff6a475b18"
  },
  {
    "url": "docs/4.1/examples/sign-in/signin.css",
    "revision": "00e205f17ee0cd3f59d5e1e1e9cf3b3f"
  },
  {
    "url": "docs/4.1/examples/starter-template/index.html",
    "revision": "d405e899854462588983ff1b304f7d0d"
  },
  {
    "url": "docs/4.1/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/index.html",
    "revision": "cf52f64c92b9c1fae606d610fe2d2116"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/index.html",
    "revision": "7f8a7abbce45fa7d948f8fe3a41c3545"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/index.html",
    "revision": "b1074cded6dd5b3603fd470151af233e"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.1/extend/approach/index.html",
    "revision": "ed8aae6d849e03e19558d1a225490dec"
  },
  {
    "url": "docs/4.1/extend/icons/index.html",
    "revision": "76095e64afcf4c6e5c0510894d20ab9a"
  },
  {
    "url": "docs/4.1/extend/index.html",
    "revision": "872440738cb61d9dcddde5b82f22fd50"
  },
  {
    "url": "docs/4.1/getting-started/accessibility/index.html",
    "revision": "c7eeac587de218821ccfdb1c7a6adf77"
  },
  {
    "url": "docs/4.1/getting-started/best-practices/index.html",
    "revision": "81b54b650b3e797047b1f226f07ab35f"
  },
  {
    "url": "docs/4.1/getting-started/browsers-devices/index.html",
    "revision": "f14fa2d666ebdb5f493ea9175a8da0ae"
  },
  {
    "url": "docs/4.1/getting-started/build-tools/index.html",
    "revision": "d2c4c295f4632917962f0793be5cf662"
  },
  {
    "url": "docs/4.1/getting-started/contents/index.html",
    "revision": "dd783bd5343db16193b5ab359183bbe3"
  },
  {
    "url": "docs/4.1/getting-started/download/index.html",
    "revision": "de10a1143ee010e8ca9b4bf8c4d5fde3"
  },
  {
    "url": "docs/4.1/getting-started/index.html",
    "revision": "5b3826fc4ba7bba8b969e7eef70434cf"
  },
  {
    "url": "docs/4.1/getting-started/introduction/index.html",
    "revision": "91d4d5baf25716376d1c924a02f74ace"
  },
  {
    "url": "docs/4.1/getting-started/javascript/index.html",
    "revision": "03e54c94e3886874df43074f6ac2ae6a"
  },
  {
    "url": "docs/4.1/getting-started/options/index.html",
    "revision": "aefff83212b59f5f322bdc538d2d75f0"
  },
  {
    "url": "docs/4.1/getting-started/theming/index.html",
    "revision": "023f96ae09f53a9f6b132e8ad18b01b9"
  },
  {
    "url": "docs/4.1/getting-started/webpack/index.html",
    "revision": "7bac6532eefd47ebd1a559426bd7df2f"
  },
  {
    "url": "docs/4.1/history/index.html",
    "revision": "c3f9afe8bfc28063fcecea49378988c4"
  },
  {
    "url": "docs/4.1/index.html",
    "revision": "5b3826fc4ba7bba8b969e7eef70434cf"
  },
  {
    "url": "docs/4.1/layout/grid/index.html",
    "revision": "6f66c44d122d078b236e90e85d055aee"
  },
  {
    "url": "docs/4.1/layout/index.html",
    "revision": "254775fd0bd2ef3a90fdf78920917e39"
  },
  {
    "url": "docs/4.1/layout/media-object/index.html",
    "revision": "02de8e6482f215ed83be31162ba97186"
  },
  {
    "url": "docs/4.1/layout/overview/index.html",
    "revision": "5fec2384dc589976b74354d1b54e6566"
  },
  {
    "url": "docs/4.1/layout/utilities-for-layout/index.html",
    "revision": "f3158380b01344607101de82cbb8342f"
  },
  {
    "url": "docs/4.1/migration/index.html",
    "revision": "5d688c8229a43d467be002688184fb4c"
  },
  {
    "url": "docs/4.1/team/index.html",
    "revision": "c3f9afe8bfc28063fcecea49378988c4"
  },
  {
    "url": "docs/4.1/utilities/borders/index.html",
    "revision": "47ba070d2d807de1c49709347ed19e0e"
  },
  {
    "url": "docs/4.1/utilities/clearfix/index.html",
    "revision": "9d40e542d09deac61ec3bfa0f7ae84c8"
  },
  {
    "url": "docs/4.1/utilities/close-icon/index.html",
    "revision": "a5a91c09c9d5df59951e81f3fcb3eb3b"
  },
  {
    "url": "docs/4.1/utilities/colors/index.html",
    "revision": "e531f391b71c468b92145b403664fc30"
  },
  {
    "url": "docs/4.1/utilities/display/index.html",
    "revision": "da2e0d67c23b8a6943ac1015ffacb027"
  },
  {
    "url": "docs/4.1/utilities/embed/index.html",
    "revision": "362319477bf7cb8bf8ddc9c3e036d595"
  },
  {
    "url": "docs/4.1/utilities/flex/index.html",
    "revision": "460f6c1e1d41109bdbf4b8723f0f07df"
  },
  {
    "url": "docs/4.1/utilities/float/index.html",
    "revision": "e25df6e50cfcd67a074d7bb78bd7d87d"
  },
  {
    "url": "docs/4.1/utilities/image-replacement/index.html",
    "revision": "ab924b18c4d732ce3fbdb84f53a8d608"
  },
  {
    "url": "docs/4.1/utilities/index.html",
    "revision": "e0ad80ceb110c98bc84e9d4234becd37"
  },
  {
    "url": "docs/4.1/utilities/position/index.html",
    "revision": "3b8c1d98a65fc07693cb4677d02bf29a"
  },
  {
    "url": "docs/4.1/utilities/screenreaders/index.html",
    "revision": "d24d8f22c07c8b9f2aa4f587f3387227"
  },
  {
    "url": "docs/4.1/utilities/shadows/index.html",
    "revision": "b7634b7f8cd3997273730630f10016c5"
  },
  {
    "url": "docs/4.1/utilities/sizing/index.html",
    "revision": "ddd633f4b435182dd2ed3c77e98593a2"
  },
  {
    "url": "docs/4.1/utilities/spacing/index.html",
    "revision": "9777a0bbf0fafa883a3fab2f43fc34f3"
  },
  {
    "url": "docs/4.1/utilities/text/index.html",
    "revision": "612b96fc7eaa1ee4497d72bd749a4c39"
  },
  {
    "url": "docs/4.1/utilities/vertical-align/index.html",
    "revision": "509bd472a245de7779331d216ec81068"
  },
  {
    "url": "docs/4.1/utilities/visibility/index.html",
    "revision": "751cbd7c2e6faa8d9098eb020955480b"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "5b3826fc4ba7bba8b969e7eef70434cf"
  },
  {
    "url": "docs/index.html",
    "revision": "5b3826fc4ba7bba8b969e7eef70434cf"
  },
  {
    "url": "examples/index.html",
    "revision": "4149d8aff69fb6641e811c6673f03005"
  },
  {
    "url": "gulpfile.js",
    "revision": "13ef157aa9e12f1de34fd68b1bb26035"
  },
  {
    "url": "index.html",
    "revision": "2de88a1678f455525d70d9cf95e4d629"
  },
  {
    "url": "redirects.json",
    "revision": "d5cca7b9d3df4877003726c2645795cb"
  }
])
