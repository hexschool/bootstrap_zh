---
layout: docs
title: 瀏覽器和裝置 (Browsers & devices)
description: 瞭解 Bootstrap 支援的各種現代和過去的瀏覽器和裝置，包括每個瀏覽器和裝置已知的故障和錯誤。
group: getting-started
toc: true
---

## 支援的瀏覽器 {#supported-browsers}

Bootstrap 支援各大瀏覽器和平台最新和最穩定的版本。在 Windows 上，**我們支援 Internet Explorer 10-11 / Microsoft Edge**。

如果瀏覽器是使用最新測試中的版本，像是 WebKit、Blink 或 Gecko 或透過平台的 web view API 是不完全支援的。然而，Bootstrap應當（在多數情形中）同樣在上述瀏覽器中正常顯示和工作。如下提供了更多的具體支援訊息。

### 行動裝置 {#mobile-devices}

一般而言，Bootstrap 支援每種主要平台預設瀏覽器的最新版本。請注意，不支援代理瀏覽器（比如Opera Mini、Opera Mobile Turbo 模式、UC Browser Mini、Amazon Silk）。

<table class="table table-bordered table-striped">
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
      <td class="text-success">Supported</td>
    </tr>
    <tr>
      <th scope="row">iOS</th>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
      <td class="text-success">Supported</td>
      <td class="text-muted">N/A</td>
      <td class="text-success">Supported</td>
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

### 桌面瀏覽器 {#desktop-browsers}

同理，支援大多數桌面瀏覽器的最新版本。

<table class="table table-bordered table-striped">
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

## Internet Explorer {#internet-explorer}

支援IE 10+；不支援 IE9 和更低的版本。請知悉部分 CSS3 屬性和 HTML5 要素並不被 IE10 完全支援或其全部功能需要前輟屬性。參考[Can I use...](http://caniuse.com/)瞭解有關瀏覽器支援 CSS3 和 HTML5 特性的細節。

作為一種提示，我們將此檔作為演示加入到 Bootstrap 的各種文件和範例中。

## 行動瀏覽器上的 互動視窗 和 下拉式功能表 {#modals-and-dropdowns-on-mobile}

### iOS 文字方塊和滾動 {#ios-text-fields-and-scrolling}

在 iOS 9.2 上，當互動視窗開啟時，若最初的滾動手勢在 `<input>` 或 `<textarea>` 的區域內，互動視窗下的 `<body>` 內容會滾動，而互動視窗本身不滾動。參見 [WebKit bug #153856](https://bugs.webkit.org/show_bug.cgi?id=153856)。

### Navbar 下拉選單 {#navbar-dropdowns}

因為 z-index 的複雜性，`.dropdown-backdrop` 元素在 iOS 無法在導覽中正常使用。因此要關閉 Navbar 的下拉選單需要直接點擊下拉元件([或會在 iOS 觸發點擊事件的任何其他元素](https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile))。


## 瀏覽器縮放 {#browser-zooming}

頁面縮放必然在 Boostrap 和網頁其他部分的某些元件中造成渲染錯誤。根據問題，我們可能可以解決它。 然而，我們傾向於忽略這些，因為除了暴力的解決方法之外，它們往往沒有直接的解決方案。

## iOS 上的 `:hover`/`:focus` {#sticky-hoverfocus-on-ios}

即使在大多數觸控設備上 Hover 都不太可能實現，但 iOS 則會模擬這樣的行為，導致點擊一個元素仍存在一個 "sticky" 的 Hover 樣式。當用戶點擊另一個元素時，這些 Hover 樣式才被移除，這種行為不太受到歡迎，但是 Android 或 Windows 似乎沒這樣的問題。

在 v4 Aplha 和 Beta 版本中，我們包含了不完整的註解程式碼，用於 media query 來決定是否禁用觸控裝置的 Hover 效果。這段工作從來沒有完成或正式啟用，但為了避免完全中斷，我們選擇放棄 [this shim](https://github.com/twbs/mq4-hover-shim)，並保留 mixins 對於快捷的偽元素。

## 列印 {#printing}

即使在某些最新的瀏覽器中，列印仍可能出現問題。

截至 Safari 第 8.0 版，採用固定寬度的 `.container` 導致 Safari 在列印時使用異常小的字體。參見 [issue #14868]({{ site.repo }}/issues/14868) 和 [WebKit bug #138192](https://bugs.webkit.org/show_bug.cgi?id=138192) 瞭解更多細節。一個潛在的解決方案是如下的CSS：

{% highlight css %}
@media print {
  .container {
    width: auto;
  }
}
{% endhighlight %}

## Android 內建瀏覽器 {#android-stock-browser}

Android 4.1 (以及甚至某些更新的版本)在出廠時自帶了預設網頁瀏覽器應用程式。不幸的是，這個瀏覽器應用程式有大量的錯誤並在整體上與 CSS 不相容。

#### "select" 選單 {#select-menu}

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

## 驗證器 {#validators}

為了讓老舊的瀏覽器提供最好的體驗，Bootstrap 在幾個地方使用 [CSS browser hacks](http://browserhacks.com/) 將特定的 CSS 套用到某些瀏覽器版本，以解決在瀏覽器本身的問題。這些 hacks 會使 CSS 驗證時讓它們無效。有幾個地方，我們還使用尚未完全標準化的 CSS 功能，但這些功能純粹用於漸進式增強。

這些驗證警告在實踐中並不重要，因為我們的 CSS 的非 hacks 部分完全驗證並且 hacks 部分不會干擾非 hacks 部分的正常運行，這也是為什麼我們故意忽略這些特定的警告。
