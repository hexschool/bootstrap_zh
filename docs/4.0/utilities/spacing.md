---
layout: docs
title: 間隔 (Spacing)
description: Bootstrap 包括各種簡寫響應式 margin、padding 的通用類別，可用來修改一個元素的外觀。
group: utilities
toc: true
---

## 如何運作

賦予一個縮寫 class 使 `margin` 或 `padding` 值在一個元素上或其中一個邊緣上 (包含響應式)。包含支援單一個邊緣屬性或全部邊緣、垂直邊緣、水平邊緣上。Class 來自於 Sass map，範圍從`.25rem` 到 `3rem`。

## 符號

Spacing utilities that apply to all breakpoints, from `xs` to `xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

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


## 範例

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

### 水平置中

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
