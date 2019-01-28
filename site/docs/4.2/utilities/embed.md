---
layout: docs
title: 內嵌 (Embeds)
description: 在任何比例的裝置上建立內嵌的響應式影片或簡報，使其有固定的縮放比例。
group: utilities
toc: true
---

## 關於 {#about}

將這些規則直接應用到 `<iframe>`, `<embed>`, `<video>`, 和 `<object>`元素；當需要這些樣式對應屬性時可加入 `.embed-responsive-item`。

**小技巧** 你不需要將 `frameborder="0"` 加在你的`<iframe>`中，因為我們已經為你覆蓋了該屬性。

## Example {#example}

Wrap any embed like an `<iframe>` in a parent element with `.embed-responsive` and an aspect ratio. The `.embed-responsive-item` isn't strictly required, but we encourage it.

{% capture example %}
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
{% endcapture %}
{% include example.html content=example %}

## 長寬比 {#aspect-ratios}

通過修改 Class 可以自訂高寬比。預設的情況下，提供以下比率類別：

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

在 `_variables.scss` 中，您可以更改要使用的寬高比。以下是 `$embed-responsive-aspect-ratios` 列表的範例:

{% highlight scss %}
$embed-responsive-aspect-ratios: (
  (21 9),
  (16 9),
  (3 4),
  (1 1)
) !default;
{% endhighlight %}
