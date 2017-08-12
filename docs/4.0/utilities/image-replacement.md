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

使用 `.text-hide` 來維持標籤的親和性及 SEO，但要使用 `background-image` 取代文字內容。

{% example html %}
<h1 class="text-hide" style="background-image: url('/assets/brand/bootstrap-solid.svg'); width: 50px; height: 50px;">Bootstrap</h1>
{% endexample %}
