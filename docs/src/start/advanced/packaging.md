---
title: 打包教程
icon: boxes-packing
order: 1
---

## 一、前言

鹰歌引擎支持打包功能，原则上用什么平台开发就打包什么平台的安装包，比如 Windows 下是一个带 exe 和 bat 的文件夹（你可以自己压缩），安卓下是 apk，Linux 下是 deb（也是一堆库和环境文件）等等。

打包环境文件一般是2个压缩文件[^runtimeZip]，一般都在引擎的 Releases 页面，需要打包的下载，然后按要求和打包步骤去打包。

打包的平台中，Android 是比较麻烦的，但鹰歌也提供了半自动化处理：把两个环境放在固定目录，然后改一些参数[^androidParameter]即可，再用三方 App 来打包就行。Windows 和 Linux 相对简单，替换一下工程目录即可。

## 二、准备工作

首先你需要一个工程，没有工程是不能打包的，且此工程已经配置好游戏开始事件，不然的话你就算打包了也玩不了。

然后进入你的工程，点击工程管理，再在弹出的上下文菜单中选择打包项目。

![进入打包项目](/assets/image/docs/advanced/packaging/Packaging_Program.png)

随后会进入到这个页面中，当然，这里的 `打包Windows` 选项是没有任何作用的，它只是起到一个教程的作用，真正有用的是下面的 `打包Android`。

![选择一个选项](/assets/image/docs/advanced/packaging/Selecting_options.png)

若您不知道什么是32位和64位，请自行搜索了解，简单来说就是64位的软件只能运行在64位的系统上，而现在大部分都是64位的系统，32位的软件可以同时运行在32位和64位的系统上，但在64位系统上软件性能会显著降低。

## 三、打包 Windows 平台

就如同教程说的一样，生成 Windows 版本很简单，仅仅需要下载，解压，改名这几个操作。

首先你需要来到引擎的 Releases 页面：

<!-- @include: ../engineReleases.snippet.md -->

随后下载 `QtEnv_Win_x64_xxx.rar` \/ `QtEnv_Win_x86_xxx.rar`。

![选择下载 QtEnv](/assets/image/docs/advanced/packaging/QtEnv_Win.png)

和 `MakerFrame_GameRuntime_Win_x64_xxx.rar` \/ `MakerFrame_GameRuntime_Win_x86_xxx.rar`。

![选择下载 GameRuntime](/assets/image/docs/advanced/packaging/GameRuntime_Win.png)

下载完成后将两个压缩包解压到同一文件夹（在哪里都可以，不过路径最好不要有中文），需要注意的是两个压缩包必须为同一架构[^framework]。

![解压到同一文件夹](/assets/image/docs/advanced/packaging/Unzip_Win.png)

然后将你的工程文件夹复制到游戏目录[^binCatalog]中。

![复制工程文件夹](/assets/image/docs/advanced/packaging/1Copy_Project_Win.png)

复制完成后将你的工程文件夹改名为 `Project` ，注意大小写。

![改名](/assets/image/docs/advanced/packaging/2Rename_Win.png)

然后运行 `_运行游戏.bat` 文件，大功告成！

![双击运行](/assets/image/docs/advanced/packaging/3Start_Game_Win.png)

### 1.常见问题

* 一、引擎和游戏不能同时运行，如果你企图同时运行，那么最后运行的将会被强行关闭[^forceClose]。
* 二、如果你出现了个弹窗，提示你 由于找不到 xxx.dll ，无法继续执行代码。 那么可能是以下原因：
  * 1、作者忘记放某个 dll 文件了，那么你可以从引擎的 `bin` 目录中找到它并复制一个到你的游戏目录[^binCatalog]里的 `bin` 中，例如 `libquazip1-qt5.dll`，这个文件也可以[点此下载](/assets/dll/libquazip1-qt5.dll)。
![复制dll](/assets/image/docs/advanced/packaging/4Copy_Dll_Win.png)
  * 2、没有将两个压缩包解压在同一文件夹，解压在同一文件夹即可解决此问题
  * 3、没有解压全部文件，重新解压一次或换个压缩软件可以解决此问题。

## 四、打包 Android 平台

持续更新中，敬请期待...

## 五、其它

由于时间精力成本问题，目前只有 Windows、Android 的打包环境文件，如果需要其他的打包环境可以联系深林孤鹰。

[^runtimeZip]: 一个是 Qt 环境文件一个是引擎文件，前者一般比较大且固定，后者会随着引擎的更新而更新

[^androidParameter]: 比如包名、图标、存档位置等等，如果上架 TapTap 还得修改 TapTap 的 key 等等。

[^framework]: 例如你下载 x64 的 QtEnv，那么另外一个 GameRuntime 也必须是 x64 的。

[^forceClose]: 也就是说运行 `.bat` 文件后什么也不会发生。

[^binCatalog]: 也就是 QtEnv 和 GameRuntime 解压到的文件夹。
