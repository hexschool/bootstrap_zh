---
layout: docs
title: Webpack
description: 瞭解如何使用 Webpack 2 將 Bootstrap 加入到你的專案中。
group: getting-started
toc: true
---

## 安裝 Bootstrap

使用 Node.js npm [安裝 bootstrap](/getting-started/download/#npm) 。

## 匯入 JavaScript

匯入 [Bootstrap's JavaScript](/getting-started/javascript/)
加入下面這行在你的 entry point (通常是 `index.js` 或 `app.js`)：

{% highlight js %}
import 'bootstrap';
{% endhighlight %}

另外，你可以在需要時 **獨立匯入插件** 。

{% highlight js %}
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
...
{% endhighlight %}

Bootstrap 取決於[jQuery](https://jquery.com/) 和 [Popper](https://popper.js.org/)，因此 npm 會在必要時為你安裝這些檔案。但這些檔案必須由 webpack 提供。將如下的程式碼加到你的 webpack 配置檔案中的 `plugins` 部分中：

{% highlight js %}
  plugins: [
    ...
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // In case you imported plugins individually, you must also require them here:
        Util: "exports-loader?Util!bootstrap/js/dist/util",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        ...
      })
    ...
  ]
{% endhighlight %}

{% callout warning %}

請注意，如果您是 **單獨匯入插件**，還必須安裝  [exports-loader](https://github.com/webpack-contrib/exports-loader)
{% endcallout %}

## 匯入樣式

### 匯入未編譯的 SASS

啟用 Bootstrap 的全部潛力並按你的需求客製化 Bootstrap，使用原始檔案作為你編譯的部分內容。

首先，新增你自己的 `_custom.scss` 並將其用於覆蓋 [內建的自訂變數](/getting-started/options/)。然後使用你主要的 sass 檔案以導入你的自訂變數，然後在導入 Bootstrap:

{% highlight scss %}
@import "custom";
@import "~bootstrap/scss/bootstrap";
{% endhighlight %}

要讓 Bootstrap 進行編譯，先確認你安裝並使用了必要的 loader：
[sass-loader](https://github.com/webpack-contrib/sass-loader)、 [postcss-loader](https://github.com/postcss/postcss-loader) 搭配 [Autoprefixer](https://github.com/postcss/autoprefixer#webpack) 及 [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes)。以最精簡的配置來說，你的 webpack 配置檔應包括此規則或類似的設置：

{% highlight js %}
  ...
  {
    test: /\.(scss)$/,
    use: [{
      loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader' // compiles SASS to CSS
    }]
  },
  ...
{% endhighlight %}

### 導入編譯好的 CSS

另外，你可以將此程式碼加到你專案的 entry point，以使用 Bootstrap 現成的 CSS：

{% highlight js %}
import 'bootstrap/dist/css/bootstrap.min.css';
{% endhighlight %}

在此情形中，你可以使用 `css` 現有的規則而無需對 webpack 配置做任何的修改。
