---
title: 给战斗人物定义新属性
author:
  name: 深林孤鹰
  url: https://github.com/leamus
icon: r:user
order: 3
---

## 一、说明

引擎自带了三段HP、两段MP、攻防速灵运 这些战斗人物属性（参考伏魔记），如果需要新增或减少属性，可以按下面步骤来做。

## 二、属性影响

首先要考虑的是属性带来的影响，一般属性影响的有：

* 技能影响（比如伤害、恢复血量速度等）；
* 其他属性（比如升级速度）；

## 三、开始修改

1、通用脚本：找到 `$Combatant` 函数，这个函数是我们创建战斗人物时的构造函数，`$properties` 属性就是战斗人物的属性，我们添加属性就在properties对象里添加；这样我们所有的地方都可以引用到这个属性：`combatant.$properties.属性名` 或 `combatant.$propertiesWithExtra.属性名`。

2、如果影响技能，则可以在技能脚本里使用这个属性参与计算；

3、通用脚本里还有个全局技能影响算法 `$skillEffectAlgorithm`，这里也根据需要进行修改；

## 四、特殊函数computeCombatantPropertiesWithExtra

战斗人物有两个重要的属性对象：`combatant.$properties` 和 `combatant.$propertiesWithExtra`，分别是战斗人物原有属性和战斗人物经过装备和Buff的计算后的属性，而后者是游戏中不停的调用 `$refreshCombatant`，再调用 `computeCombatantPropertiesWithExtra` 实时刷新的，这个函数又不停的调用所有装备（道具）的 `$equipEffectAlgorithm` 函数和所有Buff的 `buffPropertiesEffect` 函数来进行 `$propertiesWithExtra` 属性的修改。

这个函数还可以修改地图角色的移速（见系统通用脚本）；
