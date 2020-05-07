---
title: bg-function(deprecated)
---
Because of The CSP rules that google force developers to use in the extension with manifest version 2 there is no possibility to inject code into background page, so that Why I've created new event that calls bg-function.
Using bg-function now I can provide ready functions that uses Chrome API.
Let's look through picture example:
&lt;$function=removeCookie&gt; 
&lt;$attr=facebook&gt; 
as you can see &lt;$function=> place holder specify the function name and &lt;$attr=&gt;  placeholder specify parameters for that function if the function uses several parameters than you need to specify several &lt;$attr=&gt;  placeholders.
<img src="/sites/default/files/bg-function.jpg" width="500px">