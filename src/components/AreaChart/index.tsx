import React from 'react';
import { Axis, Area, Line, Tooltip, Legend } from '@antv/f2';
import BaseChart, { BaseChartProps } from '../BaseChart';

export interface AreaChartProps extends BaseChartProps {
  xField: string;
  yField: string | string[];
  smooth?: boolean;
  showAxis?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  color?: string | string[];
  lineWidth?: number;
  isStack?: boolean;
  xAxisConfig?: any;
  yAxisConfig?: any;
  tooltipConfig?: any;
  legendConfig?: any;
}

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  xField,
  yField,
  smooth = false,
  showAxis = true,
  showTooltip = true,
  showLegend = true,
  color,
  lineWidth = 2,
  isStack = false,
  xAxisConfig,
  yAxisConfig,
  tooltipConfig,
  legendConfig,
  ...restProps
}) => {
  // Handle multiple y fields
  const yFields = Array.isArray(yField) ? yField : [yField];
  
  // Determine adjust type - don't use null, use undefined instead when not stacking
  const adjustType = isStack ? 'stack' : undefined;
  
  return (
    <BaseChart data={data} {...restProps}>
      {showAxis && (
        <>
          <Axis field={xField} {...xAxisConfig} />
          <Axis field={yFields[0]} {...yAxisConfig} />
        </>
      )}
      
      {yFields.map((field, index) => (
        <React.Fragment key={field}>
          <Area
            x={xField}
            y={field}
            shape={smooth ? 'smooth' : 'area'}
            color={Array.isArray(color) ? color[index % color.length] : color}
            adjust={adjustType}
          />
          <Line
            x={xField}
            y={field}
            shape={smooth ? 'smooth' : 'line'}
            color={Array.isArray(color) ? color[index % color.length] : color}
            style={{ lineWidth }}
            adjust={adjustType}
          />
        </React.Fragment>
      ))}
      
      {showTooltip && <Tooltip {...tooltipConfig} />}
      
      {showLegend && <Legend {...legendConfig} />}
    </BaseChart>
  );
};

export default AreaChart;
