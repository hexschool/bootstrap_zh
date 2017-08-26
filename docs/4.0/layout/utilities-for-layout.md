---
layout: docs
title: 排版通用類別 (Utilities for layout)
description: 為了行動優先及響應式開發，Bootstrap 包括了許多通用類別 class，用於顯示、隱藏、對齊、和調整內容。
group: layout
toc: true
---

## 改變顯示`display`

使用我們的 `display` 工具可控的觸發 `display` 特性的一般值。將它與我們的網格系統、內容、或元件混合，以顯示或隱藏它們（透過特定的 viewport）。

## Flexbox 選項

Bootstrap 4 通過 flexbox 建立，但並不是每一個元素的 `display` 都已經改變為 `display: flex`，因為這可能增加很多不必要的覆蓋。我們的元件[our components]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/alerts/) 大部分都是用 flexbox 建立。

如果你需要對一個元素增加 `display: flex`，透過 `.d-flex` 或響應式變數完成（例如，`.d-sm-flex`）。你需要此 class 或 `display` 值可使用我們的額外（flexbox 工具）[flexbox utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) 確定大小，對齊，調整間隔等等。


## Margin 及 padding

使用 `margin` 和 `padding`（調整間隔通用類別）[spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) 控制元素和元件的間隔和尺寸。基於 `1rem` 預設 `$spacer` 變數，Bootstrap 4 包括五級比例尺用於間隔調整工具。選擇的值會套用所有的 viewport（例如，對 `margin-right: 1rem` 選擇 `.mr-3` ），或者選擇響應式變數命中特定viewport（例如：對於從 `md` 中斷點開始的 `margin-right: 1rem` 選擇 `.mr-md-3` ）。

## 切換 `visibility`

當不需要切換 `display` 時，你可以通過我們的（可見性通用類別）[visibility utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/visibility/) 切換元素的可見性 `visibility`。不可見元素仍將影響頁面的佈局，但是用戶無法看到該元素。
