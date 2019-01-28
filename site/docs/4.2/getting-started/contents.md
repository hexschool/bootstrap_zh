---
layout: docs
title: 內容 (Contents)
description: 展示 Bootstrap 所含的內容，包括我們預先編譯的內容和原始程式碼風格。記住，Bootstrap 的 JavaScript 外掛程式需要 jQuery。
group: getting-started
toc: true
---

## 預先編譯的 Bootstrap {#precompiled-bootstrap}

一旦被下載，將壓縮的檔案解壓，然後會看見類似於如下的訊息：

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

{% highlight plaintext %}
bootstrap/
├── css/
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   ├── bootstrap-reboot.min.css.map
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   └── bootstrap.min.css.map
└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.js.map
    ├── bootstrap.bundle.min.js
    ├── bootstrap.bundle.min.js.map
    ├── bootstrap.js
    ├── bootstrap.js.map
    ├── bootstrap.min.js
    └── bootstrap.min.js.map
{% endhighlight %}

這是用於快速加入幾乎任何網頁專案中的 Bootstrap (預先編譯好的基本形式)。我們提供了編譯好的 CSS 和 JS (`bootstrap.*`)，以及最小化的 CSS 和 JS(`bootstrap.min.*`)。提供結合特定的瀏覽器開發者工具使用的 CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap.*.map`)，包含 Js 檔案的版本 (`bootstrap.bundle.js` 和壓縮的 `bootstrap.bundle.min.js`) 內包含了 [Popper](https://popper.js.org/)，但不包含 [jQuery](https://jquery.com/)

### CSS 檔案 {#css-files}

Bootstrap 包含一些有用的選項用來編譯 CSS。

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">CSS files</th>
      <th scope="col">Layout</th>
      <th scope="col">Content</th>
      <th scope="col">Components</th>
      <th scope="col">Utilities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap.css</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap.min.css</code></div>
      </th>
      <td class="text-success">Included</td>
      <td class="text-success">Included</td>
      <td class="text-success">Included</td>
      <td class="text-success">Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap-grid.css</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap-grid.min.css</code></div>
      </th>
      <td><a class="text-warning" href="{{ site.baseurl }}/docs/{{ site.docs_version }}/layout/grid/">Only grid system</a></td>
      <td class="bg-light text-muted">Not included</td>
      <td class="bg-light text-muted">Not included</td>
      <td><a class="text-warning" href="{{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/">Only flex utilities</a></td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap-reboot.css</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap-reboot.min.css</code></div>
      </th>
      <td class="bg-light text-muted">Not included</td>
      <td><a class="text-warning" href="{{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/">Only Reboot</a></td>
      <td class="bg-light text-muted">Not included</td>
      <td class="bg-light text-muted">Not included</td>
    </tr>
  </tbody>
</table>

## JS 檔案 {#js-files}

同樣的，我們提供一些選項來編譯 JavaScript。

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">JS files</th>
      <th scope="col">Popper</th>
      <th scope="col">jQuery</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap.bundle.js</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap.bundle.min.js</code></div>
      </th>
      <td class="text-success">Included</td>
      <td class="bg-light text-muted">Not included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap.js</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap.min.js</code></div>
      </th>
      <td class="bg-light text-muted">Not included</td>
      <td class="bg-light text-muted">Not included</td>
    </tr>
  </tbody>
</table>

## Bootstrap 原始碼 {#bootstrap-source-code}

Bootstrap 原始程式碼下載包括預先編譯的 CSS 和 JavaScript，以及原始 Sass、JavaScript。以下目錄則是這些內容：

{% highlight plaintext %}
bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──docs/
│      └── 4.2/
│          └── examples/
├── js/
└── scss/
{% endhighlight %}

`scss/` 和 `js/` 屬於用於 CSS 和 JavaScript 的原始程式碼。`dist/` 檔案夾包括上述編譯好的全部內容。`site/docs/` 檔案夾包括了用於文檔的原始程式碼和 Bootstrap 使用的 `examples/`。除此之外，包含的任何其他檔案提供了套件、許可資訊和開發的支援。
