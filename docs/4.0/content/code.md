---
layout: docs
title: Code
description: 使用 `Bootstrap` 顯示行內程式碼與多行程式碼的文件和範例。
group: content
toc: true
---

## 行內程式碼

用 `<code>` 包覆之行內程式碼片段，須注意避開 HTML 括號。

{% example html %}
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
{% endexample %}

## 多行程式碼

對於多行程式碼可使用 `<pre>` 進行包覆。 再次提醒請注意避開任何括號，以正確設定區塊影響範圍。 可選擇性添加 `.pre-scrollable` 類別，將設定最大高度為 350px 且提供 y 軸滾動條。

{% example html %}
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
{% endexample %}

## 變數

變數可使用 `<var>` 標籤來指定。

{% example html %}
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
{% endexample %}

## 使用者輸入

`<kbd>` 標籤用來設定此欄位為經由鍵盤進行輸入資料。

{% example html %}
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{% endexample %}

## 輸出結果

使用 `<samp>` 標籤來設定程式的輸出結果。

{% example html %}
<samp>This text is meant to be treated as sample output from a computer program.</samp>
{% endexample %}
