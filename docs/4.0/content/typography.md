---
layout: docs
title: 文字排版 (Typography)
description: 用於 Bootstrap 文字排版的文件和範例，包括全域設定、標題、主體文本、列表和更多。
group: content
toc: true
---

## 全域設定

Bootstrap 設定基本的全域顯示、文字排版和連結格式。當需要更多的控制時，查看 [文本工具類型]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/typography/)。

- 為每個作業系統和設備選定最佳 `font-family` 的 [原生字體堆疊]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/#native-font-stack)。
- 為了獲得一個包容和易用的類型縮放，我們使用瀏覽器預設啟動 `font-size`（一般為16px）因此可在必要時自訂瀏覽器預設值。
- 使用`$font-family-base`、`$font-size-base`、 和 `$line-height-base`屬性作為 `<body>` 的文字排版基礎。
- `$link-color` 設定全域連結顏色並僅在 `:hover` 加上連結底線。
- 使用 `$body-bg` 以在 `<body>` 上設定一個`$body-bg`（默認為 `#fff`）。

可以在 `_reboot.scss` 中找到上述格式，且在 `_variables.scss` 定義了全域變數。確保在 `rem` 中設置 `$font-size-base`。

## 標題

全部的 HTML 標題從 `<h1>` 到 `<h6>` 均可用。

<table>
  <thead>
    <tr>
      <th>Heading</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {% markdown %}`<h1></h1>`{% endmarkdown %}
      </td>
      <td><span class="h1">h1. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {% markdown %}`<h2></h2>`{% endmarkdown %}
      </td>
      <td><span class="h2">h2. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {% markdown %}`<h3></h3>`{% endmarkdown %}
      </td>
      <td><span class="h3">h3. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {% markdown %}`<h4></h4>`{% endmarkdown %}
      </td>
      <td><span class="h4">h4. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {% markdown %}`<h5></h5>`{% endmarkdown %}
      </td>
      <td><span class="h5">h5. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {% markdown %}`<h6></h6>`{% endmarkdown %}
      </td>
      <td><span class="h6">h6. Bootstrap heading</span></td>
    </tr>
  </tbody>
</table>

{% highlight html %}
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
{% endhighlight %}

同時提供 `.h1` 到 `.h6` 的 Class，因為當你想匹配某一標題的字體樣式，但不能直接使用 HTML 元素時。

{% example html %}
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>
{% endexample %}

### 自定義標題

使用隨附的通用類別 Class 重現 Bootstrap 3.0 中的小二級標題文本。

<div class="bd-example">
  <span class="h3">
    Fancy display heading
    <small class="text-muted">With faded secondary text</small>
  </span>
</div>

{% highlight html %}
<h3>
  Fancy display heading
  <small class="text-muted">With faded secondary text</small>
</h3>
{% endhighlight %}

## 顯示標題

一般的標題元素設計在頁面內容繁多時發揮最佳作用。當你需要突出一個標題時，請考慮使用 **display heading** 以獲得更大、稍具有風格化的標題樣式。

<div class="bd-example bd-example-type">
  <table class="table">
    <tbody>
      <tr>
        <td><span class="display-1">Display 1</span></td>
      </tr>
      <tr>
      <td><span class="display-2">Display 2</span></td>
      </tr>
      <tr>
      <td><span class="display-3">Display 3</span></td>
      </tr>
      <tr>
      <td><span class="display-4">Display 4</span></td>
      </tr>
    </tbody>
  </table>
</div>

{% highlight html %}
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
{% endhighlight %}

## 前導主題

添加一個 `.lead`，讓一個段落突出。

{% example html %}
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
{% endexample %}

## 行內文本元素

使用行內 HTML5 元素的格式。

{% example html %}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
{% endexample %}

同時提供 `.mark` 和 `.small` 以便應用和 `<mark>` 與 `<small>` 一樣的樣式，同時避免標籤會帶來不需要的語義。

當以上未顯示時，請自行使用 HTML5 中的 `<b>` 和 `<i>`。`<b>` 旨在突出顯示單詞或短語，而不會增加重要性，而 `<i>` 主要用於語音，技術術語等。

## 文本通用類別

改變文字對齊、變換、樣式、字重和顏色透過 [text utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/typography/) 及 [color utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/).

## 縮寫

對縮寫和字母字首縮寫使用 HTML `<abbr>` 元素以 Hover 方式顯示縮寫的擴增內容。縮寫具有一個預設的底線並有一個説明游標，以便 Hover 和輔助性技術的用途提供額外的內容。

向一個縮寫中加入 `.initialism` 可將字體略為縮小。

{% example html %}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{% endexample %}

## 引用

用於在你的文件中引用來自于另一個來源的內容。使用 `<blockquote class="blockquote">` 包括在 <abbr title="HyperText Markup Language">HTML</abbr> 周圍。

{% example html %}
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endexample %}

### 引用來源

添加一個 `<footer class="blockquote-footer">` 以便識別來源。將來源的名稱包在 `<cite>` 中。

{% example html %}
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

### 反轉排版

右對齊內容的引用添加 `.blockquote-reverse`。

{% example html %}
<blockquote class="blockquote blockquote-reverse">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

## 列表

### 無樣式

刪除預設的 `list-style` 和列表專案上的左 margin（僅限直接子項）。**僅適用於直接子項列表**，這意味著你需要為任何巢狀的列表添加 Class。

{% example html %}
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{% endexample %}

### 行內

移除了列表編號並增加些許 margin，使用 `.list-inline` 和 `.list-inline-item`

{% example html %}
<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>
{% endexample %}

### 描述型列表對齊

通過使用我們網格系統定義的 Class 將項目和說明水平對齊。對於較長的術語，你可選擇性加一個 `.text-truncate` 來用 `...` 取代多餘內容。

{% example html %}
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd class="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
  </dd>
</dl>
{% endexample %}

## 響應式文字排版

*響應式文字排版* 指在一系列的 media query 中調整根項目的 `font-size` 縮放文本和元件。Bootstrap 不會自動採用這個選項，但若你需要，可輕易的加入這個選項。

如下是該選項的範例。選擇你想要的 `font-size` 和 media query 。

{% highlight scss %}
html {
  font-size: 1rem;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 1.4rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1.6rem;
  }
}
{% endhighlight %}
