---
title: change
permalink: change
weight: 5
edit: ${github-path}
---

Change action mostly are used on textboxes and textareas, they are Triggering focus and change events on DOM element. 

Change action uses Jquery selector to Change the value of the DOM Element. Also users can use CBA placeholders:

## Placeholders

`<$unique=>` - Unique placeholder is generating random number (13 characters length maximum). So in the pic. example the action is used to find Dom Element with the ID of #sometextBox trigger focus event on it change the value to hello concatenated with 3 charecter length random number. 

![CBA change action example using clipboard](/images/extension/actions/change.jpg)

`<$clipboard=>` - Clipboard placeholder is used to access [clipboard object](clipboard) data. So now you can access any data from clipboard object for change action using current syntax: 

`<$clipboard=propertyName>` 

so this placeholder will call `clipboard["propertyName"]`. 

![CBA change action example using clipboard](/images/extension/actions/clipboard/placeholder.jpg)
