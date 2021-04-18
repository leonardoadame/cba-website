---
title: clipboard
permalink: clipboard
weight: 6
edit: documentation/clipboard.md
---

"Clipboard" variable is an object that holds your data during chrome process,
it's shared object between projects so you can use it either for passing the
data between projects or during the project execution flow.There are several
ways you can access "Clipboard" object.

## Inject actions

You can access and modify the object during script injection using
[inject](/inject), [cs-inject](/cs-inject) or [bg-inject](/bg-inject) action by
accessing `clipboard`: 

<div data-example="inject">

```
clipboard["test"] = "hello";
alert(clipboard["test"]);
```
</div>

## bg-function

`saveToClipboard` [bg-function](/bg-function) can also be used for adding or
modifying the Clipboard:

<div data-example="bg-function">

```
<$function=saveToClipboard>
<$attr={"name": "value"}>
```
</div>

For quicker access you can use `clipboard` preset from the functions list.

## change action

`<$clipboard=>` placeholder can be used to insert value from the clipboard
object into an input box, you can learn more about it in the [placeholders
section of change action page](/change#placeholders).
