import React from 'react';
import { ScatterChart } from '../../../src';

const ScatterChartDemo: React.FC = () => {
  // Sample data for basic scatter chart
  const basicData = [
    { x: 10, y: 8 },
    { x: 7, y: 7 },
    { x: 14, y: 15 },
    { x: 18, y: 12 },
    { x: 9, y: 10 },
    { x: 12, y: 5 },
    { x: 15, y: 11 },
    { x: 8, y: 4 },
    { x: 5, y: 9 },
    { x: 11, y: 14 },
    { x: 13, y: 8 },
    { x: 4, y: 3 },
    { x: 16, y: 16 },
    { x: 3, y: 7 },
    { x: 17, y: 13 }
  ];

  // Sample data for bubble chart
  const bubbleData = [
    { x: 10, y: 8, size: 20, category: 'A' },
    { x: 7, y: 7, size: 15, category: 'A' },
    { x: 14, y: 15, size: 30, category: 'B' },
    { x: 18, y: 12, size: 25, category: 'B' },
    { x: 9, y: 10, size: 10, category: 'A' },
    { x: 12, y: 5, size: 18, category: 'C' },
    { x: 15, y: 11, size: 22, category: 'B' },
    { x: 8, y: 4, size: 8, category: 'C' },
    { x: 5, y: 9, size: 12, category: 'A' },
    { x: 11, y: 14, size: 28, category: 'B' },
    { x: 13, y: 8, size: 16, category: 'C' },
    { x: 4, y: 3, size: 5, category: 'C' },
    { x: 16, y: 16, size: 32, category: 'B' },
    { x: 3, y: 7, size: 9, category: 'A' },
    { x: 17, y: 13, size: 26, category: 'B' }
  ];

  return (
    <div>
      <div className="chart-container">
        <h2 className="chart-title">基础散点图</h2>
        <p className="chart-description">
          散点图用于展示两个连续变量之间的关系，每个点代表一个观测值。
        </p>
        <div className="chart-wrapper">
          <ScatterChart 
            data={basicData} 
            xField="x" 
            yField="y" 
            color="#1890ff"
            size={5}
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { ScatterChart } from 'antv-components';

// 数据
const data = [
  { x: 10, y: 8 },
  { x: 7, y: 7 },
  { x: 14, y: 15 },
  { x: 18, y: 12 },
  // ...更多数据
];

// 使用组件
<ScatterChart 
  data={data} 
  xField="x" 
  yField="y" 
  color="#1890ff"
  size={5}
/>
            `}</code>
          </pre>
        </div>
      </div>

      <div className="chart-container">
        <h2 className="chart-title">气泡图</h2>
        <p className="chart-description">
          气泡图是散点图的变体，通过点的大小和颜色来表示额外的维度。
        </p>
        <div className="chart-wrapper">
          <ScatterChart 
            data={bubbleData} 
            xField="x" 
            yField="y" 
            colorField="category"
            sizeField="size"
            color={['#1890ff', '#ff6b81', '#ffc069']}
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { ScatterChart } from 'antv-components';

// 数据
const data = [
  { x: 10, y: 8, size: 20, category: 'A' },
  { x: 7, y: 7, size: 15, category: 'A' },
  { x: 14, y: 15, size: 30, category: 'B' },
  // ...更多数据
];

// 使用组件
<ScatterChart 
  data={data} 
  xField="x" 
  yField="y" 
  colorField="category"
  sizeField="size"
  color={['#1890ff', '#ff6b81', '#ffc069']}
/>
            `}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ScatterChartDemo;
