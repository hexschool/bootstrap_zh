---
layout: docs
title: 標籤 (Badge)
description: 標籤的文檔與範例，包含小號及元件。
group: components
toc: true
---

## 範例 {#example}

套用相應的字體大小和 `em` 單位使標籤繼承父元素的尺寸。

<div class="bd-example">
<div class="h1">Example heading <span class="badge badge-secondary">New</span></div>
<div class="h2">Example heading <span class="badge badge-secondary">New</span></div>
<div class="h3">Example heading <span class="badge badge-secondary">New</span></div>
<div class="h4">Example heading <span class="badge badge-secondary">New</span></div>
<div class="h5">Example heading <span class="badge badge-secondary">New</span></div>
<div class="h6">Example heading <span class="badge badge-secondary">New</span></div>
</div>

{% highlight html %}
<h1>Example heading <span class="badge badge-secondary">New</span></h1>
<h2>Example heading <span class="badge badge-secondary">New</span></h2>
<h3>Example heading <span class="badge badge-secondary">New</span></h3>
<h4>Example heading <span class="badge badge-secondary">New</span></h4>
<h5>Example heading <span class="badge badge-secondary">New</span></h5>
<h6>Example heading <span class="badge badge-secondary">New</span></h6>
{% endhighlight %}

標籤可以作為連結或按鈕的計數器。

{% capture example %}
<button type="button" class="btn btn-primary">
  Notifications <span class="badge badge-light">4</span>
</button>
{% endcapture %}
{% include example.html content=example %}


根據使用方式，標籤可能會讓螢幕閱讀器及相關輔助技術的用戶感到困惑，雖然標籤的樣式提供了依個視覺提示，但這些用戶只會將只會顯示標籤的內容。這些標籤會看起來像在句子、連結、按鈕中的後方隨機加入的詞或數字。

除非內文是清楚的 (如 "通知" 範例，使用隱藏的文字內容說明用途)，請考慮將附加的文字內容在視覺上隱藏。

{% capture example %}
<button type="button" class="btn btn-primary">
  Profile <span class="badge badge-light">9</span>
  <span class="sr-only">unread messages</span>
</button>
{% endcapture %}
{% include example.html content=example %}

## 情境變化 {#contextual-variations}

加入以下的 Class 來修改標籤的外觀。

{% capture example %}
{% for color in site.data.theme-colors %}
<span class="badge badge-{{ color.name }}">{{ color.name | capitalize }}</span>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

{% include callout-warning-color-assistive-technologies.md %}

## 膠囊標籤 {#pill-badges}

使用 `.badge-pill` 可以使標籤更圓潤（具有較大的邊框半徑和附加的水平 padding）。 如果你錯過了 v3 的標籤，這是有用的。

{% capture example %}
{% for color in site.data.theme-colors %}
<span class="badge badge-pill badge-{{ color.name }}">{{ color.name | capitalize }}</span>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

## 連結 {#links}

使用情境色彩 `.badge-*` 在 `<a>` 元素上提供可操作的標籤 hover 和 focus 狀態。

{% capture example %}
{% for color in site.data.theme-colors %}
<a href="#" class="badge badge-{{ color.name }}">{{ color.name | capitalize }}</a>{% endfor %}
{% endcapture %}
{% include example.html content=example %}
