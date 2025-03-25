import React from 'react';
export interface BaseChartProps {
    data: any[];
    width?: number;
    height?: number;
    pixelRatio?: number;
    padding?: number | number[] | 'auto';
    appendPadding?: number | number[];
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    animate?: boolean;
    onRender?: (canvas: any) => void;
}
declare const BaseChart: React.FC<BaseChartProps>;
export default BaseChart;
