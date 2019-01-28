---
layout: docs
title: 表單 (Forms)
description: 用於創建各種表單控制項樣式、佈局選項和自訂群組件的範例和使用指南。
group: components
toc: true
---

## 概觀 {#overview}

Bootstrap 的表單控制與 Class 一起在 [我們重置表單樣式]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/#forms) 上作延伸。使用這些 Class 來選擇自訂顯示，以便在瀏覽器和設備之間進行更一致的呈現。

確保在輸入框上使用正確的 `type` 屬性（例如，`email` 用於電子郵件地址或 `number` 用於數字信息），以利用較新的輸入控制，如電子郵件驗證、號碼選擇等。

以下是 Bootstrap 表單樣式的一個簡單範例。 繼續閱讀有關的 Class 、表單佈局等的文檔。

{% capture example %}
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
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endcapture %}
{% include example.html content=example %}

## 表單控制 {#form-controls}

文本形式控制元件（如 `<input>`、`<select>` 和 `<textarea>`）使用 `.form-control` 進行樣式化。包括一般外觀、focus 狀態、尺寸等等的樣式。

請務必瀏覽我們的 [自定義表單](#自定義表單) 以進一步了解 `<select>` 設計風格。

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

對於檔案類型的 input，改用 `.form-control-file` 取代 `.form-control`。

{% capture example %}
<form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

### 尺寸 {#sizing}

使用 `.form-control-lg` 和 `.form-control-sm` 設置高度。

{% capture example %}
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<select class="form-control form-control-lg">
  <option>Large select</option>
</select>
<select class="form-control">
  <option>Default select</option>
</select>
<select class="form-control form-control-sm">
  <option>Small select</option>
</select>
{% endcapture %}
{% include example.html content=example %}

### 僅能閱讀 {#readonly}

在輸入上添加 `readonly` (布林)屬性，以防止修改 input 的值。僅能閱讀的 input 顯示較淡（就像禁用的輸入），但保留標準游標。

{% capture example %}
<input class="form-control" type="text" placeholder="Readonly input here…" readonly>
{% endcapture %}
{% include example.html content=example %}

### 僅能閱讀的文本 {#readonly-plain-text}

如果您希望將 `<input readonly>` 元素設置為純文本，請使用 `.form-control-plaintext` 來刪除預設表單純文字樣式，並保留適當的邊距和填充。

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<form class="form-inline">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
</form>
{% endcapture %}
{% include example.html content=example %}

## Range Inputs

使用 `.form-control-range` 設置水平可滾動的 range input。

{% capture example %}
<form>
  <div class="form-group">
    <label for="formControlRange">Example Range input</label>
    <input type="range" class="form-control-range" id="formControlRange">
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

## 核取方塊和選項按鈕 (Checkboxes and radios) {#checkboxes-and-radios}


透過 `.form-check` 預設核取方塊和選項按鈕得到改進，這兩種輸入類型的 class 都改進了 HTML 元素的佈局和行為。核取方塊用於在列表中選擇一個或多個選項，而選項按鈕是用於從許多選項中選擇一個選項。

支持 `not-allowed` 核取方塊和選項按鈕，並在父標籤 `<label>` 滑入時顯示不允許的游標，則需要將 `.disabled` 加到父級 `.form-check-input`。這也將淡化文字顏色以提示 input 的狀態。

使用 核取方塊和選項按鈕是基於 HTML 的驗證標準，並提供簡潔易讀的標籤，因此 `<input>` 和 `<label>` 是兄弟元素，而不是 `<label>` 內的 `<input>`，這是比較冗長的，因為必須指定 `id` 和 `for` 適性來關聯 `<input>` 和 `<label>`。

### 預設 (堆疊) {#default-stacked}

預設情況下，同級任意數量的核取方塊和選項按鈕將被垂直堆疊，並與 `.form-check` 適當間隔。

{% capture example %}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div>
{% endcapture %}
{% include example.html content=example %}

### 行內 {#inline}

透過 `.form-check-inline` 加到任何 `.form-check` 來將核取方塊或選項按鈕組合放到同一水平行上。

{% capture example %}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
{% endcapture %}
{% include example.html content=example %}

### 沒有標籤 {#without-labels}

將 `.form-check` 沒有任何文字內容的 input 加上 `.position-static`。 請記住，仍然需要為輔助技術提供某種形式的標籤（例如使用 `aria-label`）。

{% capture example %}
<div class="form-check">
  <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
</div>
<div class="form-check">
  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="...">
</div>
{% endcapture %}
{% include example.html content=example %}

## 佈局 {#layout}

自從 Bootstrap 使用 `display: block` 和 `width: 100%` 在全部的 input 控制上後，表單都是採垂直堆疊排列。可以透過增加 Class 來改變表單的佈局方式。

### 表單群組 {#form-groups}

`.form-group` 是向表單加一些結構的方法。其唯一的目的是提供標籤的配對及  `margin-bottom`，預設情況下他只會套用 `margin-bottom`，但他會在 `.form-inline` 中選擇其他樣式。由於它是一個 class，您可以使用它在 `<fieldset>`、`<div>` 或任何其他元素。

{% capture example %}
<form>
  <div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

### 表單格線 {#form-grid}

可以使用網格 Class 構建更複雜的表單。請使用這些對於需要多列、多種寬度和其他對齊選項的表單佈局。

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

#### 表單列 {#form-row}

可以使用 `form-row` 取代 `.row`，這個變體可以相對於原本的網格 row 來說，他提供更小的 gutter 及緊湊的佈局。

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

還可以使用網格系統創建更複雜的佈局。

{% capture example %}
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
{% endcapture %}
{% include example.html content=example %}

#### 水平表單 {#horizontal-form}

建立水平表單，需透過增加 `.row` 在表單群組上及使用 `.col-*-*` 來指定標籤及控制項。一定要將 `.col-form-label` 加到你的 `<label>` 中，這樣就可以垂直居中對應的表單元件。

有時，可以依據需求使用 margin 或 padding 的通用類別來調整良好的對齊。舉例來說，我們移除 `padding-top` 在堆疊的核取選項，讓他更好的對齊文字基準線。

{% capture example %}
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
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            Second radio
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
          <label class="form-check-label" for="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Checkbox</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
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
{% endcapture %}
{% include example.html content=example %}

##### Horizontal form label sizing {#horizontal-form-label-sizing}

確認使用 `.col-form-label-sm` 或 `.col-form-label-lg` 到您的 `<label>` 或 `<legend>` 來正確地遵循 `.form-control-lg` 和 `.form-control-sm` 的大小

{% capture example %}
<form>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

#### 欄位尺寸 {#column-sizing}

如前面的示例所示，我們的網格系統允許您將任意數量的 `.col` 放置在 `.row` 或 `.form-row` 中。會在它們之間平均分割可用的寬度。您也可以選擇列的一部分來佔用更多或更少的空間，而剩餘的 `.col` 將分配給其他欄，例如 `.col-7`。

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

#### 自動尺寸 {#auto-sizing}

下面的示例使用一個 flexbox 通用類別垂直居中的內容，並將 `.col` 更改為 `.col-auto`，這樣您的欄只佔用了所需的空間。換句話說，欄的大小本身就是基於內容。

{% capture example %}
<form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>
    </div>
    <div class="col-auto">
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck">
        <label class="form-check-label" for="autoSizingCheck">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

然後，您可以重新混合不同大小欄 Class。

{% capture example %}
<form>
  <div class="form-row align-items-center">
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe">
    </div>
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
      </div>
    </div>
    <div class="col-auto my-1">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
        <label class="form-check-label" for="autoSizingCheck2">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

也支援 [自定義表單](#自定義表單)。

{% capture example %}
<form>
  <div class="form-row align-items-center">
    <div class="col-auto my-1">
      <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-auto my-1">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" class="custom-control-input" id="customControlAutosizing">
        <label class="custom-control-label" for="customControlAutosizing">Remember my preference</label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

### 行內表單 {#inline-forms}

使用 `.form-inline` 在單個水平列上顯示一系列標籤、表單控制項、按鈕，行內表單的控制元件與預設的狀態略有不同。

- 控制元件是使用 `display: flex`，折疊任何 HTML 的空白區域及允許對齊的控制通用類別如 [spacing]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) 和 [flexbox]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/)。
- 控制元件和 input 群組透過 `width: auto` 複寫預設的 `width: 100%`。
- 控制元件 **僅會在 viewport 大於 576px 時才會顯示行內** 以便在行動裝置上完全顯示。

你需要手動添加寬度或對齊在單獨的控制元件上，透過 [間隔通用類別]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/)。最後，一定要 `<label>` 包含在每個表單控制元件內，即使您需要使用 `.sr-only` 從非螢幕閱讀器訪問者隱藏它。

{% capture example %}
<form class="form-inline">
  <label class="sr-only" for="inlineFormInputName2">Name</label>
  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">

  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">@</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
  </div>

  <div class="form-check mb-2 mr-sm-2">
    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
    <label class="form-check-label" for="inlineFormCheck">
      Remember me
    </label>
  </div>

  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>
{% endcapture %}
{% include example.html content=example %}

自訂表單控制件和 select 都是支援的。

{% capture example %}
<form class="form-inline">
  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <div class="custom-control custom-checkbox my-1 mr-sm-2">
    <input type="checkbox" class="custom-control-input" id="customControlInline">
    <label class="custom-control-label" for="customControlInline">Remember my preference</label>
  </div>

  <button type="submit" class="btn btn-primary my-1">Submit</button>
</form>
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}
##### 隱藏標籤的替代品

如果您沒有為每個 input 添加標籤，螢幕閱讀器等輔助技術將對您的表單感到困擾。對於這些行內表單，您可以使用 `.sr-only` 來隱藏標籤。還提供了輔助技術標籤的另外的替代方法，例如 `aria-label` 、`aria-labelledby` 或 `title` 屬性。如果這些都不存在，輔助技術可能會使用 `placeholder` 的屬性（如果存在），但請注意，不建議使用 `placeholder` 替代其他標籤方法。
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## 幫助文字 {#help-text}

可以使用 `.form-text`（v3 中稱為 `.help-block`）創建表單中的塊級幫助文字。可以使用任何行內 HTML 元素和通用類別（如 `.text-muted`）靈活地實現行內幫助文字。

{% capture callout %}
##### 幫助文字需要與控制元件相關聯

幫助文字應該使用 `aria-describedby` 與表單控制元件相關連，這將確保輔助技術（例如螢幕閱讀器）在用戶 focus 或輸入 input 時將了解此幫助文字。
{% endcapture %}
{% include callout.html content=callout type="warning" %}

input 下方的幫助文字可以用 `.form-text`。包括 `display: block` 並添加一些 `margin-top`，以便與上面的 input 之間的間隔。

{% capture example %}
<label for="inputPassword5">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<small id="passwordHelpBlock" class="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
{% endcapture %}
{% include example.html content=example %}

行內文本可以使用任何典型的行內 HTML 元素（無論是 `<small>`、`<span>` 還是其他）。

{% capture example %}
<form class="form-inline">
  <div class="form-group">
    <label for="inputPassword6">Password</label>
    <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
    <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

## 禁用表單 {#disabled-forms}

加上 `disabled` 的布林屬性在 input 上，讓防止使用者操作並使它看起來更淡。

{% highlight html %}
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
{% endhighlight %}

將 `disabled` 屬性添加到 `<fieldset>` 以禁用其中的所有控制元件。

{% capture example %}
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
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}
##### 附加說明和錨

預設情況下，瀏覽器會將 `<fieldset disabled>` 中的所有本地表單控制項（`<input>`、`<select>` 和 `<button>` 元素）視為禁用，防止鍵盤和滑鼠和他們之間的交互。但是，如果您的表單還包含 `<a ... class="btn btn-*">` 元素，則只會給出一種 `pointer-events: none` 的樣式。關於 [按鈕禁用狀態]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/#disabled-state)（特別是在錨元素的子部分），此 CSS 屬性尚未標準化，Opera 18 及更低版本或 Internet Explorer 10 中不完全支援，並且不會阻止鍵盤使用者 focus 或啟動這些連結。 為了安全起見，請使用自訂 JavaScript 來禁用此類連結。
{% endcapture %}
{% include callout.html content=callout type="warning" %}

{% capture callout %}
#### 跨瀏覽器相容性

雖然 Bootstrap 將在所有瀏覽器中應用這些樣式，但 Internet Explorer 11 及更低版本不完全支援 `<fieldset>` 上的 `disabled` 屬性。 使用自訂 JavaScript 來禁用這些瀏覽器中的標籤。
{% endcapture %}
{% include callout.html content=callout type="danger" %}

## 驗證 {#validation}

透過 HTML5 表單驗證可在我們支持的 [瀏覽器中提供](https://caniuse.com/#feat=form-validation) 為您的用戶提供可操作的反饋。從瀏覽器中選擇預設驗證反饋，或者使用我們內置的 Class 和啟動 JavaScript 實現自定義訊息。

{% capture callout %}
我們目前建議使用自定義驗證樣式，因為瀏覽器預設驗證訊息並未完全確認（最值得注意的是，桌面和移動設備上的 Chrome）。
{% endcapture %}
{% include callout.html content=callout type="warning" %}

### 如何運作 {#how-it-works}
這裡描述 Bootstrap 中的驗證是如何運作的。

- HTML 表單驗證透過 CSS 的兩個偽類 `:invalid` 和 `:valid` 。它適用於 `<input>`、`<select>` 和 `<textarea>` 元素。
- Bootstrap `:invalid` 和 `:valid` 樣式在 `.was-validated`，通常會運用在 `<form>`。否則，必填的內容在載入的過程中會顯示無效。這個方法你可以選擇在任何時候啟用他 (通常在嘗試提交表單後)。
- 如果需要重置表單的外觀（例如，使用 AJAX 提交動態表單的情況下），請在提交後再次從 `<form>` 中刪除`.was-validated` className。
- 作為回饋，可以使用 `.is-invalid` 和 `.is-valid` 替代 [伺服器端的驗證](#server-side) 偽類，他們不需要 `.was-validated` 在父層。
- 由於 CSS 的工作原理，我們無法（現在）將樣式應用於 DOM 中的表單控制元件之前的 `<label>`，而不透過自定義 JavaScript 的幫助。
- 所有現代瀏覽器都支持 [約束驗證 API](https://www.w3.org/TR/html5/sec-forms.html#the-constraint-validation-api) ，一系列用於驗證表單控制元件的 JavaScript 方法。
- 回饋訊息會使用 [瀏覽器預設值](#browser-default)（每個瀏覽器不同，unstylable via CSS）或其他 HTML 和 CSS 的自定義反饋樣式。
- 您可以在 JavaScript 中提供帶有 `setCustomValidity` 的自定義驗證訊息。

請參考以下的自定義表單驗證樣式、服務器端驗證 Class 和瀏覽器預設值。

### 自訂樣式 {#custom-styles}

對於自定義 Bootstrap 表單驗證訊息，您需要將 `novalidate` 屬性添加到您的 `<form>`。這將禁用瀏覽器預設的回饋提示，但仍提供 JavaScript 中表單驗證 API 有效。嘗試提交以下表格；我們的 JavaScript 將攔截提交按鈕並向您提供回饋。嘗試提交時，您會看到 `:invalid` 和 `:valid` 的樣式應用於您的表單控制元件。

運用自定義的顏色、邊界、focus 樣式和背景圖示來自製回饋樣式，以傳遞更好地回饋效果。`<select>` 的背景圖示僅適用於 `.custom-select` 而不是 `.form-control`。

{% capture example %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustomUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
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
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>
{% endcapture %}
{% include example.html content=example %}

### 瀏覽器預設 {#browser-defaults}

對自定義驗證回饋或編寫 JavaScript 以更改表單行為沒興趣？您也可以使用瀏覽器的預設值。嘗試提交以下表格。根據您的瀏覽器和操作系統，您會看到一種略有不同的回饋樣式。

雖然這些反饋風格不能用 CSS 樣式，但您仍然可以透過 JavaScript自定義回饋文字內容。

{% capture example %}
<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">First name</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Last name</label>
      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">State</label>
      <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Zip</label>
      <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endcapture %}
{% include example.html content=example %}

### 伺服器端 {#server-side}

我們建議使用客戶端驗證，但是如果您需要伺服器端，則可以使用 `.is-invalid`”和 `.is-valid` 表示無效且有效的表單。 請注意，這些 Class 也支持 `.invalid-feedback` 。

{% capture example %}
<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">First name</label>
      <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Last name</label>
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServerUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
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
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endcapture %}
{% include example.html content=example %}

### 支援元素 {#supported-elements}

範例表單顯示了上面的原生文本 `<input>`，但也可以為自定義表單控制元件和 `<textarea>` 提供表單驗證樣式。

{% capture example %}
<form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea">Textarea</label>
    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
    <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required>
    <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
  </div>
  <div class="custom-control custom-radio mb-3">
    <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required>
    <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="form-group">
    <select class="custom-select" required>
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid custom select feedback</div>
  </div>

  <div class="custom-file">
    <input type="file" class="custom-file-input" id="validatedCustomFile" required>
    <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
    <div class="invalid-feedback">Example invalid custom file feedback</div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

### 提示 {#tooltips}

如果你的排版允許，可以使用 `.{valid|invalid}-tooltip` 來替換 `.{valid|invalid}-feedback`，在樣式，使用風格化的提示來顯示表單的錯誤回饋，確保父元素有一個 `position: relative` 作為題式的定位，在以下的範例中 `col` 已經包含 relative，在你的專案上也需要做類似的設。定。

{% capture example %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">First name</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltipUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required>
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">City</label>
      <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">State</label>
      <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip05">Zip</label>
      <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endcapture %}
{% include example.html content=example %}

## 自定義表單 {#custom-forms}

為了自訂和跨瀏覽器更為一致性，請使用自訂的表單元素來替換瀏覽器預設值。它們建立在語義和具親和力標記之上，因此它們是可以替代任何預設表單控制元件的。


### 核取方塊和單選 {#checkboxes-and-radios-1}

每一個 checkbox 和 radio `<input>` 與一個鄰近的 `<label>` 被包覆在 `<div>` 中，用來創建自定義元件的文字內容。就結構上來說，這與 `.form-check` 是一樣的。

我們為所有我們的 `<input>` 使用選擇器 (`~`) 確認 `：checked` 狀態？正確地設置我們的自訂表單指示器。 當與 `.custom-control-label` 結合使用時，我們也可以根據 `<input>` 的狀態對每個物件進行樣式調整。

我們使用 `opacity` 來隱藏 `<input>`，並用 `.custom-control-label` 建立新的自訂義表單指示在 `::before` 和 `::after`。不幸的是，我們不能從 `<input>` 建立一個自定義的，因為CSS的 `content` 不能在這個元素上運作。

在檢查狀態下，我們使用 [Open Iconic](https://github.com/iconic/open-iconic) 中的  **base64 embedded SVG icons**。 這為我們提供了跨瀏覽器和裝置樣式的定位做最佳控制。

#### 核取方塊 {#checkboxes}

{% capture example %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1">
  <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
</div>
{% endcapture %}
{% include example.html content=example %}

透過 JavaScript（當沒有可用的 HTML 屬性來指定它）手動設置時，自訂核取方塊還可以使用 `:indeterminate` 偽類。

<div class="bd-example bd-example-indeterminate">
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">Check this custom checkbox</label>
  </div>
</div>

如果你正使用 jQuery，可以用下面這些：

{% highlight js %}
$('.your-checkbox').prop('indeterminate', true)
{% endhighlight %}

#### 單選 {#radios}

{% capture example %}
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
</div>
{% endcapture %}
{% include example.html content=example %}

#### 行內 {#inline-1}

{% capture example %}
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline2">Or toggle this other custom radio</label>
</div>
{% endcapture %}
{% include example.html content=example %}

#### 禁用 {#disabled}

自訂核取方塊和選項按鈕也可以禁用。 將 `disabled` 布林屬性加到 `<input>`，自訂指示符和標籤樣式都會自動加入。

{% capture example %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheckDisabled1" disabled>
  <label class="custom-control-label" for="customCheckDisabled1">Check this custom checkbox</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" name="radioDisabled" id="customRadioDisabled2" class="custom-control-input" disabled>
  <label class="custom-control-label" for="customRadioDisabled2">Toggle this custom radio</label>
</div>
{% endcapture %}
{% include example.html content=example %}

### 切換開關 {#switches}

切換開關元件具有自定義核取方塊的標記，但使用 `.custom-switch` 類別來呈現切歡開關。開關也支援 `disabled` 屬性。

{% capture example %}
<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="customSwitch1">
  <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
</div>
<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" disabled id="customSwitch2">
  <label class="custom-control-label" for="customSwitch2">Disabled switch element</label>
</div>
{% endcapture %}
{% include example.html content=example %}

### 選擇功能表 {#select-menu}

自訂 `<select>` 只需要一個 `.custom-select` 來觸發自訂樣式。自定義樣式僅限於 `<select>` 的初始外觀，由於瀏覽器的限制，無法修改 `<option>`。

{% capture example %}
<select class="custom-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endcapture %}
{% include example.html content=example %}

也可以選擇小或大的自定義選單來符合相似的文字 input。

{% capture example %}
<select class="custom-select custom-select-lg mb-3">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="custom-select custom-select-sm">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endcapture %}
{% include example.html content=example %}

多選 `multiple` 屬性也是被支持的。

{% capture example %}
<select class="custom-select" multiple>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endcapture %}
{% include example.html content=example %}

As is the `size` attribute:

{% capture example %}
<select class="custom-select" size="3">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endcapture %}
{% include example.html content=example %}

### 範圍 {#range}

使用 `.custom-range` 建立自定義 `<input type="range">` 控制條。軌跡 (背景) 和控制點 (值) 在瀏覽器中都被設計成相同樣式。只有在 IE 和 Firefox 支持控制點從左到右會 "填充" 它們的軌跡，以便直觀地顯示進度，但我們目前不支援它。

{% capture example %}
<label for="customRange1">Example range</label>
<input type="range" class="custom-range" id="customRange1">
{% endcapture %}
{% include example.html content=example %}

範圍輸入分別具有 `min` 和 `max`—`0` 和 `100` 的隱含值。您可以使用 `min` 和 `max` 屬性指定新的值。

{% capture example %}
<label for="customRange2">Example range</label>
<input type="range" class="custom-range" min="0" max="5" id="customRange2">
{% endcapture %}
{% include example.html content=example %}

預設的情況下，範圍輸入會 "讀取" 整數值。您也可以使用 `step` 值來改變。舉例如下，使用 `step="0.5"` 來加倍每一間距數值。

{% capture example %}
<label for="customRange3">Example range</label>
<input type="range" class="custom-range" min="0" max="5" step="0.5" id="customRange3">
{% endcapture %}
{% include example.html content=example %}

### 檔案瀏覽 {#file-browser}

{% capture callout %}
推薦自定義文件輸入動畫的插件：[bs-custom-file-input](https://www.npmjs.com/package/bs-custom-file-input)，這也是我們目前在文件中所使用的內容
{% endcapture %}
{% include callout.html content=callout type="info" %}

如果你想要修正 *Choose file...* 並與它產生功能，檔案的 input 是最麻煩的且需要額外的 JavaScript。

{% capture example %}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile">
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>
{% endcapture %}
{% include example.html content=example %}

透過 `opacity` 隱藏檔案的 `<input>` 以及透過樣式取代 `<label>`。透過 `::after` 定位及產生按鈕，最後，我們為了 `<input>` 宣告了 `width` 和 `height` 為周圍保留空間。

#### 使用 SCSS 翻譯或自定義字符串 {#translating-or-customizing-the-strings-with-SCSS}

[`:lang()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang) 用於輕鬆將 "Browse" 文本翻譯到其他語言。 只需用相關的 [language tag](https://en.wikipedia.org/wiki/IETF_language_tag) 和當地語系化的字串覆蓋或加到 `$custom-file-text` SCSS 變數。英文字串可以以相同的方式進行定制。範例，如何添加西班牙語翻譯（西班牙語的語言代碼是 `es`）：

{% highlight scss %}
$custom-file-text: (
  en: "Browse",
  es: "Elegir"
);
{% endhighlight %}

這裡的檔案自訂套用 `lang(es)` 的西班牙語係。

{% capture example %}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFileLang" lang="es">
  <label class="custom-file-label" for="customFileLang">Selectional Archive</label>
</div>
{% endcapture %}
{% include example.html content=example %}

您需要正確設置文件的語言才能顯示正確的文本。 這可以使用在 `<html>` 元素中的 [`lang` 屬性](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) 或 [`Content-Language` HTTP header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.12) 以及其他方法。


#### 使用 HTML 翻譯或自定義字符串 {#translating-or-customizing-the-strings-with-HTML}

Bootstrap 在 HTML 中還提供了一種使用 `data-browse` 屬性來翻譯 "Browse" 文本的方法，該屬性可以增加到自定義的 input label 中（例如：荷蘭語）

{% capture example %}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFileLangHTML">
  <label class="custom-file-label" for="customFileLangHTML" data-browse="Bestand kiezen">Voeg je document toe</label>
</div>
{% endcapture %}
{% include example.html content=example %}
