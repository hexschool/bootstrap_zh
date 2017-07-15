---
layout: docs
title: 標籤
description: 標籤的文檔與範例，包含小號及元件。
group: components
toc: true
---

## 範例

套用相應的字體大小和 `em` 單位使標籤繼承父元素的尺寸。

<div class="bd-example">
<div class="h1">Example heading <span class="badge badge-default">New</span></div>
<div class="h2">Example heading <span class="badge badge-default">New</span></div>
<div class="h3">Example heading <span class="badge badge-default">New</span></div>
<div class="h4">Example heading <span class="badge badge-default">New</span></div>
<div class="h5">Example heading <span class="badge badge-default">New</span></div>
<div class="h6">Example heading <span class="badge badge-default">New</span></div>
</div>

{% highlight html %}
<h1>Example heading <span class="badge badge-default">New</span></h1>
<h2>Example heading <span class="badge badge-default">New</span></h2>
<h3>Example heading <span class="badge badge-default">New</span></h3>
<h4>Example heading <span class="badge badge-default">New</span></h4>
<h5>Example heading <span class="badge badge-default">New</span></h5>
<h6>Example heading <span class="badge badge-default">New</span></h6>
{% endhighlight %}

## 情境變化

加入以下的 Class 來修改標籤的外觀。

{% example html %}
<span class="badge badge-default">Default</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

## 膠囊標籤

使用 `.badge-pill` 可以使標籤更圓潤（具有較大的邊框半徑和附加的水平 padding）。 如果你錯過了 v3 的標籤，這是有用的。

{% example html %}
<span class="badge badge-pill badge-default">Default</span>
<span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-pill badge-info">Info</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-pill badge-danger">Danger</span>
{% endexample %}

## 連結

使用 `.badge` 與 `<a>` 元素提供可操作的標籤 hover 和 focus 狀態。

{% example html %}
<a href="#" class="badge badge-default">Default</a>
<a href="#" class="badge badge-primary">Primary</a>
<a href="#" class="badge badge-success">Success</a>
<a href="#" class="badge badge-info">Info</a>
<a href="#" class="badge badge-warning">Warning</a>
<a href="#" class="badge badge-danger">Danger</a>
{% endexample %}
