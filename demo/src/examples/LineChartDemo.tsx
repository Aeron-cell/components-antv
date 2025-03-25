import React from 'react';
import { LineChart } from '../../../src';

const LineChartDemo: React.FC = () => {
  // Sample data for basic line chart
  const basicData = [
    { month: '1月', value: 63 },
    { month: '2月', value: 42 },
    { month: '3月', value: 88 },
    { month: '4月', value: 76 },
    { month: '5月', value: 99 },
    { month: '6月', value: 67 }
  ];

  // Sample data for multi-line chart
  const multiLineData = [
    { month: '1月', value1: 63, value2: 40 },
    { month: '2月', value1: 42, value2: 30 },
    { month: '3月', value1: 88, value2: 50 },
    { month: '4月', value1: 76, value2: 60 },
    { month: '5月', value1: 99, value2: 70 },
    { month: '6月', value1: 67, value2: 50 }
  ];

  return (
    <div>
      <div className="chart-container">
        <h2 className="chart-title">基础折线图</h2>
        <p className="chart-description">
          简单的折线图展示，适用于展示连续数据的趋势变化。
        </p>
        <div className="chart-wrapper">
          <LineChart 
            data={basicData} 
            xField="month" 
            yField="value" 
            color="#1890ff"
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { LineChart } from 'antv-components';

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
<LineChart 
  data={data} 
  xField="month" 
  yField="value" 
  color="#1890ff"
/>
            `}</code>
          </pre>
        </div>
      </div>

      <div className="chart-container">
        <h2 className="chart-title">多条折线图</h2>
        <p className="chart-description">
          多条折线图可以用来比较多个数据系列的趋势。
        </p>
        <div className="chart-wrapper">
          <LineChart 
            data={multiLineData} 
            xField="month" 
            yField={['value1', 'value2']} 
            color={['#1890ff', '#ff6b81']}
            smooth={true}
          />
        </div>
        <div className="code-block">
          <pre>
            <code>{`
import { LineChart } from 'antv-components';

// 数据
const data = [
  { month: '1月', value1: 63, value2: 40 },
  { month: '2月', value1: 42, value2: 30 },
  { month: '3月', value1: 88, value2: 50 },
  { month: '4月', value1: 76, value2: 60 },
  { month: '5月', value1: 99, value2: 70 },
  { month: '6月', value1: 67, value2: 50 }
];

// 使用组件
<LineChart 
  data={data} 
  xField="month" 
  yField={['value1', 'value2']} 
  color={['#1890ff', '#ff6b81']}
  smooth={true}
/>
            `}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default LineChartDemo;
