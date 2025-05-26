---
title: 界面的层序
author:
  name: 深林孤鹰
  url: https://github.com/leamus
icon: object-group
order: 1
---

## 一、说明

地图的画面从外到内有4个层组成：

```js
game.$sys.screen //屏幕，创建的组件位置和大小固定（包含所有系统组件，包括战斗场景、摇杆、消息框、对话框等）
game.$sys.viewport //视窗，创建的组件位置和大小固定
game.$sys.scene //场景，组件位置和大小固定，但会被scale影响
game.$sys.map //地图，创建的组件会改变大小和随地图移动
game.$sys.ground //地图地板，创建的组件会改变大小和随地图移动
```

## 二、解释

game.\$sys.screen就是游戏的屏幕，一般你不要去修改它（强制修改会影响到所有的层），但可以读取它的属性。将组件挂载在它的下面能实现屏幕固定（摇杆、信息框、选择框等都是它的子组件，比如你可以挂人物的数据或金钱等）。

game.\$sys.viewport是游戏的视窗，靠近观察者，你可以理解为相机的观察口，你可以调节它的大小来实现一些效果，比如给一些屏幕组件留出位置来显示。也可以把组件挂载到它的子组件内（不过很少这样做）。

game.\$sys.scene是游戏的场景，靠近地图，可理解为你给相机的取景框，不能修改它，挂载的组件的位置和大小是固定的但会被game.scale影响。

game.\$sys.map是游戏的整个地图，这个好理解，也是地图角色组件的容器，它的大小也不要去修改，挂载的组件的位置是固定在地图上的，也受game.scale影响。

## 三、使用的地方

1、game.showimage、game.showsprite的\$parent属性。

2、自定义的组件。

## 四、战斗界面的层序

战斗界面只有3个层序（没有地图概念）：

fight.\$sys.screen、fight.\$sys.viewport、fight.\$sys.scene。

分别对应了地图场景的前三个层。

但注意的是，战斗界面受game.\$sys.screen的影响（因为战斗场景组件是game.\$sys.screen的子组件），如果你强制修改了game.\$sys.screen的大小，那么整个战斗界面的所有层也会收到影响。

## 五、示例

1、缩放地图至视窗大小：

```js
game.scale(Math.min(game.$sys.viewport.width / game.$sys.map.width ,game.$sys.viewport.height / game.$sys.map.height))
```

2、设置视窗大小，并缩放至屏幕大小

```js
game.$sys.viewport.width = 800;
game.$sys.viewport.height = 480
game.$sys.viewport.scale = Math.min(game.$sys.screen.width / game.$sys.viewport.width ,game.$sys.screen.height / game.$sys.viewport.height)
```

<Catalog />
