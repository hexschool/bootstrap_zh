---
layout: docs
title: Clearfix
description: 通過增加一個清除浮動通用類別，快速和方便的清除容器內的浮動內容。
group: utilities
toc: true
---

通過對 **父元素** 增加`.clearfix`（清除浮動）以方便的清除`float`（浮動）。也可以做為 Sass mixin 使用。


{% highlight html %}
<div class="clearfix">...</div>
{% endhighlight %}

{% highlight scss %}
// Mixin itself
@mixin clearfix() {
  &::after {
    display: block;
    content: "";
    clear: both;
  }
}

// Usage as a mixin
.element {
  @include clearfix;
}
{% endhighlight %}

下面的例子顯示了如何使用清除浮動。不使用清除浮動，外層 div 將不會包覆按鈕而導致跑版。

{% capture example %}
<div class="bg-info clearfix">
  <button type="button" class="btn btn-secondary float-left">Example Button floated left</button>
  <button type="button" class="btn btn-secondary float-right">Example Button floated right</button>
</div>
{% endcapture %}
{% include example.html content=example %}
