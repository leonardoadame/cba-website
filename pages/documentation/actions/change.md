---
title: change
permalink: change
weight: 5
edit: documentation/actions/change.md
---

Change action uses [CSS
selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) to
find relevant user input element and changes it's content.

Change action can be used on
[selectboxes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select),
various
textboxes([text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text),
[email](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
and more),
[textareas](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
and [contenteditable
elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable),
they are focusing the element, changing the value and triggerring change events. 

[See website registration demo](https://www.youtube.com/watch?v=_9784gJ4uYk).

## Placeholders

### unique

`<$unique=>` - placeholder is generating random number (1-13 characters length)
depending of the value. In example below the `change` action is used to find Dom
Element with the ID of `#sometextBox` and change the value to hello concatenated
with 3 charecter length random number (i.e. `Hello123`).

<div data-example="change">

```
#someTextBox
```
```
Hello<$unique=3>
```
</div> 

### clipboard

`<$clipboard=>` - Clipboard placeholder is used to access [clipboard
object](/clipboard) data. Which means that you can access data saved previously
in `clipboard` object to update input value: 

`<$clipboard=name>` 

so this placeholder will access value of the `name` property from the clipboard
object(i.e. `clipboard["name"]`).:

<div data-example="change">

```
#chatBox
```
```
Mr.<$clipboard=name>
```
</div> 
