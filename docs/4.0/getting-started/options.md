---
layout: docs
title: 自定義選項 (Options)
description: 用我們內建的自定義變數檔案對 Bootstrap 4 進行客製，並輕鬆的將全域 CSS 切換為新的的 Sass 變數。
group: getting-started
toc: true
---

## 自定義變數

Bootstrap 4 附帶一個 `_custom.scss` 用於覆蓋預設變數的 `/scss/_variables.scss` 檔案。將其中的相關程式碼複製貼上到 `_custom.scss` 檔案中並修改數值，重新編譯你的 Sass 以更新預設數值。**務必從覆蓋的數值中刪除 `!default`**。

比如，要更改 `background-color` 和 `<body>` 的 `color`，編寫如下的程式碼：

{% highlight scss %}
$body-bg:    $gray-900;
$body-color: $gray-600;
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

## 色彩

Bootstrap 許多的元件和通用類別都是透過這一系列在 Sass map 預定好的色彩，這些再 Sass 中可以依據規則快速產生一系列的集合。

### 全部色彩

Bootstrap 4中提供的所有顏色，都可以透過 `scss/_variables.scss` 的 Sass map 調整。在未來的次要版本中增加額外的陰影，像是我們已經包含 [灰階色票](#grays)。

<div class="row">
  {% for color in site.data.colors %}
    <div class="col-md-4">
      {% unless color.name == "white" or color.name == "gray" or color.name == "gray-dark" %}
        <div class="p-3 mb-3 swatch-{{ color.name }}">{{ color.name | capitalize }}</div>
      {% endunless %}
    </div>
  {% endfor %}
</div>

您可以在 Sass 中使用以下這些的方法：

{% highlight scss %}
// With variable
.alpha { color: $purple; }

// From the Sass map with our `color()` function
.beta { color: color("purple"); }
{% endhighlight %}


[color 通用類別 class]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/) 也可用於設置 `color` 和 `background-color`。

{% callout info %}
將來，我們的目標是為每種顏色的色調提供 Sass 地圖和變數，就像下面的灰階色彩一樣。
{% endcallout %}

### Theme colors


我們使用所有顏色的子集來創建一個較小的調色板，用於生成顏色的方案，也可以作為 Sass 變數和我們的 `scss/_variables.scss` 文件中的 Sass map。

<div class="row">
  {% for color in site.data.theme-colors %}
    <div class="col-md-4">
      <div class="p-3 mb-3 swatch-{{ color.name }}">{{ color.name | capitalize }}</div>
    </div>
  {% endfor %}
</div>

### 灰階

一個豐富的灰階變數和在 `scss/_variables.scss` 中的 Sass map，用來調整專案中一致的灰階。

<div class="row mb-3">
  <div class="col-md-4">
    {% for color in site.data.grays %}
      <div class="p-3 swatch-{{ color.name }}">{{ color.name | capitalize }}</div>
    {% endfor %}
  </div>
</div>

在 `_variables.scss` 中，您將找到我們的顏色變數和 Sass map。 以下是 `$colors` Sass map 的範例：

{% highlight scss %}
$colors: (
  red: $red,
  orange: $orange,
  yellow: $yellow,
  green: $green,
  teal: $teal,
  blue: $blue,
  pink: $pink,
  purple: $purple,
  white: $white,
  gray: $gray-600,
  gray-dark: $gray-900
) !default;
{% endhighlight %}

增加、移除或是修改 sass map 中的變數，來更新其他組件的使用方式。不過不是 _每一個_ 元件都適用這個 Sass map。在未來的更新會盡量改善這一點，在此之前，計畫使用 `${color}` 變數及這個 Sass map。
