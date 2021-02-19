---
title: Version 9.0
permalink: new_9-0
weight: 1
---

This is one of the biggest releases since the first version of the CBA, it
introduces completely new codebase and architectural changes:
- Complete rewrite of the code and fully automated test coverage.
- CBA has been [open sourced ![](/images/icons/github.png =20x)](https://github.com/browser-automation/cba)
  - [New issue tracker](https://github.com/browser-automation/cba/issues).
- [bg-inject](/bg-inject) and [cs-inject](/cs-inject) can use
  [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).
  - `sendInstruction()` and `sendBgInstruction = false;` helpers has been
    deprecated.
- `submit-click` is [`click-update`](/click-update) now.
- [copy](/copy) action copies text content of the element, while
  [copy-html](/copy-html) copies `innerHtml`.
- [clipboard](/clipboard) is deprecated, in favor of
  [cba.clipboard](/clipboard).
- Information icon popup for the brief information about each action type and
  functions.
  - ![Screenshot of actions info](/images/info-actions.png =300x)
  - ![Screenshot of functions info](/images/info-functions.png =300x)
- Made action recording more reliable.
- Bug fixes.

**Note:** In case you have issue with the new version of the CBA please open an
issue in the [Github page of the
project](https://github.com/browser-automation/cba/issues), also do not hesitate
contacting me at [saroyanm@gmail.com](mailto:saroyanm@gmail.com), I'm looking
forward hearing back from you so we can together improve CBA. In case you really
need to fallback to the v8 you can do that following [installing CBA 8.3.7
 instructions on the
current page](/new_8#installing-cba-8.3.7).
