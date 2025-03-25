import React from 'react';
import { BaseChartProps } from '../BaseChart';
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
declare const AreaChart: React.FC<AreaChartProps>;
export default AreaChart;
