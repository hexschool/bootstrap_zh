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

Badges can be used as part of links or buttons to provide a counter.

<div class="bd-example">
<button class="btn">
  Notifications <span class="badge badge-secondary">4</span>
</button>
</div>

{% highlight html %}
<button class="btn">
  Notifications <span class="badge badge-secondary">4</span>
</button>
{% endhighlight %}

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link or button. Unless the context is clear (as with the "Notifications" example, where it is arguably understandable that the "4" gives a count of the number of notifications), consider including additional context – for instance using a visually hidden piece of additional text.

<div class="bd-example">
<button class="btn">
  Profile <span class="badge badge-secondary">9</span>
  <span class="sr-only">unread messages</span>
</button>
</div>

{% highlight html %}
<button class="btn">
  Profile <span class="badge badge-secondary">9</span>
  <span class="sr-only">unread messages</span>
</button>
{% endhighlight %}

## 情境變化

加入以下的 Class 來修改標籤的外觀。

{% example html %}
{% for color in site.data.theme-colors %}
<span class="badge badge-{{ color.name }}">{{ color.name | capitalize }}</span>{% endfor %}
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

## 膠囊標籤

使用 `.badge-pill` 可以使標籤更圓潤（具有較大的邊框半徑和附加的水平 padding）。 如果你錯過了 v3 的標籤，這是有用的。

{% example html %}
{% for color in site.data.theme-colors %}
<span class="badge badge-pill badge-{{ color.name }}">{{ color.name | capitalize }}</span>{% endfor %}
{% endexample %}

## 連結

使用 `.badge` 與 `<a>` 元素提供可操作的標籤 hover 和 focus 狀態。

{% example html %}
{% for color in site.data.theme-colors %}
<a href="#" class="badge badge-{{ color.name }}">{{ color.name | capitalize }}</a>{% endfor %}
{% endexample %}
