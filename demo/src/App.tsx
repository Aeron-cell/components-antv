import React, { useState } from 'react';
import LineChartDemo from './examples/LineChartDemo';
import BarChartDemo from './examples/BarChartDemo';
import PieChartDemo from './examples/PieChartDemo';
import AreaChartDemo from './examples/AreaChartDemo';
import ScatterChartDemo from './examples/ScatterChartDemo';
import RadarChartDemo from './examples/RadarChartDemo';

import './App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('line');

  const renderContent = () => {
    switch (activeTab) {
      case 'line':
        return <LineChartDemo />;
      case 'bar':
        return <BarChartDemo />;
      case 'pie':
        return <PieChartDemo />;
      case 'area':
        return <AreaChartDemo />;
      case 'scatter':
        return <ScatterChartDemo />;
      case 'radar':
        return <RadarChartDemo />;
      default:
        return <LineChartDemo />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>AntV F2 React 组件库示例</h1>
      </header>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'line' ? 'active' : ''}`}
          onClick={() => setActiveTab('line')}
        >
          折线图
        </button>
        <button
          className={`tab ${activeTab === 'bar' ? 'active' : ''}`}
          onClick={() => setActiveTab('bar')}
        >
          柱状图
        </button>
        <button
          className={`tab ${activeTab === 'pie' ? 'active' : ''}`}
          onClick={() => setActiveTab('pie')}
        >
          饼图
        </button>
        <button
          className={`tab ${activeTab === 'area' ? 'active' : ''}`}
          onClick={() => setActiveTab('area')}
        >
          面积图
        </button>
        <button
          className={`tab ${activeTab === 'scatter' ? 'active' : ''}`}
          onClick={() => setActiveTab('scatter')}
        >
          散点图
        </button>
        <button
          className={`tab ${activeTab === 'radar' ? 'active' : ''}`}
          onClick={() => setActiveTab('radar')}
        >
          雷达图
        </button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
