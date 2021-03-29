---
title: bg-function
permalink: bg-function
weight: 4
edit: documentation/actions/bg-function.md
---

`bg-function` provides ability to safely execute several internal functions
which you might find handy and in future we will add some more similar
functions.

The syntax of `bg-function` takes two arguments `function` and `attr` and
converts that into function call with the specified arguments, as you can see in
the image below:

![CBA bg-function action example](/images/extension/actions/bg-function.jpg)

In that example script removes all cookies for matched domain, in this case
`facebook`.

## removeCookie

Removes all cookies for matched domain in `attr`.

<div class="cba-example bg-function">

```
<$function=removeCookie>
<$attr=facebook>
```
</div>

## reloadCurrentTab

Reloads current tab.

<div class="cba-example bg-function">

```
<$function=reloadCurrentTab>
```
</div>


## removeCurrentWindow

Removes current window.

<div class="cba-example bg-function">

```
<$function=removeCurrentWindow>
```
</div>

## windowCreation

Creates new window

<div class="cba-example bg-function">

```
<$function=windowCreation>
```
</div>

## More

You can find [list of the existing functions
here](https://github.com/browser-automation/cba/blob/master/src/js/background/bg_function.js).
In case you need more function for easier access, feel free to [request it
here](https://github.com/browser-automation/cba/issues) and ideally provide also
PR.
