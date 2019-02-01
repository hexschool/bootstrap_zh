---
layout: docs
title: 間隔 (Spacing)
description: Bootstrap 包括各種簡寫響應式 margin、padding 的通用類別，可用來修改一個元素的外觀。
group: utilities
toc: true
---

## 如何運作 {#how-it-works}

賦予一個縮寫 class 使 `margin` 或 `padding` 值在一個元素上或其中一個邊緣上 (包含響應式)。包含支援單一個邊緣屬性或全部邊緣、垂直邊緣、水平邊緣上。Class 來自於 Sass map，範圍從`.25rem` 到 `3rem`。

## 符號 {#notation}

用於所有中斷點（從`xs`到`xl`）時，不需加入中斷點縮寫。這些 Class 將從 `min-width: 0` 及以上引用，不受 media query 的約束。但是其餘的就包含中斷點縮寫。

對於 `xs`，使用固定格式 `{property}{sides}-{size}` 命名這些 Class，對於 `sm`、 `md`、`lg` 和 `xl`，使用格式 `{property}{sides}-{breakpoint}-{size}`。


*屬性* 設定:

* `m` - 這個 class 會設定 `margin`
* `p` - 這個 class 會設定 `padding`

*邊緣* 設定:

* `t` - 這個 class 會設定 `margin-top` 或 `padding-top`
* `b` - 這個 class 會設定 `margin-bottom` 或 `padding-bottom`
* `l` - 這個 class 會設定 `margin-left` 或 `padding-left`
* `r` - 這個 class 會設定 `margin-right` 或 `padding-right`
* `x` - 這個 class 會設定 `*-left` 和 `*-right`
* `y` - 這個 class 會設定 `*-top` 和 `*-bottom`
* 空白 - 如果邊緣 class 未加入則會設定 `margin` 或 `padding` 在元素的四個邊緣

*尺寸* 設定:

* `0` - 這個 class 會設定 `margin` 或 `padding` 的樣式值為 `0`
* `1` - (預設時) 這個 class 會設定 `margin` 或 `padding` 於 `$spacer * .25`
* `2` - (預設時) 這個 class 會設定 `margin` 或 `padding` 於 `$spacer * .5`
* `3` - (預設時) 這個 class 會設定 `margin` 或 `padding` 於 `$spacer`
* `4` - (預設時) 這個 class 會設定 `margin` 或 `padding` 於 `$spacer * 1.5`
* `5` - (預設時) 這個 class 會設定 `margin` 或 `padding` 於 `$spacer * 3`
* `auto` - 這個 class 會設定 `margin` 為 auto

（你也可以對 `$spacers` Sass map 調整變數。）


## 範例 {#examples}

以下是這些 class 的一些代表性範例：

{% highlight scss %}
.mt-0 {
  margin-top: 0 !important;
}

.ml-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}
{% endhighlight %}

### 水平置中 {#horizontal-centering}

此外，Bootstrap 也包括一個 `.mx-auto`，用於固定寬度盒模型的水平置中，是具有 `display: block` 和 `width` 集合的內容，並將水平 margin 設置為`auto`。

<div class="bd-example">
  <div class="mx-auto" style="width: 200px; background-color: rgba(86,61,124,.15);">
    Centered element
  </div>
</div>

{% highlight html %}
<div class="mx-auto" style="width: 200px;">
  Centered element
</div>
{% endhighlight %}

### Negative margin

在 CSS 中，`margin` 屬性可以使用負值（`padding` 不能）。從 4.2 開始，我們為上面列出的每個非零整數大小添加了負的 margin 通用類別（例如：`1`、`2`、`3`、`4`、`5`）。這些通用類別非常適合跨斷點自定義網格排列 gutters。

語法與預設的 margin 通用類別幾乎相同，在所需的大小前加入了 `n`，以下為與 `.mt-1` 相反的範例：

{% highlight scss %}
.mt-n1 {
  margin-top: -0.25rem !important;
}
{% endhighlight %}

這是一個在中（`md`）斷點及以上自定義 Bootstrap 網格系統的範例。我們用 `.px-md-5` 增加了 `.col` 內距，然後在父元素 `.row` 上用 `.mx-md-n5` 來抵消。

{% capture example %}
<div class="row mx-md-n5">
  <div class="col py-3 px-md-5 border bg-light">Custom column padding</div>
  <div class="col py-3 px-md-5 border bg-light">Custom column padding</div>
</div>
{% endcapture %}
{% include example.html content=example %}
