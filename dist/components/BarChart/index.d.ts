import React from 'react';
import { BaseChartProps } from '../BaseChart';
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
declare const BarChart: React.FC<BarChartProps>;
export default BarChart;
