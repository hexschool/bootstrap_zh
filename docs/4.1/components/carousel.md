---
layout: docs
title: 輪播 (Carousel)
description: 用於圖片元素、幻燈片或包含文本的輪播元件。
group: components
toc: true
---

## 如何運作 {#how-it-works}

輪播是一個幻燈片，是使用 CSS 3D 的變形轉換和一些 JavaScript 構建一系列內容產生的迴圈播放。它適用於一系列圖像、文本或自訂標記。它還包括對上一個 / 下一個控制項和指示器的支援。

在支持[Page Visibility API](https://www.w3.org/TR/page-visibility/) 的瀏覽器中，當網頁對用戶不可見時，輪播將避免滑動（例如瀏覽器分頁不是啟動狀態或瀏覽器視窗最小化等）。

請注意，不支援巢狀輪播，而輪播通常不符合無障礙標準。

最後，如果你要自行編譯 JS，記得 [requires `util.js`]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/#util)。

## 範例 {#example}

輪播不會自動使幻燈片尺寸標準化。因此，您可能需要使用其它通用類別或自訂樣式來調整成適當內容大小。雖然輪播支援上一個/下一個控制項和指示器，但是它們不是必備項目。可根據您的需要添加和自訂。

**需要將 `.active` 添加到其中一個輪播元素上**，否則輪播將不可見。另外一定要在 `.carousel` 上為控制項組件設置一個唯一的 id，特別是如果你在一個頁面上使用多個輪播。控制項和指示器元素必須具有與 `.carousel` 元素的 `data-target`須與 id 的屬性匹配（或鏈接的 `href`）。

### 僅有幻燈片 {#slides-only}

這是一個只有幻燈片的輪播。 請注意在輪播圖像上存在 `.d-block` 和 `.w-100`，以修正瀏覽器預設的圖像對齊。

{% capture example %}
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### 包含控制項 {#with-controls}

加入向前及向後的控制項：

{% capture example %}
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
{% endcapture %}
{% include example.html content=example %}

### 包含指示器 {#with-indicators}

您還可以將指示器與控制項一起添加到輪播中。

{% capture example %}
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
{% endcapture %}
{% include example.html content=example %}


### 包含字幕 {#with-captions}

在 `.carousel-item` 中使用 `.carousel-caption` 添加字幕到您的幻燈片。它們會隱藏在較小的 viewport 上，如下所示，可用的 [顯示通用類別]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/)。 我們最初用 `.d-none` 隱藏它們，並將它們顯示在中型的設備上(使用 `.d-md-block`)。

<div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

{% highlight html %}
<div class="carousel-item">
  <img src="..." alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
</div>
{% endhighlight %}

### 交叉淡入淡出 {#crossfade}

將 `.carousel-fade` 加到輪播中，以使用淡入淡出的取代滑動的動畫效果。

Add `.carousel-fade` to your carousel to animate slides with a fade transition instead of a slide.

{% capture example %}
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
{% endcapture %}
{% include example.html content=example %}


## 用法 {#usage}

### 透過資料屬性 {#via-data-attributes}

使用資料屬性可以輕鬆控制輪播的位置。`data-slide` 接受 `prev`或 `next` 的關鍵字，它們相對於當前位置進而改變幻燈片位置。或者，使用 `data-slide-to` 將原始幻燈片索引轉換到 `data-slide-to="2"`，將幻燈片位置移動到以 0 開頭的特定索引。

### 透過 JavaScript {#via-javascript}

透過以下方法使用輪播：

{% highlight js %}
$('.carousel').carousel()
{% endhighlight %}

### 選項 {#options}

可以透過資料屬性或 JavaScript 調整選項。對於資料屬性，將選項名稱附加到 `data-`，如 `data-interval=""`。


<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">名稱</th>
      <th style="width: 50px;">種類</th>
      <th style="width: 50px;">預設</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>interval</td>
      <td>數值</td>
      <td>5000</td>
      <td>一個項目自動迴圈之間延遲的時間。 如果為 false ，輪播不會自動重播。</td>
    </tr>
    <tr>
      <td>keyboard</td>
      <td>boolean</td>
      <td>true</td>
      <td>輪播是否對於鍵盤事件有反應</td>
    </tr>
    <tr>
      <td>pause</td>
      <td>string | boolean</td>
      <td>"hover"</td>
      <td>
        <p>
          如果設置為 <code>"hover"</code>, 輪播會因為 <code>mouseenter</code> 而暫停並在 <code>mouseleave</code> 時再度執行。如果設置 <code>false</code>，滑入時將不會停止輪播。
        </p>
        <p>在觸控裝置上 <code>"hover"</code>。在重播恢復之前，輪播將停止於 <code>touchend</code> (直到用戶與輪播的互動) 兩次之間的期間。注意，這是除了滑鼠行為以外。</p>
      </td>
    </tr>
    <tr>
      <td>ride</td>
      <td>string</td>
      <td>false</td>
      <td>
        用戶手動播放第一個後自動輪播。如果是 "carousel" 在輪播載入後自動播放。
      </td>
    </tr>
    <tr>
      <td>wrap</td>
      <td>boolean</td>
      <td>true</td>
      <td>輪播是否應該連續循環或停止。</td>
    </tr>
  </tbody>
</table>

### 方法 {#methods}

{% include callout-danger-async-methods.md %}

#### `.carousel(options)`

初始化透過 `object` 設定並開始執行輪播。

{% highlight js %}
$('.carousel').carousel({
  interval: 2000
})
{% endhighlight %}

#### `.carousel('cycle')`

從左到右循環播放。

#### `.carousel('pause')`

將物件的循環從輪播中停止。

#### `.carousel(number)`

將輪播指向到特定的影格（基於 0，類似於陣列）。 **在目標項目被顯示之前回傳給調用者**（在發生 `slid.bs.carousel` 事件之前）。

#### `.carousel('prev')`

將輪播指向前一個物件。**在前一個物件顯示前回傳給調用者** （在發生 `slid.bs.carousel` 事件之前）

#### `.carousel('next')`

將輪播指向下一個物件。**在前一個物件顯示前回傳給調用者** （在發生 `slid.bs.carousel` 事件之前）

#### `.carousel('dispose')`

銷毀一個元素的輪播

### 事件 {#events}

Bootstrap 提供了兩個事件給予輪播使用。 兩個事件都具有以下附加屬性：

- `direction`：輪播滑動的方向（`"left"` 或 `"right"`）。
- `relatedTarget`：被作為啟用的物件滑動到指定 DOM 元素。
- `from`：當前物件的索引
- `to`：下一個物件的索引

所有輪播事件都在輪播本身（即 `<div class="carousel">`）下被觸發。

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">事件類型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>slide.bs.carousel</td>
      <td>
      當調用 <code> slide </code> 方法時，此事件會立即觸發。</td>
    </tr>
    <tr>
      <td>slid.bs.carousel</td>
      <td>輪播完成切換後，此事件就被觸發。</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myCarousel').on('slide.bs.carousel', function () {
  // do something…
})
{% endhighlight %}

### Change transition duration

The transition duration of `.carousel-item` can be changed with the `$carousel-transition` Sass variable before compiling or custom styles if you're using the compiled CSS. If multiple transitions are applied, make sure the transform transition is defined first (eg. `transition: transform 2s ease, opacity .5s ease-out`).
