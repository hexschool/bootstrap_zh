---
layout: docs
title: 下拉選單 (Dropdowns)
description: 使用 Bootstrap 下拉選單插件透過連結來切換內文框顯示。
group: components
toc: true
---

## 概述 {#overview}

下拉選單是可切換的，內文框用於顯示連結列表或其他。這些交互功能於 Bootstrap JavaScript 下拉選單插件提供。透過點擊切換，而不是滑入的方式，這是一個策劃好了的 [設計決定](https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/)。

下拉選單是透過第三方插件 [Popper.js](https://popper.js.org) 所建構的，這提供了動態位置及 viewport 的監控。使用前請確認 [popper.min.js]({{ site.cdn.popper }}) 在 Bootstrap's JavaScript 之前，或者使用 `bootstrap.bundle.min.js` / `bootstrap.bundle.js` 這已經包含 Popper.js。Popper.js 沒有使用在導覽列的下拉選單，所以該動態位置並不適用。

如果你要自行編譯 JS，記得 [requires `util.js`]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/#util)。

## 親和性 {#accessibility}

[<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) 該標準定義了 [`role="menu"` widget](https://www.w3.org/WAI/PF/aria/roles#menu)，但這是專門用於應用程式的功能表，它們觸發動作或功能。 <abbr title="Accessible Rich Internet Applications">ARIA</abbr> 選單只能包含功能表項目，核取方塊功能表項目，選項按鈕功能表項目，選項按鈕組和子功能表。

Bootstrap 的下拉選單是設計為通用的，適用於各種情況和標記結構。 例如，可以創建包含其他輸入和表單控制項（如搜索欄位或登錄表單）的下拉選單。 因此，Bootstrap 不希望（也不能自動添加）true <abbr title="Accessible Rich Internet Applications">ARIA</abbr> 功能表所需的任何 `role` 和 `aria-` 屬性。 作者必須自己加入這些具體屬性。

然而，Bootstrap 為大多數標準鍵盤功能表操作加入內置支援，例如使用游標鍵移動單個 `.dropdown-item` 元素並使用 <kbd>ESC</kbd> 鍵關閉功能表的功能。

## 範例 {#examples}

在 `.dropdown` 中包含下拉選單的切換（你的按鈕或連結）和下拉式功能表，或者另外一個聲明 `position：relative;` 的元素。 可以從 `<a>` 或 `<button>` 元素裡觸發下拉選單，以適應您的潛在需求。

### 單一按鈕 {#single-button}

任何單個 `.btn` 可以變成帶有一些標記的下拉式切換。以下是您如何使用 `<button>` 元素：

{% capture example %}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

透過 `<a>` 元素:

{% capture example %}
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

最好的部分是您可以使用任何按鈕變化做到這一點：

<div class="bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secondary</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
</div>

{% highlight html %}
<!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
{% endhighlight %}

### 分離按鈕 {#split-button}

同樣的，用與單個按鈕下拉選單幾乎相同的標記創建分割按鈕下拉選單，但是添加了 `.dropdown-toggle-split` 以在下拉插入符號做適當間隔。

我們使用這個額外的 class 將插入符號的兩邊水平 `padding` 減少了 25%，並移除了為常規按鈕下拉選單添加的 `margin-left`。 這些額外的變化使插入符號集中在分割按鈕中，並在主按鈕旁邊提供適當的空間。

<div class="bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
</div>

{% highlight html %}
<!-- Example split danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
{% endhighlight %}

## 尺寸 {#sizing}

按鈕下拉選單可以使用所有尺寸的按鈕，包括預設及分割下拉按鈕。

<div class="bd-example">
  <div class="btn-toolbar" role="toolbar">
    <div class="btn-group">
      <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Large button
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div><!-- /btn-group -->
    <div class="btn-group ml-2">
      <button type="button" class="btn btn-lg btn-secondary">Large split button</button>
      <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div><!-- /btn-group -->
  </div><!-- /btn-toolbar -->
  <div class="btn-toolbar" role="toolbar">
    <div class="btn-group">
      <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Small button
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div><!-- /btn-group -->
    <div class="btn-group ml-2">
      <button type="button" class="btn btn-sm btn-secondary">Small split button</button>
      <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div><!-- /btn-group -->
  </div><!-- /btn-toolbar -->
</div><!-- /example -->

{% highlight html %}
<!-- Large button groups (default and split) -->
<div class="btn-group">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Large button
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-lg" type="button">
    Large split button
  </button>
  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>

<!-- Small button groups (default and split) -->
<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Small button
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-sm" type="button">
    Small split button
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>
{% endhighlight %}

## 指向 {#directions}

### Dropup {#dropup}


<div class="bd-example">
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropup
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>

  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary">
      Split dropup
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>

{% highlight html %}
<!-- Default dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropup
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>

<!-- Split dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary">
    Split dropup
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>
{% endhighlight %}

### 向右 {#dropright}

加入 `.dropright` 到父元素上來切換向右側的選單。

<div class="bd-example">
  <div class="btn-group dropright">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropright
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>

  <div class="btn-group dropright">
    <button type="button" class="btn btn-secondary">
      Split dropright
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropright</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>

{% highlight html %}
<!-- Default dropright button -->
<div class="btn-group dropright">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropright
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>

<!-- Split dropright button -->
<div class="btn-group dropright">
  <button type="button" class="btn btn-secondary">
    Split dropright
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropright</span>
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>
{% endhighlight %}

### 向左 {#dropleft}

加入 `.dropleft` 到父元素上來切換向左側的選單。

<div class="bd-example">
  <div class="btn-group dropleft">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropleft
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>

  <div class="btn-group">
    <div class="btn-group dropleft" role="group">
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropleft</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
    <button type="button" class="btn btn-secondary">
      Split dropleft
    </button>
  </div>
</div>

{% highlight html %}
<!-- Default dropleft button -->
<div class="btn-group dropleft">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropleft
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>

<!-- Split dropleft button -->
<div class="btn-group">
  <div class="btn-group dropleft" role="group">
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropleft</span>
    </button>
    <div class="dropdown-menu">
      <!-- Dropdown menu links -->
    </div>
  </div>
  <button type="button" class="btn btn-secondary">
    Split dropleft
  </button>
</div>
{% endhighlight %}


## Menu items {#menu-items}

在過去下拉選單內容必須是個連接，但 v4 不再是這樣。現在您可以選擇在下拉選單中使用 `<button>` 元素，而不是僅使用 `<a>`。

{% capture example %}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

You can also create non-interactive dropdown items with `.dropdown-item-text`. Feel free to style further with custom CSS or text utilities.

您還可以使用 `.dropdown-item-text` 創建非交互式下拉選單。您可以使用自定義 CSS 或通用類別調整。

{% capture example %}
<div class="dropdown-menu">
  <span class="dropdown-item-text">Dropdown item text</span>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
</div>
{% endcapture %}
{% include example.html content=example %}

### 啟用 {#active}

增加 `.active` 到項目上使**樣式如同啟用**。

{% capture example %}
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item active" href="#">Active link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>
{% endcapture %}
{% include example.html content=example %}

### Disabled

Add `.disabled` to items in the dropdown to **style them as disabled**.

{% capture example %}
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Disabled link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>
{% endcapture %}
{% include example.html content=example %}

## 選單對齊 {#menu-alignment}

預設情況下，下拉選單自動位於其父級的上方的 100% 及貼齊左邊緣。將 `.dropdown-menu-right` 加到 `.dropdown-menu` 中可對齊右方邊緣。

{% capture callout %}
**小心！** 讚嘆 Popper.js 下拉選單會自動定位 (包含在導覽列的狀況除外).
{% endcapture %}
{% include callout.html content=callout type="info" %}

{% capture example %}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Right-aligned menu
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### 響應式對齊 {#responsive-alignment}

如果要使用響應式對齊，請增加 `data-display="static"` 屬性來禁用動態定位，並使用響應式變數類別。

要讓加上斷點或是更大的下拉選單靠 **右** 對齊，請加上 `.dropdown-menu{-sm|-md|-lg|-xl}-right`。

{% capture example %}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
    Left-aligned but right aligned when large screen
  </button>
  <div class="dropdown-menu dropdown-menu-lg-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

要讓加上斷點或是更大的下拉選單靠 **左** 對齊，請加上 `.dropdown-menu-right` 和 `.dropdown-menu{-sm|-md|-lg|-xl}-left`.

{% capture example %}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
    Right-aligned but left aligned when large screen
  </button>
  <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Note that you don't need to add a `data-display="static"` attribute to dropdown buttons in navbars, since Popper.js isn't used in navbars.

## 選單內容 {#menu-content}

### 表頭 {#header}

添加標題來標記下拉選單中的操作部分。

{% capture example %}
<div class="dropdown-menu">
  <h6 class="dropdown-header">Dropdown header</h6>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
</div>
{% endcapture %}
{% include example.html content=example %}

### 分隔線 {#dividers}

使用分隔符號來分隔選單中的群組。

{% capture example %}
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Separated link</a>
</div>
{% endcapture %}
{% include example.html content=example %}

### Text

Place any freeform text within a dropdown menu with text and use [spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/). Note that you'll likely need additional sizing styles to constrain the menu width.

{% capture example %}
<div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
  <p>
    Some example text that's free-flowing within the dropdown menu.
  </p>
  <p class="mb-0">
    And this is more example text.
  </p>
</div>
{% endcapture %}
{% include example.html content=example %}

### 表單 {#forms}

在下拉式選單中加入表單，並且使用 [margin 或 padding 通用類別]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) 調整所需要的空間。

{% capture example %}
<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="form-group">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<form class="dropdown-menu p-4">
  <div class="form-group">
    <label for="exampleDropdownFormEmail2">Email address</label>
    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
  </div>
  <div class="form-group">
    <label for="exampleDropdownFormPassword2">Password</label>
    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
  </div>
  <div class="form-group">
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="dropdownCheck2">
      <label class="form-check-label" for="dropdownCheck2">
        Remember me
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
{% endcapture %}
{% include example.html content=example %}

## 下拉選單的選項 {#dropdown-options}

使用 `data-offset` 或 `data-reference` 來改變下拉選單的位置。

{% capture example %}
<div class="d-flex">
  <div class="dropdown mr-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
      Offset
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Reference</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## 用法 {#usage}

通過資料屬性或 JavaScript，下拉選單插件透過切換父級按鈕上 `.show` 來切換隱藏內容（下拉選單）。 `data-toggle="dropdown"` 屬性相依於應用程式級別關閉下拉式功能表，因此始終使用它是一個好方法。

{% capture callout %}
在觸控功能的裝置上，打開一個下拉選單會加入 (`$.noop`) `mouseover`）給 `<body>` 元素的直接子元素。這肯定是怪異的手法來 [快速解決 iOS ](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html) 的問題，否則在下拉選單之外的任何地方點擊會無法觸發關閉下拉選單的事件。一旦下拉關閉，這些額外的事件就會被移除。
{% endcapture %}
{% include callout.html content=callout type="info" %}

### 透過資料屬性 {#via-data-attributes}

加入 `data-toggle="drown"` 至連結或按鈕來啟用切換下拉選單。

{% highlight html %}
<div class="dropdown">
  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown trigger
  </button>
  <div class="dropdown-menu" aria-labelledby="dLabel">
    ...
  </div>
</div>
{% endhighlight %}

### 透過 JavaScript {#via-javascript}

透過 JavaScript 來調用下拉選單：

{% highlight js %}
$('.dropdown-toggle').dropdown()
{% endhighlight %}

{% capture callout %}
##### `data-toggle="dropdown"` still required

無論是透過 JavaScript 調用您的下拉清單或使用 data-api， `data-toggle="dropdown"` 都需要在下拉選單的觸發器元素中顯示。
{% endcapture %}
{% include callout.html content=callout type="info" %}

### 選項 {#options}

可以透過資料屬性或 JavaScript 插件傳遞選項。對於資料屬性，將選項名稱加到 `data-` 上，如 `data-offset=""`。

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">名稱</th>
      <th style="width: 100px;">類型</th>
      <th style="width: 50px;">預設值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>offset</td>
      <td>number | string | function</td>
      <td>0</td>
      <td>
      下拉選單相對於其目標的偏移參考 Popper.js 的<a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">位移文件</a>。</td>
    </tr>
    <tr>
      <td>flip</td>
      <td>boolean</td>
      <td>true</td>
      <td>
      允許下拉選單重疊到其相關的元素上，更多資訊可參考 Popper.js 的<a href="https://popper.js.org/popper-documentation.html#modifiers..flip.enabled">觸發文件</a>.</td>
    </tr>
    <tr>
      <td>boundary</td>
      <td>string | element</td>
      <td>'scrollParent'</td>
      下拉菜單的溢出約束邊界。 接受'viewport'，'window'，'scrollParent'或HTMLElement引用（僅限JavaScript）的值。 有關更多信息，請參閱Popper.js的preventOverflow文檔。
      <td>下拉選單的溢出限制邊界。接受 <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>或是 HTMLElement 引入的值 (僅限 JavaScript)。更多資訊請參閱 Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">防止溢出文件</a>。</td>
    </tr>
    <tr>
      <td>reference</td>
      <td>string | element</td>
      <td>'toggle'</td>
      <td>下拉選單的參考元件。可接受 <code>'toggle'</code>, <code>'parent'</code> 或是 HTMLElement 引入的值。更多資訊請參閱 Popper.js's <a href="https://popper.js.org/popper-documentation.html#referenceObject">物件參考文件</a>。</td>
    </tr>
    <tr>
      <td>display</td>
      <td>string</td>
      <td>'dynamic'</td>
      <td>預設的情況下，我們使用 Popper.js 來動態定位，而在 <code>static</code> 狀態下禁用</td>
    </tr>
  </tbody>
</table>

#### 方法 {#methods}

請注意，當 `boundary` 被設置為 `'scrollParent'` 之外的任何值時，`position: static` 樣式套用於 `.dropdown` 的容器。

| 方法 | 描述 |
| --- | --- |
| `$().dropdown('toggle')` | 給予導覽列或分頁導覽使用切換下拉選單功能。 |
| `$().dropdown('show')` | 顯示給予導覽列或分頁導覽使用的下拉選單 |
| `$().dropdown('hide')` | 隱藏給予導覽列或分頁導覽使用的下拉選單 |
| `$().dropdown('update')` | 更新下拉選單元素的定位。 |
| `$().dropdown('dispose')` | 銷毀一個元素的下拉選單。 |

### 事件 {#events}

所有下拉選單事件在 `.dropdown-menu` 的父元素下觸發，並具有一個 `relatedTarget` 屬性，其值是切換的錨元素。`hide.bs.dropdown` 和 `hidden.bs.dropdown` 事件有一個 `clickEvent` 屬性 (僅當原始事件是 `click`)，它包含 click 事件的 Event Object。

| 事件 | 描述 |
| --- | --- |
| `show.bs.dropdown` | 這個事件在調用顯示時被立即觸發。|
| `shown.bs.dropdown` | 當這個物件可被看見時會觸發此事件(當完成 CSS 轉換後)。 |
| `hide.bs.dropdown` | 這個事件在調用隱藏時被立即觸發。 |
| `hidden.bs.dropdown`| 當這個物件隱藏後會觸發此事件(當完成 CSS 轉換後)。  |

{% highlight js %}
$('#myDropdown').on('show.bs.dropdown', function () {
  // do something…
})
{% endhighlight %}
