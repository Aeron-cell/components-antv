import React from 'react';
import { RadarChart } from '../../../src';

const RadarChartDemo: React.FC = () => {
  // Sample data for basic radar chart
  const basicData = [
    { item: '指标1', value: 70 },
    { item: '指标2', value: 60 },
    { item: '指标3', value: 90 },
    { item: '指标4', value: 80 },
    { item: '指标5', value: 65 },
    { item: '指标6', value: 85 }
  ];

  // Sample data for multi-series radar chart
  const multiSeriesData = [
    { item: '指标1', value1: 70, value2: 30 },
    { item: '指标2', value1: 60, value2: 70 },
    { item: '指标3', value1: 90, value2: 60 },
    { item: '指标4', value1: 80, value2: 65 },
    { item: '指标5', value1: 65, value2: 80 },
    { item: '指标6', value1: 85, value2: 75 }
  ];

  return (
    <div>
      <div className="chart-container">
        <h2 className="chart-title">基础雷达图</h2>
        <p className="chart-description">
          雷达图用于展示多个维度的数据，适合用于比较多个指标的数值。
        </p>
        <div className="chart-wrapper">
          <RadarChart 
            data={basicData} 
            angleField="item" 
            radiusField="value" 
            color="#1890ff"
            lineWidth={2}
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { RadarChart } from 'antv-components';

// 数据
const data = [
  { item: '指标1', value: 70 },
  { item: '指标2', value: 60 },
  { item: '指标3', value: 90 },
  { item: '指标4', value: 80 },
  { item: '指标5', value: 65 },
  { item: '指标6', value: 85 }
];

// 使用组件
<RadarChart 
  data={data} 
  angleField="item" 
  radiusField="value" 
  color="#1890ff"
  lineWidth={2}
/>
            `}</code>
          </pre>
        </div>
      </div>

      <div className="chart-container">
        <h2 className="chart-title">多系列雷达图</h2>
        <p className="chart-description">
          多系列雷达图可以用于比较不同数据系列在多个维度上的表现。
        </p>
        <div className="chart-wrapper">
          <RadarChart 
            data={multiSeriesData} 
            angleField="item" 
            radiusField={['value1', 'value2']} 
            color={['#1890ff', '#ff6b81']}
            lineWidth={2}
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { RadarChart } from 'antv-components';

// 数据
const data = [
  { item: '指标1', value1: 70, value2: 30 },
  { item: '指标2', value1: 60, value2: 70 },
  { item: '指标3', value1: 90, value2: 60 },
  { item: '指标4', value1: 80, value2: 65 },
  { item: '指标5', value1: 65, value2: 80 },
  { item: '指标6', value1: 85, value2: 75 }
];

// 使用组件
<RadarChart 
  data={data} 
  angleField="item" 
  radiusField={['value1', 'value2']} 
  color={['#1890ff', '#ff6b81']}
  lineWidth={2}
/>
            `}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default RadarChartDemo;
