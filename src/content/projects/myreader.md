---
title: MyReader
description: 面向 Calibre 书库的 Local-First 跨平台阅读器，在桌面端与移动端提供一致、可靠的阅读体验。
status: 持续开发
featured: true
order: 1
stack:
  - Tauri
  - Rust
  - Expo
  - Readium
---

MyReader 是一款面向 Calibre 书库的 Local-First 跨平台阅读器。它让本地书库继续由用户掌控，同时在桌面端和移动端提供统一的阅读数据与产品体验。

目前项目覆盖 EPUB、PDF 与 CBZ 阅读，并持续打磨书库管理、阅读进度、书签、批注和跨设备同步。桌面端使用 Tauri 与 Rust，移动端基于 Expo 和 React Native，两端分别接入适合各自平台的 Readium 实现。

项目仍在持续开发中。更多公开信息会随着版本成熟逐步整理到这里。
