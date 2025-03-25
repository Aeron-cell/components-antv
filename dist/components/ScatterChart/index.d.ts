import React from 'react';
import { BaseChartProps } from '../BaseChart';
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
declare const ScatterChart: React.FC<ScatterChartProps>;
export default ScatterChart;
