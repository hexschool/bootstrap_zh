---
layout: docs
title: 導覽
description: 如何使用 Bootstrap 包含導覽元件的文件和範例。
group: components
toc: true
---

## 基礎導覽

Bootstrap 中提供的導覽共用通用標記和樣式，從基礎 `.nav` 到啟用與禁用的狀態。 交換 class 在每種樣式之間切換。

基礎的 `.nav` 元件使用 flexbox 構建，並為構建所有類型的導覽元件為此提供了堅實的基礎。 它包括一些風格覆蓋（列表也包含在內）、一些更大 padding 製作的點擊連結，及基本的禁用樣式。


{% callout info %}
基礎的 `.nav` 組件不包含任何 `.active` 狀態。 以下範例包括該類別，主要是為了說明這個 class 不會觸發任何特殊的樣式。

{% endcallout %}

{% example html %}
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

Classes are used throughout, so your markup can be super flexible. Use `<ul>`s like above, or roll your own with say a `<nav>` element. Because the `.nav` uses `display: flex`, the nav links behave the same as nav items would, but without the extra markup.

class 可以使用在很多地方，因此您的標記可以超級靈活。 使用與上面類似的 `<ul>`，或者用的 `<nav>` 元素自己滾動。 因為 `.nav` 使用 `display: flex`，導覽連結與導覽元件一樣，不需要有額外的標記。


{% example html %}
<nav class="nav">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav>
{% endexample %}

## 可用樣式

使用小工具更改 `.nav` 元件的樣式。依據需要混合搭配或自行建立。

### 水平對齊

使用 [flexbox 小工具]({{ site.baseurl }}/docs/{{ site.docs_version }}/layout/grid/#horizontal-alignment) 更改導覽的水平對齊方式。預設情況下導覽左對齊，但您可以輕鬆地將其更改為中心或右對齊。

用 `.justify-content-center` 置中：


{% example html %}
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

使用 `.justify-content-end` 靠右對齊：

{% example html %}
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

### 垂直

通過使用 `.flex-column` 小工具更改 flex 項目的軸項。如果在特定 viewports 需要堆疊，可使用響應式版本（例如 `.flex-sm-column`）。


{% example html %}
<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

As always, vertical navigation is possible without `<ul>`s, too.

和往常一樣，垂直導覽也是可以沒有 `<ul>`。


{% example html %}
<nav class="nav flex-column">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav>
{% endexample %}

### 分頁標籤

從上面了解基本導覽，並加入 `.nav-tabs` 以生成具有分頁標籤的介面。 使用我們的 [分頁 JavaScript 插件](#javascript-behavior)。


{% example html %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

### 片狀

使用相同的 HTML，但使用 `.nav-pills` 取代：

{% example html %}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

### 填充和對齊

`.nav` 內容有兩種寬度擴展用的 Class，使用 `.nav-fill` 會將 `.nav-item` 內容按照比例分配空間。注意，這會佔用所有的水平空間，但並不是每個導覽項目都具有相同寬度。


{% example html %}
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

當使用 `<nav>` 的導覽時，請確保在連結上包含 `.nav-item`。


{% example html %}
<nav class="nav nav-pills nav-fill">
  <a class="nav-item nav-link active" href="#">Active</a>
  <a class="nav-item nav-link" href="#">Link</a>
  <a class="nav-item nav-link" href="#">Link</a>
  <a class="nav-item nav-link disabled" href="#">Disabled</a>
</nav>
{% endexample %}


對於等寬元素使用 `.nav-justified`。 所有的水平空間將被導覽連結佔據，但與上面的 `.nav-fill` 不同，每個導覽項都將是相同的寬度。


{% example html %}
<nav class="nav nav-pills nav-justified">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav>
{% endexample %}

與 `.nav-fill` 的例子類似，使用基於 `<nav>` 的導覽，請確保在連結上包含 `.nav-item`。


{% example html %}
<nav class="nav nav-pills nav-justified">
  <a class="nav-item nav-link active" href="#">Active</a>
  <a class="nav-item nav-link" href="#">Link</a>
  <a class="nav-item nav-link" href="#">Link</a>
  <a class="nav-item nav-link disabled" href="#">Disabled</a>
</nav>

{% endexample %}
## 使用 flex 小工具

如果需要響應式的導覽變化，請使用一系列 [flexbox 小工具]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/)。 這些小工具在中斷點之間提供更多的設定。 在下面的範例中，我們的導覽將堆疊在最小的中斷點上，從小中斷點開始填充完整寬度的水平佈局。

{% example html %}
<nav class="nav nav-pills flex-column flex-sm-row">
  <a class="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link disabled" href="#">Disabled</a>
</nav>
{% endexample %}

## 關於親和性

請注意，導覽列即使視覺樣式為 `.nav-tabs` 的分頁標籤，應該 **不會** 被賦予 `role="tablist"`，`role="tab"` 或 `role="tabpanel"` 屬性。 這些僅適用於動態分頁標籤介面，如 [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel) 中描述。 有關範例，請參閱本節中的 [為動態分頁操作的 JavaScript](#javascript-behavior-for-dynamic-tabbed-interfaces)。

## 使用下拉選單

加入額外的 HTML 和[下拉選單 JavaScript 插件]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/dropdowns/#usage).


### 帶下拉選單的分頁標籤

{% example html %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

### 片狀的下拉選單

{% example html %}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}

## JavaScript 行為

使用 JavaScript 分頁標籤插件 - 單獨或透過編譯的 `bootstrap.js` 檔 - 擴展我們的導覽分頁標籤和片狀的，以創建可選的分頁標籤、甚至是下拉選單。

動態分頁標籤介面，如 [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel) 中所描述，需要 `role="tablist"`、`role="tab"`、`role="tabpanel"` 和額外的 `aria-` 屬性向輔助技術（如螢幕閱讀器）的使用者提供他們的結構、功能和當前狀態。

如果你要自行編譯 JS，記得 [requires `util.js`]({{ site.baseurl }}/docs/getting-started/javascript/#util)。

動態頁籤介面，如 [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)，需要 `role="tablist"`、`role="tab"`，`role="tabpanel"` 和附加的 `aria-` 屬性，向用戶提供輔助技術（如螢幕閱讀器）的結構、功能和當前狀態。

<div class="bd-example bd-example-tabs">
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-expanded="true">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile">Profile</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" id="dropdown1-tab" href="#dropdown1" role="tab" data-toggle="tab" aria-controls="dropdown1">@fat</a>
        <a class="dropdown-item" id="dropdown2-tab" href="#dropdown2" role="tab" data-toggle="tab" aria-controls="dropdown2">@mdo</a>
      </div>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
    </div>
    <div class="tab-pane fade" id="dropdown1" role="tabpanel" aria-labelledby="dropdown1-tab">
      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
    </div>
    <div class="tab-pane fade" id="dropdown2" role="tabpanel" aria-labelledby="dropdown2-tab">
      <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
    </div>
  </div>
</div>

{% highlight html %}
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-expanded="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile">Profile</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </a>
    <div class="dropdown-menu">
      <a class="dropdown-item" id="dropdown1-tab" href="#dropdown1" role="tab" data-toggle="tab" aria-controls="dropdown1">@fat</a>
      <a class="dropdown-item" id="dropdown2-tab" href="#dropdown2" role="tab" data-toggle="tab" aria-controls="dropdown2">@mdo</a>
    </div>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="dropdown1" role="tabpanel" aria-labelledby="dropdown1-tab">...</div>
  <div class="tab-pane fade" id="dropdown2" role="tabpanel" aria-labelledby="dropdown2-tab">...</div>
</div>
{% endhighlight %}

如上所示，這不僅可以使用於 `<ul>` 的標記。也可以於 `<nav>` 的標記如下所示。

<div class="bd-example bd-example-tabs">
  <nav class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="home" aria-expanded="true">Home</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="profile">Profile</a>
    <div class="dropdown">
      <a class="nav-item nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" id="nav-dropdown1-tab" href="#nav-dropdown1" role="tab" data-toggle="tab" aria-controls="dropdown1">@fat</a>
        <a class="dropdown-item" id="nav-dropdown2-tab" href="#nav-dropdown2" role="tab" data-toggle="tab" aria-controls="dropdown2">@mdo</a>
      </div>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      <p>Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
    </div>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
      <p>Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.</p>
    </div>
    <div class="tab-pane fade" id="nav-dropdown1" role="tabpanel" aria-labelledby="nav-dropdown1-tab">
      <p>Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.</p>
    </div>
    <div class="tab-pane fade" id="nav-dropdown2" role="tabpanel" aria-labelledby="nav-dropdown2-tab">
      <p>Proident incididunt esse qui ea nisi ullamco aliquip nostrud velit sint duis. Aute culpa aute cillum sit consectetur mollit minim non reprehenderit tempor. Occaecat amet consectetur aute esse ad ullamco ad commodo mollit reprehenderit esse in consequat. Mollit minim do consectetur pariatur irure non id ea dolore occaecat adipisicing consectetur est aute magna non.</p>
    </div>
  </div>
</div>

{% highlight html %}
<nav class="nav nav-tabs" id="myTab" role="tablist">
  <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-expanded="true">Home</a>
  <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile">Profile</a>
  <div class="dropdown">
    <a class="nav-item nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </a>
    <div class="dropdown-menu">
      <a class="dropdown-item" id="nav-dropdown1-tab" href="#nav-dropdown1" role="tab" data-toggle="tab" aria-controls="nav-dropdown1">@fat</a>
      <a class="dropdown-item" id="nav-dropdown2-tab" href="#nav-dropdown2" role="tab" data-toggle="tab" aria-controls="nav-dropdown2">@mdo</a>
    </div>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
  <div class="tab-pane fade" id="nav-dropdown1" role="tabpanel" aria-labelledby="nav-dropdown1-tab">...</div>
  <div class="tab-pane fade" id="nav-dropdown2" role="tabpanel" aria-labelledby="nav-dropdown2-tab">...</div>
</div>
{% endhighlight %}

標籤分頁插件也能使用於片狀。

<div class="bd-example bd-example-tabs">
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-expanded="true">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-expanded="true">Profile</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" id="pills-dropdown1-tab" href="#pills-dropdown1" role="tab" data-toggle="pill" aria-controls="pills-dropdown1">@fat</a>
        <a class="dropdown-item" id="pills-dropdown2-tab" href="#pills-dropdown2" role="tab" data-toggle="pill" aria-controls="pills-dropdown2">@mdo</a>
      </div>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <p>Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>
    </div>
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
      <p>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.</p>
    </div>
    <div class="tab-pane fade" id="pills-dropdown1" role="tabpanel" aria-labelledby="pills-dropdown1-tab">
      <p>Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.</p>
    </div>
    <div class="tab-pane fade" id="pills-dropdown2" role="tabpanel" aria-labelledby="nav-dropdown2-tab">
      <p>Tempor anim aliquip qui nisi sit minim ex in cupidatat ipsum adipisicing. Ad non magna anim id ullamco do dolor sit adipisicing nulla exercitation. Qui Lorem eiusmod sint in laboris pariatur est adipisicing non sunt occaecat in mollit culpa sit. Aliquip id duis do do quis mollit ut duis. Non dolor reprehenderit do esse nostrud deserunt non eiusmod minim anim sit voluptate ipsum. Nulla elit aliqua do sunt labore velit anim nisi dolor nostrud consectetur fugiat ex qui velit ex tempor. Do cillum qui anim aliquip id cillum duis ex laboris tempor incididunt sint dolor ullamco tempor. Fugiat laboris enim anim veniam aliquip cillum irure.</p>
    </div>
  </div>
</div>

{% highlight html %}
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-expanded="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-expanded="true">Profile</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" id="pills-dropdown1-tab" href="#pills-dropdown1" role="tab" data-toggle="pill" aria-controls="pills-dropdown1">@fat</a>
      <a class="dropdown-item" id="pills-dropdown2-tab" href="#pills-dropdown2" role="tab" data-toggle="pill" aria-controls="pills-dropdown2">@mdo</a>
    </div>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-dropdown1" role="tabpanel" aria-labelledby="pills-dropdown1-tab">...</div>
  <div class="tab-pane fade" id="pills-dropdown2" role="tabpanel" aria-labelledby="pills-dropdown2-tab">...</div>
</div>
{% endhighlight %}

還有搭配垂直片狀。

<div class="bd-example bd-example-tabs">
  <div class="row">
    <div class="col-3">
      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist">
        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-expanded="true">Home</a>
        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-expanded="true">Profile</a>
        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-expanded="true">Messages</a>
        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-expanded="true">Settings</a>
      </div>
    </div>
    <div class="col-9">
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
          <p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</p>
        </div>
        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
          <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
        </div>
        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
          <p>Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna commodo est ea veniam consectetur.</p>
        </div>
        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
          <p>Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.</p>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist">
  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-expanded="true">Home</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-expanded="true">Profile</a>
  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-expanded="true">Messages</a>
  <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-expanded="true">Settings</a>
</div>
<div class="tab-content" id="v-pills-tabContent">
  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
</div>
{% endhighlight %}

### 使用資料屬性

只需在元素上指定 `data-toggle="tab"` 或 `data-toggle="pill"` 即可啟動標籤或片狀導覽，而無需編寫任何 JavaScript。可在 `.nav-tabs` 或 `.nav-pills` 上使用這些資料屬性


{% highlight html %}
<!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#messages" role="tab">Messages</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#settings" role="tab">Settings</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel">...</div>
  <div class="tab-pane" id="profile" role="tabpanel">...</div>
  <div class="tab-pane" id="messages" role="tabpanel">...</div>
  <div class="tab-pane" id="settings" role="tabpanel">...</div>
</div>
{% endhighlight %}

### 透過 JavaScript

透過 JavaScript 啟用分頁標籤(每一個分頁標籤需要分別啟動)：

{% highlight js %}
$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
{% endhighlight %}

啟用分頁標籤有以下數種方法：

{% highlight js %}
$('#myTab a[href="#profile"]').tab('show') // Select tab by name
$('#myTab a:first').tab('show') // Select first tab
$('#myTab a:last').tab('show') // Select last tab
$('#myTab li:eq(2) a').tab('show') // Select third tab (0-indexed)
{% endhighlight %}

### 淡入淡出

要使分頁標籤淡入淡出，請將  `.fade` 加到每個 `.tab-pane` 中。 第一個分頁內容還必須具有 `.show` 以使初始內容可見。


{% highlight html %}
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel">...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel">...</div>
  <div class="tab-pane fade" id="settings" role="tabpanel">...</div>
</div>
{% endhighlight %}

### 方法

{% capture callout-include %}{% include callout-danger-async-methods.md %}{% endcapture %}
{{ callout-include | markdownify }}

#### $().tab


啟動分頁標籤元素和內容容器。 標籤應該有一個 `data-target`或 `href` 定位在 DOM 中的一個容器節點。

{% highlight html %}
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home" role="tab" aria-controls="home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#profile" role="tab" aria-controls="profile">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#messages" role="tab" aria-controls="messages">Messages</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#settings" role="tab" aria-controls="settings">Settings</a>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel">...</div>
  <div class="tab-pane" id="profile" role="tabpanel">...</div>
  <div class="tab-pane" id="messages" role="tabpanel">...</div>
  <div class="tab-pane" id="settings" role="tabpanel">...</div>
</div>

<script>
  $(function () {
    $('#myTab a:last').tab('show')
  })
</script>
{% endhighlight %}

#### .tab('show')

選擇給定的分頁標籤並顯示其關聯的分頁內容。 之前選擇的任何其他分頁標籤將被取消，並且其關聯的內容被隱藏。 **在 Tab 內容實際顯示之前返回到調用者**（即在 `shown.bs.tab` 事件發生之前）。

{% highlight js %}
$('#someTab').tab('show')
{% endhighlight %}

### 事件

當顯示新分頁標籤時，事件按以下順序觸發：

1. `hide.bs.tab` (當前活動的分頁標籤上)
2. `show.bs.tab` (待顯示的分頁標籤上)
3. `hidden.bs.tab` (在上一個啟動的分頁標籤上，與 `hide.bs.tab` 事件相同)
4. `shown.bs.tab` (在剛剛顯示的新分頁標籤上，與 `show.bs.tab` 事件相同)

如果沒有分頁標籤已經被啟動，那麼 `hide.bs.tab`和  `hidden.bs.tab` 事件不會被觸發。


<table class="table table-bordered table-striped table-responsive">
  <thead>
    <tr>
      <th style="width: 150px;">事件類型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.tab</td>
      <td>
      這個事件在分頁內容顯示上觸發，但在分頁標籤顯示之前。 使用 <code>event.target</code> 和 <code>event.relatedTarget</code> 來分別定位啟用的分頁標籤和上一個分頁標籤（如果可用）。</td>
    </tr>
    <tr>
      <td>shown.bs.tab</td>
      <td>這個事件在一個分頁標籤顯示之後在分頁標籤顯示上觸發。 使用 <code>event.target</code> 和 <code>event.relatedTarget</code> 來分別定位啟用分頁標籤和上一個啟用分頁標籤（如果可用）。</td>
    </tr>
    <tr>
      <td>hide.bs.tab</td>
      <td>在顯示新分頁標籤之後觸發此事件（因此以前啟用的分頁標籤會被隱藏）。 使用 <code>event.target</code> 和 <code>event.relatedTarget</code> 來分別定位當前啟用分頁標籤和新的即將啟用的分頁標籤（如果有）。</td>
    </tr>
    <tr>
      <td>hidden.bs.tab</td>
      <td>在顯示新分頁標籤之後觸發此事件（因此以前的活動分頁標籤被隱藏）。 使用 <code>event.target</code> 和 <code>event.relatedTarget</code> 來分別定位前一個起用分頁標籤和新的啟用分頁標籤。</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
{% endhighlight %}
