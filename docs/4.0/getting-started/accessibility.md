---
layout: docs
title: 網頁親和性 (Accessibility)
description: 簡要概述 Bootstrap 創建親和性內容的特性和限制
group: getting-started
toc: true
---

Bootstrap提 供了一個由現成風格、佈局工具和互動元件構成的易用框架，允許開發者創建具有視覺吸引力、功能豐富且具網頁親和性的網站和應用。

## 概述和限制

用 Bootstrap 創建任何項目的整體親和性很大部分上取決於作者的標記、額外的樣式及所包含的腳本。然而，用 Bootstrap 創建執行 [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0](https://www.w3.org/TR/WCAG20/) (A/AA/AAA), [Section 508](https://www.section508.gov/) 以及類似親和性標準網站和應用是完全可以的。


### 結構性標記

Bootstrap 的樣式和佈局可以應用於大量的標記結構上。本文主旨在向開發者提供最佳的示範演示 Bootstrap 本身以及展示適當的語義標記，包括處理潛在親和性之方式。

### 互動組件

Bootstrap 的互動元件 - 比如 modal dialogs、下拉式功能表和自訂工具提示，其設計目的是方便觸控式及滑鼠用戶。通過使用 [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/intro/aria) 角色和屬性，使用輔助性技術（比如螢幕閱讀器）這些元件應同時具有可理解性和操作性。

由於 Bootstrap 的元件有意被設計為具有相當的通用性，因此作者可能需要加入進一步的 <abbr title="Accessible Rich Internet Applications">ARIA</abbr> 角色和屬性以及 JavaScript 行為，以便更加準確地傳達其元件的精確性質和功能。在文件中通常會加以註明。

### 顏色對比

當前構成 Boostrap 預設的大部分顏色-在整個框架內用於按鈕變化、警告變化、形式認證指示等事項的顏色 - 在淺色背景是 *不足夠* 的顏色對比（如下為建議的 [WCAG2.0顏色對比比例4.5:1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html))。作者需要手動修改/增加上述預設顏色以確保顏色的對比比例。

### 視覺上被隱藏的內容

應當在視覺上被影藏，但應保持對螢幕閱讀器等輔助性的親和性內容，可以使用 `.sr-only` 的樣式隱藏。在需要同時向非視覺使用者傳遞額外的視覺資訊或提示（比如通過使用顏色表示含義）的情形中，這是非常有用的。

{% highlight html %}
<p class="text-danger">
  <span class="sr-only">Danger: </span>
  This action is not reversible
</p>
{% endhighlight %}

對於視覺上被隱藏的互動控制，比如傳統的 "略過" 連結，可以將 `.sr-only` 與 `.sr-only-focusable` 類型相結合。這樣會確保一旦被 focused（適用於鍵盤操作用戶）時成為可見。

{% highlight html %}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
{% endhighlight %}

## 額外的資源

- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/)
- [The A11Y Project](http://a11yproject.com/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Tenon.io Accessibility Checker](https://tenon.io/)
- [Colour Contrast Analyser (CCA)](https://www.paciellogroup.com/resources/contrastanalyser/)
- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
