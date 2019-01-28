---
layout: docs
title: 螢幕閱讀器 (Screenreaders)
description: 透過本元件，隱藏除了螢幕閱讀器之外的所有設備上元素。
group: utilities
toc: true
---

透過 `.sr-only` 將一個元素對所有設備隱藏 **除了螢幕閱讀器**。將`.sr-only` 與 `.sr-only-focusable` 結合，以便在其被 focused 時再次顯示該元素（例如通過鍵盤使用）。也可以用作 Sass mixins。

{%- comment -%}
Necessary for following [accessibility best practices]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/#accessibility).
{%- endcomment -%}

{% capture example %}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
{% endcapture %}
{% include example.html content=example %}

{% highlight scss %}
// Usage as a mixin
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
{% endhighlight %}
