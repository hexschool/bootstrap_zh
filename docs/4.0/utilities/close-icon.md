---
layout: docs
title: Close icon
description: 使用一般的關閉圖示 class 關閉 modals 元件和 alerts 元件之類的內容。
group: utilities
toc: true
---

**確保為螢幕閱讀器添加文字**(讓有閱讀障礙者也能順利閱讀網頁)，我們使用 `aria-label` 標籤屬性。

{% example html %}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endexample %}
