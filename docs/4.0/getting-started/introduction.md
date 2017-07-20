---
layout: docs
title: 簡介
description: Bootstrap 世界上最受歡迎的框架用於建立響應式、行動優先的網站，透過 Bootstrap CDN 和範本初學頁面開始吧。
group: getting-started
redirect_from:
  - /docs/4.0/getting-started/
  - /docs/4.0/
  - /docs/
toc: true
---

<!-- Bootstrap is the world's most popular framework for building responsive, mobile-first sites and applications. Inside you'll find high quality HTML, CSS, and JavaScript to make starting any project easier than ever. -->

<!-- Here's how to quickly get started with the Bootstrap CDN and a template starter page. -->

## 快速開始

想要快速地將 Bootstrap 添加到你的專案中！使用 MaxCDN 公司的免費提供的 Bootstrap CDN。如需用套件管理工具或需要下載原始檔可 [前往下載頁面]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/download/)。

將樣式表 `<link>` 複製-貼上到網頁中在所有其他樣式表之前的 `<head>` 中，以便載入 Bootstrap 的CSS。

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
{% endhighlight %}

在接近頁面的結尾處，就在 `</body>` 結尾標籤前，加入我們的 JavaScript 外掛程式、jQuery 以及 Popper.js。請務必將 jQuery 和 Popper.js 至於前方，因為我們的插件依賴於這兩個外掛程式。雖然我們使用了 [jQuery 的精簡版）](https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/)，但是同時支援完整版。

{% highlight html %}
<script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

就是這麼簡單！你現在就要完成一個完全由 Bootstrap 建設的網站。若不確定整體的網頁結構，請繼續往下閱讀瞭解一個網頁範例。

## 初學者範本

務必用最新的設計和開發標準設定你的網頁。這意味著使用一個 HTML 5 的文本類型，並加入一個 viewport 標籤以正常運行響應式網頁。整合在一起後，你的頁面應該是如下這個樣子：

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery first, then Popper.js, then Bootstrap JS. -->
    <script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
    <script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
    <script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
  </body>
</html>
{% endhighlight %}

以上就是構建網頁所需的全部元件。訪問 [Layout 文件]({{ site.baseurl }}/docs/{{ site.docs_version }}/layout/overview/) 或 [我們的官方範例]({{ site.baseurl }}/docs/{{ site.docs_version }}/examples/) 開始將網站的內容和元件進行佈置。

## 重要的整體樣式

你在使用 Bootstrap 時需要知道整體樣式和設置，這些樣式和設置幾乎全部以跨瀏覽器格式的 *標準化* 為目標。讓我們瞭解這些樣式和設置。

### HTML5 文件類型

Bootstrap 要求使用 HTML5 文件類型。沒有這個文件類型，你會看見一些奇怪的不完整格式。但加入這個文件類型應當不會導致任何錯誤。

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

### 響應式中繼標籤

Bootstrap 的開發以 *行動優先* 為策略，按照這個策略，我們優先為行動裝置優化程式碼，然後使用 CSS media queries 在必要時放大元件。為了確保全部裝置上有正確渲染和和觸控縮放，**將響應式中繼標籤記** 添加到你的`<head>`中。

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{% endhighlight %}

您可在 [starter template](#starter-template) 中查看一個實際應用的範例。

### Box-sizing

為了在 CSS 中能夠更加直接的調整尺寸，我們將整體的 `box-sizing` 數值從 `content-box` 切換為 `border-box`。這就確保了 `padding` 不會影響元素最終的計算寬度，但這可能導致在 Google 地圖和 Google 自訂搜尋引擎等某些第三方元件出現問題。

在極少的情形中，你需要使用類似於如下的設置：

{% highlight scss %}
.selector-for-some-widget {
  box-sizing: content-box;
}
{% endhighlight %}

透過以上程式碼片段，巢狀元素（包括 `：before` 和 `：after`）生成的內容都將繼承 `.selector-for-some-widget` 的指定 `box-sizing`。

瞭解有關 [盒模型及尺寸在 CSS Tricks](https://css-tricks.com/box-sizing/).

### 重置

為了改善跨流覽器的渲染，我們使用了 [重置]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/) 以修正跨瀏覽器和裝置之間的不一致性，同時對通用的 HTML 元素達到一致性的效果。

## 社群

通過如下有幫助的資源，瞭解 Bootstrap 開發的最新進展並接觸社群。

- Follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap).
- 閱讀並訂閱 [官方 Bootstrap Blog]({{ site.blog }}).
- 加入 [官方 Slack room]({{ site.slack }}).
- 在 IRC `##bootstrap` 頻道 `irc.freenode.net` 伺服器上，與 Bootstrap 愛好者一起聊天
- 尋群幫助在 Stack Overflow (標註 [`bootstrap-4`](https://stackoverflow.com/questions/tagged/bootstrap-4)).
- 透過 [npm](https://www.npmjs.com/browse/keyword/bootstrap) 或類似的交付機制發佈時，開發者應當在修改或添加 Bootstrap 功能的包上使用關鍵字 `bootstrap` 以便更容易發現。

你也可以 follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap) 瞭解最新的小道消息和超酷的音樂視頻。
