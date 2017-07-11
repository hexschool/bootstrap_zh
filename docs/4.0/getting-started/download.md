---
layout: docs
title: 下載
description: 下載 Boostrap 以獲得編譯好的 CSS 和 JavaScript、原始程式碼或將其加入到您喜好的 npm、bower、RubyGems 軟體套件管理系統中。
group: getting-started
toc: true
---

## Bootstrap CSS 和 JS

**下載 Boostrap 現成的程式碼以輕易加入到你的專案中。** 包括各種 CSS 套件編譯好且壓縮的版本（預設、僅有網格或僅有重置）以及 JavaScript 插件。不含文件或原始程式碼。

**當前版本:** v{{ site.current_version}}

<a href="{{ site.download.dist }}" class="btn btn-bd-purple" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Bootstrap');">下載 Bootstrap</a>

## 原始檔案

**想用你的專案編譯 Bootstrap？** 選擇此選項下載我們的 Sass、JavaScript 以及文檔。需要一個 Sass 編譯器、[Autoprefixer](https://github.com/postcss/autoprefixer)、 [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes) 以及 [some setup]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/build-tools/#tooling-setup)。

<a href="{{ site.download.source }}" class="btn btn-bd-purple" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Download 原始碼</a>

## Bootstrap CDN

跳過下載並使用 Bootstrap CDN 將 Boostrap 的 CSS 和 JS 加到你的專案中。


{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
<script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

## 套件管理工具

用受歡迎的套件管理工具將 Bootstrap 的 **原始檔** 拉入幾乎任何專案中。不論用的套件管理工具為何，Bootstrap 將需要一個 Sass 編譯器[Autoprefixer](https://github.com/postcss/autoprefixer)、以及[postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes) **以便獲得與我們的官方編譯版本一致的設置**。

### npm

用 [npm](https://www.npmjs.com/package/bootstrap) 將 Bootstrap 安裝到基於 Node.js 的應用程式中

{% highlight bash %}
npm install bootstrap@{{ site.current_version }}
{% endhighlight %}

`require('bootstrap')` 會將全部的 Bootstrap jQuery 外掛程式載入到 jQuery 物件。Bootstrap 模組本身匯出任何資訊。你可以透過頂層目錄下的 `/js/*.js` 檔案，手動將 Boostrap 的 jQuery 外掛程式獨立載入。

Bootstrap 的 `package.json` 包含了如下追加的中繼資料：

- `sass` - 前往 Bootstrap [Sass](http://sass-lang.com/) 原始檔案的路徑。
- `style` - 前往使用預設設置預先編譯的 Bootstrap 未壓縮 CSS 的路徑。

### RubyGems

通過向你的 [`Gemfile`](https://bundler.io/gemfile.html) 增加如下的命令列，使用 [Bundler](https://bundler.io/) （**推薦**）和 [RubyGems](https://rubygems.org/) 將 Bootstrap 安裝到你的 Ruby 應用程式中：

{% highlight ruby %}
gem 'bootstrap', '~> 4.0.0.alpha6'
{% endhighlight %}

另外，若您沒有使用 Bundler，你可以通過如下的命令：

{% highlight bash %}
gem install bootstrap -v 4.0.0.alpha6
{% endhighlight %}

[參見 gem 的 README](https://github.com/twbs/bootstrap-rubygem/blob/master/README.md)，以瞭解進一步的細節。

### Composer

你還可以使用 [Composer](https://getcomposer.org) 安裝和管理 Bootstrap 的 Sass 和 JavaScript：

{% highlight bash %}
composer require twbs/bootstrap:{{ site.current_version }}
{% endhighlight %}

### Bower

使用 [Bower](https://bower.io) 安裝和管理 Bootstrap 的 Sass 和 JavaScrpit。

{% highlight bash %}
bower install bootstrap#v{{ site.current_version }}
{% endhighlight %}

### NuGet

若你在 .NET 中進行開發，你還可以使用 [NuGet](https://www.nuget.org) 安裝和管理 Bootstrap 的
[CSS](https://www.nuget.org/packages/bootstrap/) 或 [Sass](https://www.nuget.org/packages/bootstrap.sass/) 和 JavaScript：

{% highlight powershell %}
Install-Package bootstrap -Pre
{% endhighlight %}

{% highlight powershell %}
Install-Package bootstrap.sass -Pre
{% endhighlight %}

在 Bootstrap V4 有一個穩定版本前，需要 `-Pre`。
