---
title: bg-inject
---
Inject script into backroung page of the extension.

Abilities:
<ul>
<li>Access to background page of the extension </li>
<li>Use Chrome Api</li>
</ul>

Tips:
<ul>
<li>Stop project workflow when using asynchronous functions using sendBgInstruction variable "sendBgInstruction = false;"</li>
<li>Don't forget to continue the project workflow after stoping it "sendInstruction();"</li>
<li>use clipboard object for message passing "clipboard["myKey"] = value"</li>
<li>Jump to another action "actionToPlay(num);"</li>
</ul>

Example:

sendBgInstruction = false;  // Stop workflow of the CBA
chrome.windows.create({ url: clipboard["scrAlias"]}, function(){
	sendInstruction();  // Continue with CBA workflow
});
