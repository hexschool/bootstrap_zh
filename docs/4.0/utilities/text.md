---
layout: docs
title: 文字 (Text)
description: 一般文字通用類別來控制對齊、圍繞、字體粗細、和其它屬性的文檔範例。
group: utilities
toc: true
---

## 文字對齊

通過文本對齊類方便的將文本與元件對齊。

{% example html %}
<p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
{% endexample %}

對於左、右、和置中對齊，可以使用響應式的 Class，使用與網格系統相同的 viewport 與中斷點。

{% example html %}
<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>

<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
{% endexample %}

## text-wrap 和 Overflow

防止換行可搭配 `.text-nowrap`。

{% example html %}
<div class="row">
  <div class="col-1 text-nowrap">
    Curabitur blandit tempus ardua ridiculus sed magna.
  </div>
  <div class="col-11">
    <img data-src="holder.js/50x50" alt="An image to show the text doesn't wrap">
  </div>
</div>
{% endexample %}

對於更長的內容，你可以增加一個 `.text-truncate`，可以截掉多餘內容改用 `...`。**需要使用 **`display: inline-block` or `display: block`**。

{% example html %}
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
{% endexample %}

## 文字變換

使用 Class 將元件中的文字內容轉大寫。

{% example html %}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{% endexample %}

注意 `text-capitalize` 僅改變每一個詞的第一個字母，而其它字母的大小寫不受影響

## 字體粗細和斜體

改變文字內容的粗細或斜體。

{% example html %}
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-italic">Italic text.</p>
{% endexample %}
