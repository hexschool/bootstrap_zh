---
layout: docs
title: 麵包屑 (Breadcrumb)
description: 在導航結構中透過 CSS 自動添加分隔符號指示當前頁面的位置。
group: components
---

## Example

{% capture example %}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{% endcapture %}
{% include example.html content=example %}

## Changing the separator

Separators are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by changing `$breadcrumb-divider`. The [quote](https://sass-lang.com/documentation/Sass/Script/Functions.html#quote-instance_method) function is needed to generate the quotes around a string, so if you want `>` as separator, you can use this:

```scss
$breadcrumb-divider: quote(">");
```

It's also possible to use a **base64 embedded SVG icon**:

```scss
$breadcrumb-divider: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+);
```

The separator can be removed by setting `$breadcrumb-divider` to `none`:

```scss
$breadcrumb-divider: none;
```

## 網頁親和性 {#accessibility}

由於麵包屑提供了導航功能，所以增加一個有意義的標籤，`aria-label="breadcrumb"` 來描述 '<nav>' 元素的導航說明，以及應用 `aria-current="page"` 到此群組的最後一個項目，表示這是當前頁面。

有關更多信息，請參閱 [WAI-ARIA 麵包屑模式的實踐](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
