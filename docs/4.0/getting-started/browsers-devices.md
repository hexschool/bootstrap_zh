---
layout: docs
title: 瀏覽器和裝置 (Browsers & devices)
description: 瞭解 Bootstrap 支援的各種現代和過去的瀏覽器和裝置，包括每個瀏覽器和裝置已知的故障和錯誤。
group: getting-started
toc: true
---

## 支援的瀏覽器

Bootstrap 支援各大瀏覽器和平台最新和最穩定的版本。在 Windows 上，**我們支援 Internet Explorer 10-11 / Microsoft Edge**。

如果瀏覽器是使用最新測試中的版本，像是 WebKit、Blink 或 Gecko 或透過平台的 web view API 是不完全支援的。然而，Bootstrap應當（在多數情形中）同樣在上述瀏覽器中正常顯示和工作。如下提供了更多的具體支援訊息。

### 行動裝置

一般而言，Bootstrap 支援每種主要平台預設瀏覽器的最新版本。請注意，不支援代理瀏覽器（比如Opera Mini、Opera Mobile Turbo 模式、UC Browser Mini、Amazon Silk）。

<table class="table table-bordered table-striped table-responsive">
  <thead>
    <tr>
      <td></td>
      <th>Chrome</th>
      <th>Firefox</th>
      <th>Safari</th>
      <th>Android Browser &amp; WebView</th>
      <th>Microsoft Edge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Android</th>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
      <td class="text-muted">N/A</td>
      <td class="text-success">Android v5.0+ supported</td>
      <td class="text-muted">N/A</td>
    </tr>
    <tr>
      <th scope="row">iOS</th>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
      <td class="text-muted">N/A</td>
      <td class="text-muted">N/A</td>
    </tr>
    <tr>
      <th scope="row">Windows 10 Mobile</th>
      <td class="text-muted">N/A</td>
      <td class="text-muted">N/A</td>
      <td class="text-muted">N/A</td>
      <td class="text-muted">N/A</td>
      <td class="text-success">Supported</td>
    </tr>
  </tbody>
</table>

### 桌面瀏覽器

同理，支援大多數桌面瀏覽器的最新版本。

<table class="table table-bordered table-striped table-responsive">
  <thead>
    <tr>
      <td></td>
      <th>Chrome</th>
      <th>Firefox</th>
      <th>Internet Explorer</th>
      <th>Microsoft Edge</th>
      <th>Opera</th>
      <th>Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mac</th>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
      <td class="text-muted">N/A</td>
      <td class="text-muted">N/A</td>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
    </tr>
    <tr>
      <th scope="row">Windows</th>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported, IE10+</td>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
      <td class="text-danger">Not supported</td>
    </tr>
  </tbody>
</table>

雖然並未正式支援 Chromium 和 Chrome Linux 版、火狐 Linux 版、和 Internet Explorer 9，但 Bootstrap 應在上述瀏覽器中正常顯示和運行。

欲知 Bootstrap 要解決的部分瀏覽器錯誤清單，參見我們的[瀏覽器錯誤]({{ site.baseurl }}/docs/{{ site.docs_version }}/browser-bugs/)。

## Internet Explorer

支援IE 10+；不支援 IE9 和更低的版本。請知悉部分 CSS3 屬性和 HTML5 要素並不被 IE10 完全支援或其全部功能需要前輟屬性。參考[Can I use...](http://caniuse.com/)瞭解有關瀏覽器支援 CSS3 和 HTML5 特性的細節。
=======
作為一種提示，我們將此檔作為演示加入到 Bootstrap 的各種文件和範例中。

## 行動瀏覽器上的 互動視窗 和 下拉式功能表

### 溢出和滾動

對溢出(`overflow: hidden;`) `<body>` 在 iOS 和 Android 的支援是非常有限的。因此，當在上述任一裝置的瀏覽器的一種模式中滾動超過頂部和底部時，`<body>` 內容會開始滾動。參見[Chrome bug #175502](https://bugs.chromium.org/p/chromium/issues/detail?id=175502) (Chrome v40 中已解決) 以及 [WebKit bug #153852](https://bugs.webkit.org/show_bug.cgi?id=153852)。

### iOS 文字方塊和滾動

在 iOS 9.2 上，當互動視窗開啟時，若最初的滾動手勢在 `<input>` 或 `<textarea>` 的區域內，互動視窗下的 `<body>` 內容會滾動，而互動視窗本身不滾動。參見 [WebKit bug #153856](https://bugs.webkit.org/show_bug.cgi?id=153856)。

### Navbar 下拉選單

因為 z-index 的複雜性，`.dropdown-backdrop` 元素在 iOS 無法在導覽中正常使用。因此要關閉 Navbar 的下拉選單需要直接點擊下拉元件([或會在 iOS 觸發點擊事件的任何其他元素](https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile))。


## 瀏覽器縮放

頁面縮放必然在 Boostrap 和網頁其他部分的某些元件中造成渲染錯誤。根據問題，我們可能可以解決它。 然而，我們傾向於忽略這些，因為除了暴力的解決方法之外，它們往往沒有直接的解決方案。

## 行動瀏覽器上的 `:hover`/`:focus`

即使在大多數螢幕上 Hover 都不太可能實現，但大多數瀏覽器都能支援 Hover，並使 `:hover` "sticky"。 換句話說，`:hover` 樣式在點擊一個元素後開始套用，只有在用戶點擊某個其他元素後才停止應用。 在移動優先的站點上，這種行為通常是不合需要的。

即使在大部分觸控螢幕上不可能有真正的 hover，大部分行動瀏覽器在做出類似 `:hover` 效果。換言之，`:hover` 樣式在輕擊某個元素後開始應用，並在用戶輕擊其它元素後停止應用。在行動瀏覽器優先的網站上，這種行為是不適當的。

Bootstrap 使用一個方案繞開這個問題，雖然預設是不啟用這個方案。在從 Sass 編譯時將 `$enable-hover-media-query` 設定為 `true`，Boostrap 會使用 [mq4-hover-shim](https://github.com/twbs/mq4-hover-shim) 來禁用瀏覽器中模擬 `:hover` 樣式。但這個解決方案存在一些注意事項：參見 Shim 的文件瞭解明細。

## 列印

即使在某些最新的瀏覽器中，列印仍可能出現問題。

截至 Safari 第 8.0 版，採用固定寬度的 `.container` 導致 Safari 在列印時使用異常小的字體。參見 [issue #14868]({{ site.repo }}/issues/14868) 和 [WebKit bug #138192](https://bugs.webkit.org/show_bug.cgi?id=138192) 瞭解更多細節。一個潛在的解決方案是如下的CSS：

{% highlight css %}
@media print {
  .container {
    width: auto;
  }
}
{% endhighlight %}

## Android 內建瀏覽器

Android 4.1 (以及甚至某些更新的版本)在出廠時自帶了預設網頁瀏覽器應用程式。不幸的是，這個瀏覽器應用程式有大量的錯誤並在整體上與 CSS 不相容。

#### "select" 選單

在 `<select>` 元素中，若使用了 `border-radius` 或 `border`，Android 預設的瀏覽器不會顯示邊欄（[參見 StackOverflow 問題](https://stackoverflow.com/questions/14744437/html-select-box-not-showing-drop-down-arrow-on-android-version-4-0-when-set-with) 瞭解細節）。使用下面的代碼段來刪除不正常的 CSS，並將 `<select>` 作為 Android stock 瀏覽器上的未定義樣式元素。透過 user agent 避免了對 Chrome、Safari 和 Mozilla 瀏覽器的影響。

{% highlight html %}
<script>
$(function () {
  var nua = navigator.userAgent
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
  if (isAndroid) {
    $('select.form-control').removeClass('form-control').css('width', '100%')
  }
})
</script>
{% endhighlight %}

想看一個案例嗎？ [查看 JS Bin demo](http://jsbin.com/OyaqoDO/2)

為了讓老舊的瀏覽器提供最好的體驗，Bootstrap 在幾個地方使用 [CSS browser hacks](http://browserhacks.com/) 將特定的 CSS 套用到某些瀏覽器版本，以解決在瀏覽器本身的問題。這些 hacks 會使 CSS 驗證時讓它們無效。有幾個地方，我們還使用尚未完全標準化的 CSS 功能，但這些功能純粹用於漸進式增強。

為了在陳舊和錯誤眾多的瀏覽器上儘量提供最佳的體驗，Bootstrap 在部分位置上採用了多個方法針對特定瀏覽器版本的 [CSS browser hacks](http://browserhacks.com) 以繞開瀏覽器自身的錯誤。這些 hack 會讓 CSS 驗證器警告無效。在若干的位置上，我們還使用了尚未被完全標準化的 CSS 屬性，但這些功能純粹用於漸進式增強。

這些驗證警告在實踐中並不重要，因為我們的 CSS 的非 hacks 部分完全驗證並且 hacks 部分不會干擾非 hacks 部分的正常運行，這也是為什麼我們故意忽略這些特定的警告。
