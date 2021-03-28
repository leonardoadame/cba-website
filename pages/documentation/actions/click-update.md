---
title: click-update
permalink: click-update
weight: 8
edit: ${github-path}
---

`click-update` action is similar to `click` action with the difference that
after clicking the element CBA waits for the page update to proceed with the
project workflow. Can be handy when clickingin on a submit button for example.

It basically is a `click`+`update` events sequence.

![CBA click-update action example](/images/extension/actions/click-update.png)


**Note:** in the stable version of CBA this action is called `submit-click`.