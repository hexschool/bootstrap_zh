---
layout: docs
title: Grid system 網格系統
description: 透過強大的行動優先 flexbox 網格來建立符合各種尺寸的網頁排版，包含十二欄系統、五個預設的響應式斷點、Sass 變數和 mixins、以及很多預定義的 class。
group: layout
toc: true
---

## 如何運作

Bootstrap 的網格系統使用一系列容器、行、和欄佈局和對齊內容。它用 [flexbox]((https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)) 建立，並且完全符合響應式。下面是網格系統如何整合的例子及深入瞭解。

**New to or unfamiliar with flexbox?** [Read this CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) for background, terminology, guidelines, and code snippets.

<div class="bd-example-row">
{% example html %}
<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
{% endexample %}
</div>


上面的例子使用我們的預定義網格類在小型、中型、大型、和超大型設備上建立了三個等寬度欄。通過父類 `.container` 使這些欄位於頁面中心。

步驟說明它如何工作：

- Containers: 容器提供對你的網站內容定新的方式。對於固定寬度使用 `.container`，對於滿版寬度使用 `.container-fluid`。
- Rows: 行是欄的水平群組，它確保你的欄正確的排成一行。我們在 `.row` 上使用負值 margin 方法確保你的內容在左側之下正確對齊。
- Content: 內容只能位於欄內，欄只能是行的直接子類。
- 感謝讚嘆 flexbox，在沒有設置寬度的網格欄位將自動以相同寬度佈局。例如，四個 `.col-sm` 將自動設為小中斷點的 25% 寬度。
- 欄的 Class 表示你希望使用的欄的數量（可能每行12欄）。所以如果你希望三個等寬度欄，你可以使用`.col-sm-4`。
- 欄寬度 `width` 以百分比設置，所以它們總是不固定的，並且大小與它們的母元素相關。
- 欄包含水平的 `padding`，以產生單個欄之間的溝槽，但是你可以通過 `.row` 上的 `.no-gutters` 從行中移除邊緣 `margin`，從欄中移除填充 `padding`。
- 共有五個網格等級，每個一個[responsive breakpoint]({{ site.baseurl }}/docs/{{ site.docs_version }}/layout/overview/#responsive-breakpoints): 所有中斷點（極小）、小、中、大、和極大 （(extra small), small, medium, large, and extra large）。
- 網格等級基於最小寬度，意味著它們適用於一個等級和所有高於它的等級（例如，`.col-sm-4` 適用於小型、中型、大型、和超大型設備）。
- 你可以對更多的語義標記使用預定義網格 class 或 Sass mixins。

瞭解限制和（flexbox 的 Bug）[bugs around flexbox](https://github.com/philipwalton/flexbugs)，像是（不能使
用某些 HTML 元素作為 flex 容器）[inability to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers).

覺得如何呢？很好，我們繼續在範例中全面瞭解。


## 網格選項

當 Bootstrap 使用`em` 或 `rem` 定義更多尺寸時，`px`用於網格中斷點和容器寬度。這是因為 viewport 寬度按 pixel 計算，並且不會隨（字體大小）[font size](https://drafts.csswg.org/mediaqueries-3/#units) 改變。

透過以下表格看 Bootstrap 如何在不同的裝置上運作。

<table class="table table-bordered table-striped table-responsive">
  <thead>
    <tr>
      <th></th>
      <th class="text-center">
        Extra small<br>
        <small>&lt;576px</small>
      </th>
      <th class="text-center">
        Small<br>
        <small>&ge;576px</small>
      </th>
      <th class="text-center">
        Medium<br>
        <small>&ge;768px</small>
      </th>
      <th class="text-center">
        Large<br>
        <small>&ge;992px</small>
      </th>
      <th class="text-center">
        Extra large<br>
        <small>&ge;1200px</small>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-nowrap" scope="row">Max container width</th>
      <td>None (auto)</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Class prefix</th>
      <td><code>.col-</code></td>
      <td><code>.col-sm-</code></td>
      <td><code>.col-md-</code></td>
      <td><code>.col-lg-</code></td>
      <td><code>.col-xl-</code></td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row"># of columns</th>
      <td colspan="5">12</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Gutter width</th>
      <td colspan="5">30px (15px on each side of a column)</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Nestable</th>
      <td colspan="5">Yes</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Column ordering</th>
      <td colspan="5">Yes</td>
    </tr>
  </tbody>
</table>

## 自動佈局的欄

使用特定中斷點欄類方便的確定欄的大小，而不是明確的寬度 class，例如`.col-sm-6`。

### 等寬

例如，有兩個網格佈局適用於每個裝置和 viewport，從 `xs` 到 `xl`。對每一個你需要的中斷點增加無單位的 class，每一欄將具有相同的寬度。


<div class="bd-example-row">
{% example html %}
<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
{% endexample %}
</div>

等寬度欄可以分為多個行，但是有一個[Safari flexbox bug](https://github.com/philipwalton/flexbugs#11-min-and-max-size-declarations-are-ignored-when-wrapping-flex-items) 它在沒有明確的`flex-basis` 或 `border`的情況下運行。

這些修復已經記錄在[reduced test case outside Bootstrap](https://output.jsbin.com/micohor)中，如果瀏覽器是最新的，這就不是必須的。


<div class="bd-example-row">
{% example html %}
<div class="container">
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="w-100"></div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{% endexample %}
</div>

### 設置一欄寬度

flexbox 網格欄的自動佈局中你可以設置欄的寬度，並且其左右欄將在其周圍自動調整大小。你也可以使用預定義的網格 Class (如下所示)、Grid mixins、或行內寬度。請注意，無論中間欄的寬度，其它欄都將重新調整大小。

<div class="bd-example-row">
{% example html %}
<div class="container">
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-6">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-5">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
{% endexample %}
</div>

### 可變寬度內容

基於欄內容的自然寬度，可使用 `col-{breakpoint}-auto` 調整欄的大小

<div class="bd-example-row">
{% example html %}
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
</div>
{% endexample %}
</div>

### 等寬度多行

如果你希望欄另外分隔另一行，可在中間加入`.w-100` 建立等寬度欄。通過將`.w-100` 與一些（響應式顯示工具）[responsive display utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/) 進行分隔。

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="w-100"></div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
{% endexample %}
</div>

## 響應式 classes

Bootstrap 的網格包含五個等級來建立不同的響應式排版。在極小、小、中、大、或極大設備上定制欄的大小來建立符合你需求的尺寸。

### 所有中斷點

對於從最小的設備到最大的設備都相同的網格，使用`.col` 和 `.col-*`。當你需要特定尺寸的欄時就需要指定特定規格；不然 `.col` 是可以隨意使用的。

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
<div class="row">
  <div class="col-8">col-8</div>
  <div class="col-4">col-4</div>
</div>
{% endexample %}
</div>

### 水平堆疊

通過使用 `.col-sm-*`，你可以在桌面（中型）設備上變得水平排版之前，建立堆疊在極小裝置上的網格排版。

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-sm-8">col-sm-8</div>
  <div class="col-sm-4">col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
</div>
{% endexample %}
</div>

### 混合和匹配

不想讓你的欄堆疊在某些網格階層上？依需求使用每一層不同的 class 組合。對於它如何運作，請見下面的例子。

<div class="bd-example-row">
{% example html %}
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="row">
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="row">
  <div class="col-6">.col-6</div>
  <div class="col-6">.col-6</div>
</div>
{% endexample %}
</div>

## 對齊

使用 flexbox 對齊垂直和水平。

### 垂直對齊

<div class="bd-example-row bd-example-row-flex-cols">
{% example html %}
<div class="container">
  <div class="row align-items-start">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
{% endexample %}
</div>

<div class="bd-example-row bd-example-row-flex-cols">
{% example html %}
<div class="container">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
    </div>
  </div>
</div>
{% endexample %}
</div>

### 水平對齊

<div class="bd-example-row">
{% example html %}
<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
</div>
{% endexample %}
</div>

### No gutters

通過`.no-gutters`，可以移除我們的預設網格 class 中欄位之間的 gutter。這將 `.row` 移除了負 `margin`，從所有子欄中移除了水平 `padding`。

這是建立這些樣式的原始程式碼。請注意，欄覆蓋僅限於第一層子欄，並且通過（屬性選擇器）[attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) 確定目標。雖然這產生了更具體的選擇器，通過（調整間隔工具）[spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/)可以進一步定制欄的 padding。

** 需要一個邊到邊的設計嗎？** 移除掉父層的 `.container` 或 `.container-fluid`。

{% highlight sass %}
.no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}
{% endhighlight %}

實際中它看上去是這樣的。請注意，你可以通過所有其它網格 class 繼續使用（包括欄寬度
、響應式階層、重新排序、還有其他）。

<div class="bd-example-row">
{% example html %}
<div class="row no-gutters">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
{% endexample %}
</div>

### 欄的外圍

如果 12 個以上的欄位於單獨一行內，每一組額外欄（作為一個單元）將換新的一行。


<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-9">.col-9</div>
  <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
  <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
</div>
{% endexample %}
</div>

### Column breaks

在 Flexbox 中將列拆分成新行需要一個小hack：當你想中斷你的欄到新的一行，可增加一個元素為 `width: 100%`。正常來說，通常這是通過多個`.row` 完成的，但此方法也是可行的。

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

  <!-- Force next columns to break to new line -->
  <div class="w-100"></div>

  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
</div>
{% endexample %}
</div>

除了在響應斷點處加入斷行，您可能需要重置位移量。 在 [響應式範例]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/) 中看到這一點。

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>

  <!-- Force next columns to break to new line at md breakpoint and up -->
  <div class="w-100 d-none d-md-block"></div>

  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
</div>
{% endexample %}
</div>

## 排序

### Order classes

使用 `.order-` class 來控制內容中 **可見的內容** 順序，這些 class 是響應式的，所以可以設定 `order` 在不同斷點上 (e.g., `.order-1.order-md-2`)，包含支援 `1` ~ `12` 及不同的中斷點。

<div class="bd-example-row">
{% example html %}
<div class="container">
  <div class="row">
    <div class="col">
      First, but unordered
    </div>
    <div class="col order-12">
      Second, but last
    </div>
    <div class="col order-1">
      Third, but first
    </div>
  </div>
</div>
{% endexample %}
</div>

還有一個響應式的 `.order-first`，可以透過 `order: -1` 來快速更改一個元素的順序。 這個 Class 也可以依據需要與編號的`.order-*` 混合使用。

<div class="bd-example-row">
{% example html %}
<div class="container">
  <div class="row">
    <div class="col">
      First, but unordered
    </div>
    <div class="col">
      Second, but unordered
    </div>
    <div class="col order-first">
      Third, but first
    </div>
  </div>
</div>
{% endexample %}
</div>

### 欄的推移

您可以通過兩種方式來位移欄 `.offset-` Class 和 [margin 通用類別]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/)。網格位移的空間與欄間格相符合，這種推移對於快速佈局可增加更多變化。

#### 位移類別

使用 `.offset-md-*` 向右移動列。 透過 `*` 增加欄的左邊距。 例如 `.offset-md-4` 增加四欄位移 `.col-md-4`。

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>
<div class="row">
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>
<div class="row">
  <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
</div>
{% endexample %}
</div>

除了增加在欄的位移，您也可以透過中斷點重置位移量。在 [網格範例]({{ site.baseurl }}/docs/{{ site.docs_version }}/examples/grid/) 中查看此操作。

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
  <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
</div>

<div class="row">
  <div class="col-sm-6 col-md-5 col-lg-6">.col.col-sm-6.col-md-5.col-lg-6</div>
  <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
</div>
{% endexample %}
</div>

#### Margin 通用類別

隨著第四版改用 flexbox，你可以透過 margin 的通用類別，像是 `.mr-auto` 將相鄰的欄位分離到另一邊。

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
</div>
<div class="row">
  <div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
  <div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
</div>
<div class="row">
  <div class="col-auto mr-auto">.col-auto .mr-auto</div>
  <div class="col-auto">.col-auto</div>
</div>
{% endexample %}
</div>

## 巢狀

為了將你的內容加入巢狀網格，在現有的 `.col-sm-*` 內增加新的 `.row` 和 `.col-sm-*`欄。巢狀列包括增加到 12 或更少的欄位（你不一定要使用所有 12 個可用的欄）。

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-sm-9">
    Level 1: .col-sm-9
    <div class="row">
      <div class="col-8 col-sm-6">
        Level 2: .col-8 .col-sm-6
      </div>
      <div class="col-4 col-sm-6">
        Level 2: .col-4 .col-sm-6
      </div>
    </div>
  </div>
</div>
{% endexample %}
</div>

## Sass mixins

當使用 Bootstrap Sass 檔時，你可以選擇使用 Sass 變數和 mixins 客製化、語義、和控制頁面配置。我們的預定義網格類使用這些相同的變數和 mixins 提供整套隨時可用的 class 用於響應式排版。


### 變數

變數和 sass map 決定了欄的數量、gutter 的寬度、和開始浮動欄的中斷點。我們使用它們產生上文記錄的定義網格 class ，以及用於下列的客製 mixins 類型。

{% highlight scss %}
$grid-columns:      12;
$grid-gutter-width: 30px;

$grid-breakpoints: (
  // Extra small screen / phone
  xs: 0,
  // Small screen / phone
  sm: 576px,
  // Medium screen / tablet
  md: 768px,
  // Large screen / desktop
  lg: 992px,
  // Extra large screen / wide desktop
  xl: 1200px
);

$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px
);
{% endhighlight %}

### Mixins

Mixins 與網格變數結合使用，可以對單個網格欄產生語意的 CSS。

{% highlight scss %}
// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();
@include make-col($size, $columns: $grid-columns);

// Get fancy by offsetting, or changing the sort order
@include make-col-offset($size, $columns: $grid-columns);
{% endhighlight %}

### 範例使用

你可以將變數修改你自己的自訂值，或者僅用預設值使用混合類型。下面是使用預設設置創建兩欄佈局的例子。

{% highlight scss %}
.example-container {
  width: 800px;
  @include make-container();
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}
{% endhighlight %}

{% example html %}
<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Main content</div>
    <div class="example-content-secondary">Secondary content</div>
  </div>
</div>
{% endexample %}

## 客製化網格

使用我們的內置網格 Sass 變數和 sass maps，可以完全的客製網格的 class。改變層的數量，media query 的參數，和容器寬度然後重新編譯。


### 欄與 gutters

通過 Sass 變數可以修改欄位數和它們的水平 padding 的數量（又稱為 gutters）。`$grid-columns` 用於產生每一個單獨欄的寬度（百分比），而 `$grid-gutter-width` 允許在該欄 gutterr 的 `padding-left`和`padding-right`上均勻分開的特定中斷點寬度。

{% highlight scss %}
$grid-columns: 12 !default;
$grid-gutter-width: 30px !default;
{% endhighlight %}

### Grid 階層

欄本身之外，你也可以自定義網格層的數量。如果你只想要四個網格層，你應當按照下文更新`$grid-breakpoints` 和 `$container-max-widths`。


{% highlight scss %}
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);
{% endhighlight %}

當對 Sass 變數或 sass map 做出任何改動時，你必須保存你的改動並重新編譯。這樣做將對欄寬度、排序、位移、及輸出新的一組網格 class。還將更新響應式元件及中斷點。確保在 `px`（不是 `rem`、`em` 或 `%`）中設置格線數值。
