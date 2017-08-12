---
layout: docs
title: 卡片
description: Bootstrap's 卡片提供了一個具有多種變體和具有選擇性的擴展容器。
group: components
toc: true
---

## 關於

**卡片** 是一個靈活可擴展的內容容器。包含頁眉和頁腳的選項、各種彈性內容、情境顏色和強大的顯示選項。

如果你熟悉 Bootstrap 3，卡片取代了舊的 panels、wells、thumbnails(以上為原文名稱)，類似的功能已經都整合到卡片內了。

## 範例

卡片構建時盡可能少一些標記和樣式，但仍然可以提供許多的控制項和自定義。使用 flexbox 構建，它們可以使對齊更方便並且與其它 Bootstrap 元件良好混合。

以下是具有混合內容和固定寬度的基本卡的範例。卡片如果沒有固定的寬度，那麼他們將自然填充其父元素的全部寬度。 這可以透過我們的各種[尺寸選項](#sizing) 輕鬆調整。

{% example html %}
<div class="card" style="width: 20rem;">
  <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

## 內容設計

卡支援各種內容，包括圖像、文本、清單組、連結等。以下是支援的範例。

### 塊狀

卡的塊狀構建是 `.card-block`。當你需要在一個卡片內含 padding 部分就可以使用它。

{% example html %}
<div class="card">
  <div class="card-body">
    This is some text within a card block.
  </div>
</div>
{% endexample %}

### 標題 文本 連結

卡片標題的使用時在 `<h*>` 標籤中添加 `.card-title`。 同樣，將 `.card-link` 添加到 `<a>` 標籤中實現連結的添加。

透過在 `<h*>` 標籤中添加一個 `.card-subtitle` 來使用次標題。 如果 `.card-title` 和 `.card-subtitle` 放在 `.card-block` 中，那麼卡片標題和次標題就很好地對齊了。

{% example html %}
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
{% endexample %}

### 圖片

`.card-img-top` 將圖像放在卡片頂部。 使用 `.card-text` 可以將文字內容可以添加到卡片中。 `.card-text` 中的文本也可以用標準的 HTML 標籤設計樣式。


{% example html %}
<div class="card" style="width: 20rem;">
  <img class="card-img-top" data-src="holder.js/100px180/?text=Image cap" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
{% endexample %}

### 列表群組

建立一個包含內容的清單卡片。

{% example html %}
<div class="card" style="width: 20rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
{% endexample %}

### 控制項

混合並搭配多個內容形式，用來創建你所需要的卡片。以下來說是圖像風格、塊狀、文字風格以及清單在一個固定寬度的卡片中。

{% example html %}
<div class="card" style="width: 20rem;">
  <img class="card-img-top" data-src="holder.js/100px180/?text=Image cap" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
{% endexample %}

### 頁眉和頁腳

在卡片內加入選擇性的頁眉或頁腳。

{% example html %}
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

可透過在 `<h*>` 元素中添加 `.card-header ` 加入卡片頭的樣式。

{% example html %}
<div class="card">
  <h4 class="card-header">Featured</h4>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
{% endexample %}

## 縮放

卡片假設沒有特定的 `width`，那麼除非另有聲明，否則它們的寬度將是100％。您可以根據需求自訂 CSS、網格系統、Sass mixins grid 或通用類別來調整。

### 使用網格標記

使用網格，根據需求按行與列包裝卡片。

{% example html %}
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
{% endexample %}

### 使用通用類別

使用我們的幾個 [可調整大小的通用類別][available sizing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/sizing/) 來設置卡片的寬度。

{% example html %}
<div class="card w-75">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>

<div class="card w-50">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
{% endexample %}

### 使用客製化 CSS

在樣式表中使用自訂 CSS 或使用行內樣式設置寬度。

{% example html %}
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

## 文字對齊

您可以透過我們的 [文本對齊 Class]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/typography/#text-alignment) 更改任何卡片的整體或特定部分的文本對齊方式）。


{% example html %}
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-center" style="width: 20rem;">
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-right" style="width: 20rem;">
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

## 導覽

使用 Bootstrap [導覽元件]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/navs/) 向卡片的標題（或塊）添加一些導覽。

{% example html %}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{% endexample %}

## 圖像

卡片包含一些選項用來搭配圖像。選擇在卡片的任一端附加 "image caps"，用卡片內容覆蓋圖像 (像是背景)，或者只是將圖像嵌入到卡中。

### Image caps

像是頁眉或是頁腳，卡片可以使用 Image caps 在卡片頂部或是底部。

{% example html %}
<div class="card mb-3">
  <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <img class="card-img-bottom" data-src="holder.js/100px180/" alt="Card image cap">
</div>
{% endexample %}

### 圖像覆蓋

將圖像轉換為卡片背景，並疊加卡片的文字。 根據圖像，你可以選擇是否需要額外的樣式或通用類別。


{% example html %}
<div class="card bg-dark text-white">
  <img class="card-img" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="Card image">
  <div class="card-img-overlay">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
{% endexample %}

## 卡片樣式

包括用於客制其背景、邊框和顏色的各種選項。

### 背景與顏色

使用 [文字與背景通用類別]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/)來改變卡片的顯示顏色。

{% example html %}
{% for color in site.data.theme-colors %}
<div class="card{% unless color.name == "light" %} text-white{% endunless %} bg-{{ color.name }} mb-3" style="max-width: 20rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">{{ color.name | capitalize }} card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>{% endfor %}
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

### 框線

使用 [框線通用類別]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/borders/) 來改變卡片的 `border-color`。也能設置 `.text-{color}` class 在父層的 `.card`，或者是卡片的顯示內容上。

{% example html %}
{% for color in site.data.theme-colors %}
<div class="card border-{{ color.name }} mb-3" style="max-width: 20rem;">
  <div class="card-header">Header</div>
  <div class="card-body{% unless color.name == "light" %} text-{{ color.name }}{% endunless %}">
    <h4 class="card-title">{{ color.name | capitalize }} card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>{% endfor %}
{% endexample %}

### Mixins 通用類別

也能夠改卡片頁首及頁腳的框線，也能使用 `.bg-transparent` 移除背景顏色。

{% example html %}
<div class="card border-success mb-3" style="max-width: 20rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h4 class="card-title">Success card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>
{% endexample %}

## 卡片排版

Bootstrap除了對卡片內的內容進行設計外，還包括一些卡片佈置的選項。目前 **這些排版還沒包含響應式**。

### 卡片群組

將多個卡片和成為一個群組，他們具有相同寬度和高度的列。卡片群組使用 `display: flex;` 來實現他們一致的尺寸。


{% example html %}
<div class="card-group">
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
{% endexample %}

當使用帶頁腳的卡片群組時，他們的內容會自動對在同一線上。

{% example html %}
<div class="card-group">
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
{% endexample %}

### 卡片疊

需要一套互不相連但寬度和高度相同的卡片？使用卡片疊。


{% example html %}
<div class="card-deck">
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px200/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px200/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px200/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
{% endexample %}

就像卡片群組一樣，卡片疊上的卡片頁腳會自動對在同一條線上。


{% example html %}
<div class="card-deck">
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
{% endexample %}

### 卡片欄

將它們包在 `.card-columns` 中，可以將卡片像 [Masonry](http://masonry.desandro.com) 那樣的瀑布式排列。卡片是使用 CSS `column` 屬性而不是 flexbox 來構建，更便於對齊。排列是從上到下、從左到右。

**當心** 您的卡列的用處可能會有所不同。為了防止卡突破欄，我們必須將它們設置為 `display: inline-block` 當 `column-break-inside: avoid` 這個解決方案未生效時。

{% example html %}
<div class="card-columns">
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px160/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title that wraps to a new line</h4>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px160/" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card bg-primary p-3 text-center">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
      <footer class="blockquote-footer">
        <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img" data-src="holder.js/100px260/" alt="Card image">
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
{% endexample %}

卡欄也可以通過一些附加程式碼進行擴展和客制。 下面的是 `.card-columns` 的擴展，與我們使用的 CSS 欄使用相同的 CSS，這樣可以調整生成的欄位數。


{% highlight scss %}
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}
{% endhighlight %}
