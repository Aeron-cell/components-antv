import React from 'react';
import { Axis, Line, Point, Tooltip, Legend } from '@antv/f2';
import BaseChart, { BaseChartProps } from '../BaseChart';

export interface RadarChartProps extends BaseChartProps {
  angleField: string;
  radiusField: string | string[];
  showAxis?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  color?: string | string[];
  lineWidth?: number;
  showPoint?: boolean;
  pointSize?: number;
  axisConfig?: any;
  tooltipConfig?: any;
  legendConfig?: any;
}

const RadarChart: React.FC<RadarChartProps> = ({
  data,
  angleField,
  radiusField,
  showAxis = true,
  showTooltip = true,
  showLegend = true,
  color,
  lineWidth = 2,
  showPoint = true,
  pointSize = 3,
  axisConfig,
  tooltipConfig,
  legendConfig,
  ...restProps
}) => {
  // Handle multiple radius fields
  const radiusFields = Array.isArray(radiusField) ? radiusField : [radiusField];
  
  // Add onRender callback to configure the coordinate system
  const handleRender = (chart: any) => {
    // Get the chart instance from the Canvas
    const chartInstance = chart.getChildren()[0];
    
    // Configure coordinate system
    chartInstance.coord({
      type: 'polar'
    });
    
    // Call original onRender if provided
    if (restProps.onRender) {
      restProps.onRender(chart);
    }
  };
  
  return (
    <BaseChart data={data} onRender={handleRender} {...restProps}>
      
      {showAxis && (
        <Axis
          field={angleField}
          grid={{
            lineDash: null,
            line: {
              style: {
                stroke: '#e8e8e8',
                lineWidth: 1
              }
            }
          }}
          {...axisConfig}
        />
      )}
      
      {radiusFields.map((field, index) => (
        <React.Fragment key={field}>
          <Line
            x={angleField}
            y={field}
            color={Array.isArray(color) ? color[index % color.length] : color}
            style={{ lineWidth }}
          />
          
          {showPoint && (
            <Point
              x={angleField}
              y={field}
              color={Array.isArray(color) ? color[index % color.length] : color}
              size={pointSize}
              shape="circle"
            />
          )}
        </React.Fragment>
      ))}
      
      {showTooltip && <Tooltip {...tooltipConfig} />}
      
      {showLegend && <Legend {...legendConfig} />}
    </BaseChart>
  );
};

export default RadarChart;
