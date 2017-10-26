---
layout: docs
title: JavaScript
description: 用我們在 jQuery 上建置 JavaScript 插件將 Bootstrap 生動起來。瞭解每個外掛程式、資料和 API 的選項。
group: getting-started
toc: true
---

## 單獨或編譯

可以（使用 Bootstrap 的獨立 `*.js` 檔案）使用 `bootstrap.js` 或壓縮的 `bootstrap.min.js`（切勿同時插入這兩個檔案）將所有外掛程式一次性全部加入。

## 相依外掛程式

某些外掛程式和 CSS 元件依賴於其他的插件。若你將外掛程式獨立加入，確保檢查文件中是否有上述的相依關係。同時請注意，所有的外掛程式都依賴 jQuery（這意味著 jQuery 必須在插件檔案 **之前**）。[查詢我們的 `package.json`]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) ，以查看支援的 jQuery 版本。

工具提示及彈出提示框也相依於 [Popper.js](https://popper.js.org/)。

## 資料屬性 (HTML data attributes)

幾乎可單獨透過 HTML 採用資料屬性（我們偏好於用此方式使用 JavaScript 函式）啟用和配置所有的 Bootstrap 插件。務必 **在一個獨立的元素僅使用一套資料屬性**（比如，你無法從同一個按鍵同時觸發一個工具提示和互動視窗）。

然而，在某些情形中，可能需要禁用此功能。要禁用資料屬性 API，如下在文件中的 `data-api` 上移除相關的事件：

{% highlight js %}
$(document).off('.data-api')
{% endhighlight %}

或者，只為了一個特定的插件，只需將插件的名稱作為命名空間以及 data-api 榜定，如下所示：

{% highlight js %}
$(document).off('.alert.data-api')
{% endhighlight %}

## 事件

Bootstrap 為大多數插件行為提供了自定義的事件。一般而言，事件都具有不定式和過去分詞的形式 - 其中不定式（比如 `Show`）在事件開始時被觸發，其過去分詞形式（比如 `shown`）在某一動作完成時被觸發。

所有的不定式事件提供了 [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) 的功能。這個功能讓某個動作開始前停止執行預設行為，從事件控制中的返回 false 也將自動調用 `preventDefault()`。

{% highlight js %}
$('#myModal').on('show.bs.modal', function (e) {
  if (!data) return e.preventDefault() // stops modal from being shown
})
{% endhighlight %}

## 程式化 API

我們相信你會需要透過 JavaScript API 使用其它插件。所有的公開 APIs 均為單一、可串接的的方法，並且有回傳的行為。

{% highlight js %}
$('.btn.danger').button('toggle').addClass('fat')
{% endhighlight %}

全部方法接受一個可選則性的物件，如指定特定的方法，或沒有任何內容 (採用預設行為)：

{% highlight js %}
$('#myModal').modal()                      // initialized with defaults
$('#myModal').modal({ keyboard: false })   // initialized with no keyboard
$('#myModal').modal('show')                // initializes and invokes show immediately
{% endhighlight %}


每個插件同時使用 `Constructor` 屬性上的建構式屬性：`$.fn.popover.Constructor`。若你想獲得一個特定的插件，直接從一個元素取用：`$('[rel="popover"]').data('popover')`。

### 非同步函式及轉換

所有程式的 API 行為都是 **非同步** 的，且在一開始調換並在 **結束之前** 回傳。

為了在執行一個動作時，您可監聽該事件。

{% highlight js %}
$('#myCollapse').on('shown.bs.collapse', function (e) {
  // Action to execute once the collapsible area is expanded
})
{% endhighlight %}

另一個 **轉換組件的方法調用將被忽略**。

{% highlight js %}
$('#myCarousel').on('slid.bs.carousel', function (e) {
  $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

$('#myCarousel').carousel('1') // Will start sliding to the slide 1 and returns to the caller
$('#myCarousel').carousel('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
{% endhighlight %}

### 預設設定

你可以通過修改插件 `Constructor.Default` 物件，更改插件的預設設置。

{% highlight js %}
$.fn.modal.Constructor.Default.keyboard = false // changes default for the modal plugin's `keyboard` option to false
{% endhighlight %}

## 無衝突

有時必須和其他 UI 框架一起使用 Bootstrap 插件。在此情形中，有時會出現命名空間的衝突。若出現此情況，你可以在意圖恢復其數值的插件上調用 `.noConflict`。

{% highlight js %}
var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton            // give $().bootstrapBtn the Bootstrap functionality
{% endhighlight %}

## 版本號

可以通過插件建構函式的 `VERSION` 屬性訪問每個 Bootstrap 的 jQuery 插件版本。比如，對工具提示插件：

{% highlight js %}
$.fn.tooltip.Constructor.VERSION // => "{{ site.current_version }}"
{% endhighlight %}

## 當 JavaScript 禁用時無特殊回饋

當禁用 JavaScript 時，Bootstrap 的插件不會有特別回饋。若你擔心此等情況中的使用者體驗，使用 [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) 以向你的用戶解釋此情形（以及重啟JavaScript的方式）和/或添加你自己定義的回饋。

{% callout warning %}
#### 第三方函式庫

** Bootstrap 不支持第三方 JavaScript 函式庫，如 Prototype 或 jQuery UI。 儘管有 `.noConflict` 和命名空間的事件，還是可能會出現兼容性的問題，您需要自己修復。
{% endcallout %}

## Util

全部的 Bootstrap Javascript 相依於 `util.js` 並必須和其他 JS 檔案一同加入。若你使用編譯（或壓縮的）`bootstrap.js`，無需添加這個檔案，因為他已經包含在內＼。

`util.js` 包括了若許多實用函式和一個適用於 `transitionEnd` 的事件，幫助文件以及一個 CSS 轉換工具。其他插件使用這個去確認 CSS 轉換是否支持，並且去擷取轉換的狀態。
