---
title: Buff系统
author:
  name: 深林孤鹰
  url: https://github.com/leamus
icon: flask
order: 4
---

## 一、说明

Buff系统其实并没有集成在引擎里，而是通过通用脚本的几个函数来实现的。

## 二、实现原理

1、Buff的数据默认存储在战斗人物的 \$\$fightData.\$buffs 中，如果需要支持存档，可以放在\$\$fightData外面。

2、通用脚本的 computeCombatantPropertiesWithExtra 函数中，可以加入Buff影响的属性计算代码。

3、通用脚本的 \$fightRoleChoiceSkillsOrGoodsAlgorithm 函数，可以加入Buff对战斗人物使用技能影响的代码；

4、通用脚本的 getBuff 是Buff的核心函数，是获得Buff和Buff影响的相关代码，每个Buff是一个对象，
存储在 \$\$fightData.\$buffs 中，默认对象的属性有：

* round：回合数；
* buffScript：Buff播放脚本；

* flags：Buff标记；
* buffPropertiesEffect：Buff属性效果；

这些东西都是参考伏魔记引擎实现的，你完全可以对照原有代码来扩展或开发自己的新Buff。

5、通用脚本的combatantRoundEffects生成器函数 是战斗人物的回合脚本，这个脚本会根据不同的时机来调用，Buff的作用和效果就在这里被调用。

6、通用脚本的\$commonCheckSkill 函数中，可以加入Buff对技能产生的影响代码；

7、如果Buff不跨战斗，记得在通用脚本的 \$commonFightEndScript 生成器函数中加入：

```js
tc.$$fightData.$buffs = {};
```

## 三、注意

详细可见 示例工程；
