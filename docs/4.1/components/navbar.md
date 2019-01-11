---
layout: docs
title: 導覽列 (Navbar)
description: Bootstrap 導覽列的文件與範例，包含產品標記、導覽以及包含折疊插件。
group: components
toc: true
---

## 如何運作 {#how-it-works}

在開始使用導覽列需要知道的事。

- 導覽列需要在外方使用 `.navbar`，並透過 `.navbar-expand{-sm|-md|-lg|-xl}` 給予響應式的折疊以及使用 [color scheme](#color-schemes) class。
- 導覽列預設的內容寬度是浮動的，使用 [optional containers](#containers) 來限制水平寬度。
- 使用 [spacing]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) 及 [flex]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) 通用類別來控制物件在導覽列的間隔及對齊。
- 導覽列預設是響應式的，在修改上也很容易。響應式行為會使用折疊的 JavaScript 插件。
- 預設情況下，列印時 Navbar 是隱藏的，如果需要列印它可以加入 `.d-print` 在 `.navbar` 上，查看 [display]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/) 的通用類別。
- 使用 `<nav>` 元素確保親和性，或者如果使用更通用的元素，如 `<div>`，在導覽列中添加一個 `role="navigation"` ，為使用者的輔助技術明確標識為導覽區域。

請閱讀範例和一些支援的子組件清單。

## 支援內容 {#supported-content}

導覽列支援一些組件，可從下列作選擇。

- `.navbar-brand` 為您的公司，產品或專案名稱。
- `.navbar-nav` 提供完整的高和輕便的導航（包括對下拉清單的支持）。
- `.navbar-toggler` 用於我們的折疊插件和其他 [navigation toggling](#responsive-behaviors) 行為。
- `.form-inline` 用於任何表單控制元件和操作。
- `.navbar-text` 用於垂直居中的文本字串。
- `.collapse.navbar-collapse` 用於外層中斷點群組和隱藏導覽列內容。

以下是一個包含子元件的範例，包括在一個自動折疊在 `lg`（大）中斷點處的響應式導覽列。

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

本範例使用 [color]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/) (`bg-light`) 和 [spacing]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) (`my-2`, `my-lg-0`, `mr-sm-0`, `my-sm-0`) 通用類別。

### 品牌 {#brand}

`.navbar-brand` 可以應用於大多數元素，但對錨最有效，因為某些元素可能需要通用類別 Class 或自訂樣式。


{% capture example %}
<!-- As a link -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
</nav>

<!-- As a heading -->
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Navbar</span>
</nav>
{% endcapture %}
{% include example.html content=example %}


圖像增加 `.navbar-brand`，可能的話需要加入一些自訂樣式或通用類別 Class 來調整適當的尺寸，以下是一些範例。


{% capture example %}
<!-- Just an image -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="{{ site.baseurl }}/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
  </a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<!-- Image and text -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="{{ site.baseurl }}/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Bootstrap
  </a>
</nav>
{% endcapture %}
{% include example.html content=example %}

### 導覽 {#nav}

導覽的連結建立在我們的 `.nav` 選項上，並使用專屬的 Class 並且需要使用 [toggler classes](#toggler) 在響應示中作切換。 **在導覽列中的導覽元件，也將佔用更多的水平空間**，以保持您的導覽列內容安全對齊。

活動狀態 - 用 `.active` - 表示當前頁面。可以用於 `.nav-link` 或 `.nav-item`。

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

如果你喜歡，你可以完全避免使用列表的方法。


{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

您還可以在導覽列的導覽元件使用下拉式選單。 下拉式選單需要一個包裝元素進行定位，請確保為 `.nav-item` 和 `.nav-link` 使用單獨及巢狀的元素，如下所示。


{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

### 表單 {#forms}

在導覽列中放置各種表單控制元件，這是透過 `.form-inline` 水平放置的表單。

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
{% endcapture %}
{% include example.html content=example %}

`.navbar` 中的直接子元素使用 flex 排版，預設為 `justify-content: between`。 根據需要使用其他 [flex utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) 來調整此行為。

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">Navbar</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
{% endcapture %}
{% include example.html content=example %}

input 群組也可以：

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </form>
</nav>
{% endcapture %}
{% include example.html content=example %}

部分導覽列表單需要各種按鈕。可以使用通用類別 Class 來作垂直對齊各種元素。


{% capture example %}
<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <button class="btn btn-outline-success" type="button">Main button</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
  </form>
</nav>
{% endcapture %}
{% include example.html content=example %}

### 文字 {#text}

導覽列可以在 `.navbar-text` 包含一些文本。 該 class 調整著文本字串的垂直對齊和水平間距。

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <span class="navbar-text">
    Navbar text with an inline element
  </span>
</nav>
{% endcapture %}
{% include example.html content=example %}

根據需要與其他元件和通用類別混合使用。

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

## 顏色方案 {#color-schemes}

由於主題 class 和 `background-color` 通用類別 class 的結合，主題化導覽列從未如此簡單。 從 `.navbar-light` 選用淺色背景顏色，或者 `.navbar-dark` 用於深色背景顏色。 然後，使用 `.bg-*` 通用類別自訂。

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</div>

{% highlight html %}
<nav class="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-dark bg-primary">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <!-- Navbar content -->
</nav>
{% endhighlight %}

## 容器 {#containers}

雖然不是必需的，但您可以將導覽列包裹在 `.container` 中，將其放置在頁面中央或內容的中間 [固定或靜態於頂的導覽列](#定位) 位置。


{% capture example %}
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}

當 `.container` 在您的導覽列中時，其水平 padding 在低於指定的 `.navbar-expand{-sm|-md|-lg|-xl}` 中斷點處被移除。這確保了當您的導覽列折疊時，不會產生多餘的 padding。

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

## 定位 {#placement}

使用定位通用類別將導覽列放置在非靜態位置。從固定在頂部、固定在底部或 黏(stickied) 在頂部中選擇。 **請注意，`position: sticky`用於`.sticky-top` [這並非在每個流覽器都完全支持](https://caniuse.com/#feat=css-sticky)**

使用我們的 [定位通用類別]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/position/) 將導覽列放置在非靜態位置。選擇固定到頂部、固定到底部、或粘貼到頂部（當頁面滾動至物件位置時，會固定在頂部並停留在那裡）。 固定的導覽列使用`position：fixed'，這意味著從 DOM 的正常定位中被拉出，並且可能需要自定義CSS（例如 `<body>` 上的 `padding-top`），以防止與其他元素重疊。

還要注意 **`.sticky-top` 使用 `position：sticky`，在每個瀏覽器中都[不完全支持](https://caniuse.com/#feat=css-sticky)**。

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Default</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="navbar fixed-top navbar-light bg-light">
  <a class="navbar-brand" href="#">Fixed top</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="navbar fixed-bottom navbar-light bg-light">
  <a class="navbar-brand" href="#">Fixed bottom</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="navbar sticky-top navbar-light bg-light">
  <a class="navbar-brand" href="#">Sticky top</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

## 響應式行為 {#responsive-behaviors}

按鈕後面的內容折疊時，導覽列可以使用 `.navbar-toggler`、`.navbar-collapse` 和 `.navbar-expand{-sm|-md|-lg|-xl}` 的 class 來改變。 結合其他通用類別，您可以選擇顯示或隱藏特定元素。

對於不需要折疊的導覽列，在導覽列中加入 `.navbar-expand`。對於總是折疊的導覽列，不要加任何 `.navbar-expand` class。

### 切換元素 {#toggler}

導覽列切換元素預設情況下對齊左邊，但如果它們遵循像導覽列 `.navbar-brand` 這樣的同層級元素，它們將自動和最右邊對齊。 反轉您的品牌標記將對調切換元素的位置。以下是不同切換元素樣式的範例。

在最小中斷點沒有 `.navbar-brand` 的顯示：


{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Hidden brand</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

左側有一個品牌名稱，右邊是切換元素。

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

左側有一個切換元素，右邊是品牌名稱：

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Navbar</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

### 外部內容 {#external-content}

想使用折疊插件來觸發頁面上某個地方的隱藏內容。 因為插件當 `id` 和 `data-target` 匹配時有效，這將很容易完成！


{% capture example %}
<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}
