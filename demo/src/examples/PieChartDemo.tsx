import React from 'react';
import { PieChart } from '../../../src';

const PieChartDemo: React.FC = () => {
  // Sample data for basic pie chart
  const basicData = [
    { type: '分类一', value: 27 },
    { type: '分类二', value: 25 },
    { type: '分类三', value: 18 },
    { type: '分类四', value: 15 },
    { type: '分类五', value: 10 },
    { type: '其他', value: 5 }
  ];

  // Sample data for donut chart
  const donutData = [
    { type: '分类一', value: 340 },
    { type: '分类二', value: 220 },
    { type: '分类三', value: 180 },
    { type: '分类四', value: 140 },
    { type: '分类五', value: 120 }
  ];

  return (
    <div>
      <div className="chart-container">
        <h2 className="chart-title">基础饼图</h2>
        <p className="chart-description">
          饼图用于表示不同分类的占比情况，通过弧度大小来反映各个分类的数值比例。
        </p>
        <div className="chart-wrapper">
          <PieChart 
            data={basicData} 
            angleField="value" 
            colorField="type" 
            color={['#1890ff', '#13c2c2', '#52c41a', '#faad14', '#f5222d', '#722ed1']}
            labelConfig={{
              visible: true,
              formatter: (val, item) => `${item._origin.type}: ${item._origin.value}%`
            }}
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { PieChart } from 'antv-components';

// 数据
const data = [
  { type: '分类一', value: 27 },
  { type: '分类二', value: 25 },
  { type: '分类三', value: 18 },
  { type: '分类四', value: 15 },
  { type: '分类五', value: 10 },
  { type: '其他', value: 5 }
];

// 使用组件
<PieChart 
  data={data} 
  angleField="value" 
  colorField="type" 
  color={['#1890ff', '#13c2c2', '#52c41a', '#faad14', '#f5222d', '#722ed1']}
  labelConfig={{
    visible: true,
    formatter: (val, item) => \`\${item._origin.type}: \${item._origin.value}%\`
  }}
/>
            `}</code>
          </pre>
        </div>
      </div>

      <div className="chart-container">
        <h2 className="chart-title">环形图</h2>
        <p className="chart-description">
          环形图是饼图的一种变体，通过中心留空的方式，可以在中间添加额外的信息。
        </p>
        <div className="chart-wrapper">
          <PieChart 
            data={donutData} 
            angleField="value" 
            colorField="type" 
            color={['#1890ff', '#13c2c2', '#52c41a', '#faad14', '#f5222d']}
            radius={0.8}
            innerRadius={0.5}
            labelConfig={{
              visible: true,
              formatter: (val, item) => `${item._origin.type}`
            }}
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { PieChart } from 'antv-components';

// 数据
const data = [
  { type: '分类一', value: 340 },
  { type: '分类二', value: 220 },
  { type: '分类三', value: 180 },
  { type: '分类四', value: 140 },
  { type: '分类五', value: 120 }
];

// 使用组件
<PieChart 
  data={data} 
  angleField="value" 
  colorField="type" 
  color={['#1890ff', '#13c2c2', '#52c41a', '#faad14', '#f5222d']}
  radius={0.8}
  innerRadius={0.5}
  labelConfig={{
    visible: true,
    formatter: (val, item) => \`\${item._origin.type}\`
  }}
/>
            `}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PieChartDemo;
