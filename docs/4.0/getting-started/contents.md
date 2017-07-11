---
layout: docs
title: Contents
description: 展示 Bootstrap 所含的內容，包括我們預先編譯的內容和原始程式碼風格。記住，Bootstrap 的 JavaScript 外掛程式需要 jQuery。
group: getting-started
toc: true
---

## 預先編譯的 Bootstrap

一旦被下載，將壓縮的檔案解壓，然後會看見類似於如下的訊息：

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too. -->

{% highlight plaintext %}
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   └── bootstrap.min.css.map
└── js/
    ├── bootstrap.js
    └── bootstrap.min.js
{% endhighlight %}

這是用於快速加入幾乎任何網頁專案中的 Bootstrap (預先編譯好的基本形式)。我們提供了編譯好的 CSS 和 JS (`bootstrap.*`)，以及最小化的 CSS 和 JS(`bootstrap.min.*`)。提供結合特定的瀏覽器開發者工具使用的 CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap.*.map`)

## Bootstrap 原始碼

Bootstrap 原始程式碼下載包括預先編譯的 CSS 和 JavaScript，以及原始 Sass、JavaScript。以下目錄則是這些內容：

{% highlight plaintext %}
bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── docs/
│   └── examples/
├── js/
└── scss/
{% endhighlight %}

`scss/` 和 `js/` 屬於用於 CSS 和 JavaScript 的原始程式碼。`dist/` 檔案夾包括上述編譯好的全部內容。`docs/` 檔案夾包括了用於文檔的原始程式碼和 Bootstrap 使用的 `examples/`。除此之外，包含的任何其他檔案提供了套件、許可資訊和開發的支援。
