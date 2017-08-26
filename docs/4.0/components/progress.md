---
layout: docs
title: 進度條 (Progress)
description: Bootstrap 的進度條支援堆疊、動態背景、文字標籤，以下是文件與範例。
group: components
toc: true
---

## 如何運作

進度元件使用兩個 HTML 元素構建、一些CSS設置寬度、以及一些屬性。我們不使用 [HTML5 `<progress>` 元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) 確保您可以堆疊進度條、加上動態效果，並在其上放置文本標籤。

- 使用 `.progress` 作為包裝器來指示進度條的最大值。
- 內部的 `.progress-bar` 來表示到目前為止的進度。
- `.progress-bar` 需要行內樣式，通用類別的 Class 或自訂 CSS 來設置它們的寬度。
- `.progress-bar` 還需要一些 `role` 和 `aria` 屬性來使其具親和性。

把它們放在一起，你得到以下例子。

{% example html %}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

Bootstrap 提供了一些 [寬度設定通用類別]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/sizing/)。 根據您的需要，這些可能有助於快速配置進度條。


{% example html %}
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

## 標籤

在 `.progress-bar` 中放置文字內容，將標籤添加到進度條。


{% example html %}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
{% endexample %}

## 高度

我們在 `.progress` 上設置一個 `height` 值，如果改變這個值，那麼內部的 `.progress-bar` 就會自動調整大小。

{% example html %}
<div class="progress" style="height: 1px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

## 背景

使用背景通用類別 Class 更改各個進度條的外觀。


{% example html %}
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

## 多進度條

如果需要，在進度元件中包含多個進度條。

{% example html %}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

##  帶條紋的

將 `.progress-bar-striped` 加到任何 `.progress-bar` 中，透過 CSS 漸變對進度條的背景顏色加上條紋。

{% example html %}
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

## 動態條紋

條紋漸變也可以製成動畫。 將 `.progress-bar-animated` 加到 `.progress-bar` 中，透過 CSS3 繪製從右到左的動態效果。

**動畫進度條不適用於 Opera 12** 因為它們不支持 CSS3 動畫。

<div class="bd-example">
  <div class="progress">
    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
  </div>
  <button type="button" class="btn btn-secondary bd-toggle-animated-progress" data-toggle="button" aria-pressed="false" autocomplete="off">
    Toggle animation
  </button>
</div>

{% highlight html %}
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
{% endhighlight %}
