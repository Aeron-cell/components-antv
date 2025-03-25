import React from 'react';
import { Interval, Tooltip, Legend } from '@antv/f2';
import BaseChart, { BaseChartProps } from '../BaseChart';

export interface PieChartProps extends BaseChartProps {
  angleField: string;
  colorField: string;
  radius?: number;
  innerRadius?: number;
  showTooltip?: boolean;
  showLegend?: boolean;
  color?: string | string[];
  tooltipConfig?: any;
  legendConfig?: any;
  labelConfig?: {
    visible?: boolean;
    formatter?: (val: string, item: any) => string;
    style?: any;
  };
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  angleField,
  colorField,
  radius = 0.85,
  innerRadius = 0,
  showTooltip = true,
  showLegend = true,
  color,
  tooltipConfig,
  legendConfig,
  labelConfig = { visible: true },
  ...restProps
}) => {
  // Add onRender callback to configure the coordinate system
  const handleRender = (chart: any) => {
    // Get the chart instance from the Canvas
    const chartInstance = chart.getChildren()[0];
    
    // Configure coordinate system
    chartInstance.coord({
      type: 'polar',
      transposed: true,
      radius,
      innerRadius
    });
    
    // Call original onRender if provided
    if (restProps.onRender) {
      restProps.onRender(chart);
    }
  };

  return (
    <BaseChart 
      data={data} 
      onRender={handleRender}
      {...restProps}
    >
      {/* Coordinate system is configured through props to the Chart component in BaseChart */}
      {/* We'll need to modify BaseChart to accept coordinate system configuration */}

      <Interval
        x="1"
        y={angleField}
        adjust="stack"
        color={colorField}
        colors={color}
        style={{
          lineWidth: 1,
          stroke: '#fff',
        }}
      >
        {labelConfig.visible && {
          label: {
            visible: true,
            formatter: labelConfig.formatter || ((val) => `${val}`),
            ...labelConfig.style,
          },
        }}
      </Interval>

      {showTooltip && <Tooltip {...tooltipConfig} />}

      {showLegend && <Legend {...legendConfig} />}
    </BaseChart>
  );
};

export default PieChart;
