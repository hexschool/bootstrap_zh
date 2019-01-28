---
layout: docs
title: 折疊 (Collapse)
description: 透過 Class 及 JavaScript 插件切換內容的顯示與否。
group: components
toc: true
---

## 如何運作 {#how-it-works}

折疊的 JavaScript 插件用於顯示和隱藏內容。按鈕或錨點做為觸發器，對應到需要切換的元素上。折疊元素會將 `height` 從當前值設置轉為 `0`。由於 CSS 如何處理動畫的條件，你不能在 `.collapse` 元素上使用 `padding`。相反，使用該 class 作為獨立的包裝元素。

{% include callout-info-prefersreducedmotion.md %}

## 範例 {#example}

點擊按鈕透過 Class 更改來顯示及隱藏另一個元素：

- `.collapse` 隱藏物件
- `.collapsing` 套用轉換中的動態效果
- `.collapse.show` 顯示內容

您可以使用帶有 `href` 屬性的連結或帶 `data-target` 屬性的按鈕。在這兩種情況下，都需要 `data-toggle="collapse"`。

{% capture example %}
<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## 多個目標


`<button>` 或 `<a>` 可以透過在其 `href` 或 `data-target` 屬性中使用 JQuery 選擇器引用它們來顯示和隱藏多個元素。
如果每個引用它們 `href` 或 `data-target` 屬性，多個 `<button>` 或 `<a>` 都可以顯示和隱藏元素。

{% capture example %}
<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## 折疊範例

使用 [卡片]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/card/) 元件，您可以展開預設的折疊行為以創建折疊功能。要正確呈現折疊功能，請務必使用 `.accordion` 來包覆。

{% capture example %}
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## 親和性

確保在控制元素中添加 `aria-expanded`。 該屬性傳達與螢幕閱讀器和類似輔助技術相關的可控元件的當前狀態。如果可折疊元素預設關閉，則控制項元素上的屬性值應為 `aria-expanded="false"`。 如果您使用 `show` 將可折疊元素設置為預設打開，在控制項上設置 `aria-expanded="true"`。插件將根據是否打開或關閉可折疊元素自動切換控制項上的此屬性（透過 JavaScript，當使用者觸發的另一個控制項元素也綁定到同一個折疊元素）。如果控制的 HTML 元素不是按鈕 (例如`<a>`或`<div>`)，那麼屬性 `role="button"` 應該加到元素中。

請注意，Bootstrap 當前的折疊不包含 [WAI-ARIA Authoring Practices 1.1 accordion pattern (折疊模式的實踐)](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) 描述的鍵盤操作，你需要自訂 JavaScript 來實現這些內容。

## 用法

折疊插件使用一些 Class 來處理這些麻煩事。

- `.collapse` 隱藏內容
- `.collapse.show` 顯示內容
- `.collapsing` 當開始轉換時會加入，而在完成時移除

這些 Class 可以在 `_transitions.scss` 內找到。

### 透過資料屬性

只需將  `data-toggle="collapse"` 和 `data-target` 添加到元素中即可自動指定可折疊元素的控制項。 `data-target` 屬性接受 CSS 選擇器來套用折疊。 確保將 `collapse` 添加到可折疊元素上。如果你希望它預設打開，可增加額外的 `show`。

可將折疊區域中的手風琴風格加到資料屬性 `data-parent="#selector"` 中。可以參考範例中的效果。

### 透過 JavaScript

透過手動方式啟用：

{% highlight js %}
$('.collapse').collapse()
{% endhighlight %}

### 選項

可透過資料屬性或 JavaScript 加入選項。對於資料屬性，將選項名稱附加到 `data-`，如 `data-parent=""`。

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">名稱</th>
      <th style="width: 50px;">類型</th>
      <th style="width: 50px;">預設值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>parent</td>
      <td>selector | jQuery object | DOM element </td>
      <td>false</td>
      <td>
      如果提供了父層，則當顯示此可折疊物件時，指定父項下的所有可折疊元素將被關閉。（類似于傳統的折疊控制項行為 - 這取決於 <code>card</code>）。該屬性必須在目標可折疊區域上設置。</td>
    </tr>
    <tr>
      <td>toggle</td>
      <td>boolean</td>
      <td>true</td>
      <td>切換可折疊元素</td>
    </tr>
  </tbody>
</table>

### 方法

{% include callout-danger-async-methods.md %}

#### `.collapse(options)`

啟用你的可折疊元素的內容，透過包含選項的 `object`。

{% highlight js %}
$('#myCollapsible').collapse({
  toggle: false
})
{% endhighlight %}

#### `.collapse('toggle')`

將可折疊元素切換為顯示或隱藏。 **在可折疊元素實際顯示或隱藏之前**（即發生 `shown.bs.collapse` 或 `hidden.bs.collapse` 事件之前）返回到調用者。

#### `.collapse('show')`

顯示可折疊的元素。 **在可折疊元素實際顯示之前**（即在 `shown.bs.collapse` 事件發生之前）返回到調用者。

#### `.collapse('hide')`

隱藏可折疊的元素。 **在可折疊元素實際上被隱藏之前返回給調用者**（即在 `hidden.bs.collapse` 事件發生之前）。

#### `.collapse('dispose')`

銷毀一個元素的折疊。

### 事件

Bootstrap 提供一些事件給予折疊使用。

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">事件類別</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.collapse</td>
      <td>當調用 <code> show </code> 方法時，此事件會立即觸發</td>
    </tr>
    <tr>
      <td>shown.bs.collapse</td>
      <td>當使用者可見折疊元素時，會觸發此事件（將等待CSS轉換完成）。</td>
    </tr>
    <tr>
      <td>hide.bs.collapse</td>
      <td>當調用 <code> hide </code> 方式時，會立即觸發此事件。</td>
    </tr>
    <tr>
      <td>hidden.bs.collapse</td>
      <td>當對使用者隱藏了一個折疊元素時，會觸發此事件（將等待CSS 轉換完成）。</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something…
})
{% endhighlight %}
