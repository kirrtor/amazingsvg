## 一、起步

### （1）安装

​    npm install amazingsvg  

​    或 

​    yarn add amazingsvg  

### （2）引入 

​    import Amazingsvg from 'amazingsvg';

​    import "amazingsvg/lib/amazingsvg.css"



## 二、使用

### 基础动画示例

![Image text](https://file.aitsign.cn/aiEnterprise/web/dev/picture/2023/1206/20231206133845GonQw_YvCpi.gif)

### （1）Arrow

-  **箭头悬浮**

```jsx
 <Amazingsvg.Arrow  />
```

- **属性**

| name        | 名称     | 类型             |
| ----------- | -------- | ---------------- |
| width       | 宽度     | number \| string |
| height      | 高度     | number \| string |
| itemHeight  | 成员高度 | number \| string |
| number      | 数量     | number \| string |
| fillColor   | 填充颜色 | string           |
| borderColor | 边框颜色 | string           |
| dep         | 下沉深度 | number \| string |



### （2） Decoration2

- **旋转盘**

```jsx
 <Amazingsvg.Decoration2  />
```

- **属性**

| name        | 名称     | 类型             |
| ----------- | -------- | ---------------- |
| width       | 宽度     | number \| string |
| height      | 高度     | number \| string |
| outColor    | 外圈颜色 | string           |
| number      | 数量     | number \| string |
| insideColor | 内圈颜色 | string           |
| lineColor   | 内线颜色 | string           |



### （3）Decoration5

- **标题伸缩**

```jsx
<Amazingsvg.Decoration5  />
```

- **属性**

| name   | 名称 | 类型             |
| ------ | ---- | ---------------- |
| width  | 宽度 | number \| string |
| height | 高度 | number \| string |
| color  | 颜色 | string           |



### （4）EnergyBar

- **能量条**

```jsx
<Amazingsvg.EnergyBar  />
```

- **属性**

| name        | 名称                     | 类型             |
| ----------- | ------------------------ | ---------------- |
| width       | 宽度                     | number \| string |
| height      | 高度                     | number \| string |
| number      | 数量                     | number \| string |
| strokeWidth | 边框宽度                 | number \| string |
| fillColor   | 填充颜色                 | string           |
| fromColor   | 渐变开始颜色             | string           |
| toColor     | 渐变目标颜色             | string           |
| borderColor | 边框颜色                 | string           |
| itemWidth   | 成员宽度                 | number \| string |
| space       | 成员间隙                 | number \| string |
| speed       | 速度(字面属性，尚未完成) | number \| string |



### （5）Mask

- 流光遮罩边框

```jsx
<Amazingsvg.Mask  />
```

- **属性**

| name       | 名称                | 类型             |
| ---------- | ------------------- | ---------------- |
| width      | 宽度                | number \| string |
| height     | 高度                | number \| string |
| color      | 颜色                | string           |
| isRadius   | 是否圆角(默认false) | number \| string |
| lightColor | 发光颜色            | string           |

### （6）mapPath

- 自定义轨迹

![Image text](https://file.aitsign.cn/aiEnterprise/web/dev/picture/2023/1206/20231206173518T8OWw_MCYXt.gif)

```jsx
<Amazingsvg.MapPath  />
```

- **属性**

| name          | 名称                       | 类型             |
| ------------- | -------------------------- | ---------------- |
| gradientColor | 渐变颜色                   | string           |
| dur           | 持续时间                   | number \| string |
| r             | 圆半径                     | number \| string |
| color         | 路径颜色                   | string           |
| strokeWidth   | 边框宽度                   | number \| string |
| from          | 虚线空白范围               | string           |
| to            | 虚线线条范围               | string           |
| isPathAnimate | 是否启用路径动画(默认true) | boolean          |
| isMask        | 是否启用遮罩(默认true)     | boolean          |
| isPath        | 是否展示路径(默认false)    | boolean          |