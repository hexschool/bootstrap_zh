---
layout: docs
title: Position 位置
description: 使用速記通用類別配置元素的位置。
group: utilities
toc: true
---

## 通用屬性 {#common-values}

快速增加定位 Class 是可以用，雖然這些不包含響應式。

{% highlight html %}
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
{% endhighlight %}

## 固定在頂部 {#fixed-top}

將一個元素置於可視區的頂部，從邊到邊。請確認固定是你理解的方法，必要時你需要增加額外的 CSS。

{% highlight html %}
<div class="fixed-top">...</div>
{% endhighlight %}

## 固定在底部 {#fixed-bottom}

將一個元素置於可視區的底部，從邊到邊。請確認固定是你理解的方法，必要時你需要增加額外的 CSS。

{% highlight html %}
<div class="fixed-bottom">...</div>
{% endhighlight %}

## 貼齊於頂端 (Sticky top) {#sticky-top}

將一個元素置於可視區的頂部，從邊緣到邊緣，但僅在你滾動視窗經過它之後。`.sticky-top` 通用類別使用 CSS 的 `position: sticky`，它並沒有支援所有的瀏覽器。

**IE11 與 IE10 呈現 `position: sticky` 是使用 `position: relative`**。我們在這個樣式上增加 `@supports`，限制這個屬性只能在能夠執行的瀏覽器上運行。

{% highlight html %}
<div class="sticky-top">...</div>
{% endhighlight %}
