---
layout: docs
title: Colors
description: 借助一些顏色通用類別讓顏色的表達具有意義。這也包括支援有 hover 狀態的樣式連結。
group: utilities
toc: true
---

## Color {#color}

{% capture example %}
{% for color in site.data.theme-colors %}
<p class="text-{{ color.name }}{% if color.name == "light" %} bg-dark{% endif %}">.text-{{ color.name }}</p>{% endfor %}
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
<p class="text-black-50">.text-black-50</p>
<p class="text-white-50 bg-dark">.text-white-50</p>
{% endcapture %}
{% include example.html content=example %}

文本文字類別也有提供 hover 和 focus 狀態的錨點。**注意，`.text-white`、`.text-muted` 除了下底線外，沒有連結樣式。**

{% capture example %}
{% for color in site.data.theme-colors %}
<p><a href="#" class="text-{{ color.name }}{% if color.name == "light" %} bg-dark{% endif %}">{{ color.name | capitalize }} link</a></p>{% endfor %}
<p><a href="#" class="text-muted">Muted link</a></p>
<p><a href="#" class="text-white bg-dark">White link</a></p>
{% endcapture %}
{% include example.html content=example %}

## 背景色 {#background-color}

類似於文字顏色 class，可輕易將元素加上背景色彩。連結元素將會在 hover 上變暗，就像文字類型一樣。背景色 **不要設置`color`** 樣式，盡可能使用 `.text-*` 通用類別。

{% capture example %}
{% for color in site.data.theme-colors %}
<div class="p-3 mb-2 bg-{{ color.name }} {% if color.name == "light" or color.name == "warning" %}text-dark{% else %}text-white{% endif %}">.bg-{{ color.name }}</div>{% endfor %}
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
{% endcapture %}
{% include example.html content=example %}

## 背景漸層 {#background-gradient}

當 `$enable-gradients` 設置為 `true` (預設是 `false`) 時，您將可以使用 `.bg-gradient-` 的通用類別。[了解我們的 Sass 選項]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/theming/#sass-options) 啟用這些 Class 和更多。

{% for color in site.data.theme-colors %}
- `.bg-gradient-{{ color.name }}`{% endfor %}

{% capture callout %}
#### 處理特殊性

有時候情境色彩並無法套用在其他的選取器，解決方案是元素的外層補上一個 `<div>` 在套用該 Class。

{% endcapture %}
{% include callout.html content=callout type="info" %}

{% include callout-warning-color-assistive-technologies.md %}
