---
layout: docs
title: 表單
description: 用於創建各種表單控制項樣式、佈局選項和自訂群組件的範例和使用指南。
group: components
toc: true
---

## 概觀

Bootstrap 的表單控制與 Class 一起在 [我們重置表單樣式]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/#forms) 上作延伸。使用這些 Class 來選擇自訂顯示，以便在瀏覽器和設備之間進行更一致的呈現。

確保在輸入框上使用正確的 `type` 屬性（例如，`email` 用於電子郵件地址或 `number` 用於數字信息），以利用較新的輸入控制，如電子郵件驗證、號碼選擇等。

以下是 Bootstrap 表單樣式的一個簡單範例。 繼續閱讀有關的 Class 、表單佈局等的文檔。

{% example html %}
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input">
      Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endexample %}

## 表單控制

文本形式控制元件（如 `<input>`、`<select>` 和 `<textarea>`）使用 `.form-control` 進行樣式化。包括一般外觀、focus 狀態、尺寸等等的樣式。

請務必瀏覽我們的 [自定義表單](#自定義表單) 以進一步了解 `<select>` 設計風格。

{% example html %}
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
{% endexample %}

對於檔案類型的 input，改用 `.form-control-file` 取代 `.form-control`。

{% example html %}
<form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>
{% endexample %}

### 尺寸

使用 `.form-control-lg` 和 `.form-control-sm` 設置高度。

{% example html %}
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
{% endexample %}

{% example html %}
<select class="form-control form-control-lg">
  <option>Large select</option>
</select>
<select class="form-control">
  <option>Default select</option>
</select>
<select class="form-control form-control-sm">
  <option>Small select</option>
</select>
{% endexample %}

### 僅能閱讀

在輸入上添加 `readonly` (布林)屬性，以防止修改 input 的值。僅能閱讀的 input 顯示較淡（就像禁用的輸入），但保留標準游標。

{% example html %}
<input class="form-control" type="text" placeholder="Readonly input here…" readonly>
{% endexample %}

### 僅能閱讀的文本

如果您希望將 `<input readonly>` 元素設置為純文本，請使用 `.form-control-plaintext` 來刪除預設表單純文字樣式，並保留適當的邊距和填充。

{% example html %}
<form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
  </div>
</form>
{% endexample %}

{% example html %}
<form class="form-inline">
  <div class="form-group">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="form-group mx-sm-3">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Confirm identity</button>
</form>
{% endexample %}

## 核取方塊和選項按鈕 (Checkboxes and radios)


透過 `.form-check` 預設核取方塊和選項按鈕得到改進，這兩種輸入類型的 class 都改進了 HTML 元素的佈局和行為。核取方塊用於在列表中選擇一個或多個選項，而選項按鈕是用於從許多選項中選擇一個選項。

支持 `not-allowed` 核取方塊和選項按鈕，並在父標籤 `<label>` 滑入時顯示不允許的游標，則需要將 `.disabled` 加到父級 `.form-check`。這也將淡化文字顏色以提示 input 的狀態。

### 預設 (堆疊)

預設情況下，同級任意數量的核取方塊和選項按鈕將被垂直堆疊，並與 `.form-check` 適當間隔。

{% example html %}
<div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value="">
    Option one is this and that&mdash;be sure to include why it's great
  </label>
</div>
<div class="form-check disabled">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value="" disabled>
    Option two is disabled
  </label>
</div>
{% endexample %}

{% example html %}
<div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
    Option one is this and that&mdash;be sure to include why it's great
  </label>
</div>
<div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
    Option two can be something else and selecting it will deselect option one
  </label>
</div>
<div class="form-check disabled">
  <label class="form-check-label">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
    Option three is disabled
  </label>
</div>
{% endexample %}

### 行內

透過 `.form-check-inline` 加到任何 `.form-check` 來將核取方塊或選項按鈕組合放到同一水平行上。

{% example html %}
<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> 1
  </label>
</div>
<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"> 2
  </label>
</div>
<div class="form-check form-check-inline disabled">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled> 3
  </label>
</div>
{% endexample %}

{% example html %}
<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 1
  </label>
</div>
<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 2
  </label>
</div>
<div class="form-check form-check-inline disabled">
  <label class="form-check-label">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled> 3
  </label>
</div>
{% endexample %}

### 沒有標籤

如果您在 `<label>` 中沒有任何文字，則 input 按照您的預期進行定位。 **目前只適用於非行內核取方塊和選項按鈕。** 請記住，仍然需要為輔助技術提供某種形式的標籤（例如使用 `aria-label`）。

{% example html %}
<div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
  </label>
</div>
<div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="...">
  </label>
</div>
{% endexample %}

## 佈局

自從 Bootstrap 使用 `display: block` 和 `width: 100%` 在全部的 input 控制上後，表單都是採垂直堆疊排列。可以透過增加 Class 來改變表單的佈局方式。

### 表單群組

`.form-group` 是向表單加一些結構的方法。其唯一的目的是提供標籤的配對及  `margin-bottom`。由於它是一個 class ，您可以使用它在 `<fieldset>`、`<div>` 或任何其他元素。

{% example html %}
<form>
  <div class="form-group">
    <label class="form-control-label" for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
  </div>
  <div class="form-group">
    <label class="form-control-label" for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
  </div>
</form>
{% endexample %}

### 表單格線

可以使用網格 Class 構建更複雜的表單。請使用這些對於需要多列、多種寬度和其他對齊選項的表單佈局。

{% example html %}
<form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
{% endexample %}

#### 表單列

可以使用 `form-row` 取代 `.row`，這個變體可以相對於原本的網格 row 來說，他提供更小的 gutter 及緊湊的佈局。

{% example html %}
<form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
{% endexample %}

還可以使用網格系統創建更複雜的佈局。

{% example html %}
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" class="col-form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" class="col-form-label">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress" class="col-form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2" class="col-form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity" class="col-form-label">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState" class="col-form-label">State</label>
      <select id="inputState" class="form-control">Choose</select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip" class="col-form-label">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox"> Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
{% endexample %}

#### 水平表單

建立水平表單，需透過增加 `.row` 在表單群組上及使用 `.col-*-*` 來指定標籤及控制項。

確保增加 `.col-form-label` 在你的 `<label>` 上，以便他們與相關的表單垂直居中。`<legend>` 元素可以使用 `.col-form-legend` 與常規的 `<label>` 元素相似。

{% example html %}
<div class="container">
  <form>
    <div class="form-group row">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
      </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
      </div>
    </div>
    <fieldset class="form-group">
      <div class="row">
        <legend class="col-form-legend col-sm-2">Radios</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              Option one is this and that&mdash;be sure to include why it's great
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
              Option two can be something else and selecting it will deselect option one
            </label>
          </div>
          <div class="form-check disabled">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
              Option three is disabled
            </label>
          </div>
        </div>
      </div>
    </fieldset>
    <div class="form-group row">
      <div class="col-sm-2">Checkbox</div>
      <div class="col-sm-10">
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox"> Check me out
          </label>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-10">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </div>
  </form>
</div>
{% endexample %}

#### 欄位尺寸

如前面的示例所示，我們的網格系統允許您將任意數量的 `.col` 放置在 `.row` 或 `.form-row` 中。會在它們之間平均分割可用的寬度。您也可以選擇列的一部分來佔用更多或更少的空間，而剩餘的 `.col` 將分配給其他欄，例如 `.col-7`。

{% example html %}
<form>
  <div class="form-row">
    <div class="col-7">
      <input type="text" class="form-control" placeholder="City">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="State">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Zip">
    </div>
  </div>
</form>
{% endexample html %}

#### 自動尺寸

下面的示例使用一個 flexbox 小工具垂直居中的內容，並將 `.col` 更改為 `.col-auto`，這樣您的欄只佔用了所需的空間。換句話說，欄的大小本身就是基於內容。

{% example html %}
<form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2 mb-sm-0">
        <div class="input-group-addon">@</div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>
    </div>
    <div class="col-auto">
      <div class="form-check mb-2 mb-sm-0">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox"> Remember me
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endexample %}

然後，您可以重新混合不同大小欄 Class。

{% example html %}
<form>
  <div class="form-row align-items-center">
    <div class="col-sm-3">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input type="text" class="form-control mb-2 mb-sm-0" id="inlineFormInputName" placeholder="Jane Doe">
    </div>
    <div class="col-sm-3">
      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div class="input-group mb-2 mb-sm-0">
        <div class="input-group-addon">@</div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
      </div>
    </div>
    <div class="col-auto">
      <div class="form-check mb-2 mb-sm-0">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox"> Remember me
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endexample %}

也支援 [自定義表單](#自定義表單)。

{% example html %}
<form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-auto">
      <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
        <input type="checkbox" class="custom-control-input">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">Remember my preference</span>
      </label>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endexample %}

### 行內表單

使用 `.form-inline` 在單個水平列上顯示一系列標籤、表單控制項、按鈕，行內表單的控制元件與預設的狀態略有不同。

- 控制元件是使用 `display: flex`，折疊任何 HTML 的空白區域及允許對齊的控制小工具如 [spacing]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) 和 [flexbox]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/)。
- 控制元件和 input 群組透過 `width: auto` 複寫預設的 `width: 100%`。
- 控制元件 **僅會在 viewport 大於 576px 時才會顯示行內** 以便在行動裝置上完全顯示。

你需要手動添加寬度或對齊在單獨的控制元件上，透過 [間隔小工具]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/)。最後，一定要 `<label>` 包含在每個表單控制元件內，即使您需要使用 `.sr-only` 從非螢幕閱讀器訪問者隱藏它。

{% example html %}
<form class="form-inline">
  <label class="sr-only" for="inlineFormInputName2">Name</label>
  <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Jane Doe">

  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
  <div class="input-group mb-2 mr-sm-2 mb-sm-0">
    <div class="input-group-addon">@</div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
  </div>

  <div class="form-check mb-2 mr-sm-2 mb-sm-0">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox"> Remember me
    </label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endexample %}

自訂表單控制件和 select 都是支援的。

{% example html %}
<form class="form-inline">
  <label class="mr-sm-2" for="inlineFormCustomSelectPref">Preference</label>
  <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelectPref">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
    <input type="checkbox" class="custom-control-input">
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">Remember my preference</span>
  </label>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endexample %}

{% callout warning %}
#### 隱藏標籤的替代品

如果您沒有為每個 input 添加標籤，螢幕閱讀器等輔助技術將對您的表單感到困擾。對於這些行內表單，您可以使用 `.sr-only` 來隱藏標籤。還提供了輔助技術標籤的另外的替代方法，例如 `aria` 標籤、`aria-labelledby` 或 `title` 屬性。如果這些都不存在，輔助技術可能會使用 `placeholder` 的屬性（如果存在），但請注意，不建議使用 `placeholder` 替代其他標籤方法。
{% endcallout %}

## 幫助文字

可以使用 `.form-text`（v3 中稱為 `.help-block`）創建表單中的塊級幫助文字。可以使用任何行內 HTML 元素和小工具（如 `.text-muted`）靈活地實現行內幫助文字。

{% callout warning %}
##### 幫助文字需要與控制元件相關聯

幫助文字應該使用 `aria-describedby` 與表單控制元件相關連，這將確保輔助技術（例如螢幕閱讀器）在用戶 focus 或輸入 input 時將了解此幫助文字。
{% endcallout %}

input 下方的幫助文字可以用 `.form-text`。包括 `display: block` 並添加一些 `margin-top`，以便與上面的 input 之間的間隔。

{% example html %}
<label for="inputPassword5">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<small id="passwordHelpBlock" class="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
{% endexample %}

行內文本可以使用任何典型的行內 HTML 元素（無論是 `<small>`、`<span>` 還是其他）。

{% example html %}
<form class="form-inline">
  <div class="form-group">
    <label for="inputPassword6">Password</label>
    <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
    <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
</form>
{% endexample %}

## 禁用表單

加上 `disabled` 的布林屬性在 input 上，讓防止使用者操作並使它看起來更淡。

{% highlight html %}
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
{% endhighlight %}

將 `disabled` 屬性添加到 `<fieldset>` 以禁用其中的所有控制元件。

{% example html %}
<form>
  <fieldset disabled>
    <div class="form-group">
      <label for="disabledTextInput">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="form-group">
      <label for="disabledSelect">Disabled select menu</label>
      <select id="disabledSelect" class="form-control">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox"> Can't check this
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
{% endexample %}

{% callout warning %}
#### 附加說明和錨

預設情況下，瀏覽器會將 `<fieldset disabled>` 中的所有本地表單控制項（`<input>`、`<select>` 和 `<button>` 元素）視為禁用，防止鍵盤和滑鼠和他們之間的交互。但是，如果您的表單還包含 `<a ... class="btn btn-*">` 元素，則只會給出一種 `pointer-events: none` 的樣式。關於 [按鈕禁用狀態]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/#disabled-state)（特別是在錨元素的子部分），此 CSS 屬性尚未標準化，Opera 18 及更低版本或 Internet Explorer 11 中不完全支援，並且不會阻止鍵盤使用者 focus 或啟動這些連結。 為了安全起見，請使用自訂 JavaScript 來禁用此類連結。
{% endcallout %}

{% callout danger %}
#### 跨瀏覽器相容性

雖然 Bootstrap 將在所有瀏覽器中應用這些樣式，但 Internet Explorer 11 及更低版本不完全支援 `<fieldset>` 上的 `disabled` 屬性。 使用自訂 JavaScript 來禁用這些瀏覽器中的標籤。
{% endcallout %}

## 驗證

透過 HTML5 表單驗證可在我們支持的 [瀏覽器中提供](http://caniuse.com/#feat=form-validation) 為您的用戶提供可操作的反饋。從瀏覽器中選擇預設驗證反饋，或者使用我們內置的 Class 和啟動 JavaScript 實現自定義訊息。

{% callout warning %}
我們 **強烈推薦自定義** 驗證樣式，因為瀏覽器預設值沒辦法提供給與螢幕閱讀器使用者。
{% endcallout %}

### 如何運作

這裡描述 Bootstrap 中的驗證是如何運作的。

- HTML 表單驗證透過 CSS 的兩個偽類 `:invalid` 和 `:valid` 。它適用於 `<input>`、`<select>` 和 `<textarea>` 元素。
- Bootstrap `:invalid` 和 `:valid` 樣式在 `.was-validated`，通常會運用在 `<form>`。否則，必填的內容在載入的過程中會顯示無效。這個方法你可以選擇在任何時候啟用他 (通常在嘗試提交表單後)。
- 作為回饋，可以使用 `.is-invalid` 和 `.is-valid` 替代 [伺服器端的驗證](#server-side) 偽類，他們不需要 `.was-validated` 在父層。
- 由於 CSS 的工作原理，我們無法（現在）將樣式應用於 DOM 中的表單控制元件之前的 `<label>`，而不透過自定義 JavaScript 的幫助。
- 所有現代瀏覽器都支持 [約束驗證 API](https://www.w3.org/TR/html5/forms.html#the-constraint-validation-api) ，一系列用於驗證表單控制元件的 JavaScript 方法。
- 回饋訊息會使用 [瀏覽器預設值](#browser-default)（每個瀏覽器不同，unstylable via CSS）或其他 HTML 和 CSS 的自定義反饋樣式。
- 您可以在 JavaScript 中提供帶有 `setCustomValidity` 的自定義驗證訊息。

請參考以下的自定義表單驗證樣式、服務器端驗證 Class 和瀏覽器預設值。

### 自訂樣式

對於自定義 Bootstrap 表單驗證訊息，您需要將 `novalidate` 屬性添加到您的 `<form>`。這將禁用瀏覽器預設的回饋提示，但仍提供 JavaScript 中表單驗證 API 有效。嘗試提交以下表格；我們的 JavaScript 將攔截提交按鈕並向您提供回饋。

嘗試提交時，您會看到 `:invalid` 和 `:valid` 的樣式應用於您的表單控制元件。

{% example html %}
<form class="container" id="needs-validation" novalidate>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">City</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">State</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom05">Zip</label>
      <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("needs-validation");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  }, false);
}());
</script>
{% endexample %}

### 瀏覽器預設

對自定義驗證回饋或編寫 JavaScript 以更改表單行為沒興趣？您也可以使用瀏覽器的預設值。嘗試提交以下表格。根據您的瀏覽器和操作系統，您會看到一種略有不同的回饋樣式。

雖然這些反饋風格不能用 CSS 樣式，但您仍然可以透過 JavaScript自定義回饋文字內容。

{% example html %}
<form>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault01">First name</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault02">Last name</label>
      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">State</label>
      <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Zip</label>
      <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>

  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endexample %}

### 伺服器端

我們建議使用客戶端驗證，但是如果您需要伺服器端，則可以使用 `.is-invalid`”和 `.is-valid` 表示無效且有效的表單。 請注意，這些 Class 也支持 `.invalid-feedback` 。

{% example html %}
<form>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="validationServer01">First name</label>
      <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationServer02">Last name</label>
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">City</label>
      <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04">State</label>
      <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05">Zip</label>
      <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>

  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endexample %}

### 支援元素

範例表單顯示了上面的原生文本 `<input>`，但也可以為自定義表單控制元件提供表單驗證樣式。

{% example html %}
<form class="was-validated">
  <label class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" required>
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">Check this custom checkbox</span>
  </label>

  <div class="custom-controls-stacked d-block my-3">
    <label class="custom-control custom-radio">
      <input id="radioStacked1" name="radio-stacked" type="radio" class="custom-control-input" required>
      <span class="custom-control-indicator"></span>
      <span class="custom-control-description">Toggle this custom radio</span>
    </label>
    <label class="custom-control custom-radio">
      <input id="radioStacked2" name="radio-stacked" type="radio" class="custom-control-input" required>
      <span class="custom-control-indicator"></span>
      <span class="custom-control-description">Or toggle this other custom radio</span>
    </label>
  </div>

  <select class="custom-select d-block my-3" required>
    <option value="">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <label class="custom-file">
    <input type="file" id="file" class="custom-file-input" required>
    <span class="custom-file-control"></span>
  </label>
</form>
{% endexample %}

## 自定義表單

為了自訂和跨瀏覽器更為一致性，請使用自訂的表單元素來替換瀏覽器預設值。它們建立在語義和具親和力標記之上，因此它們是可以替代任何預設表單控制元件的。


### 核取方塊和單選


每個核取方塊和選項按鈕被包裝在一個 `<label>` 中有三個原因

- 它提供了更大的點擊區域。
- 它提供了一個有用的和語義的包裝器，以幫助我們替換預設的 `<input>` 。
- 它會自動觸發 `<input>` 的狀態，這意味著不需要 JavaScript 插件。

我們用 `opacity` 隱藏預設 `<input>` 並使用 `.custom-control-indicator` 在它的位置上構建一個新的自訂表單指示器。不幸的是，由於 CSS 的 `content` 對該元素不起作用，所以我們不能僅僅使用 `<input>` 構建一個客製的。

我們為所有我們的 `<input>` 使用選擇器 (`~`) 確認 `：checked` 狀態？正確地設置我們的自訂表單指示器。 當與 `.custom-control-description` 結合使用時，我們也可以根據 `<input>` 的狀態對每個物件進行樣式調整。

在檢查狀態下，我們使用 [Open Iconic](https://useiconic.com/open) 中的  **base64 embedded SVG icons**。 這為我們提供了跨瀏覽器和裝置樣式的定位做最佳控制。

#### 核取方塊

{% example html %}
<label class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input">
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">Check this custom checkbox</span>
</label>
{% endexample %}

透過 JavaScript（當沒有可用的 HTML 屬性來指定它）手動設置時，自訂核取方塊還可以使用 `：indeterminate` 偽類。

<div class="bd-example bd-example-indeterminate">
  <label class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input">
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">Check this custom checkbox</span>
  </label>
</div>

如果你正使用 jQuery，可以用下面這些：

{% highlight js %}
$('.your-checkbox').prop('indeterminate', true)
{% endhighlight %}

#### 單選

{% example html %}
<label class="custom-control custom-radio">
  <input id="radio1" name="radio" type="radio" class="custom-control-input">
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">Toggle this custom radio</span>
</label>
<label class="custom-control custom-radio">
  <input id="radio2" name="radio" type="radio" class="custom-control-input">
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">Or toggle this other custom radio</span>
</label>
{% endexample %}

#### 禁用

自訂核取方塊和選項按鈕也可以禁用。 將 `disabled` 布林屬性加到 `<input>`，自訂指示符和標籤樣式都會自動加入。

{% example html %}
<label class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" disabled>
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">Check this custom checkbox</span>
</label>

<label class="custom-control custom-radio">
  <input id="radio3" name="radioDisabled" type="radio" class="custom-control-input" disabled>
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">Toggle this custom radio</span>
</label>
{% endexample %}

#### 堆疊

自訂核取方塊和單選按鈕是平行的開始。加入一個 `.custom-controls-stacked` 的父級，以確保每個表單控制元件在不同的列上。

{% example html %}
<div class="custom-controls-stacked">
  <label class="custom-control custom-radio">
    <input id="radioStacked3" name="radio-stacked" type="radio" class="custom-control-input">
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">Toggle this custom radio</span>
  </label>
  <label class="custom-control custom-radio">
    <input id="radioStacked4" name="radio-stacked" type="radio" class="custom-control-input">
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">Or toggle this other custom radio</span>
  </label>
</div>
{% endexample %}

### 選擇功能表

自訂 `<select>` 只需要一個 `.custom-select` 來觸發自訂樣式。


{% example html %}
<select class="custom-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endexample %}

### 檔案瀏覽

檔輸入是最粗糙的，需要額外的 JavaScript，如果你想將 *Choose file...* 和所選的檔案名稱連接。

{% example html %}
<label class="custom-file">
  <input type="file" id="file2" class="custom-file-input">
  <span class="custom-file-control"></span>
</label>
{% endexample %}

這是它的工作原理：

- 我們將 `<input>`包裝在 `<label>` 中，所以自訂控制元件正確觸發檔案瀏覽。
- 我們透過 `opacity` 隱藏預設 `<input>`。
- 我們使用 `:after` 生成一個自訂的背景和文字（**Choose file...**）。
- 我們使用 `:before` 來生成和定位 *瀏覽* 按鈕。
- 我們在 `<input>` 上使用 `height`，用於周圍內容的適當間距。

換句話說，它是一個完全自定義的元素，都是透過 CSS 生成的。

#### 翻譯或自定義字符串

 [`:lang()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang) 用於輕鬆將 "Browse" 和 "Choose file..." 文本翻譯到其他語言。 只需用相關的 [language tag](https://en.wikipedia.org/wiki/IETF_language_tag) 和當地語系化的字串覆蓋或加到 `$custom-file-text` SCSS 變數。英文字串可以以相同的方式進行定制。範例，如何添加西班牙語翻譯（西班牙語的語言代碼是 `es`）：


{% highlight scss %}
$custom-file-text: (
  placeholder: (
    en: "Choose file...",
    es: "Seleccionar archivo..."
  ),
  button-label: (
    en: "Browse",
    es: "Navegar"
  )
);
{% endhighlight %}

您需要正確設置文件的語言才能顯示正確的文本。 這可以使用[`lang` 屬性](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) 或 [`Content-Language` HTTP header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.12) 以及其他方法。
