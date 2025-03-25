import React from 'react';
import { AreaChart } from '../../../src';

const AreaChartDemo: React.FC = () => {
  // Sample data for basic area chart
  const basicData = [
    { month: '1月', value: 63 },
    { month: '2月', value: 42 },
    { month: '3月', value: 88 },
    { month: '4月', value: 76 },
    { month: '5月', value: 99 },
    { month: '6月', value: 67 }
  ];

  // Sample data for stacked area chart
  const stackedData = [
    { month: '1月', value1: 63, value2: 40, value3: 30 },
    { month: '2月', value1: 42, value2: 30, value3: 20 },
    { month: '3月', value1: 88, value2: 50, value3: 40 },
    { month: '4月', value1: 76, value2: 60, value3: 45 },
    { month: '5月', value1: 99, value2: 70, value3: 50 },
    { month: '6月', value1: 67, value2: 50, value3: 30 }
  ];

  return (
    <div>
      <div className="chart-container">
        <h2 className="chart-title">基础面积图</h2>
        <p className="chart-description">
          面积图是在折线图的基础上，将折线与坐标轴之间的区域填充颜色，用于强调数量随时间变化的趋势。
        </p>
        <div className="chart-wrapper">
          <AreaChart 
            data={basicData} 
            xField="month" 
            yField="value" 
            color="#1890ff"
            smooth={true}
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { AreaChart } from 'antv-components';

// 数据
const data = [
  { month: '1月', value: 63 },
  { month: '2月', value: 42 },
  { month: '3月', value: 88 },
  { month: '4月', value: 76 },
  { month: '5月', value: 99 },
  { month: '6月', value: 67 }
];

// 使用组件
<AreaChart 
  data={data} 
  xField="month" 
  yField="value" 
  color="#1890ff"
  smooth={true}
/>
            `}</code>
          </pre>
        </div>
      </div>

      <div className="chart-container">
        <h2 className="chart-title">堆叠面积图</h2>
        <p className="chart-description">
          堆叠面积图可以展示多个数据系列随时间的累积变化趋势。
        </p>
        <div className="chart-wrapper">
          <AreaChart 
            data={stackedData} 
            xField="month" 
            yField={['value1', 'value2', 'value3']} 
            color={['#1890ff', '#ff6b81', '#ffc069']}
            isStack={true}
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { AreaChart } from 'antv-components';

// 数据
const data = [
  { month: '1月', value1: 63, value2: 40, value3: 30 },
  { month: '2月', value1: 42, value2: 30, value3: 20 },
  { month: '3月', value1: 88, value2: 50, value3: 40 },
  { month: '4月', value1: 76, value2: 60, value3: 45 },
  { month: '5月', value1: 99, value2: 70, value3: 50 },
  { month: '6月', value1: 67, value2: 50, value3: 30 }
];

// 使用组件
<AreaChart 
  data={data} 
  xField="month" 
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

export default AreaChartDemo;
