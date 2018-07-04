---
layout: docs
title: 分頁 (Pagination)
description: 分頁的文件和範例，分頁功能將顯示於一系列有相關性的頁面中。
group: components
toc: true
---

## 概述 {#overview}

我們使用大塊連接的連結進行分頁，使連結不易遺漏、輕鬆擴展、同時提供更大的點擊區域。分頁是使用列表 HTML 元素構建的，因此螢幕閱讀器可以列出可用連結的數量。使用包裝 `<nav>` 元素將其標識導覽給予螢幕閱讀器和其他輔助技術。

另外，由於頁面可能有多個這樣的導覽部分，建議為 `<nav>` 提供一個描述性的 `aria-label` 來反映其功能。 例如，如果分頁元件用於在一組搜索結果之間導航，則標籤可以是 `aria-label="Search results pages"`。

{% capture example %}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

## 使用圖示 {#working-with-icons}

想要使用圖示或符號代替某些分頁連結的文字？使用 `aria` 屬性和 `.sr-only` 通用類別提供螢幕閱讀器的支援。


{% capture example %}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

## 禁用和活動狀態 {#disabled-and-active-states}

分頁連結可根據不同情況進行客製。對於顯示為不可點擊的連結，使用 `.disabled` 和使用 `.active` 來指示當前頁面。

`.disabled` 使用 `pointer-events: none` 來禁用 `<a>` 的連結功能，但該 CSS 屬性尚未標準化。此外，即使在支持 `pointer-events: none` 的瀏覽器中，鍵盤導覽仍然不受影響，這意味著鍵盤使用者和輔助性技術的使用者仍然可以啟動這些連結。為了安全起見，在這些連結上添加一個 `tabindex="-1"` 屬性防止他們套用 focus，並使用自訂的 JavaScript 來禁用它們的功能。

{% capture example %}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

您可以用 `<span>` 替換的活動或禁用的連結，或者在上一個/下一個箭頭的情況下省略連結以刪除點擊功能，並在保留預期樣式的同時防止鍵盤 focus。

{% capture example %}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

## 尺寸 {#sizing}

加入 `.pagination-lg` 或 `.pagination-sm` 套用其他尺寸。


{% capture example %}
<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

## 對齊 {#alignment}

使用 [flexbox 通用類別]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) 更改分頁元件的對齊方式。

{% capture example %}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}
