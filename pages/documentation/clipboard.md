---
title: clipboard
---

"Clipboard" variable is an object that holds your data dAuring chrome process, It's shared object between projects so you can use it even after project playback, there are several ways you can access "Clipboard" object:

- you can access the object during script injection, please notice if you want to write data to "clipboard" object you have to be sure that you are writing also in main page's content script, as was already told in [injection documentation](documentation/actions/inject) inject action injects script also into all iframes of web page, so in case if you would like to write into clipboard object you have to be sure that you are writing also in main page's content script clipboard variable, you can see example of writing into "clipboard" object in image below:\
![](/images/clipboard-inject.jpg)

- you can write to the clipboard variable using clipboard function.
- You also can access clipboard variable using <$clipboard> variable for change actions, in case if you would like to change field using data from clipboard.

From CBA v7 design of action copy has been changed so, before CBA were copying data into clipboard variable, but from v7 clipboard is implemented as an object so copy action now writing into `clipboard["copy"]`, so in case if you would like to access it's data you can refer to `clipboard["copy"]`, also <$past> placeholder is getting deprecated because of this new feature but still is supported, the only difference that now It's refer to `clipboard["copy"]` instead of clipboard. As `<$past>` placeholder is deprecated, I'll suggest you to use [new placeholder calling clipboard](/documentation/actions/change).