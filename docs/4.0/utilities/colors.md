---
layout: docs
title: Colors
description: 借助一些顏色小工具讓顏色的表達具有意義。這也包括支援有 hover 狀態的樣式連結。
group: utilities
toc: true
---

{% example html %}
{% for color in site.data.theme-colors %}
<p class="text-{{ color.name }}">.text-{{ color.name }}</p>{% endfor %}
{% endexample %}

文字類型也提供 hover 和 focus 狀態，對於連結類型也同時能順利運行。**注意，`.text-white` 沒有連結樣式。**


{% example html %}
{% for color in site.data.theme-colors %}
<p><a href="#" class="text-{{ color.name }}{% if color.name == "light" %} bg-gray{% endif %}">{{ color.name | capitalize }} link</a></p>{% endfor %}
{% endexample %}

類似於文字顏色 class，可輕易將元素加上背景色彩。連結元素將會在 hover 上變暗，就像文字類型一樣。背景色 **不要設置`color`** 樣式，盡可能使用 `.text-*` 小工具。

{% example html %}
{% for color in site.data.theme-colors %}
<div class="p-3 mb-2 bg-{{ color.name }} {% if color.name == "light" %}text-gray-dark{% else %}text-white{% endif %}">.bg-{{ color.name }}</div>{% endfor %}
{% endexample %}

{% callout info %}

#### 處理特殊性

有些情境下文字 Class 不能直接運用在特定情境下的 `<a>` 連結下，這樣的特殊情境下可透過增加 `<div>` 包覆元素並增加 class。

{% endcallout %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}
