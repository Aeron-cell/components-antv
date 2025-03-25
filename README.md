# AntV F2 React 组件库

基于 AntV F2 封装的 React 图表组件库，提供简单易用的图表组件，帮助开发者快速构建美观的移动端可视化应用。

## 特性

- **开箱即用**：提供丰富的图表组件，使用简单的 API 即可创建各种图表
- **移动优先**：专为移动端设计，性能优化，体验流畅
- **灵活可配置**：提供丰富的配置项，满足各种定制化需求
- **TypeScript 支持**：完整的类型定义，提供良好的开发体验

## 安装

```bash
npm install antv-components --save
```

## 快速开始

```jsx
import React from 'react';
import { LineChart } from 'antv-components';

const App = () => {
  const data = [
    { month: '1月', value: 63 },
    { month: '2月', value: 42 },
    { month: '3月', value: 88 },
    { month: '4月', value: 76 },
    { month: '5月', value: 99 },
    { month: '6月', value: 67 }
  ];

  return (
    <LineChart 
      data={data} 
      xField="month" 
      yField="value" 
      color="#1890ff"
    />
  );
};

export default App;
```

## 组件列表

### 基础图表组件

- **LineChart**: 折线图
- **BarChart**: 柱状图
- **PieChart**: 饼图
- **AreaChart**: 面积图
- **ScatterChart**: 散点图
- **RadarChart**: 雷达图

## 运行示例

本项目包含了一个完整的示例应用，展示了各种图表组件的使用方法。

```bash
# 克隆仓库
git clone <repository-url>

# 安装依赖
npm install

# 构建组件库
npm run build

# 运行示例
cd demo
npm install
npm start
```

## API 文档

### BaseChart

所有图表组件的基础组件，提供了通用的配置项。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 图表数据 | `any[]` | - |
| width | 图表宽度 | `number` | 350 |
| height | 图表高度 | `number` | 250 |
| pixelRatio | 像素比 | `number` | window.devicePixelRatio |
| padding | 内边距 | `number \| number[] \| 'auto'` | 'auto' |
| appendPadding | 额外的内边距 | `number \| number[]` | - |
| animate | 是否开启动画 | `boolean` | true |
| onRender | 图表渲染完成的回调函数 | `(chart: any) => void` | - |
| className | 自定义 CSS 类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |

### LineChart

折线图组件，用于展示数据随时间或有序类别的变化趋势。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| xField | x 轴字段 | `string` | - |
| yField | y 轴字段 | `string \| string[]` | - |
| smooth | 是否平滑曲线 | `boolean` | false |
| showAxis | 是否显示坐标轴 | `boolean` | true |
| showTooltip | 是否显示提示信息 | `boolean` | true |
| showLegend | 是否显示图例 | `boolean` | true |
| color | 线条颜色 | `string \| string[]` | - |
| lineWidth | 线条宽度 | `number` | 2 |
| xAxisConfig | x 轴配置 | `object` | - |
| yAxisConfig | y 轴配置 | `object` | - |
| tooltipConfig | 提示信息配置 | `object` | - |
| legendConfig | 图例配置 | `object` | - |

### BarChart

柱状图组件，用于比较不同类别的数据大小。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| xField | x 轴字段 | `string` | - |
| yField | y 轴字段 | `string \| string[]` | - |
| isStack | 是否堆叠 | `boolean` | false |
| isGroup | 是否分组 | `boolean` | false |
| showAxis | 是否显示坐标轴 | `boolean` | true |
| showTooltip | 是否显示提示信息 | `boolean` | true |
| showLegend | 是否显示图例 | `boolean` | true |
| color | 柱子颜色 | `string \| string[]` | - |
| barWidth | 柱子宽度 | `number` | - |
| xAxisConfig | x 轴配置 | `object` | - |
| yAxisConfig | y 轴配置 | `object` | - |
| tooltipConfig | 提示信息配置 | `object` | - |
| legendConfig | 图例配置 | `object` | - |

### PieChart

饼图组件，用于展示不同分类的占比情况。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| angleField | 角度字段 | `string` | - |
| colorField | 颜色字段 | `string` | - |
| radius | 饼图半径 | `number` | 0.85 |
| innerRadius | 内环半径，用于绘制环形图 | `number` | 0 |
| showTooltip | 是否显示提示信息 | `boolean` | true |
| showLegend | 是否显示图例 | `boolean` | true |
| color | 扇形颜色 | `string \| string[]` | - |
| tooltipConfig | 提示信息配置 | `object` | - |
| legendConfig | 图例配置 | `object` | - |
| labelConfig | 标签配置 | `object` | { visible: true } |

### AreaChart

面积图组件，用于展示数据随时间或有序类别的变化趋势及其累积量。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| xField | x 轴字段 | `string` | - |
| yField | y 轴字段 | `string \| string[]` | - |
| smooth | 是否平滑曲线 | `boolean` | false |
| isStack | 是否堆叠 | `boolean` | false |
| showAxis | 是否显示坐标轴 | `boolean` | true |
| showTooltip | 是否显示提示信息 | `boolean` | true |
| showLegend | 是否显示图例 | `boolean` | true |
| color | 面积颜色 | `string \| string[]` | - |
| lineWidth | 线条宽度 | `number` | 2 |
| xAxisConfig | x 轴配置 | `object` | - |
| yAxisConfig | y 轴配置 | `object` | - |
| tooltipConfig | 提示信息配置 | `object` | - |
| legendConfig | 图例配置 | `object` | - |

### ScatterChart

散点图组件，用于展示两个连续变量之间的关系。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| xField | x 轴字段 | `string` | - |
| yField | y 轴字段 | `string` | - |
| colorField | 颜色字段 | `string` | - |
| sizeField | 大小字段 | `string` | - |
| size | 点大小 | `number \| number[] \| ((value: any) => number)` | 5 |
| showAxis | 是否显示坐标轴 | `boolean` | true |
| showTooltip | 是否显示提示信息 | `boolean` | true |
| showLegend | 是否显示图例 | `boolean` | true |
| color | 点颜色 | `string \| string[] \| ((value: any) => string)` | - |
| xAxisConfig | x 轴配置 | `object` | - |
| yAxisConfig | y 轴配置 | `object` | - |
| tooltipConfig | 提示信息配置 | `object` | - |
| legendConfig | 图例配置 | `object` | - |

### RadarChart

雷达图组件，用于展示多个维度的数据。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| angleField | 角度字段 | `string` | - |
| radiusField | 半径字段 | `string \| string[]` | - |
| showAxis | 是否显示坐标轴 | `boolean` | true |
| showTooltip | 是否显示提示信息 | `boolean` | true |
| showLegend | 是否显示图例 | `boolean` | true |
| color | 线条颜色 | `string \| string[]` | - |
| lineWidth | 线条宽度 | `number` | 2 |
| showPoint | 是否显示数据点 | `boolean` | true |
| pointSize | 数据点大小 | `number` | 3 |
| axisConfig | 坐标轴配置 | `object` | - |
| tooltipConfig | 提示信息配置 | `object` | - |
| legendConfig | 图例配置 | `object` | - |

## 许可证

MIT
