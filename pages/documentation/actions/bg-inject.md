---
title: bg-inject
permalink: bg-inject
weight: 3
edit: ${github-path}
---

`bg-inject` provides ability of injecting script into backroung page of the
extension where you can also access browser api.

<div class="cba-example bg-inject">

```
browser.tabs.create({url: "https://example.org"});
```
</div>

## Clipboard

It's handy to use [clipboard](/clipboard) object to pass data from the page to
the `bg-inject` actions.

<div class="cba-example copy">

```
#page-url
```
</div>

<div class="cba-example bg-inject">

```
browser.tabs.create({url: clipboard["copy"]});
```
</div>

## actionToPlay

`actionToPlay` function is used for jumping to another action.

<div class="cba-example bg-inject">

```
if (clipboard["jumpToFirstAction"])
{
  actionToPlay(1);
}
```
</div>

## async/await

You can also use async/await in the `cs-inject` that way you can wait for an
async function execution before proceeding with the next action.

<div class="cba-example bg-inject">

```
const [tab] = await browser.tabs.query({active: true});
await browser.tabs.remove(tab.id);
```
</div>
