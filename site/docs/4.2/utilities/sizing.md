---
layout: docs
title: 尺寸 (Sizing)
description: 使用寬度和高度通用類別，可將一個元素加寬或增高。
group: utilities
toc: true
---

## 相對於父元素 {#relative-to-the-parent}

寬度和高度通用類別可以從 `_variables.scss` 中 `$sizes` 的 Sass map 產生。預設包含 `25%`、 `50%`、 `75%` 和 `100%` 以及 `auto` 做為預設。按你的需求調整這些值，可產生不同的屬性。

{% capture example %}
<div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
<div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
<div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
<div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>
<div class="w-auto p-3" style="background-color: #eee;">Width auto</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
  <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 25%</div>
  <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 50%</div>
  <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 75%</div>
  <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 100%</div>
  <div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height auto</div>
</div>
{% endcapture %}
{% include example.html content=example %}

你也可以使用 `max-width: 100%;` 和 `max-height: 100%;` 這些通用類別。

{% capture example %}
{% include icons/placeholder.svg width="100%" height="100" class="mw-100" text="Max-width 100%" %}
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
  <div class="mh-100" style="width: 100px; height: 200px; background-color: rgba(0,0,255,0.1);">Max-height 100%</div>
</div>
{% endcapture %}
{% include example.html content=example %}

## 相對於視窗 {#relative-to-the-viewport}

您還可以使用通用類別來設定相對於視窗的寬度和高度。

{% highlight html %}
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
{% endhighlight %}
