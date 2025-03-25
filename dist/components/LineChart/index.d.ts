import React from 'react';
import { BaseChartProps } from '../BaseChart';
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
declare const LineChart: React.FC<LineChartProps>;
export default LineChart;
