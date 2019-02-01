---
layout: docs
title: 陰影 (Shadows)
description: 使用 box-shadow 通用類別來增加或移除陰影。
group: utilities
toc: false
---

## 範例 {#examples}

雖然在 Bootstrap 中預設禁用元件上的陰影，但可透過 `$enable-shadows` 啟用，您也可以使用我們的 `box-shadow` 通用類別快速增加或移除陰影。包括對 `.shadow-none` 和其他三個預設大小（有對應的關聯變數）。

{% capture example %}
<div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-white rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-white rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div>
{% endcapture %}
{% include example.html content=example %}
