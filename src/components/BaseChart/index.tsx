import React, { useEffect, useRef } from 'react';
import { Canvas, Chart } from '@antv/f2';

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

const BaseChart: React.FC<BaseChartProps> = ({
  data,
  width = 350,
  height = 250,
  pixelRatio = window.devicePixelRatio,
  padding = 'auto',
  appendPadding,
  children,
  className,
  style,
  animate = true,
  onRender,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const context = canvasRef.current.getContext('2d');
    if (!context) return;

    // F2 5.x uses JSX-like syntax but it's not actual React components
    // We need to create a props object and pass it to the Canvas constructor
    const canvasProps = {
      context,
      pixelRatio,
      children: (
        <Chart
          data={data}
          width={width}
          height={height}
          padding={padding}
          appendPadding={appendPadding}
          animate={animate}
        >
          {children}
        </Chart>
      )
    };

    // Create the canvas instance
    const canvas = new Canvas(canvasProps);
    canvasInstanceRef.current = canvas;

    // Call onRender callback if provided
    if (onRender) {
      onRender(canvas);
    }

    // Render the chart
    canvas.render();

    // Cleanup
    return () => {
      if (canvasInstanceRef.current) {
        canvasInstanceRef.current.destroy();
      }
    };
  }, [data, width, height, pixelRatio, padding, appendPadding, animate, children, onRender]);

  return (
    <canvas
      ref={canvasRef}
      width={width * pixelRatio}
      height={height * pixelRatio}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ...style,
      }}
      className={className}
    />
  );
};

export default BaseChart;
