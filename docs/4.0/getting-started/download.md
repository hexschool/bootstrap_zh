---
layout: docs
title: 下載 (Download)
description: 下載 Boostrap 以獲得編譯好的 CSS 和 JavaScript、原始程式碼或將其加入到您喜好的 npm、RubyGems 軟體套件管理系統中。
group: getting-started
toc: true
---

## Bootstrap CSS 和 JS

下載編譯完成可立即運用的 **Bootstrap 4{{ site.current_version}}** 加入到你的專案，這些包含了：

- 編譯好及壓縮後的 CSS 包 (看看 [檔案比較]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/contents/#comparison-of-css-files))
- 編譯好及壓縮的 JavaScript 套件

這些不包含文件、原始檔案、或任何選用的 JavaScript 相依套件 (jQuery 及 Popper.js)

<a href="{{ site.download.dist }}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Bootstrap');">下載 Bootstrap</a>

## 原始檔案

透過下載我們的 Sass、JavaScript 原始碼及文檔文件，使用自訂的方式編譯 Bootstrap，這些需要一些額外的工具：

- 編譯您的 CSS 的 Sass 編譯器（Libsass 或 Ruby Sass）。
- [Autoprefixer](https://github.com/postcss/autoprefixer)，用於 CSS 的前綴

如果您需要 [編譯工具]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/build-tools/#tooling-setup)，那麼它們被用於開發 Bootstrap 及文檔， 但可能不適合您自己的目的。


<a href="{{ site.download.source }}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Download 原始碼</a>

## BootstrapCDN

跳過下載並使用 [BootstrapCDN](https://www.bootstrapcdn.com/) 將 Boostrap 的 CSS 和 JS 加到你的專案中。

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
<script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

如果你使用我們編譯的 JavaScript，別忘了加入 jQuery 和 Popper.js 在這之前。

{% highlight html %}
<script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

## 套件管理工具

用受歡迎的套件管理工具將 Bootstrap 的 **原始檔** 拉入幾乎任何專案中。不論用的套件管理工具為何，Bootstrap 將需要一個 Sass 編譯器[Autoprefixer](https://github.com/postcss/autoprefixer)、以及[postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes) **以便獲得與我們的官方編譯版本一致的設置**。

### npm

用 [npm](https://www.npmjs.com/package/bootstrap) 將 Bootstrap 安裝到基於 Node.js 的應用程式中

{% highlight sh %}
npm install bootstrap@{{ site.current_version }}
{% endhighlight %}

`require('bootstrap')` 會將全部的 Bootstrap jQuery 外掛程式載入到 jQuery 物件。Bootstrap 模組本身匯出任何資訊。你可以透過頂層目錄下的 `/js/*.js` 檔案，手動將 Boostrap 的 jQuery 外掛程式獨立載入。

Bootstrap 的 `package.json` 包含了如下追加的中繼資料：

- `sass` - 前往 Bootstrap [Sass](http://sass-lang.com/) 原始檔案的路徑。
- `style` - 前往使用預設設置預先編譯的 Bootstrap 未壓縮 CSS 的路徑。

### RubyGems

通過向你的 [`Gemfile`](https://bundler.io/gemfile.html) 增加如下的命令列，使用 [Bundler](https://bundler.io/) （**推薦**）和 [RubyGems](https://rubygems.org/) 將 Bootstrap 安裝到你的 Ruby 應用程式中：

{% highlight ruby %}
gem 'bootstrap', '~> {{ site.current_ruby_version }}'
{% endhighlight %}

另外，若您沒有使用 Bundler，你可以通過如下的命令：

{% highlight sh %}
gem install bootstrap -v {{ site.current_ruby_version }}
{% endhighlight %}

[參見 gem 的 README](https://github.com/twbs/bootstrap-rubygem/blob/master/README.md)，以瞭解進一步的細節。

### Composer

你還可以使用 [Composer](https://getcomposer.org/) 安裝和管理 Bootstrap 的 Sass 和 JavaScript：

{% highlight sh %}
composer require twbs/bootstrap:{{ site.current_version }}
{% endhighlight %}

### NuGet

若你在 .NET 中進行開發，你還可以使用 [NuGet](https://www.nuget.org/) 安裝和管理 Bootstrap 的
[CSS](https://www.nuget.org/packages/bootstrap/) 或 [Sass](https://www.nuget.org/packages/bootstrap.sass/) 和 JavaScript：

{% highlight powershell %}
Install-Package bootstrap -Pre
{% endhighlight %}

{% highlight powershell %}
Install-Package bootstrap.sass -Pre
{% endhighlight %}

在 Bootstrap V4 有一個穩定版本前，需要 `-Pre`。
