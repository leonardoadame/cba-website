---
title: click-update
permalink: click-update
weight: 8
edit: documentation/actions/click-update.md
---

`click-update` action is similar to [click](/click) action with the difference
that after clicking the element CBA waits for the page update to proceed with
the project workflow. Can be handy when clickingin on a submit button for
example.

It basically is a `click`+`update` events sequence.

<div data-example="click-update">

```
#submitBtn
```
</div>
