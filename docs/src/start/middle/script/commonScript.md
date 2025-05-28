---
title: 通用脚本详解
author:
  name: 深林孤鹰
  url: https://github.com/leamus
icon: scroll
order: 1
---

## 一、说明

通用脚本是作为简单的更改就能一定程度上自定义游戏的存在，不满足于视图命令产生的模板游戏，就可以进入这个脚本来修改，难度比视图命令稍高，但比插件扩展要低得多。

## 二、位置

通用脚本的名字是common_script.js，在工程根目录下，如果不存在则引擎会使用默认的系统通用脚本，从主界面->通用脚本就可以看到，点击保存可以产生文件进行修改。

## 三、修改

通用脚本可以自定义的东西很多，大体有以下分类（一般来说，带\$开头的都是系统使用的）：

### 1、配置

配置变量\$config，包含了\$game（游戏配置），\$map（地图）、\$role（角色）、\$spriteEffect（特效）、\$joystick（摇杆）、\$buttons（按钮）、\$window（窗口）、\$styles（样式）、\$names（名称）、\$fight（战斗场景）、\$android（安卓）、\$protoObjects（4个根对象属性）等，修改这些可以一定程度上对游戏进行自定义风格。

### 2、游戏相关

\*\$gameInit、\*\$beforeSave、\*\$beforeLoad、\*\$afterSave、\*\$afterLoad、\*\$gameOverScript函数，分别是：游戏初始化调用（游戏开始、读档时会调用）；存档前调用函数、读档前调用函数；存档后调用函数；读档后调用函数，游戏结束函数。

其中 *\$beforeSave、\*\$beforeLoad 最好是函数，如果是生成器则不会异步。

### 3、地图模式相关

\$Combatant：创建战斗人物时的构造函数，你可以在这里自定义战斗人物的属性；
\$combatantInfo：战斗人物信息（在状态面板中显示的字符串）；
\$showGoodsName：道具的名称格式（比如在背包中显示每个道具的名）；
\$showCombatantName：战斗人物的名称格式（比如在状态面板或背包面板中显示的每个战斗人物名）；
\$refreshCombatant：刷新战斗人物数据；默认的会调用级别检测和计算 战斗人物所有附加属性；这个函数会随着游戏主循环一直被调用；
levelUp：级别检测；会调用战斗人物的级别检测函数，如果没有则调用全局的，如果没有则调用系统默认的；
computeCombatantPropertiesWithExtra：计算 战斗人物所有附加属性；这个函数比较重要，系统默认实现了遍历所有装备和Buff，然后将计算的新属性存在战斗人物对象的\$\$propertiesWithExtra属性中。

### 4、战斗相关

\$commonRunAwayAlgorithm：通用战斗逃跑算法；如果战斗脚本中定义了使用通用战斗逃跑算法，则调用它，默认是50%概率。

\*\$fightRolesRound：一个战斗回合内战斗人物的战斗顺序（返回战斗人物数组），返回null表示战斗回合结束。默认是按速度排序并依次返回战场上所有战斗人物（跳过血量为0的）。这个函数比较重要，你可以根据自己的想法进行自定义战斗次序，比如一个战斗回合内可以让一个战斗人物多次进行战斗等）。

\$skillEffectAlgorithm：技能效果算法；战斗技能中如果使用它则会调用，一般用来做普通攻击（因为它的算法是固定的）。系统默认是我乱做的。

\$fightRoleChoiceSkillsOrGoodsAlgorithm：战斗人物选择技能或道具算法；战斗开始包括我方和敌方的战斗技能或道具的使用顺序。

getBuff：战斗人物获得Buff；系统自带了毒、乱、封、眠、属性 5个Buff，可以直接使用（参数可以定义回合数、是否叠加等等），也可以自定义其他一些Buff（需要在几个地方修改）。

\$combatantRoundScript：每个战斗人物的回合脚本，会在4个阶段调用（战斗人物回合开始前、我方选择完毕、我方和敌方选择和验证完毕和战斗人物行动后）；用来处理一些事件或Buff效果；返回一个生成器对象用来执行，返回null表示跳过此回合。

\*combatantRoundEffects：\$combatantRoundScript调用，处理的具体代码；

\$commonCheckSkill：检查技能、道具是否可在战斗中使用（有4个阶段会调用：见stage）；返回：true表示可以使用；字符串和数组表示不能使用并提示的信息（只有选择时）；stage为0表示我方刚选择技能时，为1表示我方选择技能的步骤完毕，为10表示战斗中我方或敌方刚选择技能时，为11表示战斗中我方或敌方选择技能的步骤完毕（可在阶段11减去MP，道具的技能可单独设置）；会检测技能、道具的相关函数并调用返回；

\$checkAllCombatants：检测是否战斗完毕，扫描所有战斗角色并将死亡角色隐藏；返回：0为没有结束；1为胜利；-1为失败；

\*\$commonFightInitScript：通用战斗初始化脚本；战斗开始时调用，可以做事件、上场人物选择等；

\*\$commonFightStartScript：通用战斗开始脚本；

\*\$commonFightRoundScript：通用战斗回合脚本；每回合都会调用；

\*\$commonFightEndScript：通用战斗结束脚本；战斗结束时调用，默认会将敌方所有的经验、金钱和道具（概率）获得；

\$fightCombatantPositionAlgorithm：用来获取 某战斗角色 中心位置；用来布局战场站位；

\$fightCombatantMeleePositionAlgorithm：战斗角色近战 坐标；近战时对方的对己方的走位坐标；

\$fightSkillMeleePositionAlgorithm：特效在战斗角色的 坐标；释放技能时技能所在的坐标；

\$fightCombatantSetChoice：设置 战斗人物的 初始化 或 休息状态；

\$fightMenus：战斗菜单；可以自定义战斗菜单和对应功能；

\$fightButtons：战斗界面的按钮；

### 5、其他

\$readSavesInfo：读取存档的信息；默认是3个；

<Catalog />
