---
layout: docs
title: 麵包屑 (Breadcrumb)
description: 在導航結構中透過 CSS 自動添加分隔符號指示當前頁面的位置。
group: components
---

## Overview

分隔符號在CSS中是透過以下方法自動添加的，[`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) 和
 [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content)。


{% example html %}

類似導覽元件，麵包屑呈現不需要透過 `<li>` 也能運作。

<nav aria-label="breadcrumb" role="navigation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb" role="navigation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{% endexample %}

## 網頁親和性

由於麵包屑提供了導航功能，所以增加一個有意義的標籤，`aria-label="breadcrumb"` 來描述 '<nav>' 元素的導航說明，以及應用 `aria-current="page"` 到此群組的最後一個項目，表示這是當前頁面。

有關更多信息，請參閱 [WAI-ARIA 麵包屑模式的實踐](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
