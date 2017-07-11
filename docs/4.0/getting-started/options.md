---
layout: docs
title: 自定義選項
description: 用我們內建的自定義變數檔案對 Bootstrap 4 進行客製，並輕鬆的將全域 CSS 切換為新的的 Sass 變數。
group: getting-started
toc: true
---

## 自定義變數

Bootstrap 4 附帶一個 `_custom.scss` 用於覆蓋預設變數的 `/scss/_variables.scss` 檔案。將其中的相關程式碼複製貼上到 `_custom.scss` 檔案中並修改數值，重新編譯你的 Sass 以更新預設數值。**務必從覆蓋的數值中刪除 `!default`**。

比如，要更改 `background-color` 和 `<body>` 的 `color`，編寫如下的程式碼：

{% highlight scss %}
$body-bg:    $gray-dark;
$body-color: $gray-light;
{% endhighlight %}

對需要覆蓋的任何變數使用同樣的方法，包括如下的全域變數。

## 全域選項

用我們內建的變數檔案客製化 Bootstrap 4，並輕鬆地將全域 CSS 切換為新的 `$enable-*` Sass 變數。覆蓋一個變數的數值並在必要時用 `npm run test` 再編譯。

可以在 `_variables.scss` 檔案中找到關鍵的全域變數並修改這些變數。

| 變數                    | 值                             | 描述                                                                            |
| --------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| `$spacer`                   | `1rem` (預設), 或 > 0 的任何值 | 指定預設的 Spacer 數值以產生 [spacer utilities](/utilities/spacing/). |
| `$enable-rounded`           | `true` (預設) 或 `false`        | 啟用預先定義的 `border-radius` 樣式在各元件上                  |
| `$enable-shadows`           | `true` 或 `false` (預設)        | 啟用預先定義的 `box-shadow` 樣式在各元件上                        |
| `$enable-gradients`         | `true` 或 `false` (預設)        | 啟用預先定義的漸層透過 `background-image` 樣式在各元件上          |
| `$enable-transitions`       | `true` (預設) 或 `false`        | 啟用預先定義的 `transition` 樣式在各元件上                             |
| `$enable-hover-media-query` | `true` 或 `false` (預設)        | ...               |
| `$enable-grid-classes`      | `true` (預設) 或 `false`        | 啟用透過網格系統產生的 Class  (如: `.container`、`.row`、`.col-md-1`, 等)|
| `$enable-print-styles`      | `true` (預設) 或 `false`        | 啟用優化列印的樣式                               |
