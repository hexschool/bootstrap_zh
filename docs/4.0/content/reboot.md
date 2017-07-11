---
layout: docs
title: 重置
description: 針對單一檔案內 CSS 的特定元素重置樣式，重置以便 Bootstrap 準確且一致的建立樣式。
group: content
redirect_from: "/content/"
toc: true
---

## 方式

僅針對 HTML 語法與元素語法重置並建立規範。附加樣式僅能利用 class 建立。例如，我們利用重置部分 `<table>` 基礎樣式以利套用後續的 `.table`、`.table-bordered` 及其他選項。

以下是我們重置元件的規範和原因：

- 更新部分瀏覽器的預設值，在可變動的文字間距上使用 `rem`s 替代 `em`s。
- 避免 `margin-top`。垂直邊緣可能會發生重疊，產生無法預料的錯誤。更重要的是 `margin` 應該是單向、簡單的思維。
- 為了在設備之間之間輕鬆縮放，方塊元素應當在 `margin` 上採用 `rem`。
- 盡可能使用 `inherit` 將字體的屬性宣告保持在最小化。

## 頁面預設

為了提供最佳的頁面預設值而更新`<html>` 和 `<body>` 元素。具體而言：

- 在每個元素上設定全域性的 `box-sizing`，包括 `*:before` 和 `*:after` 以及 `border-box`。這確保元素物件 padding 或 border 不會超過宣告的寬度數值。
  - 不在 `<html>` 上宣告基礎 `font-size`，但假設字體尺寸為 16px (瀏覽器預設)。`font-size:` 在 `<body>` 上應用 1rem 以便於透過 media queries 時採用使用者的喜好與設定輕易設定響應式縮放。
- `<body>` 同時設定一個全域的 `font-family` 和 `line-height`。隨後某些元素形式會繼承這個設定以防止字體不一致。
- 安全起見在 `<body>` 宣告 `background-color` 預設值為 `#fff`。

## 原生字體堆疊

Bootstrap 4.0 已經放棄了預設網頁字體（Helvetica Neue, Helvetica, 和 Arial）並用 "native font stack" 取代了預設字體以在每個設備和作業系統上獲得最佳的閱讀呈現。閱讀更多的資訊 [原生字體堆疊 *Smashing Magazine* 文章中](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/)。

{% highlight sass %}
$font-family-sans-serif:
  // Safari for OS X and iOS (San Francisco)
  -apple-system,
  // Chrome >= 56 for OS X (San Francisco), Windows, Linux and Android
  system-ui,
  // Chrome < 56 for OS X (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  "Roboto",
  // Basic web fallback
  "Helvetica Neue", Arial, sans-serif !default;
{% endhighlight %}

`<body>` 應用 `font-family` 並在整個 Bootstrap 內自動繼承這個全域設定。要切換全域的 `font-family`，更新 `$font-family-base` 並重新編譯 Bootstrap。

## 標題和段落

所有標題元素像是 `<h1>` 及 `<p>` 已經刪除它們的 `margin-top`。標題元素具有 `margin-bottom: .5rem`，段落元素則是 `margin-bottom: 1rem` 使其具有更單純的間隔。

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

## 列表

刪除全部列表 `<ul>`、`<ol>` 和 `<dl>` 中的 `margin-top`，並設定為 `margin-bottom: 1rem`。巢狀列表沒有 `margin-bottom`。

<div class="bd-example">
{% markdown %}
* Lorem ipsum dolor sit amet
* Consectetur adipiscing elit
* Integer molestie lorem at massa
* Facilisis in pretium nisl aliquet
* Nulla volutpat aliquam velit
  * Phasellus iaculis neque
  * Purus sodales ultricies
  * Vestibulum laoreet porttitor sem
  * Ac tristique libero volutpat at
* Faucibus porta lacus fringilla vel
* Aenean sit amet erat nunc
* Eget porttitor lorem

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem
{% endmarkdown %}
</div>

為了更簡單的樣式、明確和更好的間隔，說明清單具有更新後的 `margin`、`<dd>` 重設 `margin-left` 為 `0` 並增加 `margin-bottom: .5rem`。`<dt>` 為 **粗體**。

<div class="bd-example">
{% markdown %}
<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>
{% endmarkdown %}
</div>

## 程式碼文字

`<pre>` 元素被重設以刪除其 `margin-top` 並在 `margin-bottom` 上使用 `rem`。

<div class="bd-example">
{% markdown %}
<pre>
.example-element {
  margin-bottom: 1rem;
}
</pre>
{% endmarkdown %}
</div>

## 表格

表格經過輕微調整以將並 `<caption>` 風格化、合併邊框並確保整體的 `text-align`。在[the `.table` class]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/tables/) 中有針對 borders、padding 和更多的額外變化。

<div class="bd-example">
  <table>
    <caption>
      This is an example table, and this is its caption to describe the contents.
    </caption>
    <thead>
      <tr>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </table>
</div>

## 表單

已經將若干形式元素重置，以獲得更簡單的基礎樣式。如下是部分最顯著的變化：

- `<fieldset>`s 沒有 borders、padding 或 margin 以便包覆獨立 input 和成組 inputs。
- `<legend>` 和 fieldsets 一樣，`<legend>` 已經被重新定義樣式以便顯示為類型的標題。
- `<label>` 被設定為`display: inline-block` 以便讓 `margin` 應用。
- 透過 Normalize 於 `<input>`s、`<select>`s、`<textarea>`s、 和 `<button>`s，重置刪除了他們的 `margin` 並同樣設定 `line-height: inherit`。
- 將 `<textarea>`s 修改為僅可調整垂直尺寸，因為調整水平寬度通常 "破壞" 了頁面配置。

上述變化如下範例。

<form class="bd-example">
  <fieldset>
    <legend>Example legend</legend>

    <p>
      <label for="input">Example input</label>
      <input type="text" id="input" placeholder="Example input">
    </p>

    <p>
      <label for="select">Example select</label>
      <select id="select">
        <option value="">Choose...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </p>

    <p>
      <label>
        <input type="checkbox" value="">
        Check this checkbox
      </label>
    </p>

    <p>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one is this and that
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        Option three is disabled
      </label>
    </p>

    <p>
      <label for="textarea">Example textarea</label>
      <textarea id="textarea" rows="3"></textarea>
    </p>

    <p>
      <label for="time">Example temporal</label>
      <input type="datetime-local" id="time">
    </p>

    <p>
      <label for="output">Example output</label>
      <output name="result" id="output">100</output>
    </p>

    <p>
      <button type="submit">Button submit</button>
      <input type="submit" value="Input submit button">
      <input type="button" value="Input button">
    </p>

    <p>
      <button type="submit" disabled>Button submit</button>
      <input type="submit" value="Input submit button" disabled>
      <input type="button" value="Input button" disabled>
    </p>
  </fieldset>
</form>

## 其他元素

### 地址

更新了 `<address>` 元素以便將瀏覽器的預設 `font-style` 由` italic` 重置為 `normal`。同時現在繼承了 `line-height` 並添加了 `margin-bottom: 1rem`。`<address>` 用於提供聯繫資訊。透過 `<br>` 來換一行。

<div class="bd-example">
  <address>
    <strong>Twitter, Inc.</strong><br>
    1355 Market St, Suite 900<br>
    San Francisco, CA 94103<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
  </address>

  <address>
    <strong>Full Name</strong><br>
    <a href="mailto:#">first.last@example.com</a>
  </address>
</div>

### Blockquote

Blockquotes 的預設 `margin` 為 `1em 40px`，因此我們將其重新設定為 `0 0 1rem` 以便更符合其他元素的設定。

<div class="bd-example">
  <blockquote class="blockquote">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</div>

### 行內元素

`<abbr>` 元素接受基本樣式以便在段落文字之間突出顯示。

<div class="bd-example">
  Nulla <abbr title="attribute">attr</abbr> vitae elit libero, a pharetra augue.
</div>

## HTML5 `[hidden]` 屬性

HTML 添加了 [一個名為 `[hidden]` 的新全域屬性](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden)，這是屬性的預設格式是 `display: none`。借鑒了 [PureCSS](https://purecss.io) 的一個想法，我們加入 `[hidden] { display: none !important; }` 改善了預設設定，以防止該屬性的 `display` 被意外覆蓋。雖然 IE10 不支援原生 `[hidden]`，我們在 CSS 中解決了這個問題。

{% highlight html %}
<input type="text" hidden>
{% endhighlight %}

{% callout warning %}
#### jQuery 的不相容性

`[hidden]` 不相容 jQuery's `$(...).hide()` 和 `$(...).show()` 的方式。這可能會在 jQuery 3 中修改，但我們不能坐視不理。因此，當前並不是特別將 `[hidden]` 優先於 `display` 的其他方法。
{% endcallout %}

若僅僅要切換某個元素的可視度，切換可視度的含義是不修改 `display`，且元素仍可影響文件排版，可使用[the `.invisible` class]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/invisible-content/) 來取代。

## 為優化觸擊的點擊延遲

傳統觸控式螢幕設備上的瀏覽器在 "輕擊" 結束之間的延遲約300ms。延遲是 手指/手寫筆 從螢幕上提起和 [點擊事件](https://developer.mozilla.org/en-US/docs/Web/Events/click) 被觸發之間的時間。延遲是瀏覽器在在第一次 "輕擊" 後不提前觸發事件或連結為前提下正確處理，這是 "按兩下縮放" 手勢所必需，但延遲可能讓你的網站有遲緩和回應不迅速的感覺。

大部分行動瀏覽器自動為使用 `width=device-width` 屬性作為[responsive meta tag]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/introduction/#responsive-meta-tag) 組成部分的網站優化 300ms 的延遲時間（同時也會為通過 `user-scalable=no` 等方式禁用縮放的網站優化延遲，雖然由於可訪問性和易用性等原因強烈不推薦這種做法）。最顯著的例外是 Windows Phone 8.1 上的 IE11 以及 [iOS 9.3之前的](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/) iOS Safari（以及任何其他基於 iOS 網頁的瀏覽器）。

在啟動觸擊的 筆記本/桌面 設備上，IE11 和 Microsoft Edge 是當前唯一具有 "按兩下縮放" 功能的瀏覽器。由於全部的桌面瀏覽器忽略 [responsive meta tag](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)，因此使用 `width=device-width` 不會對 300 秒的延遲產生任何影響。

為了在桌面的 IE11 和 Microsoft Edge 以及在 Windows Phone 8.1 上解決這個問題，Bootstrap 在各種互動元素上（比如按鍵和連結上）使用了 [`touch-action:manipulation` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action) 。此屬性基本在上述元素上禁用了按兩下功能，因此消除了 300ms 的延遲。

對於舊版的 iOS 版本(9.3以前版本)，建議的方式是使用[FastClick](https://github.com/ftlabs/fastclick) 等追加的語法消除延遲。

欲知進一步的明細，參見相容性表瞭解 [為觸控式螢幕而減少 300ms 的延遲時間](https://patrickhlauke.github.io/touch/tests/results/#suppressing-300ms-delay)。
