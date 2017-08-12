---
layout: docs
title: Flex
description: flexbox 通用類別的套件包管理網格欄的排版、對齊和特定尺寸。對於更複雜的表現則需要自訂 CSS。
group: utilities
toc: true
---

## 啟用 flex

使用 `display` 通用類別來創建一個 flexbox 容器，並將 **直屬內元素** 轉換為 flex 屬性。增加額外的 flex 屬性，也能夠進一步修改 flex 容器和屬性。

{% example html %}
<div class="d-flex p-2 bd-highlight">I'm a flexbox container!</div>
{% endexample %}

{% example html %}
<div class="d-inline-flex p-2 bd-highlight">I'm an inline flexbox container!</div>
{% endexample %}

`.d-flex` 和 `.d-inline-flex` 也包含響應式的屬性。

{% for bp in site.data.breakpoints %}
- `.d{{ bp.abbr }}-flex`
- `.d{{ bp.abbr }}-inline-flex`{% endfor %}

## 方向性

透過通用類別來設定 flex 容器與內層 flex 的方向，在大多的情況下你可以忽略水平的 class，因為瀏覽器預設值是 `row`，不過有些特定情境下需要設定這個值(像是響應式情境)。

使用 `.flex-row` 來設定水平的方向(瀏覽器預設值喔)，或者使用 `.flex-row-reverse`來作水平方向的反轉。


{% example html %}
<div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse bd-highlight">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
{% endexample %}

使用 `.flex-column` 設置垂直方向，或使用`.flex-column-reverse` 作垂直方向的反轉。

{% example html %}
<div class="d-flex flex-column bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
<div class="d-flex flex-column-reverse bd-highlight">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
{% endexample %}

`flex-direction` 的響應式屬性。

{% for bp in site.data.breakpoints %}
- `.flex{{ bp.abbr }}-row`
- `.flex{{ bp.abbr }}-row-reverse`
- `.flex{{ bp.abbr }}-column`
- `.flex{{ bp.abbr }}-column-reverse`{% endfor %}

## 調整內容

使用 flexbox 容器上的 `justify-content` 通用類別改變 flex 物件在主軸上的對齊（x軸開始，如果 `flex-direction: column`，則為 y 軸）。從 `start`（瀏覽器預設）、 `end`、`center`、`between`、或 `around` 中選擇。

<div class="bd-example">
  <div class="d-flex justify-content-start bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-end bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-center bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-between bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-around bd-highlight">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-between">...</div>
<div class="d-flex justify-content-around">...</div>
{% endhighlight %}

`justify-content` 的響應式屬性。

{% for bp in site.data.breakpoints %}
- `.justify-content{{ bp.abbr }}-start`
- `.justify-content{{ bp.abbr }}-end`
- `.justify-content{{ bp.abbr }}-center`
- `.justify-content{{ bp.abbr }}-between`
- `.justify-content{{ bp.abbr }}-around`{% endfor %}

## 對齊物件

在 flexbox 容器上使用 `align-items` 工具改變橫軸上 flex 物件的對齊（y 軸開始，如果 `flex-direction: column`，則為 x 軸）。從`start`、 `end`、 `center`、 `baseline`、 或 `stretch` (瀏覽器預設) 中選擇。


<div class="bd-example">
  <div class="d-flex align-items-start bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-end bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-center bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-baseline bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-stretch bd-highlight" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex align-items-start">...</div>
<div class="d-flex align-items-end">...</div>
<div class="d-flex align-items-center">...</div>
<div class="d-flex align-items-baseline">...</div>
<div class="d-flex align-items-stretch">...</div>
{% endhighlight %}

`align-items` 包含的響應式屬性

{% for bp in site.data.breakpoints %}
- `.align-items{{ bp.abbr }}-start`
- `.align-items{{ bp.abbr }}-end`
- `.align-items{{ bp.abbr }}-center`
- `.align-items{{ bp.abbr }}-baseline`
- `.align-items{{ bp.abbr }}-stretch`{% endfor %}

## 自身對齊

使用 flexbox 物件上的 `align-self` 通用類別單獨改變在橫軸上的對齊（y 軸開始，如果 `flex-direction: column`，則為 x 軸）。與 `align-items` 相同的選項中選擇：`start`、 `end`、 `center`、 `baseline`、 或 `stretch` (瀏覽器預設)。


<div class="bd-example">
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-start p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-end p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-center p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-baseline p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex bd-highlight" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-stretch p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="align-self-start">Aligned flex item</div>
<div class="align-self-end">Aligned flex item</div>
<div class="align-self-center">Aligned flex item</div>
<div class="align-self-baseline">Aligned flex item</div>
<div class="align-self-stretch">Aligned flex item</div>
{% endhighlight %}

`align-self` 的響應式屬性。

{% for bp in site.data.breakpoints %}
- `.align-self{{ bp.abbr }}-start`
- `.align-self{{ bp.abbr }}-end`
- `.align-self{{ bp.abbr }}-center`
- `.align-self{{ bp.abbr }}-baseline`
- `.align-self{{ bp.abbr }}-stretch`{% endfor %}

## 自動的 margins

當你將 flex 對齊與 auto margin 混在一起的時候，flexbox 也能正常的運行。


### 搭配 justify-content

方便的將所有 flex 項移動到一側，但是搭配 `justify-content` 與 `margin-right: auto` 或 `margin-left: auto` 混合，物件會將另一個推到另一端。

{% example html %}
<div class="d-flex justify-content-end bd-highlight mb-3">
  <div class="mr-auto p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
</div>

<div class="d-flex justify-content-start bd-highlight">
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="ml-auto p-2 bd-highlight">Flex item</div>
</div>
{% endexample %}

### 搭配 align-items

相同的道理，混合以下屬性 `align-items`, `flex-direction: column`, 和 `margin-top: auto` 或 `margin-bottom: auto`，會將一個 flex 物件移動到容器的頂部或底部。

{% example html %}
<div class="d-flex align-items-start flex-column bd-highlight mb-3" style="height: 200px;">
  <div class="mb-auto p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
</div>

<div class="d-flex align-items-end flex-column bd-highlight mb-3" style="height: 200px;">
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="mt-auto p-2 bd-highlight">Flex item</div>
</div>
{% endexample %}

## Wrap (Flex 的 Wrap 屬性)

改變 flex 物件在 flex 容器中的 Wrap。可設置 `.flex-nowrap`、`.flex-wrap`、`.flex-wrap-reverse` 這些屬性。

<div class="bd-example">
  <div class="d-flex flex-nowrap bd-highlight">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>
{% highlight html %}
<div class="d-flex flex-nowrap">
  ...
</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex flex-wrap bd-highlight">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>
{% highlight html %}
<div class="d-flex flex-wrap">
  ...
</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex flex-wrap-reverse bd-highlight">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>
{% highlight html %}
<div class="d-flex flex-wrap-reverse">
  ...
</div>
{% endhighlight %}


{% example html %}
{% endexample %}

`flex-wrap` 也包含響應式屬性。

{% for bp in site.data.breakpoints %}
- `.flex{{ bp.abbr }}-nowrap`
- `.flex{{ bp.abbr }}-wrap`
- `.flex{{ bp.abbr }}-wrap-reverse`{% endfor %}

## 排序

使用 `order` 通用類別改變特定 flex 物件的 _顯示_ 排序。我們僅提供將一個物件排在第一個或最後一個，以及重置使用 DOM 次序。由於 `order` 只能使用整數值（例如，5），對需要的任何額外值需要自定義 CSS。


{% example html %}
<div class="d-flex flex-nowrap bd-highlight">
  <div class="order-3 p-2 bd-highlight">First flex item</div>
  <div class="order-2 p-2 bd-highlight">Second flex item</div>
  <div class="order-1 p-2 bd-highlight">Third flex item</div>
</div>
{% endexample %}

`order` 也包含的響應式屬性。

{% for bp in site.data.breakpoints %}{% for i in (1..12) %}
- `.order{{ bp.abbr }}-{{ i }}`{% endfor %}{% endfor %}

## 對齊內容

使用 flexbox 容器上的 `align-content` 工具將 flex 物件於橫軸上 *一起* 對齊。從`start` (瀏覽器預設), `end`, `center`, `between`, `around`, 或 `stretch`中選擇。為了呈現這通用類別的效果，我們加入了 `flex-wrap: wrap`，及增加了flex項的數量。

**注意！** 此特性對於單行的 flex 無作用。

<div class="bd-example">
  <div class="d-flex align-content-start flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>
{% highlight html %}
<div class="d-flex align-content-start flex-wrap">
  ...
</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex align-content-end flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>
{% highlight html %}
<div class="d-flex align-content-end flex-wrap">...</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex align-content-center flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>
{% highlight html %}
<div class="d-flex align-content-center flex-wrap">...</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex align-content-between flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>
{% highlight html %}
<div class="d-flex align-content-between flex-wrap">...</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex align-content-around flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>
{% highlight html %}
<div class="d-flex align-content-around flex-wrap">...</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex align-content-stretch flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>
{% highlight html %}
<div class="d-flex align-content-stretch flex-wrap">...</div>
{% endhighlight %}

`align-content` 也包含響應式屬性。

{% for bp in site.data.breakpoints %}
- `.align-content{{ bp.abbr }}-start`
- `.align-content{{ bp.abbr }}-end`
- `.align-content{{ bp.abbr }}-center`
- `.align-content{{ bp.abbr }}-around`
- `.align-content{{ bp.abbr }}-stretch`{% endfor %}
