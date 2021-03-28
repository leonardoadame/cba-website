---
title: inject-cs
permalink: inject-cs
weight: 2
edit: ${github-path}
---

Inject is the Action that Injects javascript code into content script during
project workflow, also you can use Jquery. It uses javascript `eval()` function
to inject your code. so here you can write your javascript code using functions
and variables, just notice only one thing that extensions create contect script
for each Iframe.

<div class="cba-example cs-inject">

```
$("body").html("Hello World");
```
</div> 

## async/await

You can also use async/await in the `cs-inject` that way you can wait for an
async function execution before proceeding with the next action.

<div class="cba-example cs-inject">

```
await new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 300);
});
```
</div> 