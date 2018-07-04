---
layout: docs
title: 可見性 (Visibility)
description: 通過可見性通用類別控制可見性，不會影響物件的實際空間。
group: utilities
---

使用可見性通用類別設置元素的 `visibility`。這不會改變 `display` 值，並且有助於對大部分使用者隱藏內容，但是在螢幕閱讀器仍然保存它們。

依需求使用 `.visible` 或 `.invisible`。

{% highlight html %}
<div class="visible">...</div>
<div class="invisible">...</div>
{% endhighlight %}

{% highlight scss %}
// Class
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}

// Usage as a mixin
.element {
  @include invisible(visible);
}
.element {
  @include invisible(hidden);
}
{% endhighlight %}
