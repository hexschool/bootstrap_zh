---
layout: docs
title: 浮動 (Float)
description: 使用我們的響應式 float 通用類別，在任何斷點上切換任何元素的浮動。
group: utilities
toc: true
---

## 概觀 {#overview}

這些通用類別使用 [CSS `float` 屬性](https://developer.mozilla.org/en-US/docs/Web/CSS/float) 基於目前的視窗大小而向左、向右或禁用浮動。包含 `!important` 以避免權重問題。float 使用與網格系統相同的螢幕斷點。請注意，浮動 (float) 通用類別對 flex 沒有影響。

## 類別 {#classes}

用 class 切換 float：

{% capture example %}
<div class="float-left">Float left on all viewport sizes</div><br>
<div class="float-right">Float right on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div>
{% endcapture %}
{% include example.html content=example %}

## Mixins

使用 Sass mixin:

{% highlight scss %}
.element {
  @include float-left;
}
.another-element {
  @include float-right;
}
.one-more {
  @include float-none;
}
{% endhighlight %}

## 響應式 {#responsive}

每個 `float` 值都有響應式的變化：

{% capture example %}
<div class="float-sm-left">Float left on viewports sized SM (small) or wider</div><br>
<div class="float-md-left">Float left on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-left">Float left on viewports sized LG (large) or wider</div><br>
<div class="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div><br>
{% endcapture %}
{% include example.html content=example %}

Here are all the support classes;

{% for bp in site.data.breakpoints %}
- `.float{{ bp.abbr }}-left`
- `.float{{ bp.abbr }}-right`
- `.float{{ bp.abbr }}-none`{% endfor %}
