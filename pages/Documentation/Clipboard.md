---
title: Clipboard
---
"Clipboard" variable is an object that holds your data during chrome process, It's shared object between projects so you can use it even after project playback, there are several ways you can access "Clipboard" object:
<ul>
<li>you can access the object during script injection, please notice if you want to write data to "clipboard" object you have to be sure that you are writing also in main page's content script, as was already told in <a href="inject">injection documentation</a> inject action injects script also into all iframes of web page, so in case if you would like to write into clipboard object you have to be sure that you are writing also in main page's content script clipboard variable, you can see example of writing into "clipboard" object in image below:</li>
<img src="/sites/default/files/clipboard-inject.jpg" width="600px">
<li> you can write to the clipboard variable using clipboard function.</li>

<li>You also can access clipboard variable using &lt;$clipboard&gt;  variable for change actions, in case if you would like to change field using data from clipboard. </li>
</ul>
From CBA v7 design of action copy has been changed so, before CBA were copying data into clipboard variable, but from v7 clipboard is implemented as an object so copy action now writing into clipboard["copy"], so in case if you would like to access it's data you can refer to clipboard["copy"], also &lt;$past&gt; placeholder is getting deprecated because of this new feature but still is supported, the only difference that now It's refer to clipboard["copy"] instead of clipboard. As <$past> placeholder is deprecated, I'll suggest you to use <a href="change">new placeholder calling clipboard</a>.