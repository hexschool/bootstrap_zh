---
layout: docs
title: 按鈕 (Buttons)
description: 使用 Bootstrap 自訂按鈕樣式到表單、對話方塊等操作，並支援多種大小、狀態等。
group: components
redirect_from: "/docs/4.0/components/"
toc: true
---

## 範例

Bootstrap 包括多個預先定義的按鈕樣式，每個都有自己的語義目的及更多的控制。

{% example html %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}

<button type="button" class="btn btn-link">Link</button>
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

## 按鈕標籤

`.btn` 是設計為 `<button>` 元素一起使用。 但是，您也可以在 `<a>` 或 `<input>` 元素上使用這些 Class（儘管有些瀏覽器可能會使用稍微不同的渲染）。

當在用於觸發頁面內功能（例如折疊內容）的 `<a>` 元素上使用按鈕時，而不是連結到新頁面或當前頁面中的部分，這些連結應該被賦予 `role="button"` 適當地傳達他們的目的到螢幕閱讀器等輔助性技術。

{% example html %}
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{% endexample %}

## 外框按鈕

需要一個按鈕，但不是用填滿的背景顏色？用 `.btn-outline-*` 替換預設修飾用的 Class，以移除任何按鈕上的所有背景色及背景圖。

{% example html %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-outline-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}
{% endexample %}

## 大小

想要較大或較小的按鈕？加入 `.btn-lg` 或 `.btn-sm` 來套用尺寸。

{% example html %}
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
{% endexample %}

{% example html %}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{% endexample %}

增加 `.btn-block` 創建塊級別的按鈕（等同於外元素的寬）。

{% example html %}
<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
{% endexample %}

## 啟用狀態

當啟用時，按鈕將出現按壓（背景較暗、邊框較暗、內陰影）。 **沒有必要在 `<button>` 添加一個 Class，因為它們使用偽類**。但是，如果您需要以動態方式改變狀態，則可以使用 `.active`（並包括 <code>aria-pressed="true"</code> 屬性）套用相同的啟用外觀。

{% example html %}
<a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
{% endexample %}

## 停用狀態

透過將 `disabled` 布林屬性添加到任何 `<button>` 元素，使按鈕看起來處於停用狀態。

{% example html %}
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
{% endexample %}


使用 `<a>` 元素的停用略有不同：

- `<a>` 不支援 `disabled` 屬性，所以你必須添加 `.disabled ` 使它在視覺上看起來被禁用。
- 包括友善的樣式行為設計，以禁用 `<a>` 按鈕上的所有 `pointer-events`。在支援該屬性的瀏覽器中，會看不到禁用的游標。
- 禁用按鈕應包含 `aria-disabled="true"` 屬性來向輔助性技術指示元素的狀態。

{% example html %}
<a href="#" class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</a>
{% endexample %}

{% callout warning %}
#### 連結功能警告

`.disabled` 使用 `pointer-events: none` 來禁用 `<a>` 的連結功能，但該 CSS 屬性尚未標準化。此外，即使在支持 `pointer-events: none` 的瀏覽器中，鍵盤導覽仍然不受影響，這意味著鍵盤使用者和輔助性技術的使用者仍然可以啟動這些連結。為了安全起見，在這些連結上添加一個 `tabindex="-1"` 屬性防止他們套用 focus，並使用自訂的 JavaScript 來禁用它們的功能。
{% endcallout %}

## 按鈕插件

讓按鈕可以做更多，控制按鈕狀態或群組按鈕等相關的元件。

### 切換狀態

增加 `data-toggle="button"` 來切換按鈕 `active` 狀態。 如果您預先需要切換按鈕，則必須手動將 `.active` class **和** `aria-pressed="true"` 添加到 `<button>` 中。

{% example html %}
<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Single toggle
</button>
{% endexample %}

### 核取方塊和選項按鈕

Bootstrap的 `.button` 樣式可以應用於其他元素，例如 `<label>` 以提供核取方塊或選項按鈕樣式進行按鈕切換。 將 `data-toggle="buttons"` 添加到包含這些按鈕的 `.btn-group` 中，來啟用他們各自樣式的切換。

這些按鈕的檢查狀態 **只能透過按鈕上的 `click` 事件** 進行更新。如果您使用其他方法來更新輸入 - 例如，使用 `<input type="reset">` 或手動應用輸入的 `checked` 屬性，您需要手動在 `<label>` 上切換 `.active`。

{% example html %}
<div class="btn-group" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="checkbox" checked autocomplete="off"> Checkbox 1 (pre-checked)
  </label>
  <label class="btn btn-secondary">
    <input type="checkbox" autocomplete="off"> Checkbox 2
  </label>
  <label class="btn btn-secondary">
    <input type="checkbox" autocomplete="off"> Checkbox 3
  </label>
</div>
{% endexample %}

{% example html %}
<div class="btn-group" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1 (preselected)
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
  </label>
</div>
{% endexample %}

### Methods

| 方法 | 描述 |
| --- | --- |
| `$().button('toggle')` |切換狀態，給予按鈕已經啟用的外觀。 |
| `$().button('dispose')` | 銷毀一個元素的按鈕。 |
