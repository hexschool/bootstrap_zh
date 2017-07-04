---
layout: docs
title: Colors
description: 借助一些顏色小工具讓顏色的表達具有意義。這也包括支援有 hover 狀態的樣式連結。
group: utilities
toc: true
---

{% example html %}
<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
<p class="text-gray-dark">Eget risus varius blandit sit ultricies vehicula amet non magna.</p>
<p class="text-white">Etiam porta sem malesuada ultricies vehicula.</p>
{% endexample %}

文字類型也提供 hover 和 focus 狀態，對於連結類型也同時能順利運行。**注意，`.text-white` 沒有連結樣式。**


{% example html %}
<a href="#" class="text-muted">Muted link</a>
<a href="#" class="text-primary">Primary link</a>
<a href="#" class="text-success">Success link</a>
<a href="#" class="text-info">Info link</a>
<a href="#" class="text-warning">Warning link</a>
<a href="#" class="text-danger">Danger link</a>
{% endexample %}

類似於文字顏色 class，可輕易將元素加上背景色彩。連結元素將會在 hover 上變暗，就像文字類型一樣。背景色 **不要設置`color`** 樣式，盡可能使用 `.text-*` 小工具。

{% example html %}
<div class="bg-primary text-white">Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
<div class="bg-success text-white">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</div>
<div class="bg-info text-white">Maecenas sed diam eget risus varius blandit sit amet non magna.</div>
<div class="bg-warning text-white">Etiam porta sem malesuada magna mollis euismod.</div>
<div class="bg-danger text-white">Donec ullamcorper nulla non metus auctor fringilla.</div>
<div class="bg-inverse text-white">Cras mattis consectetur purus sit amet fermentum.</div>
<div class="bg-faded">Cras mattis consectetur purus sit amet fermentum.</div>
{% endexample %}

{% callout info %}

#### 處理特殊性

有些情境下文字 Class 不能直接運用在特定情境下的 `<a>` 連結下，這樣的特殊情境下可透過增加 `<div>` 包覆元素並增加 class。

{% endcallout %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}
