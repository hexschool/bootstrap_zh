---
layout: docs
title: 廣告大屏幕 (Jumbotron)
description: 輕巧，靈活的組件，用於展示醒目風格的內容。
group: components
---

一款輕量極的、靈活的元件，可視情況擴張到整個區域以顯示您網站的關鍵行銷資訊。

{% example html %}
<div class="jumbotron">
  <h1 class="display-3">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
{% endexample %}

要想讓廣告屏占滿螢幕寬度、不帶有圓角，請加 `.jumbotron-fluid`，並在裡面添加一個 `.container` 或 `.container-fluid`。

{% example html %}
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-3">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
{% endexample %}
