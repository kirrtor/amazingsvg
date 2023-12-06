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

![Screenshot_2023_1206_103148](C:\Users\17709\Documents\Tencent Files\1770941137\FileRecv\MobileFile\Screenshot_2023_1206_103148.gif)

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