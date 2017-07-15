---
layout: docs
title: 麵包屑
description: 在導航結構中透過 CSS 自動添加分隔符號指示當前頁面的位置。
group: components
---

分隔符號在CSS中是透過以下方法自動添加的，
 [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) 和
 [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content)。


{% example html %}
<ol class="breadcrumb">
  <li class="breadcrumb-item active">Home</li>
</ol>
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item active">Library</li>
</ol>
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Library</a></li>
  <li class="breadcrumb-item active">Data</li>
</ol>
{% endexample %}

類似導覽元件，麵包屑呈現不需要透過 `<li>` 也能運作。

{% example html %}
<nav class="breadcrumb">
  <a class="breadcrumb-item" href="#">Home</a>
  <a class="breadcrumb-item" href="#">Library</a>
  <a class="breadcrumb-item" href="#">Data</a>
  <span class="breadcrumb-item active">Bootstrap</span>
</nav>
{% endexample %}
