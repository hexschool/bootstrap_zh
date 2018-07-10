---
layout: docs
title: Shadows
description:  Add or remove shadows to elements with `box-shadow` utilities.
group: utilities
toc: false
---

## 範例 {#examples}

雖然 Bootstrap 預設關閉陰影在元件上，但可以透過 `$enable-shadows` 來啟用元件的陰影，同時也可以使用通用類別中的 `box-shadow` 來快速增加或移除陰影效果。包含 `.shadow-none` 等三種不同預設的陰影效果(可透過變數調整)。

{% capture example %}
<div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-white rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-white rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div>
{% endcapture %}
{% include example.html content=example %}
