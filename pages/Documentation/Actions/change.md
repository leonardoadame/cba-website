---
title: change
---
Change action mostly are used on textboxes and textareas, they are Triggering  focus and change events on DOM element.
Change action uses Jquery selector to Change the value of the DOM Element. Also users can use CBA placeholders:
<h1>Placeholders </h1>
<i>&lt;$unique=&gt;</i> - Unique placeholder is generating random number (13 characters length maximum).  So in the pic. example the action is used to find Dom Element with the ID of #sometextBox trigger focus event on it change the value to hello concatenated with 3 charecter length random number.
<img src="/sites/default/files/Change.jpg" width="600px">
<i>&lt;$clipboard=&gt;</i> - Clipboard placeholder is used to access <a href="clipboard">clipboard object</a> data. So now you can access any data from clipboard object for change action using current syntax:
&lt;$clipboard=propertyName&gt; 
so this placeholder will call clipboard["propertyName"].
<img src="/sites/default/files/clipboard-placeholder.jpg" width="600px">