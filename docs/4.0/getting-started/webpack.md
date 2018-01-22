---
layout: docs
title: Webpack
description: 瞭解如何使用 Webpack 3 將 Bootstrap 加入到你的專案中。
group: getting-started
toc: true
---

## 安裝 Bootstrap {#installing-bootstrap}

使用 Node.js npm [安裝 bootstrap]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/download/#npm) 。

## 匯入 JavaScript {#importing-javascript}

匯入 [Bootstrap's JavaScript]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/)
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

Bootstrap 取決於[jQuery](https://jquery.com/) 和 [Popper](https://popper.js.org/)，這些被定義為 `peerDependencies`，這意味著你將一定要記得加入到 `package.json` 使用 `npm install --save jquery popper.js`。


{% callout warning %}

請注意，如果您是 **單獨匯入插件**，還必須安裝  [exports-loader](https://github.com/webpack-contrib/exports-loader)
{% endcallout %}

## 匯入樣式 {#importing-styles}

### 匯入未編譯的 SASS {#importing-precompiled-sass}

啟用 Bootstrap 的全部潛力並按你的需求客製化 Bootstrap，使用原始檔案作為你編譯的部分內容。

首先，創建您自己的 `_custom.scss` 並使用它來覆蓋 [自訂義變數]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/options/)。 然後，使用你的主要sass 文件導入你的自定義變數，接下來再載入 Bootstrap：

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
      loader: 'sass-loader' // compiles Sass to CSS
    }]
  },
  ...
{% endhighlight %}

### 導入編譯好的 CSS {#importing-compiled-css}

另外，你可以將此程式碼加到你專案的 entry point，以使用 Bootstrap 現成的 CSS：

{% highlight js %}
import 'bootstrap/dist/css/bootstrap.min.css';
{% endhighlight %}

如果你不需要額外客制樣式，這種情況下不需要 `sass-loader` 只需要 [style-loader](https://github.com/webpack-contrib/style-loader) 和 [css-loader](https://github.com/webpack-contrib/css-loader

{% highlight js %}
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  ...
{% endhighlight %}
