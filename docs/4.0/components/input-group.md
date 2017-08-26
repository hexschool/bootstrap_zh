---
layout: docs
title: Input 群組 (Input group)
description: 輕鬆擴展表單控制元件加入文字內容、按鈕、按鈕群組或是其他周圍的文字。
group: components
toc: true
---

## 基礎範例

在 input 的任一側放置一個附加元件或按鈕。 您也可以在 input 的兩面都放置一個。 **我們不支持單個輸入組中多個表單控制項。**，另外 `<label>` 必須於表單群組之外。


{% example html %}
<div class="input-group">
  <span class="input-group-addon" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>
<br>
<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-addon" id="basic-addon2">@example.com</span>
</div>
<br>
<label for="basic-url">Your vanity URL</label>
<div class="input-group">
  <span class="input-group-addon" id="basic-addon3">https://example.com/users/</span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>
<br>
<div class="input-group">
  <span class="input-group-addon">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-addon">.00</span>
</div>
<br>
<div class="input-group">
  <span class="input-group-addon">$</span>
  <span class="input-group-addon">0.00</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
{% endexample %}

## 尺寸

將相對表單大小 Class 加到 `.input-group` 中，其中的內容將自動調整大小 - 不需要在每個元素上重複表單控制元件大小 Class。


{% example html %}
<div class="input-group input-group-lg">
  <span class="input-group-addon" id="sizing-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="sizing-addon1">
</div>
<br>
<div class="input-group input-group-sm">
  <span class="input-group-addon" id="sizing-addon2">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="sizing-addon2">
</div>
{% endexample %}

## 核取方塊和選項按鈕附加組件

放置核取方塊或單選按鈕在 input 群組內取代文字。


{% example html %}
<div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" aria-label="Checkbox for following text input">
      </span>
      <input type="text" class="form-control" aria-label="Text input with checkbox">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="input-group">
      <span class="input-group-addon">
        <input type="radio" aria-label="Radio button for following text input">
      </span>
      <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
  </div>
</div>
{% endexample %}

## 多附加組件

支援多個附加元件，可以與核取方塊和單選按鈕 input 混合使用。

{% example html %}
<div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" aria-label="Checkbox for following text input">
      </span>
      <span class="input-group-addon">$</span>
      <input type="text" class="form-control" aria-label="Text input with checkbox">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="input-group">
      <span class="input-group-addon">$</span>
      <span class="input-group-addon">0.00</span>
      <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
  </div>
</div>
{% endexample %}


## 按鈕附加元件

input 群組中的按鈕必須包裝在 `.input-group-btn`中，以便正確對齊和調整大小。這是必需的，因為預設的流覽器樣式不能被覆蓋。


{% example html %}
<div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button">Go!</button>
      </span>
      <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for...">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for...">
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button">Go!</button>
      </span>
    </div>
  </div>
</div>
<br>
<div class="row">
  <div class="col-lg-offset-3 col-lg-6">
    <div class="input-group">
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button">Hate it</button>
      </span>
      <input type="text" class="form-control" placeholder="Product name" aria-label="Product name">
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button">Love it</button>
      </span>
    </div>
  </div>
</div>
{% endexample %}

## 帶下拉式選單的按鈕

{% example html %}
<div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <div class="input-group-btn">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Action
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div role="separator" class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <input type="text" class="form-control" aria-label="Text input with dropdown button">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="input-group">
      <input type="text" class="form-control" aria-label="Text input with dropdown button">
      <div class="input-group-btn">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Action
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div role="separator" class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## 分段按鈕

{% example html %}
<div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <div class="input-group-btn">
        <button type="button" class="btn btn-secondary">Action</button>
        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div role="separator" class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <input type="text" class="form-control" aria-label="Text input with segmented button dropdown">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="input-group">
      <input type="text" class="form-control" aria-label="Text input with segmented button dropdown">
      <div class="input-group-btn">
        <button type="button" class="btn btn-secondary">Action</button>
        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div role="separator" class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## 親和性

如果您沒有為每個 input 添加 label，螢幕閱讀器會無法正確接收你表單訊息。對於這些 input 群組，請確保有任何 label 或功能傳達到輔助技術。

要使用的確切技術（使用 `.sr-only` 隱藏 `<label>` 元素，或者使用 `aria-label` 和 `aria-labelledby` 屬性，可與 `aria-describedby` 結合使用 ）以及需要傳達的其他資訊，將根據您正在實現的元件的具體類型而有所不同。 本節中的範例提供了一些建議，基於具體案例的方法。
