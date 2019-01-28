---
layout: docs
title: 吐司 (Toasts)
description: 透過吐司向使用者推播通知，它是一種輕量且易於客製化的警報消息
group: components
toc: true
---



吐司是輕量級通知，目的在於模仿行動版和桌面版的推播通知。它們是用 flexbox 構建的，因此很容易對齊和定位。

## 概觀 {#overview}

使用吐司元件時應瞭解的事情如下：

- 如果你自行編譯 JS，記得 [requires `util.js`]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/#util).
- 吐司因為效能原因所以是選擇加入，所以 **您必須自己將它們初始化**。
- 如果你沒有指定 `autohide:false`，吐司會自動隱藏。

## 範例 {#examples}

### 基礎 {#basic}

為了支援可擴充性和可預測性的吐司，我們建議使用標題和正文。 由於我們的 margin 和 flexbox 通用類別，吐司的標題使用 `display:flex` 輕鬆就能對齊內容。

吐司元件要盡可能靈活，並且只需要很少的標記。我們至少需要一個單獨的元素來包含您的“套用吐司樣式的”內容，並強烈建議加上關閉按鈕。

<div class="bg-light">
{% capture example %}
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    {% include icons/placeholder.svg width="20" height="20" background="#007aff" class="rounded mr-2" text=" " title=" " %}
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
</div>

### 半透明 {#translucent}

吐司也可以是半透明的，因此能混合在它們可能出現的任何東西上。在支持 CSS 屬性 `backdrop-filter` 的瀏覽器，我們還會嘗試在吐司下模糊效果。

<div class="bg-dark">
{% capture example %}
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    {% include icons/placeholder.svg width="20" height="20" background="#007aff" class="rounded mr-2" text=" " title=" " %}
    <strong class="mr-auto">Bootstrap</strong>
    <small class="text-muted">11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
</div>

### 堆疊 {#stacking}

當你使用多個吐司元件時，我們預設以可讀的方式堆疊它們。

<div class="bg-light">
{% capture example %}
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    {% include icons/placeholder.svg width="20" height="20" background="#007aff" class="rounded mr-2" text=" " title=" " %}
    <strong class="mr-auto">Bootstrap</strong>
    <small class="text-muted">just now</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    See? Just like this.
  </div>
</div>

<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    {% include icons/placeholder.svg width="20" height="20" background="#007aff" class="rounded mr-2" text=" " title=" " %}
    <strong class="mr-auto">Bootstrap</strong>
    <small class="text-muted">2 seconds ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Heads up, toasts will stack automatically
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
</div>

## 位置 {#placement}

根據需要來使用自定義 CSS 指定吐司的位置。右上角通常用於通知，頂部中間也是如此。如果您一次只要展示一個吐司，請將定位樣式放在`.toast`上。

<div class="bg-dark">
{% capture example %}
<div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
  <div class="toast" style="position: absolute; top: 0; right: 0;">
    <div class="toast-header">
      {% include icons/placeholder.svg width="20" height="20" background="#007aff" class="rounded mr-2" text=" " title=" " %}
      <strong class="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
</div>

對於會推播更多通知的系統，請考慮使用包覆元素的方式，以便它們可以堆疊顯示。

<div class="bg-dark">
{% capture example %}
<div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
  <!-- Position it -->
  <div style="position: absolute; top: 0; right: 0;">

    <!-- Then put toasts within -->
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        {% include icons/placeholder.svg width="20" height="20" background="#007aff" class="rounded mr-2" text=" " title=" " %}
        <strong class="mr-auto">Bootstrap</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        See? Just like this.
      </div>
    </div>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        {% include icons/placeholder.svg width="20" height="20" background="#007aff" class="rounded mr-2" text=" " title=" " %}
        <strong class="mr-auto">Bootstrap</strong>
        <small class="text-muted">2 seconds ago</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        Heads up, toasts will stack automatically
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
</div>

您還可以使用 flexbox 通用類別來對吐司做 水平 和/或 垂直 的對齊。

<div class="bg-dark">
{% capture example html %}
<!-- Flexbox container for aligning the toasts -->
<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center" style="min-height: 200px;">

  <!-- Then put toasts within -->
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {% include icons/placeholder.svg width="20" height="20" background="#007aff" class="rounded mr-2" text=" " title=" " %}
      <strong class="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
</div>

## 親和性 {#accessibility}

吐司元件的目的在於對訪問者或用戶造成較小的干擾，所以為了幫助那些使用螢幕閱讀器和類似輔助技術的人，你應該在 [`aria-live` region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) 包覆吐司元件。螢幕閱讀器會自動對當前區域的變更做更改（例如：注入 / 更新吐司元件），而不需要轉移用戶的焦點或以其他方式中斷用戶。另外，包含 `aria-atomic="true"` 以確保整個吐司都會被宣告為單一個（原子）單位，而不是宣布改變了什麼（如果你只更新部分吐司的內容，可能會導致問題 ，或者如果在稍後的時間點顯示相同的吐司內容）。如果所要顯示的訊息對於該處理程序是很重要的，例如：對於表單中的錯誤列表，請使用 [警報 (Alerts) 元件]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/alerts/) 而不是吐司。

請注意，在生成或更新吐司之前，當前區域需要存在於標記 *之前*。 如果您同時動態產生兩者並將它們注入頁面，將不會透過輔助技術宣吿它們。

你還需要根據內容等級調整 `role` 和 `aria-live` 的等級。 如果它是一個重要的訊息，例如：錯誤訊息，請使用 `role="alert" aria-live="assertive"`，否則請使用 `role="status" aria-live="polite"` 屬性。

當您顯示的內容有改變時，請務必更新 [`delay` timeout](#options) 以確保使用者有足夠的時間閱讀吐司。

{% highlight html %}
<div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-delay="10000">
  <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
</div>
{% endhighlight %}

當使用 `autohide: false` 時，必須增加一個關閉的按鈕，讓用戶可以關閉吐司。

<div class="bg-light">
{% capture example %}
<div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-autohide="false">
  <div class="toast-header">
    {% include icons/placeholder.svg width="20" height="20" background="#007aff" class="rounded mr-2" text=" " title=" " %}
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
</div>

## JavaScript 行為 {#javaScript behavior}

### 用法 {#usage}

透過 JavaScript 初始化吐司:

{% highlight js %}
$('.toast').toast(option)
{% endhighlight %}

### 選項 {#options}

可以透過資料屬性或 JavaScript 傳遞選項。對於資料屬性，將選項名稱附加到 `data-`，如： `data-animation=""`。

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">名稱</th>
      <th style="width: 100px;">類型</th>
      <th style="width: 50px;">預設值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>animation</td>
      <td>boolean</td>
      <td>true</td>
      <td>將 CSS 的淡入淡出效果應用在吐司上</td>
    </tr>
    <tr>
      <td>autohide</td>
      <td>boolean</td>
      <td>true</td>
      <td>自動隱藏吐司</td>
    </tr>
    <tr>
      <td>delay</td>
      <td>number</td>
      <td>
        <code>500</code>
      </td>
      <td>延後隱藏吐司 (ms)</td>
    </tr>
  </tbody>
</table>

### 方法 {#methods}

{% include callout-danger-async-methods.md %}

#### `$().toast(options)`

將吐司的處理程序加入到一個元素集合。

#### `.toast('show')`

顯示吐司的元素。 **在吐司元素實際顯示之前** (即在 `shown.bs.toast` 事件發生之前) 返回到調用者。您必須手動呼叫這個方法，否則您的吐司元素將不會顯示。

{% highlight js %}$('#element').toast('show'){% endhighlight %}

#### `.toast('hide')`

隱藏吐司的元素。 **在吐司元素實際隱藏之前** (即在 `hidden.bs.toast` 事件發生之前)返回到調用者。如果使用 `autohide` 等於 `false`，你必須手動呼叫這個方法。

{% highlight js %}$('#element').toast('hide'){% endhighlight %}

#### `.toast('dispose')`

隱藏吐司的元素。 您的吐司元件將保留在 DOM 上，但不會再顯示。

{% highlight js %}$('#element').toast('dispose'){% endhighlight %}

### 事件 {#events}

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">事件類別</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.toast</td>
      <td>當調用 <code>show</code> 方法時，此事件會立即觸發。</td>
    </tr>
    <tr>
      <td>shown.bs.toast</td>
      <td>當使用者可看見吐司元素時，會觸發此事件。</td>
    </tr>
    <tr>
      <td>hide.bs.toast</td>
      <td>當調用 <code>hide</code> 方法時，此事件會立即觸發。</td>
    </tr>
    <tr>
      <td>hidden.bs.toast</td>
      <td>當對使用者隱藏了一個吐司元素時，會觸發此事件</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myToast').on('hidden.bs.toast', function () {
  // do something…
})
{% endhighlight %}
