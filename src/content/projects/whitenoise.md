---
title: WhiteNoise
description: 面向 iPhone 与 iPad 的白噪声应用，用于降噪、助眠与专注。
status: App Store 已上架
featured: true
order: 1
stack:
  - SwiftUI
  - SwiftData
  - CloudKit
tags:
  - 小而美
  - 白噪声
  - iPhone / iPad
icon: /images/projects/whitenoise-icon.png
cardImage: /images/projects/whitenoise-iphone.png
cardImageDark: /images/projects/whitenoise-iphone-dark.png
heroIphoneImage: /images/projects/whitenoise-ios26-sounds-iphone-real.png
heroIpadImage: /images/projects/whitenoise-ios26-sounds-ipad-landscape-real.png
url: https://apps.apple.com/cn/app/id6504743517
urlLabel: 在 App Store 下载
qrCode: /images/projects/whitenoise-app-store-qr.png
qrCodeAlt: WhiteNoise 白噪声 App Store 安装二维码
detailLayout: whitenoise
showcase:
  - label: 白噪声
    title: 白噪声
    description: |-
      屏蔽外界干扰，轻松进入梦乡
      简洁设计，无广告干扰
    iphoneSrc: /images/projects/whitenoise-ios26-sounds-iphone-real.png
    alt: WhiteNoise 移动端倾盆大雨场景选择界面
  - label: 混音台
    title: 混音台
    description: |-
      自由组合多种白噪声
      单独控制每一种声音的音量
    iphoneSrc: /images/projects/whitenoise-ios26-mixer-iphone-real.png
    alt: WhiteNoise 移动端倾盆大雨场景混音台界面
  - label: 多场景
    title: 多场景
    description: |-
      支持多场景切换
      轻松添加与编辑混音，随心享受多种声音体验
    iphoneSrc: /images/projects/whitenoise-ios26-mixes-iphone-real.png
    alt: WhiteNoise 移动端倾盆大雨、海边夜晚与专注时刻场景列表
  - label: 睡眠倒计时
    title: 睡眠倒计时
    description: |-
      支持预设与自定义睡眠倒计时
      倒计时结束后自动暂停播放
    iphoneSrc: /images/projects/whitenoise-ios26-sleep-timer-iphone-real.png
    alt: WhiteNoise 移动端倾盆大雨场景睡眠倒计时菜单
  - label: iCloud 同步
    title: iCloud 同步
    description: |-
      启用后，你的白噪声将自动同步到 iCloud
      可在多台设备间访问自己的混音
    iphoneSrc: /images/projects/whitenoise-icloud-iphone.png
    alt: WhiteNoise 倾盆大雨等场景在 iPhone 与 iPad 间同步
  - label: 允许与其他应用一起播放
    title: 允许与其他应用一起播放
    description: |-
      可设置与其他应用同时播放
      播放音乐时仍可继续播放白噪声
    iphoneSrc: /images/projects/whitenoise-coexist-music-iphone.png
    alt: 虚拟音乐播放器与 WhiteNoise 倾盆大雨场景同时播放
---

WhiteNoise 使用 SwiftUI、SwiftData 与 AVFoundation 开发，不依赖第三方 Swift Package。

## 播放与定时

声音支持无缝循环、后台播放和系统媒体控制。切换声音、暂停播放和调整音量时使用渐入渐出过渡。睡眠定时器提供常用预设，也支持最长 24 小时 59 分 59 秒的自定义倒计时。

## 数据与同步

混音名称、顺序、声音组合与音量通过 SwiftData 保存在设备本地。用户可以选择通过 iCloud / CloudKit 在 iPhone 和 iPad 之间同步。

## 听力保护

应用检测有线耳机与蓝牙耳机连接。连接耳机时，如果系统音量高于用户设定的阈值，会暂停播放并显示提醒；该功能可以调整阈值或关闭。
