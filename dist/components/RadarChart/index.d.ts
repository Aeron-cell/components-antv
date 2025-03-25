import React from 'react';
import { BaseChartProps } from '../BaseChart';
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
declare const RadarChart: React.FC<RadarChartProps>;
export default RadarChart;
