---
layout: docs
title: Display 屬性
description: Display 通用類別可快速且包含響應式的切換元件的顯示與否，我們的 Display 通用類別包含許多常用的值，另外在列印時也能使用。
group: utilities
toc: true
---

## 如何運作 {#how-it-works}

使用 display 的通用類別 Class 來改變 [`display` 屬性](https://developer.mozilla.org/en-US/docs/Web/CSS/display)，我們故意只支援 `display` 所有可能的一個子集，可以依據需求將這些 Class 調整出各種效果。

## 符號 {#notation}

Display 通用類別可以套用在所有[中斷點]({{ site.baseurl }}/docs/{{ site.docs_version }}/layout/overview/#responsive-breakpoints)，從 `xs` 到 `xl` 都在其中，而這些是從最小寬度 `min-width: 0;` 開始運用，因此預設不受 media query 限制，然而其餘的斷點都包含縮寫。

因此，這些 Class 使用以下格式來命名：

* `.d-{value}` for `xs`
* `.d-{breakpoint}-{value}` for `sm`, `md`, `lg`, and `xl`.

*value* 可以替換成以下：

* `none`
* `inline`
* `inline-block`
* `block`
* `table`
* `table-cell`
* `table-row`
* `flex`
* `inline-flex`

這些 media queries 會設置大於中斷點，舉例來說： `.d-lg-none` 在 `lg` 和 `xl` 屏幕上設置 `display：none;`。

## 範例 {#examples}

{% capture example %}
<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<span class="d-block p-2 bg-primary text-white">d-block</span>
<span class="d-block p-2 bg-dark text-white">d-block</span>
{% endcapture %}
{% include example.html content=example %}

## 隱藏元素 {#hiding-elements}

為了更快速且友善的移動設備開發，請使用響應式 display Class 來顯示和隱藏元件。避免創建完全不同版本的同一個網站，而是按照每個螢幕尺寸隱藏元素。

要在給定的螢幕上顯示一個元素，您可以將一個  `.d-*-none` 與 `.d-*-*` 結合起來，例如  `.d-none.d-md-block.d-xl-none` 將隱藏所有螢幕尺寸的元素，除了中型和大型設備。


| Screen Size        | Class |
| ---                | --- |
| Hidden on all      | `.d-none` |
| Hidden only on xs  | `.d-none .d-sm-block` |
| Hidden only on sm  | `.d-sm-none .d-md-block` |
| Hidden only on md  | `.d-md-none .d-lg-block` |
| Hidden only on lg  | `.d-lg-none .d-xl-block` |
| Hidden only on xl  | `.d-xl-none` |
| Visible on all     | `.d-block` |
| Visible only on xs | `.d-block .d-sm-none` |
| Visible only on sm | `.d-none .d-sm-block .d-md-none` |
| Visible only on md | `.d-none .d-md-block .d-lg-none` |
| Visible only on lg | `.d-none .d-lg-block .d-xl-none` |
| Visible only on xl | `.d-none .d-xl-block` |

{% capture example %}
<div class="d-lg-none">hide on screens wider than lg</div>
<div class="d-none d-lg-block">hide on screens smaller than lg</div>
{% endcapture %}
{% include example.html content=example %}

## Display 運用在列印 {#display-in-print}

可以在列印時透過 `display` 通用類別改變 `display` 的值。一樣包含 `display` 的各種 `.d-*` 通用類別。

- `.d-print-none`
- `.d-print-inline`
- `.d-print-inline-block`
- `.d-print-block`
- `.d-print-table`
- `.d-print-table-row`
- `.d-print-table-cell`
- `.d-print-flex`
- `.d-print-inline-flex`

The print and display classes can be combined.

{% capture example %}
<div class="d-print-none">Screen Only (Hide on print only)</div>
<div class="d-none d-print-block">Print Only (Hide on screen only)</div>
<div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
{% endcapture %}
{% include example.html content=example %}
