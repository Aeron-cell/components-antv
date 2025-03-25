import React from 'react';
import { Axis, Line, Tooltip, Legend } from '@antv/f2';
import BaseChart, { BaseChartProps } from '../BaseChart';

export interface LineChartProps extends BaseChartProps {
  xField: string;
  yField: string | string[];
  smooth?: boolean;
  showAxis?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  color?: string | string[];
  lineWidth?: number;
  xAxisConfig?: any;
  yAxisConfig?: any;
  tooltipConfig?: any;
  legendConfig?: any;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  xField,
  yField,
  smooth = false,
  showAxis = true,
  showTooltip = true,
  showLegend = true,
  color,
  lineWidth = 2,
  xAxisConfig,
  yAxisConfig,
  tooltipConfig,
  legendConfig,
  ...restProps
}) => {
  // Handle multiple y fields
  const yFields = Array.isArray(yField) ? yField : [yField];
  
  return (
    <BaseChart data={data} {...restProps}>
      {showAxis && (
        <>
          <Axis field={xField} {...xAxisConfig} />
          <Axis field={yFields[0]} {...yAxisConfig} />
        </>
      )}
      
      {yFields.map((field, index) => (
        <Line
          key={field}
          x={xField}
          y={field}
          shape={smooth ? 'smooth' : 'line'}
          color={Array.isArray(color) ? color[index % color.length] : color}
          style={{ lineWidth }}
        />
      ))}
      
      {showTooltip && <Tooltip {...tooltipConfig} />}
      
      {showLegend && <Legend {...legendConfig} />}
    </BaseChart>
  );
};

export default LineChart;
