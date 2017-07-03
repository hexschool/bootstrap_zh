---
layout: docs
title: 媒體物件
description: 建立高度可重複元件的 Bootstrap 媒體物件的文件和範例，例如部落格評論、推特等等。
group: layout
toc: true
---

## 範例

媒體物件 [media object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) 有助於建立複雜和可重複元件，其中一些媒體可以不需要包覆在另一個上。此外，通過flexbox，只需要兩個 class 就可以完成這些工作。

下面是單個媒體對象的例子。只需要兩個 class – 使 `.media` 和 `.media-body` 圍繞你的內容。通過（間隔調整工具）[spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) 可以控制可調整 padding 和 margin。

{% example html %}
<div class="media">
  <img class="d-flex mr-3" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
{% endexample %}

{% callout warning %}

##### Flexbug #12: 行內元素不作為 flex 處理

Internet Explorer 10-11 不會將行內元素作為 flex 進行渲染，例如連結或圖像（或 `::before` 和 `::after` 偽元素）。唯一的運作的是設定非行內的  `display` 值（例如，`block`, `inline-block`, 或 `flex`）。我們建議使用我們的（顯示工具）[display utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display-property/)之一 `.d-flex` 簡單修復。

**來源:** [Flexbugs on GitHub](https://github.com/philipwalton/flexbugs#12-inline-elements-are-not-treated-as-flex-items)
{% endcallout %}

## 巢狀

媒體物件可以無限做巢狀，但是我們建議你別作過頭。將巢狀的媒體`.media`放在父媒體對象的`.media-body`內。

{% example html %}
<div class="media">
  <img class="d-flex mr-3" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    <div class="media mt-3">
      <a class="d-flex pr-3" href="#">
        <img data-src="holder.js/64x64" alt="Generic placeholder image">
      </a>
      <div class="media-body">
        <h5 class="mt-0">Media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>
{% endexample %}

## 對齊

媒體物件中的媒體可以在你的 `.media-body` 內容的上部（預設）、中部、或下部與 flexbox 工具對齊。

{% example html %}
<div class="media">
  <img class="d-flex align-self-start mr-3" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5 class="mt-0">Top-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="media">
  <img class="d-flex align-self-center mr-3" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5 class="mt-0">Center-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="media">
  <img class="d-flex align-self-end mr-3" data-src="holder.js/64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5 class="mt-0">Bottom-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
{% endexample %}

## 排序

通過修改 HTML 本身，或者通過增加某些定制 flexbox CSS 改變媒體物件中的內容順序，以設置 `order` 屬性（請使用一個整數）。

{% example html %}
<div class="media">
  <div class="media-body">
    <h5 class="mt-0 mb-1">Media object</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
  <img class="d-flex ml-3" data-src="holder.js/64x64" alt="Generic placeholder image">
</div>
{% endexample %}

## 媒體列表

由於媒體物件具有較少的結構要求，你也可以在清單 HTML 元素上使用這些 class。在你的 `<ul>` 或 `<ol>` 上，增加 `.list-unstyled`，以移除任何瀏覽器預設清單樣式，然後對你的 `<li>` 應用 `.media`。當然，你也可以使用間隔調整工具。

{% example html %}
<ul class="list-unstyled">
  <li class="media">
    <img class="d-flex mr-3" data-src="holder.js/64x64" alt="Generic placeholder image">
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
  <li class="media my-4">
    <img class="d-flex mr-3" data-src="holder.js/64x64" alt="Generic placeholder image">
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
  <li class="media">
    <img class="d-flex mr-3" data-src="holder.js/64x64" alt="Generic placeholder image">
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
</ul>
{% endexample %}
