---
title: Inject
permalink: inject
weight: 1
edit: documentation/actions/inject.md
---

Injects script into web page and iframes.

<div data-example="inject">

```
document.body.innerHTML = "Hello world";
```
</div> 

`inject` action creates `<script>` tag in the context of the page and executes
the script. `inject` action doesn't provide you access to the [extensions
api](https://developer.chrome.com/docs/extensions/reference/), for that reason
you might want to use [bg-inject](/bg-inject). Also you can use
[cs-inject](/inject-cs) to inject code into the [content
script](https://developer.chrome.com/docs/extensions/mv3/content_scripts/), it
allows you modifing page using with some sugar(i.e. JQuery) and in general is more safe
as it doesn't conflicting with the page or other extensions content Scripts.
