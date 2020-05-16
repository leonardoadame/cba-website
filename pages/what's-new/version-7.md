---
title: Version 7.0
---

- [Implemented new clipboard object that holds data during chrome process](/documentation/clipboard)
- `<$past>` placeholder got deprecated, instead <$clipboard> new placeholder implemented for [change action](/documentation/actions/change)
- changed [copy action logic](/documentation/actions/copy) now copy action write data into clipboard object - `clipboard["copy"]`
- [new clipboard function implemented for accessing clipboard object](/documentation/clipboard)
- Fixed bug with project renaming
- Several improvements implemented