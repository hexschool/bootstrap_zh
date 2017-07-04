---
layout: docs
title: 圖像替換
description: 使用圖像替換 class 將文字與背景圖像替換。
group: utilities
toc: true
---

使用 `.text-hide` 或 Sass mixin 隱藏一個元素的文字內容並替換成背景圖片。

{% highlight html %}
<h1 class="text-hide">Custom heading</h1>
{% endhighlight %}

{% highlight scss %}
// Usage as a mixin
.heading {
  @include text-hide;
}
{% endhighlight %}
