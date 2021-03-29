---
title: copy
permalink: copy
weight: 12
edit: documentation/actions/copy.md
---

Copy action uses the [CSS
selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) to get
text content of the element and save it to the `clipboard["copy"]` object
([Learn more about clipboard object](/clipboard)).

It's also handy to use `copy` action with the [Change action](/change) sequence,
in order to update user input with the value of the saved textContent of the
element.

Example below uses `<$clipboard=copy>` placeholder to used saved text content
value of previous `copy` action.

![CBA copy action example](/images/extension/actions/copy.jpg).

![CBA change action example using clipboard object
value](/images/extension/actions/clipboard/past.jpg)
