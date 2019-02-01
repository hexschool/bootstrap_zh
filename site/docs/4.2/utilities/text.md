---
layout: docs
title: 文字 (Text)
description: 一般文字通用類別來控制對齊、圍繞、字體粗細、和其它屬性的文檔範例。
group: utilities
toc: true
---

## 文字對齊 {#text-alignment}

通過文本對齊類方便的將文本與元件對齊。

{% capture example %}
<p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
{% endcapture %}
{% include example.html content=example %}

對於左、右、和置中對齊，可以使用響應式的 Class，使用與網格系統相同的 viewport 與中斷點。

{% capture example %}
<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>

<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
{% endcapture %}
{% include example.html content=example %}

## text-wrap 和 Overflow {#text-wrapping-and-overflow}

防止換行可搭配 `.text-nowrap`。

{% capture example %}
<div class="text-nowrap bd-highlight" style="width: 8rem;">
  This text should overflow the parent.
</div>
{% endcapture %}
{% include example.html content=example %}

對於更長的內容，你可以增加一個 `.text-truncate`，可以截掉多餘內容改用 `...`。**需要使用 `display: inline-block` or `display: block`**。

{% capture example %}
<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>
{% endcapture %}
{% include example.html content=example %}

## 文字變換 {#text-transform}

使用 Class 將元件中的文字內容轉大寫。

{% capture example %}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{% endcapture %}
{% include example.html content=example %}

注意 `text-capitalize` 僅改變每一個詞的第一個字母，而其它字母的大小寫不受影響

## 字體粗細和斜體 {#font-weight-and-italics}

改變文字內容的粗細或斜體。

{% capture example %}
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-bolder">Bolder weight text (relative to the parent element).</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-weight-light">Light weight text.</p>
<p class="font-weight-lighter">Lighter weight text (relative to the parent element).</p>
<p class="font-italic">Italic text.</p>
{% endcapture %}
{% include example.html content=example %}

## Monospace

使用 `.text-monospace` 來更換選擇 monospace 字體。

{% capture example %}
<p class="text-monospace">This is in monospace</p>
{% endcapture %}
{% include example.html content=example %}

## Reset color

使用 `.text-reset` 重設文字或連結的顏色，以便繼承父元素顏色。

{% capture example %}
<p class="text-muted">
  Muted text with a <a href="#" class="text-reset">reset link</a>.
</p>
{% endcapture %}
{% include example.html content=example %}

## Text decoration

使用 `.text-decoration-none` 類別來移除文字修飾線。

{% capture example %}
<a href="#" class="text-decoration-none">Non-underlined link</a>
{% endcapture %}
{% include example.html content=example %}
