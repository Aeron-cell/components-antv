import React from 'react';
import { Axis, Interval, Tooltip, Legend } from '@antv/f2';
import BaseChart, { BaseChartProps } from '../BaseChart';

export interface BarChartProps extends BaseChartProps {
  xField: string;
  yField: string | string[];
  isStack?: boolean;
  isGroup?: boolean;
  showAxis?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  color?: string | string[];
  barWidth?: number;
  xAxisConfig?: any;
  yAxisConfig?: any;
  tooltipConfig?: any;
  legendConfig?: any;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  xField,
  yField,
  isStack = false,
  isGroup = false,
  showAxis = true,
  showTooltip = true,
  showLegend = true,
  color,
  barWidth,
  xAxisConfig,
  yAxisConfig,
  tooltipConfig,
  legendConfig,
  ...restProps
}) => {
  // Handle multiple y fields
  const yFields = Array.isArray(yField) ? yField : [yField];
  
  // Determine adjust type - use undefined instead of null
  let adjustType: 'stack' | 'dodge' | undefined = undefined;
  if (isStack) adjustType = 'stack';
  else if (isGroup) adjustType = 'dodge';
  
  return (
    <BaseChart data={data} {...restProps}>
      {showAxis && (
        <>
          <Axis field={xField} {...xAxisConfig} />
          <Axis field={yFields[0]} {...yAxisConfig} />
        </>
      )}
      
      <Interval
        x={xField}
        y={yFields[0]}
        adjust={adjustType}
        color={Array.isArray(color) ? color[0] : color}
        style={{ width: barWidth }}
      />
      
      {showTooltip && <Tooltip {...tooltipConfig} />}
      
      {showLegend && <Legend {...legendConfig} />}
    </BaseChart>
  );
};

export default BarChart;
