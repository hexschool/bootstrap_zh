---
layout: docs
title: 讀取圖示 (Spinners)
description: 使用 Bootstrap 讀取圖示來呈現元件或頁面的加載狀態，完全使用 HTML、CSS 和 JavaScript 建構。
group: components
toc: true
---

## 關於 {#about}

Bootstrap "讀取圖示" 可用於顯示專案的加載狀態。它們僅使用 HTML 和 CSS 建構，這代表您不需要任何 JavaScript 來創建它們。但是您需要自定義一些 JavaScript 來切換它們的顯示。讀取圖示的外觀、對齊和尺寸都可以透過強大的通用類別來制定。

為了可存取性，每一個載入的項目都包含 `role="status"` 和一個巢狀的 `<span class="sr-only">Loading...</span>`.

## 邊框讀取圖示 {#border-spinner}

使用邊框讀取圖示來當作輕量的載入狀態顯示。

{% capture example %}
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% include example.html content=example %}

### 顏色 {#colors}

邊框讀取圖示使用 `currentColor` 來當作它的 `border-color`，這代表你可以使用 [顏色 (Colors) 通用類別][color] 來自定義它的顏色。你可以在標準的讀取圖示上使用任何通用類別中的顏色。

{% capture example %}
{% for color in site.data.theme-colors %}
<div class="spinner-border text-{{ color.name }}" role="status">
  <span class="sr-only">Loading...</span>
</div>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}
**為什麼不使用 `border-color` 通用類別呢？** 因為每個邊框讀取圖示都至少有一邊是 `透明`，因此使用 `.border-{color}` 通用類別會覆蓋它。
{% endcapture %}
{% include callout.html content=callout type="info" %}

## 漸變讀取圖示 {#growing-spinner}

如果你不喜歡邊框讀取圖示，可以切換到漸變讀取圖示。雖然技術上來說，它不會旋轉，但它會反覆漸變顯示！

{% capture example %}
<div class="spinner-grow" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% include example.html content=example %}

同上, 這個讀取圖示也使用 `currentColor`，所以你可以輕易地使用 [顏色 (Colors) 通用類別][color] 來改變它的外觀。 這邊是使用藍色，以及所支援的顏色變化。

{% capture example %}
{% for color in site.data.theme-colors %}
<div class="spinner-grow text-{{ color.name }}" role="status">
  <span class="sr-only">Loading...</span>
</div>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

## 校準 {#alignment}

在 Bootstrap 中的讀取圖示是使用 `rem`, `currentColor` 和 `display: inline-flex`。這代表它們可以輕易地調整大小、顏色以及快速對齊

### Margin

使用 [margin utilities][margin] 像是 `.m-5` 簡單地增加間隔

{% capture example %}
<div class="spinner-border m-5" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% include example.html content=example %}

### 位置 {#placement}

使用 [Flex 通用類別][flex], [Float 通用類別][float] 或 [文字排版][text] 這些通用類別可以在任何的情況之下精準地放置讀取圖示。

#### Flex

{% capture example %}
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="d-flex align-items-center">
  <strong>Loading...</strong>
  <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
</div>
{% endcapture %}
{% include example.html content=example %}

#### Floats

{% capture example %}
<div class="clearfix">
  <div class="spinner-border float-right" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

#### 文字排版 {#text-align}

{% capture example %}
<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## 尺寸 {#size}

加入 `.spinner-border-sm` 和 `.spinner-grow-sm` 製作一個較小的讀取圖示，它可以在其他元件中快速地被使用。

{% capture example %}
<div class="spinner-border spinner-border-sm" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% include example.html content=example %}

或者，使用自定義 CSS 或 inline 來根據需要更改尺寸。

{% capture example %}
<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% include example.html content=example %}

## 按鈕 {#buttons}

在按鈕內使用讀取圖示是表示當前正在處理或正在進行操作。您也可以加入文本來更換讀取圖示，並根據需要使用按鈕。

{% capture example %}
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
{% endcapture %}
{% include example.html content=example %}


[color]:   {{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/
[display]: {{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/
[flex]:    {{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/
[float]:   {{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/float/
[margin]:  {{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/
[sizing]:  {{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/sizing/
[text]:    {{ site.baseurl }}/docs/{{ site.docs_version }}/content/typography/
