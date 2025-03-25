import React from 'react';
import { BarChart } from '../../../src';

const BarChartDemo: React.FC = () => {
  // Sample data for basic bar chart
  const basicData = [
    { category: '分类1', value: 340 },
    { category: '分类2', value: 220 },
    { category: '分类3', value: 180 },
    { category: '分类4', value: 270 },
    { category: '分类5', value: 320 }
  ];

  // Sample data for grouped bar chart
  const groupedData = [
    { category: '分类1', value1: 340, value2: 240 },
    { category: '分类2', value1: 220, value2: 180 },
    { category: '分类3', value1: 180, value2: 220 },
    { category: '分类4', value1: 270, value2: 300 },
    { category: '分类5', value1: 320, value2: 270 }
  ];

  // Sample data for stacked bar chart
  const stackedData = [
    { category: '分类1', value1: 340, value2: 240, value3: 120 },
    { category: '分类2', value1: 220, value2: 180, value3: 150 },
    { category: '分类3', value1: 180, value2: 220, value3: 180 },
    { category: '分类4', value1: 270, value2: 300, value3: 110 },
    { category: '分类5', value1: 320, value2: 270, value3: 140 }
  ];

  return (
    <div>
      <div className="chart-container">
        <h2 className="chart-title">基础柱状图</h2>
        <p className="chart-description">
          简单的柱状图展示，适用于展示各个类别的数值大小对比。
        </p>
        <div className="chart-wrapper">
          <BarChart 
            data={basicData} 
            xField="category" 
            yField="value" 
            color="#1890ff"
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { BarChart } from 'antv-components';

// 数据
const data = [
  { category: '分类1', value: 340 },
  { category: '分类2', value: 220 },
  { category: '分类3', value: 180 },
  { category: '分类4', value: 270 },
  { category: '分类5', value: 320 }
];

// 使用组件
<BarChart 
  data={data} 
  xField="category" 
  yField="value" 
  color="#1890ff"
/>
            `}</code>
          </pre>
        </div>
      </div>

      <div className="chart-container">
        <h2 className="chart-title">分组柱状图</h2>
        <p className="chart-description">
          分组柱状图可以用来比较多个数据系列在各个类别下的表现。
        </p>
        <div className="chart-wrapper">
          <BarChart 
            data={groupedData} 
            xField="category" 
            yField={['value1', 'value2']} 
            color={['#1890ff', '#ff6b81']}
            isGroup={true}
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { BarChart } from 'antv-components';

// 数据
const data = [
  { category: '分类1', value1: 340, value2: 240 },
  { category: '分类2', value1: 220, value2: 180 },
  { category: '分类3', value1: 180, value2: 220 },
  { category: '分类4', value1: 270, value2: 300 },
  { category: '分类5', value1: 320, value2: 270 }
];

// 使用组件
<BarChart 
  data={data} 
  xField="category" 
  yField={['value1', 'value2']} 
  color={['#1890ff', '#ff6b81']}
  isGroup={true}
/>
            `}</code>
          </pre>
        </div>
      </div>

      <div className="chart-container">
        <h2 className="chart-title">堆叠柱状图</h2>
        <p className="chart-description">
          堆叠柱状图可以展示同一类别下多个数据系列的累积效果。
        </p>
        <div className="chart-wrapper">
          <BarChart 
            data={stackedData} 
            xField="category" 
            yField={['value1', 'value2', 'value3']} 
            color={['#1890ff', '#ff6b81', '#ffc069']}
            isStack={true}
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { BarChart } from 'antv-components';

// 数据
const data = [
  { category: '分类1', value1: 340, value2: 240, value3: 120 },
  { category: '分类2', value1: 220, value2: 180, value3: 150 },
  { category: '分类3', value1: 180, value2: 220, value3: 180 },
  { category: '分类4', value1: 270, value2: 300, value3: 110 },
  { category: '分类5', value1: 320, value2: 270, value3: 140 }
];

// 使用组件
<BarChart 
  data={data} 
  xField="category" 
  yField={['value1', 'value2', 'value3']} 
  color={['#1890ff', '#ff6b81', '#ffc069']}
  isStack={true}
/>
            `}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default BarChartDemo;
