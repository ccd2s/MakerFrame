---
title: 技能脚本-自定义技能（下）
author:
  name: 深林孤鹰
  url: https://github.com/leamus
icon: gear
order: 9
---


## 一、说明

这节讲一下如何自定义技能选择。

技能选择在技能脚本的\$choiceScript生成器函数中定义。

技能选择的各种步骤数据都保存在了战斗人物中的 \$\$fightData.\$choice 中，
\$\$fightData.\$lastChoice 是保存了上一次战斗选择的数据（引擎自动保存和使用）。

## 二、引擎自带的选择系统

引擎自带两个技能选择系统，分别是：

1、技能->人物->完毕

这个选择系统一般是单人技能，单体伤害和单体恢复都可以用。

2、技能->完毕

这个技能选择一般是全体技能，全体伤害和全体恢复都可以用。

如果这两个选择系统不满足你，那你完全可以做一个非常复杂的选择系统，比如吸敌人血给我方某个人加等等都可以做到。

## 三、实现原理

\$choiceScript生成器函数 参数：

* skill：技能对象；
* combatant：使用的战斗人物

技能脚本的 \$choiceScript生成器函数 只需通过yield一个对象 就能实现一次选择步骤，这个对象的定义如下：

```text
Type: 1为选择一个战斗人物；2为弹出一个菜单；
Step：第几个步骤了（需要存储）；
Type为1时：
  TeamFlags：0b1为己方；0b10为对方；
  Filter：筛选函数，参数为targetCombatant和combatant；
  Enabled：布尔值，表示设置选择标记（变色）还是取消选择（选择完毕后必须取消选择一次让人物恢复颜色，且不计入步骤）；
Type为2时：
  Title（菜单标题）；
  Items（选项）；
  Style（样式）；
```

yield接受的值也是一个对象，这个对象的属性：

```text
Type：同yield的参数Type；
Value：选择的值。
```

## 四、其他说明

你做好一个技能选择系统后，敌人也可以使用这个技能，原理就是敌人会将所有的可能性过一遍直到符合技能条件，
当然如果你想做更智能的AI，可以修改通用脚本的 \$fightRoleChoiceSkillsOrGoodsAlgorithm 函数。

战斗人物的\$\$fightData.\$choice.\$targets是一个数组，数组的每一个元素，除了全体时值为-1，
其他的值也是一个数组（哪怕只有一个值）。

## 五、引擎自带的两个选择系统源码

```js
//系统的单人技能(选择对方）
//yield返回参数对象：Type（选择类型）、Step（第几个步骤，实际用来：1、此步骤的值在$targets的下标；2、战斗时 获取我方战斗人物的lastChoice.$targets[step]步骤的值 再次判断）；TeamFlags（队伍标记）、Filter（战斗人物筛选）、Enabled（是否可选）
//  Type为1：选择战斗人物
//    yield入参：TeamFlags：0b1为己方；0b10为对方；Filter（筛选函数）；Enabled：设置选择标记还是取消选择
//  Type为2：弹出选择菜单
//    yield入参：Title（菜单标题）；Items（选项）；Style（样式）；
//yield false：表示选择失败并重新进行此轮选择
//返回true表示选择完毕并成功
function *gfChoiceSingleCombatantSkill(skill, combatant, params={TeamFlags: 0b11, Filter: function(targetCombatant, combatant){if(targetCombatant.$$fightData.$info.$index >= 0 && targetCombatant.$$propertiesWithExtra.HP[0] > 0)return true;return false;}}) {
    //FightSceneJS.setTeamReadyToChoice(0b10, 0b1, true);

    //战斗人物选择
    let c = yield {Type: 1, Step: 0, TeamFlags: params.TeamFlags, Filter: params.Filter, Enabled: true};

    //判断是否符合条件
    /*while(1) {
        if(c.Value && c.Value.$$propertiesWithExtra.HP[0] > 0)
            break;
        else
            yield false;
    }
    */

    combatant.$$fightData.$choice.$targets = [[c.Value]];

    //取消 战斗人物选择状态
    yield {Type: 1, TeamFlags: params.TeamFlags, Filter: params.Filter, Enabled: false};


    //返回true表示选择完毕并成功
    return true;
}

//不用选择（比如多人技能）
//yield false：表示选择失败并重新进行此轮选择
//返回true表示选择完毕并成功
function *gfNoChoiceSkill(skill, combatant) {
    combatant.$$fightData.$choice.$targets = [-1];


    //菜单示例
    //let c = yield {Type: 2, Step: 1, Title: '深林孤鹰', Items: [1,2,3,4,5]};
    //console.warn(c, JSON.stringify(c));
    //combatant.$$fightData.$choice.$targets.push(c.Value);


    //yield false;

    //返回true表示选择完毕并成功
    return true;
}


```
