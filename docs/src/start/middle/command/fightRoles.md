---
title: 战斗人物脚本
author:
  name: 深林孤鹰
  url: https://github.com/leamus
icon: r:user
order: 6
---

## 一、说明

战斗人物脚本在项目根目录的FightRoles目录下，每个战斗人物一个文件夹，每个文件夹内的fight_roles.js就是技能脚本。

战斗人物脚本有 \$createData函数 和 \$commons对象两个成员，
\$createData函数是每创建一个战斗人物都会调用它（会替换通用脚本的\$Combatant函数创建的对象），所以写在它里的属性数据会有差异化且会被存档，
而写在 \$commons对象 中的是通用的。

二者还有个区别就是 \$createData函数 里的数据一旦产生就不再受技能脚本影响，而 \$commons对象 里的数据是在游戏开始时载入的，所以会受脚本的影响。

战斗人物脚本的根proto是 {\$objectType: 1}。

建议先用视图编程生成代码再进行修改。

## 二、数据成员

数据成员可写在 \$createData函数 和 \$commons对象 中，有：

```text
$name：字符串；战斗人物名字。
$properties：对象；属性（HP是必须的，其他MP、attack、defense等可参考通用脚本的\$Combatant函数来增减。
$avatar：字符串；头像路径。
$size：数组；头像大小。
$color：颜色字符串；名字的颜色。
$skills：数组；拥有技能列表。
$equipment：对象；所有装备。
```

你可以在这里加其他任意属性。

## 三、函数成员

函数成员一般写在 \$commons对象中；

```text
$actions：战斗人物的所有动作。
  参数：战斗人物对象；
  返回：战斗人物所有动作对象（Key为动作名，Value为特效名）。
  注意：这个函数定义了所有战斗人物的动作，通过战斗技能来调用这些动作实现丰富的人物的各种效果。Normal动作名是必须的，如果调用的动作名不存在则默认是Normal动作。

levelUpScript：战斗人物升级脚本。
levelAlgorithm：战斗人物升级算法。
这两个函数具体作用可见“升级链”教程，都是可选的，如果不存在则会调用通用的升级脚本和升级算法。
```
