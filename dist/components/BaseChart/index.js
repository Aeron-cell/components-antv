var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { Canvas, Chart } from '@antv/f2';
var BaseChart = function (_a) {
    var data = _a.data, _b = _a.width, width = _b === void 0 ? 350 : _b, _c = _a.height, height = _c === void 0 ? 250 : _c, _d = _a.pixelRatio, pixelRatio = _d === void 0 ? window.devicePixelRatio : _d, _e = _a.padding, padding = _e === void 0 ? 'auto' : _e, appendPadding = _a.appendPadding, children = _a.children, className = _a.className, style = _a.style, _f = _a.animate, animate = _f === void 0 ? true : _f, onRender = _a.onRender;
    var canvasRef = useRef(null);
    var canvasInstanceRef = useRef(null);
    useEffect(function () {
        if (!canvasRef.current)
            return;
        var context = canvasRef.current.getContext('2d');
        if (!context)
            return;
        // F2 5.x uses JSX-like syntax but it's not actual React components
        // We need to create a props object and pass it to the Canvas constructor
        var canvasProps = {
            context: context,
            pixelRatio: pixelRatio,
            children: (_jsx(Chart, { data: data, width: width, height: height, padding: padding, appendPadding: appendPadding, animate: animate, children: children }))
        };
        // Create the canvas instance
        var canvas = new Canvas(canvasProps);
        canvasInstanceRef.current = canvas;
        // Call onRender callback if provided
        if (onRender) {
            onRender(canvas);
        }
        // Render the chart
        canvas.render();
        // Cleanup
        return function () {
            if (canvasInstanceRef.current) {
                canvasInstanceRef.current.destroy();
            }
        };
    }, [data, width, height, pixelRatio, padding, appendPadding, animate, children, onRender]);
    return (_jsx("canvas", { ref: canvasRef, width: width * pixelRatio, height: height * pixelRatio, style: __assign({ width: "".concat(width, "px"), height: "".concat(height, "px") }, style), className: className }));
};
export default BaseChart;
