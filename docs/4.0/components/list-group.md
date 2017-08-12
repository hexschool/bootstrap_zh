---
layout: docs
title: 列表群組
description: 列表群組具有彈性的顯示一系列內容組件。可以修改擴增已支援更多的內容。
group: components
toc: true
---

## 基礎範例

最基本的列表群組是具有列表項目和適當 Class 的無序列表。根據以下的選項或根據您自己需要調整 CSS。


{% example html %}
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endexample %}

## 啟用物件

將 `.active` 加到 `.list-group-item` 指示當前的活動狀態。

{% example html %}
<ul class="list-group">
  <li class="list-group-item active">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endexample %}

## 禁用選項

將 `.disabled` 加到 `.list-group-item` 使其呈現禁用。請注意，一些帶有 `.disabled` 的元素還需要自訂 JavaScript 才能完全禁用其點擊事件（例如連結）。


{% example html %}
<ul class="list-group">
  <li class="list-group-item disabled">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endexample %}

## 連結和按鈕

使用 `<a>` 或 `<button>` 加入 `.list-group-item-action` 來創建具有 hover、禁用和活動狀態的動態清單項目。我們分離這些 Class，以確保由非交互元素組成的列表群組（如 `<li>` 或 `<div>` ）不提供可點點擊或觸擊。

一定 **不要在這裡使用標準的 `.btn`**。

{% example html %}
<div class="list-group">
  <a href="#" class="list-group-item active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
{% endexample %}

使用 `<button>`，你也可以使用 `disabled` 屬性而不是 `.disabled` class。 不幸的是，`<a>` 不支援 disabled 屬性。


{% example html %}
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    Cras justo odio
  </button>
  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
  <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
</div>
{% endexample %}

## 情境 Class

使用情境式 Class 來設計具有狀態被境和顏色的列表項目。

{% example html %}
<ul class="list-group">
  <li class="list-group-item">Dapibus ac facilisis in</li>

  {% for color in site.data.theme-colors %}
  <li class="list-group-item list-group-item-{{ color.name }}">This is a {{ color.name }} list group item</li>{% endfor %}
</ul>
{% endexample %}


情境式 Class 也可以使用 `.list-group-item-action`。請注意，在上述範例中，不存在 hover 樣式。另外還支持 `.active` 狀態
；應用它來指示在情境列表組合項目上的啟用狀態。


{% example html %}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>

  {% for color in site.data.theme-colors %}
  <a href="#" class="list-group-item list-group-item-action list-group-item-{{ color.name }}">This is a {{ color.name }} list group item</a>{% endfor %}
</div>
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

## 帶標籤

在某些 [通用類別]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) 的幫助下，向任何列表項目添加標籤以顯示未讀計數、活動等。

{% example html %}
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span class="badge badge-default badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <span class="badge badge-default badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span class="badge badge-default badge-pill">1</span>
  </li>
</ul>
{% endexample %}

## 自定義內容

在 [flexbox 通用類別]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) 的幫助下，添加幾乎任何的 HTML 或內容、連結等，都能加入到一個項目內。

{% example html %}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
</div>
{% endexample %}

## JavaScript 行為

使用列表群組的 JavaScript 插件 - 單獨或通過編譯的 `bootstrap.js` 檔擴展我們的列表群組，以創建可選擇的內容表單。


<div class="bd-example" role="tabpanel">
  <div class="row">
    <div class="col-4">
      <div class="list-group" id="list-tab" role="tablist">
        <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="tab" href="#list-home" role="tab" aria-controls="list-home">Home</a>
        <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="tab" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
        <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="tab" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
        <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="tab" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
      </div>
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <p>Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.</p>
        </div>
        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <p>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.</p>
        </div>
        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing pariatur cillum.</p>
        </div>
        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
          <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure.</p>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>
{% endhighlight %}

### 使用資料屬性

在 `.list-group-item` 上使用這些資料屬性，可以指定 `data-toggle="list"` 或元素來啟動列表群組的導航，而無需編寫任何 JavaScript。


<div role="tabpanel">
{% highlight html %}
<!-- List group -->
<div class="list-group" id="myList" role="tablist">
  <a class="list-group-item list-group-item-action active" data-toggle="list" href="#home" role="tab">Home</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#profile" role="tab">Profile</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#messages" role="tab">Messages</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#settings" role="tab">Settings</a>
</div>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel">...</div>
  <div class="tab-pane" id="profile" role="tabpanel">...</div>
  <div class="tab-pane" id="messages" role="tabpanel">...</div>
  <div class="tab-pane" id="settings" role="tabpanel">...</div>
</div>
{% endhighlight %}
</div>

### 透過 JavaScript

通過 JavaScript 啟用可選個列表項目（每個列表項目需要單獨啟動）：

{% highlight js %}
$('#myList a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
{% endhighlight %}

您可以透過以下幾種方式啟動個別列表項目：

{% highlight js %}
$('#myList a[href="#profile"]').tab('show') // Select tab by name
$('#myList a:first').tab('show') // Select first tab
$('#myList a:last').tab('show') // Select last tab
$('#myList li:eq(2) a').tab('show') // Select third tab (0-indexed)
{% endhighlight %}

### 淡出效果

要使定位字元淡入淡出，請將 `.fade` 添加到每個 `.tab-pane` 中。 第一個列表項目還必須具有 `.show` 使初始內容可見。


{% highlight html %}
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel">...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel">...</div>
  <div class="tab-pane fade" id="settings" role="tabpanel">...</div>
</div>
{% endhighlight %}

### 方法

#### $().tab

啟動列表項目元素和內容容器。選項卡應該有一個 `data-target` 或 `href` 定位在 DOM 中的一個容器節點。


{% highlight html %}
<div class="list-group" id="myList" role="tablist">
  <a class="list-group-item list-group-item-action active" data-toggle="list" href="#home" role="tab">Home</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#profile" role="tab">Profile</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#messages" role="tab">Messages</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#settings" role="tab">Settings</a>
</div>

<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel">...</div>
  <div class="tab-pane" id="profile" role="tabpanel">...</div>
  <div class="tab-pane" id="messages" role="tabpanel">...</div>
  <div class="tab-pane" id="settings" role="tabpanel">...</div>
</div>

<script>
  $(function () {
    $('#myList a:last').tab('show')
  })
</script>
{% endhighlight %}

#### .tab('show')

選擇給定的列表項目顯示其關聯的分頁。而先前選擇的任何其他列表項目將被取消，並使其關聯的表單隱藏。 **在 Tab 顯示之前回傳給調用者**（例如，在 `shown.bs.tab` 事件發生之前）。

{% highlight js %}
$('#someListItem').tab('show')
{% endhighlight %}

### 事件

當顯示新分頁時，事件按以下順序觸發：


1. `hide.bs.tab` (在當前啟用的選項上)
2. `show.bs.tab` (在準備啟用的選項上)
3. `hidden.bs.tab` (在先前啟用的選項上，與 `hide.bs.tab` 事件相同)
4. `shown.bs.tab` (在剛剛顯示的選項上，與 `show.bs.tab` 事件相同)

如果沒有選項啟用，則 `hide.bs.tab` 和 `hidden.bs.tab` 事件將不被觸發。


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
      這個事件因選項顯示而觸發，但是在新選項被顯示之前。 使用 <code>event.target</code> 和 <code>event.relatedTarget</code> 將目前與先前啟用(如果可用) 的作為目標。</td>
    </tr>
    <tr>
      <td>shown.bs.tab</td>
      <td>
      這個事件在選項顯示後觸發，但是在新選項被顯示之前。 使用 <code>event.target</code> 和 <code>event.relatedTarget</code> 來分別定位啟用中和剛剛啟用的選項。</td>
    </tr>
    <tr>
      <td>hide.bs.tab</td>
      <td>
      新的選項要顯示（先前的啟用選項將被隱藏）時，此事將觸發。 使用 <code>event.target</code> 和 <code>event.relatedTarget</code> 分別定位先前啟用和即將啟用的選項。</td>
    </tr>
    <tr>
      <td>hidden.bs.tab</td>
      <td>新的選項顯示後（因此先前啟用的選項將隱藏），此事件將觸發。 使用 <code>event.target</code> 和 <code>event.relatedTarget</code> 分別定位先前啟用選項和新啟用的選項。</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('a[data-toggle="list"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
{% endhighlight %}
