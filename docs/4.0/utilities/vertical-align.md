---
layout: docs
title: 垂直對齊 (Vertical alignment)
description: 改變 inline、inline-block、inline-table、和 table 元素的垂直對齊。
group: utilities
---

使用 [`vertical-alignment`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align) 通用類別改變元素的對齊。請注意，垂直對齊僅影響 inline、inline-block、inline-table、和 table 元素。

依需求從 `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`, `.align-text-bottom`, 和 `.align-text-top` 中選擇。

搭配 inline 元素：

{% example html %}
<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>
{% endexample %}

搭配 table cell 元素：

{% example html %}
<table style="height: 100px;">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>
{% endexample %}
