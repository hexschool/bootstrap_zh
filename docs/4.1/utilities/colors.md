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

情境色彩也提供 hover 和 focus 狀態，對於連結類型也同時能順利運行。**注意，`.text-white`、`.text-muted` 沒有連結樣式。**

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

當 `$enable-gradients` 設置為true時，您將可以使用 `.bg-gradient-` 的通用類別。 **預設情況下，`$enable-gradients` 是停用的，下面的例子是故意顯示錯誤的。**這是為了在您開始使用 Bootstrap 時更容易進行自定義。 [了解我們的 Sass 選項]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/theming/#sass-options) 啟用這些 Class 和更多。

{% capture example %}
{% for color in site.data.theme-colors %}
<div class="p-3 mb-2 bg-gradient-{{ color.name }} {% if color.name == "light" or color.name == "warning" %}text-dark{% else %}text-white{% endif %}">.bg-gradient-{{ color.name }}</div>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}
#### 處理特殊性

有時候情境色彩並無法套用在其他的選取器，解決方案是元素的外層補上一個 `<div>` 在套用該 Class。

{% endcapture %}
{% include callout.html content=callout type="info" %}

{% include callout-warning-color-assistive-technologies.md %}
