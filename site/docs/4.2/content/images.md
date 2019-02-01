---
layout: docs
title: 圖片 (Images)
description: 全部經由類別來設定，選擇加入響應式(因而不會大於其父類別所設定的圖片尺寸)與增加輕巧樣式之文件和範例。
group: content
toc: true
---

## 響應式圖片 {#responsive-images}

`Bootstrap` 中的圖片可利用 `.img-fluid` 設定為響應式。 `max-width：100％;` 和 `height：auto;` 也需一併使用，讓圖片可依父元素屬性進行縮放。


<div class="bd-example">
  {% include icons/placeholder.svg width="100%" height="250" class="bd-placeholder-img-lg img-fluid" text="Responsive image" %}
</div>

{% highlight html %}
<img src="..." class="img-fluid" alt="Responsive image">
{% endhighlight %}

{% capture callout %}
##### SVG 圖片與 IE 10

在 `Internet Explorer 10` 中， 加入 `.img-fluid` 設定的可縮放向量圖形有比例不正確的問題。 要解決這個問題，請在必要時另加 `width：100％\ 9;` 的設定。 此設定對於其他圖檔格式並不適用，因此 `Bootstrap` 不會自動加入此設定。
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## 圖片縮略圖 {#image-thumbnails}

除了 [邊框-圓角 公用程式]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/borders/) 之外，你可以使用 `.img-thumbnail` 讓圖片有1px邊框的顯示。


<div class="bd-example bd-example-images">
  {% include icons/placeholder.svg width="200" height="200" class="img-thumbnail" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" %}
</div>

{% highlight html %}
<img src="..." alt="..." class="img-thumbnail">
{% endhighlight %}

## 對齊圖片 {#aligning-images}

用 [helper float classes]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/float/) or [text alignment classes]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/text/#text-alignment) 讓圖片對齊。
 `block`-level 的圖片可以使用 [the `.mx-auto` margin utility class]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/#horizontal-centering) 置中。

<div class="bd-example bd-example-images">
  {% include icons/placeholder.svg width="200" height="200" class="rounded float-left" %}
  {% include icons/placeholder.svg width="200" height="200" class="rounded float-right" %}
</div>

{% highlight html %}
<img src="..." class="rounded float-left" alt="...">
<img src="..." class="rounded float-right" alt="...">
{% endhighlight %}

<div class="bd-example bd-example-images">
  {% include icons/placeholder.svg width="200" height="200" class="rounded mx-auto d-block" %}
</div>

{% highlight html %}
<img src="..." class="rounded mx-auto d-block" alt="...">
{% endhighlight %}

<div class="bd-example bd-example-images">
  <div class="text-center">
    {% include icons/placeholder.svg width="200" height="200" class="rounded" %}
  </div>
</div>

{% highlight html %}
<div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>
{% endhighlight %}


## 圖片標籤 {#picture}

如果您使用 `<picture>` 元素為特定的 `<img>` 指定多個 `<source>` 元素，要確保 `.img-*` 類別添加到 `<img>` 而非 `<picture>`。

{% highlight html %}
​<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
{% endhighlight %}
