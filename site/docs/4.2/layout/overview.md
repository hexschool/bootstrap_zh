---
layout: docs
title: 概觀 (Overview)
description: 介紹 Bootstrap 專案佈局的元件和選項，包括容器、強大的網格系統、靈活的媒體物件和響應式通用類別。
group: layout
redirect_from: "/docs/4.2/layout/"
toc: true
---

## 容器 {#containers}

容器是 Bootstrap 最基本的排版元素，且 **當使用我們的網格系統時** 是必須的。從響應式、固定寬度容器（表示其最大寬度限制在每一個中斷點）或可變寬度（顯示為 100% 寬）中選擇。

儘管容器 *可以* 巢狀，但大部分排版不需要巢狀。

<div class="bd-example">
  <div class="bd-example-container">
    <div class="bd-example-container-header"></div>
    <div class="bd-example-container-sidebar"></div>
    <div class="bd-example-container-body"></div>
  </div>
</div>

{% highlight html %}
<div class="container">
  <!-- Content here -->
</div>
{% endhighlight %}

對於完全寬度容器（包含所有視圖的寬度）使用`.container-fluid`。

<div class="bd-example">
  <div class="bd-example-container bd-example-container-fluid">
    <div class="bd-example-container-header"></div>
    <div class="bd-example-container-sidebar"></div>
    <div class="bd-example-container-body"></div>
  </div>
</div>

{% highlight html %}
<div class="container-fluid">
  ...
</div>
{% endhighlight %}


## 響應式斷點 {#responsive-breakpoints}

由於 Bootstrap 是被開發來作行動優先，我們使用許多 [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) 建立靈敏的中斷點用於我們的排版和介面。這些中斷點大部分基於最小 viewport，並且允許我們隨著 viewport 的變化放大組件。

Bootstrap 主要使用以下 media queries 或中斷點針對我們的佈局、網格系統、和元件在的我們的 Sass 檔中。


{% highlight scss %}
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
{% endhighlight %}

由於我們將我們的 CSS 寫入 Sass，通過 Sass mixins 可以使用所有我們的 media queries。

{% highlight scss %}
// No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
{% endhighlight %}

我們有時候使用 media queries 作為它的指引（給定的螢幕尺寸或更小）。

{% highlight scss %}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }

// Extra large devices (large desktops)
// No media query since the extra-large breakpoint has no upper bound on its width
{% endhighlight %}

{% include callout-info-mediaqueries-breakpoints.md %}

重聲一次，通過 Sass mixins 也可以使用這些 media queries：

{% highlight scss %}
@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
// No media query necessary for xl breakpoint as it has no upper bound on its width

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
{% endhighlight %}

使用最小和最大中斷點寬度，也有一些 media queries 和 mixins 用於特定螢幕尺寸的其中一段。

{% highlight scss %}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
{% endhighlight %}

通過Sass mixins，也可以使用這 media querie：

{% highlight scss %}
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
{% endhighlight %}

類似的 media queries 也跨過多個中斷點寬度：

{% highlight scss %}
// Example
// Apply styles starting from medium devices and up to extra large devices
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
{% endhighlight %}

用於特定螢幕尺寸範圍的 Sass mixins 是：

{% highlight scss %}
@include media-breakpoint-between(md, xl) { ... }
{% endhighlight %}

## Z-index {#z-index}

一些 Bootstrap 元件使用 `z-index`，它是提供排版內容第三個軸的 CSS 屬性。我們使用 Bootstrap 中的預設 z-index ，其目的是正確圖層導引、工具提示和 popover、modals 等等。

這些偏高的數值，具體的目的是為了避免衝突，需要再不同的分層組建區分層級，如 工具提示、導覽列、下拉選單、互動視窗的行為正確，沒有理由不使用 `100`+ 或 `500`+。

這些更高的價值開始在任意數量，高度和具體到足以理想地避免衝突。 我們需要在我們的分層組件 - 工具提示，彈出窗口，導航欄，下拉列表，模態 - 中使用這些標準集合，這樣我們可以在行為中合理地保持一致。 沒有理由我們不能使用`100` +或`500` +。

我們並不鼓勵自定義這些值；如果你改變了一個，你可能需要全部改變。

{% highlight scss %}
$zindex-dropdown:          1000 !default;
$zindex-sticky:            1020 !default;
$zindex-fixed:             1030 !default;
$zindex-modal-backdrop:    1040 !default;
$zindex-modal:             1050 !default;
$zindex-popover:           1060 !default;
$zindex-tooltip:           1070 !default;
{% endhighlight %}

背景元素（例如允許按一下解除的背景）傾向於停留在較低的 `z-index`，而導航元件和 popovers 使用更高的 `z-index` 確保它們的內容覆蓋。

為了處理組件之間的 border (如：input-group 的 button 與 input)，我們較低的數值設置 `z-index` 於 `1`, `2`, 和 `3` 做為預設，在 hover, focus, active 時，我們將使用更高的 `z-index` 來顯示這些的 border。

