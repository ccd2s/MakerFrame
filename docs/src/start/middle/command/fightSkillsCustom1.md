---
title: 技能脚本-自定义技能（上）
author:
  name: 深林孤鹰
  url: https://github.com/leamus
icon: gear
order: 8
---

## 一、说明

自定义技能包含两种：技能效果动画 和 技能选择。

这节先讲技能效果动画。

## 二、实现原理

技能脚本的 \$playScript 生成器函数定义了技能应该如何播放动画和产生何种效果，只需通过yield一个对象 就能实现，这个对象的定义如下：

```text
Combatant：本战斗人物（缺省为释放技能的战斗人物）
Target：目标战斗人物
Type：
  1：刷新人物信息（血条），并计算properties_with_extra，隐藏死亡角色；
  2：延时；
    Interval：延时时长
  3：结算 技能效果，会调用skill_algorithm，参数为SkillParams，会返回执行结果（也可以直接调用game.gf["$sys_fight_skill_algorithm"](combatant, targetCombatantOrTeamIndex, combatantActionSpriteData.SkillParams)）
  4：隐藏死亡角色
  10：切换动作
    Name：动作名
    Loops：播放次数
    Scale：数组，x、y方向的缩放
    Opacity：透明度
    Interval：间隔多久开始下一个；-1为等待播放完毕；0为不等待；>0为时长
    Duration：播放时长（-1为等待播放完毕；为空则等于Interval）
    Run：移动效果（Interval必须大于0）；0表示回到原位，1表示移动到 Target 目标人物位置；2表示移动到 Target 队伍号中间前面（0表示己方，1表示对方）
    Offset：数组；移动偏移；
  20：播放一个特效动画
    Name：特效名
    Loops：播放次数
    ID：不唯一，就会播放多个（否则复用）；缺省为Name值；
    Scale：同上
    Opacity：同上
    Interval：间隔多久开始下一个；-1为等待播放完毕；0为不等待；>0为时长
    Duration：播放时长（-1为等待播放完毕；为空则等于Interval）
    Position：为0、1表示 位置在 Combatant，为2表示 位置在 Target 队伍号中间前面（0表示己方，1表示对方）；
    Run（Duration必须大于0）：移动效果；同上
    Offset：数组；移动偏移；
  30：显示动态文字（默认向上）
    Scale：缩放
    Opacity：透明度
    Interval：播放时长；同上
    Duration：播放时长
    Color：文字颜色
    Text：文本
    FontSize：文字大小
    Position：位置，如果没定义则使用 Combatant 的位置
```

这些可能不太好理解，可以通过技能视图编辑器编译出来的代码对比学习。
