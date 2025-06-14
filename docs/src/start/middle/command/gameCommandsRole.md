---
title: 角色命令详解
author:
  name: 深林孤鹰
  url: https://github.com/leamus
icon: user
date: 2024-08-14
order: 2
---

## 一、说明

### 创建地图主角

功能：创建地图主角。

参数：

- `role` 为 角色资源名 或 标准创建格式的对象。
  - 参数对象属性：`$id`、`$name`、`$showName`、`$scale`、`$speed`、`$penetrate`、`$realSize`、`$avatar`、`$avatarSize`、`$x`、`$y`、`$bx`、`$by`、`$direction`、`$action`、`$targetBx`、`$targetBy`、`$targetX`、`$targetY`、`$targetBlocks`、`$targetPositions`、`$targetBlockAuto`；
  - `RID` 为要创建的角色资源名；
  - `$id` 为角色对象id（默认为 `$name` 值），id存在则会复用组件；`$name` 为游戏显示名（默认为RID值）；
  - `$showName` 为是否头顶显示名字；`$scale` 为缩放倍率数组（横竖坐标轴方向）；`$speed` 为移动速度；`$penetrate` 为是否可穿透；`$realSize` 为影子大小；`$avatar` 为头像文件名；`$avatarSize` 为头像大小；这几个属性会替换已设置好的角色资源的属性；
  - `$x`、`$y` 是像素坐标；`$bx`、`$by` 是地图块坐标（像素坐标和块坐标设置二选一）；
  - `$direction`表示面向方向（0、1、2、3分别表示上右下左）；
  - `$action`：
    - 为 `0` 表示暂时静止；为 `1` 表示随机移动；为 `-1` 表示禁止移动和操作；
    - 为 `2` 表示定向移动；此时（用其中一个即可）：
      - `$targetBx`、`$targetBy` 为定向的地图块坐标
      - `$targetX`、`$targetY` 为定向的像素坐标；
      - `$targetBlocks` 为定向的地图块坐标数组;
      - `$targetPositions` 为定向的像素坐标数组;
      - `$targetBlockAuto` 为定向的地图块自动寻路坐标数组；
  - `$start` 表示角色是否自动动作（`true` 或 `false`)；

返回：成功为组件对象，失败为`false`。

示例：

```js
let h = game.createhero({RID: '角色资源名', /*。。。其他属性*/});

let h = game.createhero('角色资源名');   //全部使用默认属性；

game.createhero(role={});
```

### 返回/修改 地图主角组件对象

功能：返回/修改 地图主角组件对象。

参数：

- `hero` 可以是下标，或字符串（主角的 `$id`），或主角组件对象，-1表示返回所有主角组件对象数组；
- `props`：`hero` 不是-1时，为修改单个主角的属性，同 `createhero` 的第二个参数对象；

返回：经过 `props` 修改的 主角 或 所有主角的列表；如果没有则返回 `null`；出错返回 `false`；

示例：

```js
let h = game.hero('主角名');

let h = game.hero(0, {$bx: 10, $by: 10, $showName: 0,/*。。。其他属性*/});

game.hero(hero=-1, props={});
```

### 删除地图主角

功能：删除地图主角；

参数：`hero` 可以是下标，或主角的 `$id`，或主角组件对象，`-1` 表示所有主角；

返回：删除成功返回 `true`；没有或错误返回 `false`；

示例：

```js
game.delhero('地图主角名');

game.delhero(hero=-1);
```

### 移动主角

功能：将主角移动到地图 `bx`、`by` 位置。

参数：

- `bx`、`by` 为目标地图块；如果超出地图，则自动调整；

示例：

```js
game.movehero(6,6);

game.movehero(bx, by);
```

### 创建地图NPC

功能：创建地图NPC。

参数：

- `role` 为 角色资源名 或 标准创建格式的对象（RID为角色资源名）；
  - 参数对象属性：同 `createhero` 参数；

返回：成功为组件对象，失败为 `false`。

示例：

```js
game.createrole(role={});
```

### 返回/修改 地图NPC组件对象

功能：返回/修改 地图NPC组件对象。

参数：

- `role` 可以是字符串（NPC的 `$id`），或NPC组件对象，`-1` 表示返回所有NPC组件对象数组；
- `props`：`role` 不是-1时，为修改单个NPC的属性，同 `createhero` 的第二个参数对象；

返回：经过 `props` 修改的 NPC 或 所有NPC的列表；如果没有则返回 `null`；出错返回 `false`；

示例：

```js
let h = game.role('NPC的$id');

let h = game.role('NPC的$id', {$bx: 10, $by: 10, $showName: 0, /*。。。其他属性*/});

game.role(role=-1, props={});
```

### 删除地图NPC

功能：删除地图NPC；

参数：

- `role` 可以是NPC的 `$id`，或NPC组件对象，`-1` 表示当前地图所有NPC；

返回：删除成功返回 `true`；没有或错误返回 `false`；

示例：

```js
game.delrole('地图NPC的$id');

game.delrole(role=-1);
```

### 移动NPC

功能：将NPC移动到地图 `bx`、`by` 位置。

参数：

- `bx`、`by` 为目标地图块；如果超出地图，则自动调整；

示例：

```js
game.moverole('NPC的$id',6,6);

game.moverole(bx, by, role);
```

### 返回角色坐标

功能：返回角色的各种坐标，或判断是否在某个地图块坐标上；

参数：

- `role` 为角色组件（可用 `hero` 和 `role` 命令返回的组件）；
  - 如果为数字或空，则是主角；如果是字符串表示 `$id`，会在 主角和NPC 中查找；
- `pos` 为 `[bx,by]`，返回角色是否在这个地图块坐标上；如果为空则表示返回角色中心所在各种坐标；

返回：如果是判断，返回 `true` 或 `false`；如果返回是坐标，则包括 `x`、`y`（实际坐标）、`bx`、`by`（地图块坐标）、`cx`、`cy`（中心坐标）、`rx1`、`ry2`、`rx2`、`ry2`（影子的左上和右下坐标）、`sx`、`sy`（视窗中的坐标）；出错返回 `false`；

示例：

```js
game.rolepos(role, pos=null);
```

### 创建战斗主角

功能：创建一个战斗主角，并放入我方战斗队伍。

参数：

- `fightrole` 为战斗主角资源名 或 标准创建格式的参数对象（具有 `RID`、`Params` 和其他属性）。

返回：战斗主角对象。

示例：

```js
game.createfighthero('战斗角色1');

game.createfighthero({RID: '战斗角色2', Params: {级别: 6}, $name: '鹰战士'});

game.createfighthero(fightrole);
```

### 删除我方战斗主角

功能：删除我方战斗队伍中的一个战斗主角。

参数：

- `fighthero` 为下标，或战斗角色的 `$name`，或战斗角色对象，或 `-1`（删除所有战斗主角）。

返回：成功返回 `true`；错误或没找到返回 `false`。

示例：

```js
game.delfighthero(0);

game.delfighthero('鹰战士');

game.delfighthero(fighthero);
```

### 返回我方战斗主角

功能：返回我方战斗队伍中的战斗主角；

参数：

- `fighthero` 为下标，或战斗角色的 `name`，或战斗角色对象，或 `-1`（返回所有战斗主角）；
- `type` 为 `0` 表示返回 对象，为 `1` 表示只返回名字（可用作选择组件）；

返回：战斗角色对象、名字字符串或数组；`false` 表示没找到或出错；

示例：

```js
let h = game.fighthero('鹰战士');

let h = game.fighthero(0);

let arrNames = game.fighthero(-1, 1);

game.fighthero(fighthero=-1, type=1);
```

### 添加技能

功能：添加技能；

参数：

- `fighthero` 为下标，或战斗角色的 `name`，或战斗角色对象；
- `skill` 为技能资源名，或 标准创建格式的对象（带有 `RID`、`Params` 和其他属性），或技能本身（带有 `$rid`）；
- `skillIndex` 为替换到第几个（如果为-1或大于已有技能数，则追加）；
- `copyedNewProps` 是 从 `skills` 复制的创建的新技能的属性（`skills` 为技能对象才有效，复制一个新技能同时再复制 `copyedNewProps` 属性）；

返回：成功返回 `true`；

示例：

```js
game.getskill(fighthero, skill, skillIndex=-1, copyedNewProps={});
```

### 移除技能

功能：移除技能；

参数：

- `fighthero`为下标，或战斗角色的 `name`，或战斗角色对象；
- `skill`：技能下标（`-1` 为删除所有 符合 `filters` 的 技能），或 技能资源名（符合 `filters` 的 技能）；
- `filters`：技能条件筛选；

返回：成功返回 `skill` 对象的数组；失败返回 `false`；

示例：

```js
game.removeskill(fighthero, skill=-1, filters={});
```

### 返回技能信息

功能：返回技能信息；

参数：

- `fighthero` 为下标，或战斗角色的 `name`，或战斗角色对象；
- `skill`：技能下标（`-1` 为所有 符合 `filters` 的 技能），或 技能资源名（符合 `filters` 的 技能）；
- `filters`：技能条件筛选；

返回：成功返回 技能数组；

示例：

```js
game.skill(fighthero, skill=-1, filters={});
```

### 战斗角色修改属性

功能：战斗角色修改属性

参数：

- `fighthero` 为下标，或战斗角色的name，或战斗角色对象；
- `props`：对象；`Key` 可以为 属性 或 属性,下标，`Value` 可以为 数字（字符串属性或n段属性都修改） 或 数组（针对n段属性，对应修改）；
  - 支持格式：`{HP: 6, HP: [6,6,6], 'HP,2': 6}`
- `type` 为 `1` 表示加，为 `2` 表示乘，为 `3` 表示赋值，为 `0` 表示将n段值被n+1段值赋值；
  - `type` 如果为数组，第一个值为上面的含义，第二个表示乘的时候 参考属性（`0` 为 `properties`，`1` 为 `propertiesWithExtra`）；
- `flags`：从左到右：是否检测升级，是否调用刷新函数（如果修改一些不用刷新的属性，就不用刷新）；

返回：成功返回战斗角色对象；失败返回 `false`；

示例：

```js
game.addprops(fighthero, props={}, type=[1,1], flags=0b11);
```

### 升级

功能：直接升一级。

参数：

- `fighthero`：为下标，或战斗角色的 `name`，或战斗角色对象；

示例：

```js
game.levelup('鹰战士');

game.levelup(fighthero);
```

### 添加道具

功能：背包内 获得 `count` 个道具；

参数：

- `goods` 可以为 道具资源名、 或 标准创建格式的对象（带有 `RID`、`Params` 和其他属性），或道具本身（带有 `$rid`），或 下标；
- `count` 为 `0` 表示使用 `goods` 内的 `$count`；

返回：返回背包中 改变后 道具个数，返回 `false` 表示错误。

示例：

```js
game.getgoods(goods, count=0);
```

### 减少道具

功能：背包内 减去 `count` 个道具；

参数：

- `goods` 可以为 道具资源名、道具对象 和 下标；
- `count` 为个数，如果为 `true` 则表示道具的所有；
  - 如果 装备数量不够，则返回<0（相差数），原道具数量不变化；

返回：返回背包中 改变后 道具个数，返回 `false` 表示错误；

示例：

```js
game.removegoods(goods, count=1);
```

### 获得道具信息

功能：获得道具列表中某项道具信息；

参数：

- `goods` 为 `-1` 表示返回所有道具的数组（此时 `filters` 是道具属性的过滤条件）；
  - `goods` 为数字（下标），则返回单个道具信息的数组；
  - `goods` 为字符串（道具资源名），返回所有符合道具信息的数组（此时 `filters` 是道具属性的过滤条件）；

返回：道具数组。

示例：

```js
game.goods(goods=-1, filters={});
```

### 使用道具

功能：使用道具（会执行道具use脚本）；

参数：

- `fighthero` 为下标，或战斗角色的 `name`，或战斗角色对象，也可以为 `null` 或 `undefined`；
- `goods` 可以为 道具资源名、道具对象 和 下标。

示例：

```js
game.goods(goodsFilter=-1);

yield game.usegoods(goods, fighthero, params);
```

### 直接装备道具

功能：直接装备一个道具（不是从背包中）；

参数：

- `fighthero`为下标，或战斗角色的 `name`，或战斗角色对象；
- `goods`可以为 道具资源名、 或 标准创建格式的对象（带有 `RID`、`Params` 和其他属性），或道具本身（带有 `$rid`），或 下标；
- `newPosition`：如果为空，则使用 `goods` 的 `position` 属性来装备；
- `copyedNewProps`是 从 `goods` 复制的创建的新道具的属性（`goods` 为道具对象才有效，复制一个新道具同时再复制（覆盖）`copyedNewProps` 属性，比如 `$count`、`$position`）；

返回：返回 `null` 表示错误；

注意：会将目标装备移除，需要保存则先 `unload` 到 `getgoods`；

示例：

```js
yield game.equip(fighthero, goods, newPosition=undefined, copyedNewProps={$count: 1});
```

### 卸下装备

功能：卸下某装备（所有个数）；

参数：

- `fighthero` 为下标，或战斗角色的 `name`，或战斗角色对象；

返回：返回旧装备对象，没有返回undefined；

示例：

```js
game.unload(fighthero, positionName);
```

### 返回战斗角色的装备

功能：返回某 `fighthero` 的装备；如果 `positionName` 为 `null`，则返回所有装备的数组；

参数：

- `fighthero` 为下标，或战斗角色的 `name`，或战斗角色对象；

返回：全部装备的数组 或 某一个位置的装备。错误返回false；

示例：

```js
game.equipment(fighthero, positionName=null);
```

### 进入战斗

功能：载入 `fightScript` 脚本 并进入战斗；

参数：

- `fightScript`：可以为 战斗脚本资源名、标准创建格式的对象（带有 `RID`、`Params` 和其他属性），或战斗脚本对象本身（带有 `$rid`）；
- `params`：是给战斗脚本 `$createData` 的参数。

示例：

```js
fight.fighting(fightScript);
```

### 开启随机战斗

功能：载入 `fightScript` 脚本 并开启随机战斗；

- `fightScript`：可以为 战斗脚本资源名、标准创建格式的对象（带有 `RID`、`Params` 和其他属性），或战斗脚本对象本身（带有 `$rid`）；
- `interval`：每过 `interval` 毫秒执行一次；
- `probability`：百分之 `probability` 的概率 是否进入随机战斗；
- `flag`：`0b1` 为行动时遇敌，`0b10` 为静止时遇敌；
- `params`：是给战斗脚本 `$createData` 的参数。

注意：会覆盖之前的fighton；

示例：

```js
fight.fighton(fightScript, probability=5, flag=3, interval=1000);
```

### 关闭随机战斗

功能：关闭随机战斗；

示例：

```js
fight.fightoff();
```

### 商店

功能：进入交易界面；

参数：

- `goods`：为买的物品 `RID` 列表；
- `mygoodsinclude`：为 `true` 表示可卖背包内所有物品，为数组则为数组中可交易的物品列表；
- `callback`：为交易结束后的脚本。
- `pauseGame`：为是否暂停游戏；值为 `true`、`false` 或字符串。如果为 `true` 或字符串则表示需要暂停等待结束，命令建议用 `yield` 关键字修饰；如果为 `false`，则尽量不要用 `yield` 关键字；

示例：

```js
[yield]
game.trade(goods=[], mygoodsinclude=true, pauseGame=true, callback=true);
```

### 获得金钱

功能：获得金钱；

返回：返回金钱数目；

示例：

```js
game.money(m=0);
```
