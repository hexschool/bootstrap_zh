---
layout: docs
title: 圖片區 (Figures)
description: 使用 Bootstrap 顯示相關圖檔以及圖片說明的文件和範例。
group: content
---

需要顯示一段內容，如可選標題的圖檔時，可使用 `<figure>` 標籤。

使用內建的 `.figure`、 `figure-img` 和 `.figure-caption` 類別，設定 HTML5 `<figure>`和 `<figcaption>` 的底線樣式。 圖檔沒有明確指定尺寸，因此請務必在 `<img>` 標籤加入 `.img-fluid` 設定圖片為響應式。

{% capture example %}
<figure class="figure">
  <img data-src="holder.js/400x300" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
{% endcapture %}
{% include example.html content=example %}

使用我們的 [text utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/text/#text-alignment) 可以很容易地對齊圖形的標題。


{% capture example %}
<figure class="figure">
  <img data-src="holder.js/400x300" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
  <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
</figure>
{% endcapture %}
{% include example.html content=example %}
