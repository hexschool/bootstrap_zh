---
layout: docs
title: Display 屬性
description: Display 小工具可快速且包含響應式的切換元件的顯示與否，我們的 Display 小工具包含許多常用的值，另外在列印時也能使用。
group: utilities
toc: true
---

## 常用的 `display` 值

[`display` 屬性](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 有很多值，而小工具支援其中的許多值。但沒有提供所有值在這個小工具內，以下是我們支援的。

- `.d-none`
- `.d-inline`
- `.d-inline-block`
- `.d-block`
- `.d-table`
- `.d-table-cell`
- `.d-flex`
- `.d-inline-flex`

將這些 class 直接運用在任何你想套用的元素上。舉例來說，這邊介紹如何使用在行內、塊狀或是行內塊狀(inline-block) 的元素上 (這也能運用在其他相同的類型上)。

{% example html %}
<div class="d-inline bg-success">d-inline</div>
<div class="d-inline bg-success">d-inline</div>
{% endexample %}

{% example html %}
<span class="d-block bg-primary">d-block</span>
{% endexample %}

{% example html %}
<div class="d-inline-block bg-warning">d-inline-block</div>
<div class="d-inline-block bg-warning">d-inline-block</div>
{% endexample %}

以上所介紹的，也同樣也可以使用響應式的類型變化。

{% for bp in site.data.breakpoints %}
- `.d{{ bp.abbr }}-none`
- `.d{{ bp.abbr }}-inline`
- `.d{{ bp.abbr }}-inline-block`
- `.d{{ bp.abbr }}-block`
- `.d{{ bp.abbr }}-table`
- `.d{{ bp.abbr }}-table-cell`
- `.d{{ bp.abbr }}-flex`
- `.d{{ bp.abbr }}-inline-flex`{% endfor %}

## Display 運用在列印

可以在列印時透過 display 小工具改變 `display` 的值。

| Class | Print style |
| --- | --- |
| `.d-print-block` | Applies `display: block` to the element when printing |
| `.d-print-inline` | Applies `display: inline` to the element when printing |
| `.d-print-inline-block` | Applies `display: inline-block` to the element when printing |
| `.d-print-none` | Applies `display: none` to the element when printing |
