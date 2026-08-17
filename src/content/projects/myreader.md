---
title: MyReader
description: 面向 Calibre 用户、兼顾轻量自管理书库的 Local-First 跨平台阅读器。
status: MIT · 开发中
featured: true
order: 2
stack:
  - Tauri
  - Rust
  - Expo
  - Readium
  - Automerge
tags:
  - Local-First
  - 跨平台
  - 阅读器
icon: /images/projects/myreader-icon.png
url: https://github.com/RyouMon/MyReader/releases/latest
urlLabel: 获取安装包
repository: https://github.com/RyouMon/MyReader
---

## 功能

- Local-First，无中心服务器，无需账号
- 支持桌面端与移动端
- 支持多书库、Calibre 书库和轻量自管理书库
- 支持本地目录、WebDAV 和 OneDrive
- 支持 EPUB、PDF 和 CBZ
- 支持阅读数据跨设备同步（试验性）

## 支持范围

### 数据源

- **本地目录：** 桌面端支持本地目录；iOS / iPadOS 支持应用内部书库和持久授权的外部目录；Android 目前仅支持应用内部书库。
- **WebDAV、OneDrive：** 桌面端、iOS / iPadOS、Android 均已支持。
- **Google Drive、Dropbox、S3 兼容对象存储：** 待规划，尚无确定方案或交付时间。

### 阅读格式

EPUB、PDF、CBZ 已支持桌面端、iOS / iPadOS 和 Android。MOBI / AZW3、FB2、TXT / HTML、CBR 待规划，尚无确定方案或交付时间。

## 项目定位

Calibre 继续负责完整的书目与元数据管理；MyReader 连接既有书库，提供 EPUB、PDF、CBZ 阅读，并同步进度、书签、高亮和笔记。MyReader 不会写入或替代 Calibre 的 `metadata.db`。

自管理书库用于直接导入和阅读电子书，目前仅提供基础元数据管理，不用于替代 Calibre，也不承诺在 Calibre 书库与 MyReader 书库之间转换或保持映射。

## 技术架构

- **桌面端：** Tauri 2、React 18、TypeScript、Vite 6、Tailwind CSS 4、Rust；阅读层使用 Readium Web 与 PDF.js。
- **iOS / iPadOS：** Expo 56、React Native 0.85、Expo Router、NativeWind 5、Swift 原生模块；阅读层使用 Readium Swift Toolkit。
- **Android：** 共享 Expo 与 React Native 应用层，通过 Kotlin 原生模块接入 Readium Kotlin Toolkit。
- **共享业务与数据层：** Rust `my-reader-core`、SeaORM、SQLite。
- **同步与合并：** Automerge 合并同一书库的并发变更；WebDAV / OneDrive 存储并交换同步对象。

## 当前限制

项目仍在快速开发中，可能出现破坏性数据迁移。跨设备同步目前仍是试验性功能，可能出现未知的同步、合并或恢复问题。请保留原始书库与远端存储的独立备份，不要把测试版当作唯一副本。

iOS / iPadOS 外部 TestFlight 正在准备审核，目前尚不可下载。TTS、ComfyUI、更多数据源与阅读格式属于未来开发方向，尚无交付时间。
