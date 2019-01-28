---
layout: docs
title: Borders
description: 使用 Border 通用類別迅速設計一個元素的 border 和邊框 border-radius。可用於圖像、按鈕、或任何其它元素。
group: utilities
redirect_from: "/docs/4.2/utilities/"
toc: true
---

## Border {#border}

對一個元素增加 class，以移除所有 border 或部分 border。

### 增加 {#additive}

<div class="bd-example-border-utils">
{% capture example %}
<span class="border"></span>
<span class="border-top"></span>
<span class="border-right"></span>
<span class="border-bottom"></span>
<span class="border-left"></span>
{% endcapture %}
{% include example.html content=example %}
</div>

### 減少 {#subtractive}

<div class="bd-example-border-utils bd-example-border-utils-0">
{% capture example %}
<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-right-0"></span>
<span class="border-bottom-0"></span>
<span class="border-left-0"></span>
{% endcapture %}
{% include example.html content=example %}
</div>

## 邊框色彩 {#border-color}

透過通用類別套用邊框的主題色彩。

<div class="bd-example-border-utils">
{% capture example %}
{% for color in site.data.theme-colors %}
<span class="border border-{{ color.name }}"></span>{% endfor %}
<span class="border border-white"></span>
{% endcapture %}
{% include example.html content=example %}
</div>

## Border-radius {#border-radius}

對一個元素增加 class 以方便的使其角部變圓。

<div class="bd-example bd-example-images">
  {%- include icons/placeholder.svg width="75" height="75" class="rounded" title="Example rounded image" -%}
  {%- include icons/placeholder.svg width="75" height="75" class="rounded-top" title="Example top rounded image" -%}
  {%- include icons/placeholder.svg width="75" height="75" class="rounded-right" title="Example right rounded image" -%}
  {%- include icons/placeholder.svg width="75" height="75" class="rounded-bottom" title="Example bottom rounded image" -%}
  {%- include icons/placeholder.svg width="75" height="75" class="rounded-left" title="Example left rounded image" -%}
  {%- include icons/placeholder.svg width="75" height="75" class="rounded-circle" title="Completely round image" -%}
  {%- include icons/placeholder.svg width="150" height="75" class="rounded-pill" title="Rounded pill image" -%}
  {%- include icons/placeholder.svg width="75" height="75" class="rounded-0" title="Example non-rounded image (overrides rounding applied elsewhere)" -%}
</div>

{% highlight html %}
<img src="..." alt="..." class="rounded">
<img src="..." alt="..." class="rounded-top">
<img src="..." alt="..." class="rounded-right">
<img src="..." alt="..." class="rounded-bottom">
<img src="..." alt="..." class="rounded-left">
<img src="..." alt="..." class="rounded-circle">
<img src="..." alt="..." class="rounded-pill">
<img src="..." alt="..." class="rounded-0">
{% endhighlight %}
