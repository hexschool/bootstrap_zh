---
layout: docs
title: Borders
description: 使用 Border 通用類別迅速設計一個元素的 border 和邊框 border-radius。可用於圖像、按鈕、或任何其它元素。
group: utilities
redirect_from: "/docs/4.0/utilities/"
toc: true
---

## Border {#border}

對一個元素增加 class，以移除所有 border 或部分 border。

### 增加 {#additive}

<div class="bd-example-border-utils">
{% example html %}
<span class="border"></span>
<span class="border-top"></span>
<span class="border-right"></span>
<span class="border-bottom"></span>
<span class="border-left"></span>
{% endexample %}
</div>

### 減少 {#subtractive}

<div class="bd-example-border-utils bd-example-border-utils-0">
{% example html %}
<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-right-0"></span>
<span class="border-bottom-0"></span>
<span class="border-left-0"></span>
{% endexample %}
</div>

## 邊框色彩 {#border-color}

透過通用類別套用邊框的主題色彩。

<div class="bd-example-border-utils">
{% example html %}
{% for color in site.data.theme-colors %}
<span class="border border-{{ color.name }}"></span>{% endfor %}
<span class="border border-white"></span>
{% endexample %}
</div>

## Border-radius {#border-radius}

對一個元素增加 class 以方便的使其角部變圓。

<div class="bd-example bd-example-images">
  <img data-src="holder.js/75x75" class="rounded" alt="Example rounded image">
  <img data-src="holder.js/75x75" class="rounded-top" alt="Example top rounded image">
  <img data-src="holder.js/75x75" class="rounded-right" alt="Example right rounded image">
  <img data-src="holder.js/75x75" class="rounded-bottom" alt="Example bottom rounded image">
  <img data-src="holder.js/75x75" class="rounded-left" alt="Example left rounded image">
  <img data-src="holder.js/75x75" class="rounded-circle" alt="Completely round image">
  <img data-src="holder.js/75x75" class="rounded-0" alt="Example non-rounded image (overrides rounding applied elsewhere)">
</div>

{% highlight html %}
<img src="..." alt="..." class="rounded">
<img src="..." alt="..." class="rounded-top">
<img src="..." alt="..." class="rounded-right">
<img src="..." alt="..." class="rounded-bottom">
<img src="..." alt="..." class="rounded-left">
<img src="..." alt="..." class="rounded-circle">
<img src="..." alt="..." class="rounded-0">
{% endhighlight %}
