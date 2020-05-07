---
title: Clear cookies
---
<h3>Action:</h3> bg-inject
<h3>Script:</h3> 
sendBgInstruction = false;
removeCookie("facebook");

<h3>Description:</h3> 
The function is designed to clear browser cookie that match corresponding attribute, in this case the function will remove each cookie which set by domain which contain "facebook" in the domain name, you can use any regular expression for the attribute.
For example if you will use the attribute mentioned below then CBA will delete all cookies during the project workflow:
sendBgInstruction = false;
removeCookie(".*");