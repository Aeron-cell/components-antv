import React from 'react';
import { Axis, Point, Tooltip, Legend } from '@antv/f2';
import BaseChart, { BaseChartProps } from '../BaseChart';

export interface ScatterChartProps extends BaseChartProps {
  xField: string;
  yField: string;
  colorField?: string;
  sizeField?: string;
  size?: number | number[] | ((value: any) => number);
  showAxis?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  color?: string | string[] | ((value: any) => string);
  xAxisConfig?: any;
  yAxisConfig?: any;
  tooltipConfig?: any;
  legendConfig?: any;
}

const ScatterChart: React.FC<ScatterChartProps> = ({
  data,
  xField,
  yField,
  colorField,
  sizeField,
  size = 5,
  showAxis = true,
  showTooltip = true,
  showLegend = true,
  color,
  xAxisConfig,
  yAxisConfig,
  tooltipConfig,
  legendConfig,
  ...restProps
}) => {
  return (
    <BaseChart data={data} {...restProps}>
      {showAxis && (
        <>
          <Axis field={xField} {...xAxisConfig} />
          <Axis field={yField} {...yAxisConfig} />
        </>
      )}
      
      <Point
        x={xField}
        y={yField}
        color={colorField}
        colors={color}
        size={sizeField || (typeof size === 'number' ? size : 4)}
        shape="circle"
      />
      
      {showTooltip && <Tooltip {...tooltipConfig} />}
      
      {showLegend && colorField && <Legend {...legendConfig} />}
    </BaseChart>
  );
};

export default ScatterChart;
