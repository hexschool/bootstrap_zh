---
layout: docs
title: 構建工具 (Build Tools)
description: 學習如何使用 Bootstrap 內建的 npm 腳本建立我們的文件、編譯原始程式碼、運行測試和更多。
group: getting-started
toc: true
---

## 工具設定 {#tooling-setup}

Boostrap 的構建系統採用 [NPM 腳本](https://docs.npmjs.com/misc/scripts) 。我們的 [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) 包含了方便框架工作的方法，包括編譯程式碼、運行測試和更多工作。

要使用我們的構建系統並在本地運行我們的文件，你需要一份 Boostrap 原始檔案的副本和 Node.js。遵循以下步驟，然後準備開始：

1. [下載和安裝 Node.js](https://nodejs.org/download/)，我們採用 Node.js 管理我們的從屬附件。
2. 進入至 `/bootstrap` 目錄然後運行 `npm install` 安裝我們在 [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) 中列出的相依套件。
3. [安裝 Ruby][install-ruby]，用 `gem install bundler` 安裝 [Bundler][gembundler]，最後運行 `bundle install`。這回安裝全部的 Ruby 相依套件，比如 Jekyll 和外掛程式。
  -**Windows 用戶。** 閱讀 [此指南](https://jekyllrb.com/docs/windows/)以讓 Jekyll 無問題的運行。

在完成上述步驟後，您將能夠運行命令列提供的各種指令。

[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[gembundler]: https://bundler.io/

## 使用 NPM 腳本 {#using-npm-scripts}

我們的 [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) 包含了以下的命令和任務：

| 任務 | 描述 |
| --- | --- |
| `npm run dist` | `npm run dist` 在編譯的檔案上創建 `/dist` 目錄。**使用 [Sass](https://sass-lang.com/)、[Autoprefixer]、[autoprefixer]和 [UglifyJS](https://github.com/mishoo/UglifyJS2)。**|
| `npm test` | 運行 `npm run dist` 以在本地運行測試。|
| `npm run docs` | 構建和測試 CSS、JavaScript ，透過 `npm run docs-serve` 在本地運行時使用的其他資源。 |

執行 `npm run` 來使用全部的 npm scripts.

## 自動增加前輟詞 {#autoprefixer}

Bootstrap 採用（我們的構建過程中內含的）[Autoprefixer][autoprefixer] 以便自動在構建時向某些 CSS 屬性增加前輟詞。自動增加前輟詞可讓我們每次編寫 CSS 時，無需採用第三版中用的那些 Sass mixins，這樣可以節省我們的時間。

我們在 GitHub 版本庫中的一份獨立檔案中保存了通過 Autoprefixer 支援的瀏覽器清單。預知明細，請參見 [/package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json)。

## 本地檔 {#local-documentation}

在本地運行我們的檔需要採用 Jekyll，一份具有適當靈活性的、提供如下工作的靜態網頁伺服器：基本工作包括  Markdown-based 編輯器的檔案、模版和更多。以下是如何啟動 Jekyll 的方法

1. 執行上述 [工具設定](#tooling-setup) 步驟以安裝 Jekyll（網站構建器）和用 `bundle install` 安裝其他 Ruby 相依套件。
2. 在 `/bootstrap` 目錄中，在命令列中執行 `npm run docs-serve`。
3. 在流覽器中打開 <http://localhost:9001>，然後大功告成。

閱讀 Jekyll 的 [文件](https://jekyllrb.com/docs/home/) 瞭解有關使用 Jekyll 的更多訊息。

## 故障排解 {#troubleshooting}

若安裝附件遇到問題，先解除安裝所有先前的版本（包含全域及區域）。然後，再次運行 `npm install`。

[autoprefixer]: https://github.com/postcss/autoprefixer
