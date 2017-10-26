---
layout: docs
title: Colors
description: 借助一些顏色通用類別讓顏色的表達具有意義。這也包括支援有 hover 狀態的樣式連結。
group: utilities
toc: true
---

## Color

{% example html %}
{% for color in site.data.theme-colors %}
<p class="text-{{ color.name }}{% if color.name == "light" %} bg-dark{% endif %}">.text-{{ color.name }}</p>{% endfor %}
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
{% endexample %}

情境色彩也提供 hover 和 focus 狀態，對於連結類型也同時能順利運行。**注意，`.text-white`、`.text-muted` 沒有連結樣式。**

{% example html %}
{% for color in site.data.theme-colors %}
<p><a href="#" class="text-{{ color.name }}{% if color.name == "light" %} bg-dark{% endif %}">{{ color.name | capitalize }} link</a></p>{% endfor %}
<p><a href="#" class="text-muted">Muted link</a></p>
<p><a href="#" class="text-white bg-dark">White link</a></p>
{% endexample %}

## 背景色

類似於文字顏色 class，可輕易將元素加上背景色彩。連結元素將會在 hover 上變暗，就像文字類型一樣。背景色 **不要設置`color`** 樣式，盡可能使用 `.text-*` 通用類別。

{% example html %}
{% for color in site.data.theme-colors %}
<div class="p-3 mb-2 bg-{{ color.name }} {% if color.name == "light" %}text-dark{% else %}text-white{% endif %}">.bg-{{ color.name }}</div>{% endfor %}
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
{% endexample %}

## 背景漸層

當 `$enable-gradients` 設置為true時，您將可以使用 `.bg-gradient-` 的通用類別。 **預設情況下，`$enable-gradients` 是停用的，下面的例子是故意顯示錯誤的。**這是為了在您開始使用 Bootstrap 時更容易進行自定義。 [了解我們的 Sass 選項]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/theming/#sass-options) 啟用這些 Class 和更多。

{% example html %}
{% for color in site.data.theme-colors %}
<div class="p-3 mb-2 bg-gradient-{{ color.name }} {% if color.name == "light" %}text-dark{% else %}text-white{% endif %}">.bg-gradient-{{ color.name }}</div>{% endfor %}
{% endexample %}

{% callout info %}

#### 處理特殊性

有些情境下文字 Class 不能直接運用在特定情境下的 `<a>` 連結下，這樣的特殊情境下可透過增加 `<div>` 包覆元素並增加 class。

{% endcallout %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}
