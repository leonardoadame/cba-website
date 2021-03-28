---
title: bg-function
permalink: bg-function
weight: 4
edit: documentation/actions/bg-function.md
---

Because of The CSP rules that google force developers to use in the extension with manifest version 2 there is no possibility to inject code into background page, so that Why I've created new event that calls bg-function. 

Using bg-function now I can provide ready functions that uses Chrome API. 

Let's look through picture example:
```
<$function=removeCookie>
<$attr=facebook>
```
as you can see `<$function=>` place holder specify the function name and `<$attr=>` placeholder specify parameters for that function if the function uses several parameters than you need to specify several `<$attr=>` placeholders. 

![CBA bg-function action example](/images/extension/actions/bg-function.jpg)
