---
layout: docs
title: 溢出 (Overflow)
description: 使用這些速記的通用類別快速配置內容溢出元素的方式。
group: utilities
toc: true
---

預設情況下，準系統 `overflow` 提供了兩個溢出的值，且它們沒有響應式。

<div class="bd-example d-md-flex">
  <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3 bg-light" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div class="overflow-hidden p-3 bg-light" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions.
  </div>
</div>

{% highlight html %}
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
{% endhighlight %}

使用 Sass 變數，您可以透過更改 `_variables.scss` 中的 `$overflows` 變數來自定義溢出 (Overflow) 通用類別。