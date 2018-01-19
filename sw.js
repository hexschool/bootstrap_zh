self.importScripts('/assets/js/vendor/workbox-sw.prod.v2.1.2.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
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
    "revision": "6a7d02ead77d78f17c05fc147a53942f"
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
    "revision": "b9509f415a899970396c5cf61dc0e6a0"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "4c2767f364febfaf08e0bd9fb6f1cd94"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "cd93c9a569232ea30bb22244eebff1e0"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "e707568440725d56f34b93b0bb2350a4"
  },
  {
    "url": "assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/js/vendor/clipboard.min.js",
    "revision": "3e5e0fa949e0e7c5ed5fed7b4cc0ee00"
  },
  {
    "url": "assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "assets/js/vendor/jquery-slim.min.js",
    "revision": "5f48fc77cac90c4778fa24ec9c57f37d"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "70d3fda195602fe8b75e0097eed74dde"
  },
  {
    "url": "assets/js/vendor/workbox-sw.prod.v2.1.2.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/bootstrap-grid.css",
    "revision": "cf9ab2f35e8eae4a8584ecb6201227db"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "cd5676f741d5a32508a77bd021d644fc"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "2668ea2089a0a7c796e478c5f2244a9c"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "8fe07934aa345305ccd0c9511a962868"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "bb8c9968a47995d3966b97189e6514ce"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "4616756c400b3383840fd35a80954a0f"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "76995e0105921cac80bc809a785ddb41"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "5ced280ac27a6fcf8725fbf399293298"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "ffbac364dfe4035929782fc265fa353a"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "84e6e85d19e14564e7b84081d5a71b90"
  },
  {
    "url": "docs/4.0/about/brand/index.html",
    "revision": "fb836c5e8865430d99c02d44a5259d6a"
  },
  {
    "url": "docs/4.0/about/index.html",
    "revision": "3e880aebac9e431e72f99e09b1d43fab"
  },
  {
    "url": "docs/4.0/about/license/index.html",
    "revision": "8ed248f8326a0fe3c85cb96750da9156"
  },
  {
    "url": "docs/4.0/about/overview/index.html",
    "revision": "fca371843eaccc1c9f86155837d49967"
  },
  {
    "url": "docs/4.0/about/translations/index.html",
    "revision": "f8f2558fbcfaf612660e6fad7bf4b8a0"
  },
  {
    "url": "docs/4.0/browser-bugs/index.html",
    "revision": "1139af1b0cd131f9b53e1ccf0f2a170f"
  },
  {
    "url": "docs/4.0/components/alerts/index.html",
    "revision": "ef82160364115958d05699bc06d605c6"
  },
  {
    "url": "docs/4.0/components/badge/index.html",
    "revision": "26dae797be38c4d67647ed3fa352a526"
  },
  {
    "url": "docs/4.0/components/breadcrumb/index.html",
    "revision": "36beb959fbcf408718fd28cb357e8b8d"
  },
  {
    "url": "docs/4.0/components/button-group/index.html",
    "revision": "7e97ed649fe9f25ca259577be2ed5198"
  },
  {
    "url": "docs/4.0/components/buttons/index.html",
    "revision": "5e9850aa364c95e3c16a1649b099694d"
  },
  {
    "url": "docs/4.0/components/card/index.html",
    "revision": "241d28a8dc4ce2658ab2114e43578fb5"
  },
  {
    "url": "docs/4.0/components/carousel/index.html",
    "revision": "f68ab7240f529a647e8eee6a57aeacec"
  },
  {
    "url": "docs/4.0/components/collapse/index.html",
    "revision": "9ed64acfe6732beab6769cbfc46dbbc7"
  },
  {
    "url": "docs/4.0/components/dropdowns/index.html",
    "revision": "0ccb964d8b9e69d7dc99346ef82abe06"
  },
  {
    "url": "docs/4.0/components/forms/index.html",
    "revision": "49cdf945accf41b427c516a06ee2d4f3"
  },
  {
    "url": "docs/4.0/components/index.html",
    "revision": "be6aa781c8e4897851b8b229b257a0f3"
  },
  {
    "url": "docs/4.0/components/input-group/index.html",
    "revision": "ad6fc28aa6bde7d857db25a7df3816e5"
  },
  {
    "url": "docs/4.0/components/jumbotron/index.html",
    "revision": "d6814c443e1f34570dda0df58584c073"
  },
  {
    "url": "docs/4.0/components/list-group/index.html",
    "revision": "672d61c580ca39e8656ebf2d94bd4c95"
  },
  {
    "url": "docs/4.0/components/modal/index.html",
    "revision": "03ba0742e25f17963e5b09f044365513"
  },
  {
    "url": "docs/4.0/components/navbar/index.html",
    "revision": "25314b672f29603dda6859969c81658b"
  },
  {
    "url": "docs/4.0/components/navs/index.html",
    "revision": "e6e2c918cb24fd040dbbef83d99e4689"
  },
  {
    "url": "docs/4.0/components/pagination/index.html",
    "revision": "4efcd622f4c9e93f72fc4186674f75d9"
  },
  {
    "url": "docs/4.0/components/popovers/index.html",
    "revision": "3eb816d790d914b10effd08a936138fd"
  },
  {
    "url": "docs/4.0/components/progress/index.html",
    "revision": "2e4a1e3f340182fd137a33dfc50856e9"
  },
  {
    "url": "docs/4.0/components/scrollspy/index.html",
    "revision": "d8e2a07fb353b9aed081ba635954dcf5"
  },
  {
    "url": "docs/4.0/components/tooltips/index.html",
    "revision": "e0bb12cd76efe526802c6ddedf5f2fa2"
  },
  {
    "url": "docs/4.0/content/code/index.html",
    "revision": "3af32fa6b8f2f62e473038443620ff5a"
  },
  {
    "url": "docs/4.0/content/figures/index.html",
    "revision": "6141ba1e32b23572733a4ae14401b0f6"
  },
  {
    "url": "docs/4.0/content/images/index.html",
    "revision": "77d8cf862c9cc65b144da89f4c0efa4f"
  },
  {
    "url": "docs/4.0/content/index.html",
    "revision": "385e7c3b2eb808da6a652ad66911fd40"
  },
  {
    "url": "docs/4.0/content/reboot/index.html",
    "revision": "d6f7bb2e10f9859d203138ea785348eb"
  },
  {
    "url": "docs/4.0/content/tables/index.html",
    "revision": "ed885ec632ecc8a1b2a797f2b703b03d"
  },
  {
    "url": "docs/4.0/content/typography/index.html",
    "revision": "9fdcc47d703a471b237eea0f63d91eac"
  },
  {
    "url": "docs/4.0/examples/album/album.css",
    "revision": "c55364aec72e931ec6e447fef8d7d1fb"
  },
  {
    "url": "docs/4.0/examples/album/index.html",
    "revision": "b6cf65de0e6e62e7cc86cc34fa64bdc4"
  },
  {
    "url": "docs/4.0/examples/blog/blog.css",
    "revision": "750f2ac42509b1d901295d087cac5ef6"
  },
  {
    "url": "docs/4.0/examples/blog/index.html",
    "revision": "a30e42252fbca562ea09080f5ac6da54"
  },
  {
    "url": "docs/4.0/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/4.0/examples/carousel/index.html",
    "revision": "14ed354965a5aef8409d40f9bc71d3a4"
  },
  {
    "url": "docs/4.0/examples/cover/cover.css",
    "revision": "1d0127b6309e72780dd3e87093a9d7e3"
  },
  {
    "url": "docs/4.0/examples/cover/index.html",
    "revision": "60ab17e2c5af81defdf5a93e1865a89c"
  },
  {
    "url": "docs/4.0/examples/dashboard/dashboard.css",
    "revision": "cea2ce48e209721ca537d8ffcad510b9"
  },
  {
    "url": "docs/4.0/examples/dashboard/index.html",
    "revision": "23f3d648bd4641aaabc51676ed84ca6f"
  },
  {
    "url": "docs/4.0/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.0/examples/grid/index.html",
    "revision": "1a634e4a3281204f8d46c5fdaea35a96"
  },
  {
    "url": "docs/4.0/examples/index.html",
    "revision": "894a3c2fb89a3a9209276fbf6ae815ab"
  },
  {
    "url": "docs/4.0/examples/jumbotron/index.html",
    "revision": "041900abf4b6c5525641775885200d5a"
  },
  {
    "url": "docs/4.0/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.0/examples/justified-nav/index.html",
    "revision": "1709885cd4375a48ab7104c9c1bc752d"
  },
  {
    "url": "docs/4.0/examples/justified-nav/justified-nav.css",
    "revision": "74b0be6ad3b421b43288545b9628253f"
  },
  {
    "url": "docs/4.0/examples/narrow-jumbotron/index.html",
    "revision": "526182d9c63d8d3befa2380347f4cb6e"
  },
  {
    "url": "docs/4.0/examples/narrow-jumbotron/narrow-jumbotron.css",
    "revision": "4e5fb23757fb40f595167cd4e14447de"
  },
  {
    "url": "docs/4.0/examples/navbar-bottom/index.html",
    "revision": "35d8cd3a5a267e316ab45f480a191eeb"
  },
  {
    "url": "docs/4.0/examples/navbar-top-fixed/index.html",
    "revision": "1ce40c76fb831fb9bfb81f7a04705555"
  },
  {
    "url": "docs/4.0/examples/navbar-top-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.0/examples/navbar-top/index.html",
    "revision": "86ce704638e9227d79683e9928ad258a"
  },
  {
    "url": "docs/4.0/examples/navbar-top/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.0/examples/navbars/index.html",
    "revision": "cb279d345c72f6f4fab4a17df396696e"
  },
  {
    "url": "docs/4.0/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.0/examples/offcanvas/index.html",
    "revision": "6263d8ff8ab234d8b1e6d29216021af8"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.css",
    "revision": "77eca95a4f55dd917ba95db9ac28bac9"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.js",
    "revision": "fe67880b053d4a4a9f318db8e0e71fb2"
  },
  {
    "url": "docs/4.0/examples/screenshots/album.png",
    "revision": "ffaf0fd56864daafaa2ea23a3f2a8a4c"
  },
  {
    "url": "docs/4.0/examples/screenshots/blog.png",
    "revision": "db2571d976d8b910af2dd7fee0a97794"
  },
  {
    "url": "docs/4.0/examples/screenshots/carousel.png",
    "revision": "3ef960de8ed9de239dbebf855d3e693e"
  },
  {
    "url": "docs/4.0/examples/screenshots/cover.png",
    "revision": "f8234debe0727d830d378804fa6920ba"
  },
  {
    "url": "docs/4.0/examples/screenshots/dashboard.png",
    "revision": "564c98a3e0fb945b7cfa4941a9bfc072"
  },
  {
    "url": "docs/4.0/examples/screenshots/grid.png",
    "revision": "a3501bda7dcdde8a731e60988375ff71"
  },
  {
    "url": "docs/4.0/examples/screenshots/jumbotron-narrow.png",
    "revision": "da2fea942e2b79e889461234b2dce637"
  },
  {
    "url": "docs/4.0/examples/screenshots/jumbotron.png",
    "revision": "56e944951506af4971317a0e1d6a6b53"
  },
  {
    "url": "docs/4.0/examples/screenshots/justified-nav.png",
    "revision": "4f24d1d5953e79423cbe0254adf1ab5e"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-bottom.png",
    "revision": "88f890990c2f75a00cec172d401aef10"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-fixed.png",
    "revision": "c3af88c33126f669f2006f9e2c629fa2"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-static.png",
    "revision": "a289e262bb99e84a494fad461082e8f3"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar.png",
    "revision": "c93f7634deb8db461efd121fae384de7"
  },
  {
    "url": "docs/4.0/examples/screenshots/offcanvas.png",
    "revision": "983be61f621aac2d19131df71a8ae309"
  },
  {
    "url": "docs/4.0/examples/screenshots/sign-in.png",
    "revision": "11f97fb403f227e059e00c4afa6a12fd"
  },
  {
    "url": "docs/4.0/examples/screenshots/starter-template.png",
    "revision": "a12386401c848ad90d4e3627858e973d"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer-navbar.png",
    "revision": "3047deed467cfc70d9ab33b1ac75cda6"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer.png",
    "revision": "525e473da6359f1db1c5c1769190c438"
  },
  {
    "url": "docs/4.0/examples/signin/index.html",
    "revision": "b4194ddd0649c17ca4cd965b044b84ca"
  },
  {
    "url": "docs/4.0/examples/signin/signin.css",
    "revision": "04ce7b8379c81529b418edbdb4e677aa"
  },
  {
    "url": "docs/4.0/examples/starter-template/index.html",
    "revision": "c7e901f8203094969c3e25ff764531ca"
  },
  {
    "url": "docs/4.0/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/index.html",
    "revision": "61f4c1014db3fd049b854a8127bddc0c"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/index.html",
    "revision": "0cd4be44abfd7e0a43438dc5f072d1e4"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/index.html",
    "revision": "9a79ac79c088c8913be8f1b73cad5352"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.0/extend/approach/index.html",
    "revision": "17e894611e3ecf9c2962fa89e0288de4"
  },
  {
    "url": "docs/4.0/extend/icons/index.html",
    "revision": "a8b7716312513a5c7468a55f96b49a4e"
  },
  {
    "url": "docs/4.0/extend/index.html",
    "revision": "a5d571934c0dc1152576314affe7bf41"
  },
  {
    "url": "docs/4.0/getting-started/accessibility/index.html",
    "revision": "f284f48c92f93fd1a924997b5fcdc09a"
  },
  {
    "url": "docs/4.0/getting-started/best-practices/index.html",
    "revision": "29c91913dc83817a5260b5bfc850a2d0"
  },
  {
    "url": "docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "0cd69057cf533bb8be7775eb7427667f"
  },
  {
    "url": "docs/4.0/getting-started/build-tools/index.html",
    "revision": "9c69d06f9136ee6fc4a7044bc8113152"
  },
  {
    "url": "docs/4.0/getting-started/contents/index.html",
    "revision": "0eacf744ad08651e5b10d865a7fa761f"
  },
  {
    "url": "docs/4.0/getting-started/download/index.html",
    "revision": "0ec8fbefaa9863f1604cea4dccf935d6"
  },
  {
    "url": "docs/4.0/getting-started/index.html",
    "revision": "1ded88beb0958b0b3b33b57f613d9a02"
  },
  {
    "url": "docs/4.0/getting-started/introduction/index.html",
    "revision": "3f5e2201ca4e9d2e50b31035fa4cf2f3"
  },
  {
    "url": "docs/4.0/getting-started/javascript/index.html",
    "revision": "3e59366ef11215f2906e82a44e2ec850"
  },
  {
    "url": "docs/4.0/getting-started/options/index.html",
    "revision": "3251063571199ee0ed0be7928fc77ab6"
  },
  {
    "url": "docs/4.0/getting-started/theming/index.html",
    "revision": "675305335c78d4e430cef9b79edbfbd9"
  },
  {
    "url": "docs/4.0/getting-started/webpack/index.html",
    "revision": "3530c238edf421c9048d1b277110fda8"
  },
  {
    "url": "docs/4.0/history/index.html",
    "revision": "3e880aebac9e431e72f99e09b1d43fab"
  },
  {
    "url": "docs/4.0/index.html",
    "revision": "1ded88beb0958b0b3b33b57f613d9a02"
  },
  {
    "url": "docs/4.0/layout/grid/index.html",
    "revision": "9773558ad2b40818ab0da8993ebe4755"
  },
  {
    "url": "docs/4.0/layout/index.html",
    "revision": "b26da7ad51b36bc28c3ebc7c3fcdaec4"
  },
  {
    "url": "docs/4.0/layout/media-object/index.html",
    "revision": "73ae25f8741cec28ebcf30e5d1b590d6"
  },
  {
    "url": "docs/4.0/layout/overview/index.html",
    "revision": "ac8b7717d94c29df023728daceb9ec11"
  },
  {
    "url": "docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "9daca04435f9796e404eff180fa70dbf"
  },
  {
    "url": "docs/4.0/migration/index.html",
    "revision": "86e0d5b15de74a413058fa3f20ec2f90"
  },
  {
    "url": "docs/4.0/team/index.html",
    "revision": "3e880aebac9e431e72f99e09b1d43fab"
  },
  {
    "url": "docs/4.0/utilities/borders/index.html",
    "revision": "2ddfca222bb6fdbbef871c70a9ffe6f4"
  },
  {
    "url": "docs/4.0/utilities/clearfix/index.html",
    "revision": "ac1ac343f2d4399d15677b44cd3ec2ab"
  },
  {
    "url": "docs/4.0/utilities/close-icon/index.html",
    "revision": "6f675dc660668829a3616b2a1502b966"
  },
  {
    "url": "docs/4.0/utilities/colors/index.html",
    "revision": "5ec4fdee82f34ba33fd247b6ae9e2cc3"
  },
  {
    "url": "docs/4.0/utilities/display/index.html",
    "revision": "a27a1dbeccec778876f41176841deb38"
  },
  {
    "url": "docs/4.0/utilities/embed/index.html",
    "revision": "bcfa9105c816c7e073e0cb6bcbcdbc46"
  },
  {
    "url": "docs/4.0/utilities/flex/index.html",
    "revision": "04e24c71b0ad34dd1cb8cc6998fcad32"
  },
  {
    "url": "docs/4.0/utilities/float/index.html",
    "revision": "e2dec18d9562795a93fa4d7401168325"
  },
  {
    "url": "docs/4.0/utilities/image-replacement/index.html",
    "revision": "b21dc34d27682dd9fa4578bc27cf656d"
  },
  {
    "url": "docs/4.0/utilities/index.html",
    "revision": "19e3ae7bcbc6dcdffe26dfaf88e6f329"
  },
  {
    "url": "docs/4.0/utilities/position/index.html",
    "revision": "2082ab0572b29226c8daf44df165c713"
  },
  {
    "url": "docs/4.0/utilities/screenreaders/index.html",
    "revision": "c55d57e58455fd5e6066c3971b7d434f"
  },
  {
    "url": "docs/4.0/utilities/sizing/index.html",
    "revision": "3f6d3ae86ad329e26a5f3da7121dda0d"
  },
  {
    "url": "docs/4.0/utilities/spacing/index.html",
    "revision": "47bd1d62f7b43cb36d8dd95d4485bf80"
  },
  {
    "url": "docs/4.0/utilities/text/index.html",
    "revision": "ce386d7f6c32d0538b4ebed95a98c8ff"
  },
  {
    "url": "docs/4.0/utilities/vertical-align/index.html",
    "revision": "a7e24e04d5a3dcacd5051bcb4139c8f0"
  },
  {
    "url": "docs/4.0/utilities/visibility/index.html",
    "revision": "4fe441fa1971407fcf5a2e932c4a8ffa"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "1ded88beb0958b0b3b33b57f613d9a02"
  },
  {
    "url": "docs/index.html",
    "revision": "1ded88beb0958b0b3b33b57f613d9a02"
  },
  {
    "url": "examples/index.html",
    "revision": "f480e6f47f9c7a84fa2163251572d635"
  },
  {
    "url": "gulpfile.js",
    "revision": "13ef157aa9e12f1de34fd68b1bb26035"
  },
  {
    "url": "index.html",
    "revision": "11b2e92168c5e529bde603c95cf52aa7"
  },
  {
    "url": "redirects.json",
    "revision": "bd9d2b3d76ea7b054f10eaa4c1e3d59b"
  },
  {
    "url": "sw.js",
    "revision": "42f72988cbd613ae00b4a2c3390712ae"
  }
])
