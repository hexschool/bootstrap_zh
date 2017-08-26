---
layout: docs
title: 警報 (Alerts)
description: 使用靈活的警報消息為使用者操作提供上下文的內容回饋。
group: components
toc: true
---

## 範例

警報可用於任何長度的內文，以及選擇性加入的關閉按鈕。正確的樣式，使用 8 個內文樣式 Class 的其中之一（例如`.alert-success`）。 對於行內的移除，請使用[警報 jQuery 插件](#dismissing)。

{% example html %}
{% for color in site.data.theme-colors %}
<div class="alert alert-{{ color.name }}" role="alert">
  This is a {{ color.name }} alert—check it out!
</div>{% endfor %}
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

### 連結顏色

使用 `.alert-link` 來快速為警報中的連結增添合適的色彩。

{% example html %}
{% for color in site.data.theme-colors %}
<div class="alert alert-{{ color.name }}" role="alert">
  This is a {{ color.name }} alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>{% endfor %}
{% endexample %}

### 額外的內容

警報可以增加額外的 HTML 元素，像是標題、段落以及分隔線。

{% example html %}
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
{% endexample %}


### 解除

使用警報的 JavaScript 插件，他能夠將行內的警報移除，使用如下：

- 請確認你有載入警報插件，或者是編譯後的 Bootstrap JavaScript。
- 如果你要自行編譯 JS，編譯的版本記得將 [requires `util.js`]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/#util) 加入。
- 加入解除用的按鈕並賦予 `.alert-dismissible`，如果你要將按鈕放在右上角的位置可以使用 `.close`。
- 解除用的按鈕加上 `data-dismiss="alert"` 屬性用來觸發 JavaScript 函式。請使用 `<button>` 元素，這可以在所有裝置上正常運行。
- 要以動態方式解除它們，可以使用 `.fade` 和 `.show`。

看看以下的範例吧：

{% example html %}
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</div>
{% endexample %}

## JavaScript 行為

### 觸發

通過 JavaScript 插件啟用解除警報。

{% highlight js %}
$(".alert").alert()
{% endhighlight %}

或者用 **警報內** 按鈕上的 `data` 屬性，如上所示：

{% highlight html %}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endhighlight %}

請注意，關閉警報會將其從 DOM 中刪除。

### 方法

| 方法 | 描述 |
| --- | --- |
| `$().alert()` | 發出警報，偵聽具有 `data-dismiss="alert"` 屬性的後代元素上的點擊事件。 （使用 data-api 的自動初始化時不需要）|
| `$().alert('close')` | 從 DOM 中刪除來關閉警報。如果元素上出現 `.fade` 和 `.show`，則在刪除之前該警報將淡出。 |

{% highlight js %}$(".alert").alert('close'){% endhighlight %}

### 事件

Bootstrap 警報插件提供額外的事件，可以直接取用警報函式。

| 事件 | 描述 |
| --- | --- |
| `close.bs.alert` | 當調用<code> close </code>實例方法時，此事件會立即觸發。 |
| `closed.bs.alert` | 警報關閉時，會觸發此事件（等待CSS轉換完成）。|

{% highlight js %}
$('#myAlert').on('closed.bs.alert', function () {
  // do something…
})
{% endhighlight %}
