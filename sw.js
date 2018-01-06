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
    "revision": "859fb4f7483996e83a08bf3a493ec9ee"
  },
  {
    "url": "docs/4.0/about/index.html",
    "revision": "3e880aebac9e431e72f99e09b1d43fab"
  },
  {
    "url": "docs/4.0/about/license/index.html",
    "revision": "e76f6e6132765a4eef73e2cb0dc7d87c"
  },
  {
    "url": "docs/4.0/about/overview/index.html",
    "revision": "8b2ab03ff3c03b9b4f845f6def3d9e98"
  },
  {
    "url": "docs/4.0/about/translations/index.html",
    "revision": "e4127a3b3acc4f14b051fee9e211947f"
  },
  {
    "url": "docs/4.0/browser-bugs/index.html",
    "revision": "147954f5d9b472e343a901df87030275"
  },
  {
    "url": "docs/4.0/components/alerts/index.html",
    "revision": "22ef6fb85e6e12d60b356aad2cbde264"
  },
  {
    "url": "docs/4.0/components/badge/index.html",
    "revision": "251615be775dc3e85800b3b9ed17c38d"
  },
  {
    "url": "docs/4.0/components/breadcrumb/index.html",
    "revision": "ed6eb9fa1132fa7d1764f36440accde0"
  },
  {
    "url": "docs/4.0/components/button-group/index.html",
    "revision": "b2050c112f1ae3e05fd808f1022dfacc"
  },
  {
    "url": "docs/4.0/components/buttons/index.html",
    "revision": "0b8621a329846d2eb49a4ea62c62c25a"
  },
  {
    "url": "docs/4.0/components/card/index.html",
    "revision": "14cfad3870e1d5b5021a342c05bd4269"
  },
  {
    "url": "docs/4.0/components/carousel/index.html",
    "revision": "95889821c1f2c128558ee8b8b714b7e6"
  },
  {
    "url": "docs/4.0/components/collapse/index.html",
    "revision": "cfc54895a37355c7d7afa29dd9d43434"
  },
  {
    "url": "docs/4.0/components/dropdowns/index.html",
    "revision": "ba9549003b72eefc2b3cff91048dd35d"
  },
  {
    "url": "docs/4.0/components/forms/index.html",
    "revision": "60707d896bd3fb08d1bc99437452ce13"
  },
  {
    "url": "docs/4.0/components/index.html",
    "revision": "be6aa781c8e4897851b8b229b257a0f3"
  },
  {
    "url": "docs/4.0/components/input-group/index.html",
    "revision": "20b6895b0d23a83121de2d6a7f8a28d7"
  },
  {
    "url": "docs/4.0/components/jumbotron/index.html",
    "revision": "77706b1c206a7af0eb118cd51f111ca2"
  },
  {
    "url": "docs/4.0/components/list-group/index.html",
    "revision": "d5f3c9a0b0ca839780b37c16db7c47d7"
  },
  {
    "url": "docs/4.0/components/modal/index.html",
    "revision": "b6c3809cdd9f4f9d654c457339dce5eb"
  },
  {
    "url": "docs/4.0/components/navbar/index.html",
    "revision": "6d21e00730fcad7773f1a93aa301540d"
  },
  {
    "url": "docs/4.0/components/navs/index.html",
    "revision": "118a92f18de5255f2960816ee8697780"
  },
  {
    "url": "docs/4.0/components/pagination/index.html",
    "revision": "c590a9f4834e28eab86d1004baffda7e"
  },
  {
    "url": "docs/4.0/components/popovers/index.html",
    "revision": "bdf2a07162ec7030ac7a84c54f8459d8"
  },
  {
    "url": "docs/4.0/components/progress/index.html",
    "revision": "ac085a87f85409d91095d92302253071"
  },
  {
    "url": "docs/4.0/components/scrollspy/index.html",
    "revision": "7bbc35670ca65c02e2ff87173d1acf71"
  },
  {
    "url": "docs/4.0/components/tooltips/index.html",
    "revision": "947fd757eb6feb4ceb5bb38fffa7e631"
  },
  {
    "url": "docs/4.0/content/code/index.html",
    "revision": "36fa8e6224454df9e7b5402345e50d1a"
  },
  {
    "url": "docs/4.0/content/figures/index.html",
    "revision": "9ef261e175d81074e8104203cb3ecc3b"
  },
  {
    "url": "docs/4.0/content/images/index.html",
    "revision": "0888e1830d357e05b1048a849caaf05d"
  },
  {
    "url": "docs/4.0/content/index.html",
    "revision": "385e7c3b2eb808da6a652ad66911fd40"
  },
  {
    "url": "docs/4.0/content/reboot/index.html",
    "revision": "73d4dd7e794f5c1827dc70a0c17c5365"
  },
  {
    "url": "docs/4.0/content/tables/index.html",
    "revision": "8ba680403ad83150b02ea8fb32277f2e"
  },
  {
    "url": "docs/4.0/content/typography/index.html",
    "revision": "2e896910ce0c936aece87609b182f983"
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
    "revision": "8a3bf83ed3492b9d9032a658fd5e560c"
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
    "revision": "d4c2d4f2386ab3c674e6c170e84d24b0"
  },
  {
    "url": "docs/4.0/extend/icons/index.html",
    "revision": "5ef87bc762c3218fa13a19264fbda928"
  },
  {
    "url": "docs/4.0/extend/index.html",
    "revision": "a574c5ebbc403089a8dbe864deac2626"
  },
  {
    "url": "docs/4.0/getting-started/accessibility/index.html",
    "revision": "97fda13c6e9f48b79e716cc53b48c03d"
  },
  {
    "url": "docs/4.0/getting-started/best-practices/index.html",
    "revision": "bab755d4f1d34cb38afb22530feffe3e"
  },
  {
    "url": "docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "83271678be0187d9bc00e47956d73dd0"
  },
  {
    "url": "docs/4.0/getting-started/build-tools/index.html",
    "revision": "8a30e620a698ee216107c57af4145303"
  },
  {
    "url": "docs/4.0/getting-started/contents/index.html",
    "revision": "8487300ceff340b0a72d5b4972151745"
  },
  {
    "url": "docs/4.0/getting-started/download/index.html",
    "revision": "d1dfd494e0f5798a414d2e650f84b967"
  },
  {
    "url": "docs/4.0/getting-started/index.html",
    "revision": "1ded88beb0958b0b3b33b57f613d9a02"
  },
  {
    "url": "docs/4.0/getting-started/introduction/index.html",
    "revision": "7ac8cf8aa150dd83724f10378e8c6de8"
  },
  {
    "url": "docs/4.0/getting-started/javascript/index.html",
    "revision": "95070787887cc770bb95c1d044e0cb7b"
  },
  {
    "url": "docs/4.0/getting-started/options/index.html",
    "revision": "3251063571199ee0ed0be7928fc77ab6"
  },
  {
    "url": "docs/4.0/getting-started/theming/index.html",
    "revision": "9d9abfe07409054b21df977f82cc68b3"
  },
  {
    "url": "docs/4.0/getting-started/webpack/index.html",
    "revision": "873632cd23a42d5fb555d10246769b58"
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
    "revision": "bae45c191a69cf7aee75dccfbdc99e9f"
  },
  {
    "url": "docs/4.0/layout/index.html",
    "revision": "b26da7ad51b36bc28c3ebc7c3fcdaec4"
  },
  {
    "url": "docs/4.0/layout/media-object/index.html",
    "revision": "36de8ccd4f07cd3a436e35750c06c923"
  },
  {
    "url": "docs/4.0/layout/overview/index.html",
    "revision": "48df191da0c33169588f7a5328deb42e"
  },
  {
    "url": "docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "b50b2d699ead85cc7f3134cab6b8e78d"
  },
  {
    "url": "docs/4.0/migration/index.html",
    "revision": "4b1cfe625630cb793efed7d68fdc1654"
  },
  {
    "url": "docs/4.0/team/index.html",
    "revision": "3e880aebac9e431e72f99e09b1d43fab"
  },
  {
    "url": "docs/4.0/utilities/borders/index.html",
    "revision": "6fd269ac4ebe4fa64eeacf44601f3f05"
  },
  {
    "url": "docs/4.0/utilities/clearfix/index.html",
    "revision": "ecfdb4e80a54ac297542d48d468214f3"
  },
  {
    "url": "docs/4.0/utilities/close-icon/index.html",
    "revision": "60f72024bef4db3f608297055c384c8f"
  },
  {
    "url": "docs/4.0/utilities/colors/index.html",
    "revision": "f4fb83bc1fa221f33b66549d5a53f385"
  },
  {
    "url": "docs/4.0/utilities/display/index.html",
    "revision": "fa7c3dccb742fd80c8893f1474a1bb99"
  },
  {
    "url": "docs/4.0/utilities/embed/index.html",
    "revision": "2c0bff5f20a1ca0b0b95abb08c8331bb"
  },
  {
    "url": "docs/4.0/utilities/flex/index.html",
    "revision": "acc9c27bc2e19c23ce2bda6abcfa5b41"
  },
  {
    "url": "docs/4.0/utilities/float/index.html",
    "revision": "93ef23c899c67503400cf4113cf25928"
  },
  {
    "url": "docs/4.0/utilities/image-replacement/index.html",
    "revision": "adef9b57997a15214e3a89d4b290b52c"
  },
  {
    "url": "docs/4.0/utilities/index.html",
    "revision": "19e3ae7bcbc6dcdffe26dfaf88e6f329"
  },
  {
    "url": "docs/4.0/utilities/position/index.html",
    "revision": "8160eaa72a0b109aa619de51bf292b98"
  },
  {
    "url": "docs/4.0/utilities/screenreaders/index.html",
    "revision": "84e3fdd720bb621aefc1f16f95a6a25b"
  },
  {
    "url": "docs/4.0/utilities/sizing/index.html",
    "revision": "3c915af66c433a71aabf8f3d8eb418a6"
  },
  {
    "url": "docs/4.0/utilities/spacing/index.html",
    "revision": "c2ece215994b8377f3ba849f92567907"
  },
  {
    "url": "docs/4.0/utilities/text/index.html",
    "revision": "8cc1dfe0ba919393c04c6113630b57fe"
  },
  {
    "url": "docs/4.0/utilities/vertical-align/index.html",
    "revision": "bf35de414a44be2f0f5d7dc473c651b3"
  },
  {
    "url": "docs/4.0/utilities/visibility/index.html",
    "revision": "d2c2c126cc5daac0fe636d4c0399c8e5"
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
    "revision": "b0ba0469801504bbce33c81153c0c41b"
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
