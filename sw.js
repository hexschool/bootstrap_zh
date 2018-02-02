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
    "revision": "8d1a916512eacc66b2e196e001395a57"
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
    "revision": "ac8702c660a236c2e9236eec0bcea6ed"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "c08f239f0942146feddd3f078fec831b"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "fe80ecce8d355bac77f7bd95639ad04a"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "4de108c33799a18cec3362c52e333eff"
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
    "revision": "29a16726680195da6a8c78f234880607"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "6ba2de34dbaa851bb52c96c7bd33352e"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "7dc6d49bddb587f471ed62358e743727"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "4e559333725069a33a9d0f3387652ea5"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "d59729439a203fc474f5677b8d18d8bb"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "450fc463b8b1a349df717056fbb3e078"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "6866f102282d95443edf73ca112b117b"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "98d2c1da1c0a495f8fc8ad144ea1d3d2"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "d810a38ca2781735a27cba0625a027db"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "14d449eb8876fa55e1ef3c2cc52b0c17"
  },
  {
    "url": "docs/4.0/about/brand/index.html",
    "revision": "281d2bb7b32649a25c1baa5196539358"
  },
  {
    "url": "docs/4.0/about/index.html",
    "revision": "3e880aebac9e431e72f99e09b1d43fab"
  },
  {
    "url": "docs/4.0/about/license/index.html",
    "revision": "9a6aacb52add744f0f15dcddaf4fd3fb"
  },
  {
    "url": "docs/4.0/about/overview/index.html",
    "revision": "6d7db443e8fec98bf8e01d4f5f383ebe"
  },
  {
    "url": "docs/4.0/about/translations/index.html",
    "revision": "8d0e803a076002d73452ce05cd1c1429"
  },
  {
    "url": "docs/4.0/browser-bugs/index.html",
    "revision": "c6a5cdc4eaf7522d6f192b8b22ee42a4"
  },
  {
    "url": "docs/4.0/components/alerts/index.html",
    "revision": "fb15897164d25eab4ac36d51ca0f8737"
  },
  {
    "url": "docs/4.0/components/badge/index.html",
    "revision": "b15b09a91c52a68a7a8d87212cc9903d"
  },
  {
    "url": "docs/4.0/components/breadcrumb/index.html",
    "revision": "23440c845fa3eeb1c97a902d40ed3cdb"
  },
  {
    "url": "docs/4.0/components/button-group/index.html",
    "revision": "ff5c86087f21b2f959795099b1f3b924"
  },
  {
    "url": "docs/4.0/components/buttons/index.html",
    "revision": "71c6c939b5e595257d4ec160417b69b3"
  },
  {
    "url": "docs/4.0/components/card/index.html",
    "revision": "229026dc41794a717f7437c2cdc68636"
  },
  {
    "url": "docs/4.0/components/carousel/index.html",
    "revision": "8fd5b49f3b18bdce1895b6df89a76e8b"
  },
  {
    "url": "docs/4.0/components/collapse/index.html",
    "revision": "37a465d2f9d5807cfc38996993e20557"
  },
  {
    "url": "docs/4.0/components/dropdowns/index.html",
    "revision": "c1173bf45b4ea805a48340656aca8b93"
  },
  {
    "url": "docs/4.0/components/forms/index.html",
    "revision": "496d68a24ee7bad80f3ae64eed90c40c"
  },
  {
    "url": "docs/4.0/components/index.html",
    "revision": "be6aa781c8e4897851b8b229b257a0f3"
  },
  {
    "url": "docs/4.0/components/input-group/index.html",
    "revision": "f153f10dcc6e7e1fc90e1ce6af5c3a0c"
  },
  {
    "url": "docs/4.0/components/jumbotron/index.html",
    "revision": "80befeb2c37c179a5396ed50a961ff57"
  },
  {
    "url": "docs/4.0/components/list-group/index.html",
    "revision": "4fef205008aa6b8f4be8eb2d9d0418c0"
  },
  {
    "url": "docs/4.0/components/modal/index.html",
    "revision": "75e022a625cdca273c96a54ebfd00bcc"
  },
  {
    "url": "docs/4.0/components/navbar/index.html",
    "revision": "d1828b21425ef273504a94baafe1e194"
  },
  {
    "url": "docs/4.0/components/navs/index.html",
    "revision": "d0a484e443b739c0df98334be6bcfebe"
  },
  {
    "url": "docs/4.0/components/pagination/index.html",
    "revision": "c3a0a03abbf6aed3c66380e478ca3382"
  },
  {
    "url": "docs/4.0/components/popovers/index.html",
    "revision": "ff6bebb26e7bafc35ad760a783a2eea0"
  },
  {
    "url": "docs/4.0/components/progress/index.html",
    "revision": "96de3a81626e166e5d3f174affaf7234"
  },
  {
    "url": "docs/4.0/components/scrollspy/index.html",
    "revision": "f2dcf53a7e31320445329602c42d881a"
  },
  {
    "url": "docs/4.0/components/tooltips/index.html",
    "revision": "a2158ee022d8987c1c52ede6bed384c6"
  },
  {
    "url": "docs/4.0/content/code/index.html",
    "revision": "85ab210cbbff561f1abf4411d280e03d"
  },
  {
    "url": "docs/4.0/content/figures/index.html",
    "revision": "d55d7363382b96e7ff377a86167bd3a4"
  },
  {
    "url": "docs/4.0/content/images/index.html",
    "revision": "ab6d5738bf6c96116fea73cf8e6d735c"
  },
  {
    "url": "docs/4.0/content/index.html",
    "revision": "385e7c3b2eb808da6a652ad66911fd40"
  },
  {
    "url": "docs/4.0/content/reboot/index.html",
    "revision": "070c4aef28e6dbc68c55e316ece4e67e"
  },
  {
    "url": "docs/4.0/content/tables/index.html",
    "revision": "bb73eb713ed4584876997dc41ed42d07"
  },
  {
    "url": "docs/4.0/content/typography/index.html",
    "revision": "f321aeb2bf78f8a79a019c22a0381dae"
  },
  {
    "url": "docs/4.0/examples/album/album.css",
    "revision": "e8343131a0fefafe6ae0f37db6d10f3c"
  },
  {
    "url": "docs/4.0/examples/album/index.html",
    "revision": "ee306dba780df6bbbc65a41a921eed8a"
  },
  {
    "url": "docs/4.0/examples/blog/blog.css",
    "revision": "cb98d3e8033940a716641516d2cb857b"
  },
  {
    "url": "docs/4.0/examples/blog/index.html",
    "revision": "a2ed4d2f91ce433338a74bd5f49e949e"
  },
  {
    "url": "docs/4.0/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/4.0/examples/carousel/index.html",
    "revision": "3efc2981b6da173142086ce9d8aac1d2"
  },
  {
    "url": "docs/4.0/examples/checkout/form-validation.css",
    "revision": "d13d35a0c04021ceacd8c153719860bc"
  },
  {
    "url": "docs/4.0/examples/checkout/index.html",
    "revision": "6dce9885e791ab56d26b3c5f0a64af61"
  },
  {
    "url": "docs/4.0/examples/cover/cover.css",
    "revision": "61f7cbbe930976e62264268abe51ebd3"
  },
  {
    "url": "docs/4.0/examples/cover/index.html",
    "revision": "b5b832918044dc3c65fa51367919c8c5"
  },
  {
    "url": "docs/4.0/examples/dashboard/dashboard.css",
    "revision": "a04ae1b7ceba4aaeb3bc7fe3c72a6d40"
  },
  {
    "url": "docs/4.0/examples/dashboard/index.html",
    "revision": "0d87db1b20149ea817c06f09f03acfde"
  },
  {
    "url": "docs/4.0/examples/floating-labels/floating-labels.css",
    "revision": "5a7fc5962d7981d2c5f9af28f785a0c5"
  },
  {
    "url": "docs/4.0/examples/floating-labels/index.html",
    "revision": "e16e25d95c2a41f6d3d8ff7b94b82936"
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
    "revision": "5386d3e346c4b606b70ea78a3be61f84"
  },
  {
    "url": "docs/4.0/examples/jumbotron/index.html",
    "revision": "f12ea5ddc2c4905bc50b8a705afcbce9"
  },
  {
    "url": "docs/4.0/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.0/examples/navbar-bottom/index.html",
    "revision": "35d8cd3a5a267e316ab45f480a191eeb"
  },
  {
    "url": "docs/4.0/examples/navbar-fixed/index.html",
    "revision": "1ce40c76fb831fb9bfb81f7a04705555"
  },
  {
    "url": "docs/4.0/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.0/examples/navbar-static/index.html",
    "revision": "86ce704638e9227d79683e9928ad258a"
  },
  {
    "url": "docs/4.0/examples/navbar-static/navbar-top.css",
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
    "revision": "0dc41bce7d5407fe4e54a7fe3164cbc1"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.css",
    "revision": "65b3d835fd0f90b00844adc8974be45b"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.0/examples/pricing/index.html",
    "revision": "7d57728ad57ca9de41aea23222ad5204"
  },
  {
    "url": "docs/4.0/examples/pricing/pricing.css",
    "revision": "1e170831b26afb7a6bcde4f0bc2cb29b"
  },
  {
    "url": "docs/4.0/examples/product/index.html",
    "revision": "3d998656a2f6de3e938b18ee6f3d98f9"
  },
  {
    "url": "docs/4.0/examples/product/product.css",
    "revision": "139ada632a48dc6b96a46a265a2cc60c"
  },
  {
    "url": "docs/4.0/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/4.0/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/4.0/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/4.0/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/4.0/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/4.0/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/4.0/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/4.0/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/4.0/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/4.0/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/4.0/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/4.0/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/4.0/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/4.0/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/4.0/examples/sign-in/index.html",
    "revision": "0739de40d4fb2333772503ff6a475b18"
  },
  {
    "url": "docs/4.0/examples/sign-in/signin.css",
    "revision": "9c798c2cdaef45f59a916c2051cbe197"
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
    "revision": "7830566087ec33cf521e970266962ae2"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/index.html",
    "revision": "7f8a7abbce45fa7d948f8fe3a41c3545"
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
    "revision": "765ab6286cb49e1d60cceb9eaeace685"
  },
  {
    "url": "docs/4.0/extend/icons/index.html",
    "revision": "b25d9b78749b850b512aff5f1263c76b"
  },
  {
    "url": "docs/4.0/extend/index.html",
    "revision": "2312dbf9926dd6fb16cb230c4ad3ac9c"
  },
  {
    "url": "docs/4.0/getting-started/accessibility/index.html",
    "revision": "40bcda4156257447f92407f94f26abe2"
  },
  {
    "url": "docs/4.0/getting-started/best-practices/index.html",
    "revision": "e75f9d005667d968c998a94d25fdbfbb"
  },
  {
    "url": "docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "7bdd3f54531af76390577f284b7669e3"
  },
  {
    "url": "docs/4.0/getting-started/build-tools/index.html",
    "revision": "1e72d846bc321ac56d071129fba6c18c"
  },
  {
    "url": "docs/4.0/getting-started/contents/index.html",
    "revision": "3d1a347e5e26ecc8c10c6e9f69f31b5b"
  },
  {
    "url": "docs/4.0/getting-started/download/index.html",
    "revision": "73e8b0f429da05fdc7fc4d29afe5b71c"
  },
  {
    "url": "docs/4.0/getting-started/index.html",
    "revision": "1ded88beb0958b0b3b33b57f613d9a02"
  },
  {
    "url": "docs/4.0/getting-started/introduction/index.html",
    "revision": "48041b005570a1e3f43178b70e0c2f2b"
  },
  {
    "url": "docs/4.0/getting-started/javascript/index.html",
    "revision": "5c398f29e1da8967aa1c3fd45b9fb6ad"
  },
  {
    "url": "docs/4.0/getting-started/options/index.html",
    "revision": "3251063571199ee0ed0be7928fc77ab6"
  },
  {
    "url": "docs/4.0/getting-started/theming/index.html",
    "revision": "f06da11479b9484ec338d9903de54238"
  },
  {
    "url": "docs/4.0/getting-started/webpack/index.html",
    "revision": "a64161a057b8abd77b7cdf53c5605338"
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
    "revision": "18b7eb873a4bb6a1ff35e6b16477ae6b"
  },
  {
    "url": "docs/4.0/layout/index.html",
    "revision": "b26da7ad51b36bc28c3ebc7c3fcdaec4"
  },
  {
    "url": "docs/4.0/layout/media-object/index.html",
    "revision": "fda6e3a68045266704517963804b3035"
  },
  {
    "url": "docs/4.0/layout/overview/index.html",
    "revision": "59f382393c6190a52170d495e6facac4"
  },
  {
    "url": "docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "f27699d1561a3f3debf05f467ad48c91"
  },
  {
    "url": "docs/4.0/migration/index.html",
    "revision": "193efd32ccae0d126e61ca671ca0b148"
  },
  {
    "url": "docs/4.0/team/index.html",
    "revision": "3e880aebac9e431e72f99e09b1d43fab"
  },
  {
    "url": "docs/4.0/utilities/borders/index.html",
    "revision": "d71310ac5c05e426f27ccf50c9278955"
  },
  {
    "url": "docs/4.0/utilities/clearfix/index.html",
    "revision": "254c0aab68405113c99e7d70bd971c30"
  },
  {
    "url": "docs/4.0/utilities/close-icon/index.html",
    "revision": "6f92602fd28481b3de5290d98a0a8a80"
  },
  {
    "url": "docs/4.0/utilities/colors/index.html",
    "revision": "f79b7173676e6d0c23fc66fad1859ebb"
  },
  {
    "url": "docs/4.0/utilities/display/index.html",
    "revision": "53dcb254d47920fa3154740f994d5440"
  },
  {
    "url": "docs/4.0/utilities/embed/index.html",
    "revision": "f2ba76831ad42bfb93920fd725ea200b"
  },
  {
    "url": "docs/4.0/utilities/flex/index.html",
    "revision": "2cce3bf9cc1d898ec319d1b421d739d0"
  },
  {
    "url": "docs/4.0/utilities/float/index.html",
    "revision": "39bb2f85c63949dbd82a19c2e8868419"
  },
  {
    "url": "docs/4.0/utilities/image-replacement/index.html",
    "revision": "a741ee13d9909e939177993c92409b1c"
  },
  {
    "url": "docs/4.0/utilities/index.html",
    "revision": "19e3ae7bcbc6dcdffe26dfaf88e6f329"
  },
  {
    "url": "docs/4.0/utilities/position/index.html",
    "revision": "6dc979b9bc739d92fc9b9627de162dce"
  },
  {
    "url": "docs/4.0/utilities/screenreaders/index.html",
    "revision": "63b4d9b7a68cb3d5f66bc5b3b1e46426"
  },
  {
    "url": "docs/4.0/utilities/sizing/index.html",
    "revision": "ad4f7e785a6ecca246bc5d3a7bb20bf4"
  },
  {
    "url": "docs/4.0/utilities/spacing/index.html",
    "revision": "92272243963d5a87362135df65f8a652"
  },
  {
    "url": "docs/4.0/utilities/text/index.html",
    "revision": "4261d9915ef8d2032971412085cfd2a9"
  },
  {
    "url": "docs/4.0/utilities/vertical-align/index.html",
    "revision": "0286de71d9eb3a3118f7b13c8818065e"
  },
  {
    "url": "docs/4.0/utilities/visibility/index.html",
    "revision": "3752fd719db411af778f20d6a2583bfc"
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
    "revision": "34859584095e9bb3d6a14a7944d5b720"
  },
  {
    "url": "redirects.json",
    "revision": "1fa36ff78684547585e555fbe6c60306"
  },
  {
    "url": "sw.js",
    "revision": "42f72988cbd613ae00b4a2c3390712ae"
  }
])
