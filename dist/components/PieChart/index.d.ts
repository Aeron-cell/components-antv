import React from 'react';
import { BaseChartProps } from '../BaseChart';
export interface PieChartProps extends BaseChartProps {
    angleField: string;
    colorField: string;
    radius?: number;
    innerRadius?: number;
    showTooltip?: boolean;
    showLegend?: boolean;
    color?: string | string[];
    tooltipConfig?: any;
    legendConfig?: any;
    labelConfig?: {
        visible?: boolean;
        formatter?: (val: string, item: any) => string;
        style?: any;
    };
}
declare const PieChart: React.FC<PieChartProps>;
export default PieChart;
