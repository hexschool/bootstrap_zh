---
layout: docs
title: 彈出提示框 (Popovers)
description: Bootstrap 彈出提示框的文件與範例，風格類似 iOS 上的，可加在網頁上的任何元素上。
group: components
toc: true
---

## 概觀

使用彈出提示框插件時應瞭解的事情如下：

- 彈出提示框依靠第三方函式庫 [Popper.js](https://popper.js.org/) 進行定位。 在 Bootstrap 彈出提示框工作之前，您必須包含 [popper.min.js]({{ site.cdn.popper }})，或者使用 `bootstrap.bundle.min.js` / `bootstrap.bundle.js`，這已經包含 Popper.js 可以直接運作。
- 彈出提示框需要 [工具提示插件]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/tooltips/) 作為依賴。
- 如果你自行編譯 JS，記得 [requires `util.js`]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/#util)。
- 彈出提示框因為校能原因所以是選擇加入，所以 **您必須自己將他們初始化**。
- 零長度 `title` 和 `content` 值將永遠不會顯示一個彈出提示框。
- 指定 `container: 'body'` 以避免在更複雜的元件（如我們的輸入群組，按鈕群組等）中呈現問題。
- 隱藏元素的彈出提示框是不會成功的。
- `.disabled` 或 `disabled` 元素彈出提示框的觸發必須在外層元素上。
- 當從跨越多行的超連結觸發時，彈出提示框將被居中。在你的 `<a>` 上使用 `white-space: nowrap;` 來避免這種行為。
- 必須先隱藏彈出提示框，然後才能從 DOM 中刪除相應的元素。

都明白了？太好了，讓我們透過一些例子看他們是如何運作的。

## 範例：在任何地方啟用彈出提示框

在頁面上初始化所有彈出提示框的一種方法是透過它們的 `data-toggle` 屬性來選擇它們：

{% highlight js %}
$(function () {
  $('[data-toggle="popover"]').popover()
})
{% endhighlight %}

## 範例：使用 `container` 選項

當您在父元素上有一些干擾彈出提示框的樣式時，您將需要指定一個自訂的 `container` ，以便彈出提示框的 HTML 顯示在該元素中。


{% highlight js %}
$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})
{% endhighlight %}

## 範例

{% example html %}
<button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
{% endexample %}

### 四個方向

Four options are available: top, right, bottom, and left aligned.

<div class="bd-example popover-demo">
  <div class="bd-example-popovers">
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on top
    </button>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on right
    </button>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on bottom
    </button>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on left
    </button>
  </div>
</div>

{% highlight html %}
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>
{% endhighlight %}

### 下次點擊移除

使用 `focus` 觸發以便用戶進行下一次點擊時移除這個彈出提示框。

{% callout danger %}
#### 下一步點擊所需的具體標記

為了正確的跨瀏覽器和跨平台，您必須使用 `<a>` 標籤，_而不是_ `<button>`標籤，您還必須包含一個 [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) 屬性。
{% endcallout %}

{% example html %}
<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
{% endexample %}

{% highlight js %}
$('.popover-dismiss').popover({
  trigger: 'focus'
})
{% endhighlight %}

### 禁用的元素

具有 `disabled` 的元素是不能產生互動的，這意味用戶不能使用 hover 及點擊觸發彈出(或工具提示)，如果想要啟用，你使用 `<div>` 或 `<span>` 包覆並覆蓋 `pointer-events` 在禁用的屬性上。

對於禁用的彈出提示框，你也許傾向使用 `data-trigger="hover"` 來直接為用戶提供視覺回饋，因為用戶不會去點擊禁用的元素。

{% example html %}
<span class="d-inline-block" data-toggle="popover" data-content="Disabled popover">
  <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
</span>
{% endexample %}

## 用法


{% highlight js %}$('#example').popover(options){% endhighlight %}

### 選項

可以透過資料屬性或 JavaScript 傳遞選項。 對於資料屬性，將選項名稱附加到 `data-` 上，如 `data-animation=""`。


<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">名稱</th>
      <th style="width: 100px;">類型</th>
      <th style="width: 50px;">預設</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>animation</td>
      <td>boolean</td>
      <td>true</td>
      <td>將 CSS 漸變套用到彈出提示框</td>
    </tr>
    <tr>
      <td>container</td>
      <td>string | element | false</td>
      <td>false</td>
      <td>
        <p>
        將彈出提示框加到特定元素。例如：<code>container: 'body'</code>。 該選項特別有用，因為它允許您將觸摸屏定位在觸發元素附近的文字內容 - 這將防止在畫面調整大小期間彈出的提示遠離觸發元素。</p>
      </td>
    </tr>
    <tr>
      <td>content</td>
      <td>string | element | function</td>
      <td>''</td>
      <td>
      <p>如果 <code>data-content</code> 屬性不存在，則為預設內容值。</p>
      <p>如果給出一個函數，它將被調用，其<code>this</code> 引用設置為彈出提示框附加到的元素。</p>
      </td>
    </tr>
    <tr>
      <td>delay</td>
      <td>number | object</td>
      <td>0</td>
      <td>
        <p>顯示和隱藏彈出提示框的延遲（ms） - 不適用於手動觸發類型</p>
        <p>如果提供了一個數字，則將延遲應用於隱藏/顯示</p>
        <p>物件結構是：<code>delay: { "show": 500, "hide": 100 }</code></p>
      </td>
    </tr>
    <tr>
      <td>html</td>
      <td>boolean</td>
      <td>false</td>
      <td>
      將HTML插入到彈出提示框中。 如果是 false，那麼將使用 jQuery 的 <code>text</code> 方法將內容插入到 DOM 中。如果您擔心 XSS 攻擊，請使用文字。</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>string | function</td>
      <td>'right'</td>
      <td>
      <p>如何定位彈出提示框 - auto | top | bottom | left | right。<br>指定 <code>auto</code> 時，將動態重新定位彈出提示框。</p>
      <p>當函數用於確定位置時，將使用彈出提示框 DOM 節點作為其第一個參數並將觸發元素 DOM 節點作為其第二個參數來調用。 <code>this</code> 將被設為彈出提示框實例。</p>
      </td>
    </tr>
    <tr>
      <td>selector</td>
      <td>string | false</td>
      <td>false</td>
      <td>
      如果提供了選擇器，彈出提示框將被委派給指定的目標。實際上，這用於動態 HTML 來擴增彈出提示框。 請參閱<a href="https://github.com/twbs/bootstrap/issues/4215"> 此 </a> 和 <a href="https://jsbin.com/zopod/1/edit">一個訊息範例</a>。</td>
    </tr>
    <tr>
      <td>template</td>
      <td>string</td>
      <td><code>'&lt;div class="popover" role="tooltip"&gt;&lt;div class="arrow"&gt;&lt;/div&gt;&lt;h3 class="popover-header"&gt;&lt;/h3&gt;&lt;div class="popover-body"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
      <td>
        <p>創建動態提示框時使用的基本 HTML </p>
        <p>動態提示框的 <code>title</code> 將被注入到 <code>.popover-header</code> 中。</p>
        <p>動態提示框的 <code>content</code> 將被注入到 <code>.popover-body</code> 中。</p>
        <p> <code>.arrow</code> 將成為動態提示框的箭頭。</p>
        <p>最外層的包裝元素應該有 <code>.popover</code>。</p>
      </td>
    </tr>
    <tr>
      <td>title</td>
      <td>string | element | function</td>
      <td>''</td>
      <td>
        <p>如果 <code>title</code> 屬性不存在，則為預設標題值。</p>
        <p>如果給出一個函數，它將被調用，其 <code>this</code> 引用設置為動態提示框附加到的元素。</p>
      </td>
    </tr>
    <tr>
      <td>trigger</td>
      <td>string</td>
      <td>'click'</td>
      <td>
      如何觸發動態提示框 - click | hover | focus | manual。 您可以傳遞多個觸發器；將它們與空格分開。`manual` 不能與任何其他觸發器組合。</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>number | string</td>
      <td>0</td>
      <td>
      動態提示框相對於其目標的偏移。更多信息，請參閱 Popper.js 的 <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">偏移文檔</a>。</td>
    </tr>
    <tr>
      <td>fallbackPlacement</td>
      <td>string | array</td>
      <td>'flip'</td>
      <td>
      指定動態提示框將在調回時使用哪個位置。 有關更多信息，請參閱 Popper.js 的 <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.behavior">行為文檔</a></td>
    </tr>
    <tr>
      <td>boundary</td>
      <td>string | element</td>
      <td>'scrollParent'</td>
      <td>Overflow constraint boundary of the popover. Accepts the values of <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a>.</td>
    </tr>
  </tbody>
</table>

{% callout info %}
#### 各彈出提示框的資料屬性

如上所述，可以通過使用資料屬性來替代指定各個彈出提示框的選項。

{% endcallout %}

### 方法

{% capture callout-include %}{% include callout-danger-async-methods.md %}{% endcapture %}
{{ callout-include | markdownify }}

#### `$().popover(options)`

元素集合的彈出提示框初始化。

#### `.popover('show')`

顯示一個元素的彈出提示框。 **在彈出實際顯示之前返回給調用者**（即，在 `shown.bs.popover` 事件發生之前）。 這被認為是彈出提示框是 "手動" 觸發。標題和內容均為零的彈出提示框從不顯示。


{% highlight js %}$('#element').popover('show'){% endhighlight %}

#### `.popover('hide')`

隱藏元素的彈出提示框。 **在彈出提示框實際被隱藏之前返回給調用者**（即在 `hidden.bs.popover` 事件發生之前）。這被認為是彈出提示框的 "手動" 觸發。



{% highlight js %}$('#element').popover('hide'){% endhighlight %}

#### `.popover('toggle')`

切換元素的彈出提示框。 **在popover實際顯示或隱藏之前返回給調用者**（即，在 `shown.bs.popover` 或 `hidden.bs.popover` 事件發生之前）。 這被認為是彈出提示框的 "手動" 觸發。


{% highlight js %}$('#element').popover('toggle'){% endhighlight %}

#### `.popover('dispose')`

隱藏和銷毀一個元素的彈出提示框。使用委託（[the `selector` option](#options)) 創建）的彈出提示框不能在後代觸發元素上被單獨銷毀。

{% highlight js %}$('#element').popover('dispose'){% endhighlight %}

#### `.popover('enable')`

給一個元素的彈出提示框顯示的功能。 **彈出提示框是在預設情況下啟用的。**


{% highlight js %}$('#element').popover('enable'){% endhighlight %}

#### `.popover('disable')`

刪除要顯示元素的彈出提示框的功能。只有在重新啟用後，才能顯示彈出提示框。


{% highlight js %}$('#element').popover('disable'){% endhighlight %}

#### `.popover('toggleEnabled')`


切換彈出提示框的顯示或隱藏元素功能。


{% highlight js %}$('#element').popover('toggleEnabled'){% endhighlight %}

#### `.popover('update')`

更新彈出提示框的位置。

{% highlight js %}$('#element').popover('update'){% endhighlight %}

### 事件

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">事件類型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.popover</td>
      <td>
      當調用 <code>show</code> 實例方法時，此事件會立即觸發。
      </td>
    </tr>
    <tr>
      <td>shown.bs.popover</td>
      <td>
      當彈出提示框顯示時，會觸發此事件（待 CSS 轉換完成）。</td>
    </tr>
    <tr>
      <td>hide.bs.popover</td>
      <td>當調用 <code>hide</code> 實例方法時，會立即觸發此事件。</td>
    </tr>
    <tr>
      <td>hidden.bs.popover</td>
      <td>
      當彈出提示框隱藏後，會觸發此事件（將等待CSS轉換完成）</td>
    </tr>
    <tr>
      <td>inserted.bs.popover</td>
      <td>當將提示範本加到 DOM 時，此事件在 <code>show.bs.popover</code> 事件之後觸發。</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myPopover').on('hidden.bs.popover', function () {
  // do something…
})
{% endhighlight %}
