---
layout: docs
title: Responsive helpers
description: 在任何比例的裝置上建立內嵌的響應式影片或簡報，使其有固定的縮放比例。
group: utilities
toc: true
---

## 響應式的內嵌

將這些規則直接應用到 `<iframe>`, `<embed>`, `<video>`, 和 `<object>`元素；當需要這些樣式對應屬性時可加入 `.embed-responsive-item`。

**小技巧** 你不需要將 `frameborder="0"` 加在你的`<iframe>`中，因為我們已經為你覆蓋了該屬性。

{% example html %}
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
{% endexample %}

通過修改 Class 可以自訂高寬比。

{% highlight html %}
<!-- 21:9 aspect ratio -->
<div class="embed-responsive embed-responsive-21by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 1:1 aspect ratio -->
<div class="embed-responsive embed-responsive-1by1">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
{% endhighlight %}

## 響應式浮動

這些 Class 將一個元素浮動於左側或右側、或者禁用浮動，是基於目前可視區使用[CSS `float` 屬性](https://developer.mozilla.org/en-US/docs/Web/CSS/float)。為了避免特殊性問題加入了 `!important`。這些使用與網格系統中一樣的 viewport。

也可以使用兩個非響應式的 Sass mixins (`float-left` 和 `float-right`)。

{% example html %}
<div class="float-left">Float left on all viewport sizes</div><br>
<div class="float-right">Float right on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div><br>

<div class="float-sm-left">Float left on viewports sized SM (small) or wider</div><br>
<div class="float-md-left">Float left on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-left">Float left on viewports sized LG (large) or wider</div><br>
<div class="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div><br>
{% endexample %}

{% highlight scss %}
// Related simple non-responsive mixins
.element {
  @include float-left;
}
.another-element {
  @include float-right;
}
{% endhighlight %}
