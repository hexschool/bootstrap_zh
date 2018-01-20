---
layout: docs
title: 工具提示框 (Tooltips)
description: Bootstrap 的工具提示框文件與範例，工具提示框使用 CSS3 作為動畫顯示及資了屬性作為標題儲存。
group: components
toc: true
---

## 概觀

使用工具提示框插件時應瞭解的事情如下：

- 工具提示框依靠第三方函式庫 [Popper.js](https://popper.js.org/) 進行定位。 在 Bootstrap 工具提示框工作之前，您必須包含 [popper.min.js]({{ site.cdn.popper }})，或者使用 `bootstrap.bundle.min.js` / `bootstrap.bundle.js`，這已經包含 Popper.js 可以直接運作。
- 如果自行編譯 JS，記得 [requires `util.js`]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/#util)
- 工具提示框因為效能原因所以是選擇加入，所以 **您必須自己將他們初始化**。
- 零長度 `title` 和 `content` 值將永遠不會顯示一個工具提示框。
- 指定 `container: 'body'` 以避免在更複雜的元件（如我們的輸入群組，按鈕群組等）中呈現問題。
- 隱藏元素的工具提示框是不會成功的。
- `.disabled` 或 `disabled` 元素工具提示框的觸發必須在外層元素上。
- 當從跨越多行的超連結觸發時，工具提示框將被居中。在你的 `<a>` 上使用 `white-space: nowrap;` 來避免這種行為。
- 必須先隱藏工具提示框，然後才能從 DOM 中刪除相應的元素。

都明白了？太好了，讓我們透過一些例子看他們是如何運作的。

## 範例：在任何地方啟用工具提示框

在頁面上初始化所有工具提示框的一種方法是透過它們的 `data-toggle` 屬性來選擇它們：

{% highlight js %}
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
{% endhighlight %}

## 範例

滑鼠 hover 以下連結上以查看工具提示框

<div class="bd-example tooltip-demo">
  <p class="muted">Tight pants next level keffiyeh <a href="#" data-toggle="tooltip" title="Default tooltip">you probably</a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <a href="#" data-toggle="tooltip" title="Another tooltip">have a</a> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan <a href="#" data-toggle="tooltip" title="Another one here too">whatever keytar</a>, scenester farm-to-table banksy Austin <a href="#" data-toggle="tooltip" title="The last tip!">twitter handle</a> freegan cred raw denim single-origin coffee viral.
  </p>
</div>

將滑鼠 hover 以下按鈕上以查看他們的工具提示框有四個方向：頂部、右側、底部和左側對齊。。

<div class="bd-example tooltip-demo">
  <div class="bd-example-tooltips">
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
  </div>
</div>

{% highlight html %}
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
  Tooltip on left
</button>
{% endhighlight %}

添加自訂的 HTML：


{% highlight html %}
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
{% endhighlight %}

## 用法

工具提示框插件根據需要生成內容和標記，預設情況下它們在觸發元素之後放置工具提示框。

透過 JavaScript 啟用彈出工具提示框。


{% highlight js %}
$('#example').tooltip(options)
{% endhighlight %}

### 標記

工具提示框所需的標記只是一個 `data` 屬性，和您希望擁有一個工具提示框 HTML 元素上的 `title`。 生成工具提示框的標記是相當簡單的，儘管它需要一個位置（預設情況下，他的位置是 `top`）。

{% callout warning %}
##### 使工具提示框適用於鍵盤和輔助技術使用者

您只應為傳統上鍵盤 focus 和互動式（如連結或表單控制元件）的 HTML 元素添加工具提示框。 雖然任意的 HTML 元素（如`<span>`）可以透過添加 `tabindex="0"` 屬性來調整 focus ，但這會為鍵盤使用者的非互動式元素增加可能造成困惑的定位點。 此外，大多數輔助技術目前還沒有加入這種情況下的工具提示框。

此外，不要單純依賴 `hover` 作為工具提示框作為觸發器，因為這將使用你的工具提示框無法被鍵盤觸發。
{% endcallout %}

{% highlight html %}
<!-- HTML to write -->
<a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>

<!-- Generated markup by the plugin -->
<div class="tooltip bs-tooltip-top" role="tooltip">
  <div class="arrow"></div>
  <div class="tooltip-inner">
    Some tooltip text!
  </div>
</div>
{% endhighlight %}

### 禁用的元素

具有 `disabled` 的元素是不能產生互動的，這意味用戶不能使用 hover 及點擊觸發彈出(或工具提示)，如果想要啟用，可使用 `<div>` 或 `<span>` 包覆，且調整 `tabindex="0"` 讓鍵盤能夠切換，並覆蓋 `pointer-events` 在禁用的屬性上。

<div class="tooltip-demo">
{% example html %}
<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
  <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
</span>
{% endexample %}
</div>

### 選項

可以透過資料屬性或 JavaScript 傳遞選項。對於資料屬性，將選項名稱附加到 `data-`，如 `data-animation=""`。


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
      <td>將 CSS 漸變套用到工具提示框</td>
    </tr>
    <tr>
      <td>container</td>
      <td>string | element | false</td>
      <td>false</td>
      <td>
        <p>
        將工具提示框加到特定元素。例如：<code>container: 'body'</code>。 該選項特別有用，因為它允許您將觸摸屏定位在觸發元素附近的文字內容 - 這將防止在畫面調整大小期間彈出的提示遠離觸發元素。</p>
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
        <p>在工具提示框中允許 HTML </p>
        <p>如果為 true，工具提示框的 <code>title</code> 中的 HTML 標籤將在工具提示框中呈現。 如果為 false，則將使用 jQuery的 <code>text</code> 方法將內容插入到 DOM 中。如果您擔心 XSS 攻擊，請使用文字。</p>
      </td>
    </tr>
    <tr>
      <td>placement</td>
      <td>string | function</td>
      <td>'top'</td>
      <td>
        <p>如何定位工具提示框 - auto | top | bottom | left | right。<br>指定 <code>auto</code> 時，將動態重新定位工具提示框。</p>
        <p>當函數用於確定位置時，將使用工具提示框 DOM 節點作為其第一個參數並將觸發元素 DOM 節點作為其第二個參數來調用。 <code>this</code> 將被設為彈出提示框實例。</p>
      </td>
    </tr>
    <tr>
      <td>selector</td>
      <td>string | false</td>
      <td>false</td>
      <td>
      如果提供了選擇器，工具提示框將被委派給指定的目標。實際上，這用於動態 HTML 來擴增工具提示物件。 請參閱<a href="https://github.com/twbs/bootstrap/issues/4215"> 此 </a> 和 <a href="https://jsbin.com/zopod/1/edit">一個訊息範例</a>。
      </td>
    </tr>
    <tr>
      <td>template</td>
      <td>string</td>
      <td><code>'&lt;div class="tooltip" role="tooltip"&gt;&lt;div class="arrow"&gt;&lt;/div&gt;&lt;div class="tooltip-inner"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
      <td>
        <p>創建工具提示框時使用的基本 HTML </p>
        <p>工具提示框的 <code>title</code> 將被注入到 <code>.tooltip-inner</code> 中。</p>
        <p> <code>.arrow</code> 將成為工具提示框的箭頭。</p>
        <p>最外層的包裝元素應該有 <code>.tooltip</code> 及 <code>role="tooltip"</code>。</p>
      </td>
    </tr>
    <tr>
      <td>title</td>
      <td>string | element | function</td>
      <td>''</td>
      <td>
        <p>如果 <code>title</code> 屬性不存在，則為預設標題值。</p>
        <p>如果給出一個函數，它將被調用，其 <code>this</code> 引用設置為工具提示框附加到的元素。</p>
      </td>
    </tr>
    <tr>
      <td>trigger</td>
      <td>string</td>
      <td>'hover focus'</td>
      <td>
        <p>如何觸發工具提示框 - click | hover | focus | manual。 您可以傳遞多個觸發器；將它們與空格分開。`manual` 不能與任何其他觸發器組合。</p>
        <p><code>'manual'</code> 表示工具提示框將透過 <code>.tooltip('show')</code>、<code>.tooltip('hide')</code> 及 <code>.tooltip('toggle')</code> 
        的方法觸發，這個值不能與其它的觸發器做組合。</p>
        <p><code>'hover'</code> 將導致鍵盤無法觸發工具提示框，只能做為使用鍵盤用戶傳遞訊息的替代方法。
      </td>
    </tr>
    <tr>
      <td>offset</td>
      <td>number | string</td>
      <td>0</td>
      <td>工具提示框相對於其目標的偏移。更多信息，請參閱 Popper.js 的 <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">偏移文檔</a>。</td>
    </tr>
    <tr>
      <td>fallbackPlacement</td>
      <td>string | array</td>
      <td>'flip'</td>
      <td>指定工具提示框將在調回時使用哪個位置。 有關更多信息，請參閱 Popper.js 的 <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.behavior">行為文檔</a></td>
    </tr>
    <tr>
      <td>boundary</td>
      <td>string | element</td>
      <td>'scrollParent'</td>
      <td>Overflow constraint boundary of the tooltip. Accepts the values of <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a>.</td>
    </tr>
  </tbody>
</table>

{% callout info %}
#### 單個工具提示框的資料屬性

可以通過使用資料屬性來指定單個工具提示框的選項，如上所述。
{% endcallout %}

### 方法

{% capture callout-include %}{% include callout-danger-async-methods.md %}{% endcapture %}
{{ callout-include | markdownify }}

#### `$().tooltip(options)`

將一個工具提示框控制加到元素集合。

#### `.tooltip('show')`

顯示元素的工具提示框。 **在工具提示框實際顯示之前返回給調用者**（即在 `shown.bs.tooltip` 事件發生之前）。 這被認為是 "手動" 觸發工具提示框。零長度標題的工具提示框永不顯示。


{% highlight js %}$('#element').tooltip('show'){% endhighlight %}

#### `.tooltip('hide')`

隱藏元素的工具提示框。 **在工具提示框實際被隱藏之前返回給調用者**（即在 `hidden.bs.tooltip` 事件發生之前）。 這被認為是 "手動" 觸發工具提示框。


{% highlight js %}$('#element').tooltip('hide'){% endhighlight %}

#### `.tooltip('toggle')`

切換元素的工具提示框。 **在工具提示框實際顯示或隱藏之前返回給調用者**（即，在 `shown.bs.tooltip` 或 `hidden.bs.tooltip` 事件發生之前）。 這被認為是 "手動" 觸發工具提示框。


{% highlight js %}$('#element').tooltip('toggle'){% endhighlight %}

#### `.tooltip('dispose')`

Hides and destroys an element's tooltip. Tooltips that use delegation (which are created using [the `selector` option](#options)) cannot be individually destroyed on descendant trigger elements.

隱藏和破壞元素的工具提示框。 使用委託 [the `selector` option](#options)) 工具提示框不能在後代觸發元素上單獨銷毀。


{% highlight js %}$('#element').tooltip('dispose'){% endhighlight %}

#### `.tooltip('enable')`

給一個元素的工具提示框顯示的功能。 **預設情況下啟用工具提示框。**


{% highlight js %}$('#element').tooltip('enable'){% endhighlight %}

#### `.tooltip('disable')`

Removes the ability for an element's tooltip to be shown. The tooltip will only be able to be shown if it is re-enabled.

刪除元素的工具提示框的顯示功能。只有在重新啟用後，才能顯示工具提示框。


{% highlight js %}$('#element').tooltip('disable'){% endhighlight %}

#### `.tooltip('toggleEnabled')`

Toggles the ability for an element's tooltip to be shown or hidden.

{% highlight js %}$('#element').tooltip('toggleEnabled'){% endhighlight %}

#### `.tooltip('update')`

切換要顯示或隱藏元素的工具提示框的功能。

{% highlight js %}$('#element').tooltip('update'){% endhighlight %}

### Events

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">事件類型/th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.tooltip</td>
      <td>當調用 <code>show</code> 實例方法時，此事件會立即觸發。</td>
    </tr>
    <tr>
      <td>shown.bs.tooltip</td>
      <td>當工具提示框顯示後，會觸發此事件（待CSS轉換完成）。</td>
    </tr>
    <tr>
      <td>hide.bs.tooltip</td>
      <td>當調用 <code>hide</code> 實例方法時，會立即觸發此事件。</td>
    </tr>
    <tr>
      <td>hidden.bs.tooltip</td>
      <td>當工具提示框對隱藏後，會觸發此事件（待CSS轉換完成）。</td>
    </tr>
    <tr>
      <td>inserted.bs.tooltip</td>
      <td>
      將工具提示框範本加到 DOM 後，會在 <code>show.bs.tooltip</code> 事件後觸發此事件。</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myTooltip').on('hidden.bs.tooltip', function () {
  // do something…
})
{% endhighlight %}
