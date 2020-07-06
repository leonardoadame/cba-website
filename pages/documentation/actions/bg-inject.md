---
title: bg-inject
permalink: bg-inject
weight: 3
---

Inject script into backroung page of the extension. 

Abilities:
- Access to background page of the extension
- Use Chrome Api

Tips:
- Stop project workflow when using asynchronous functions using sendBgInstruction variable "sendBgInstruction = false;"
- Don't forget to continue the project workflow after stoping it `sendInstruction();`
- use clipboard object for message passing `clipboard["myKey"] = value`
- Jump to another action `actionToPlay(num);`

Example:
```
sendBgInstruction = false;  // Stop workflow of the CBA
chrome.windows.create({ url: clipboard["scrAlias"]}, function(){
	sendInstruction();  // Continue with CBA workflow
});
```