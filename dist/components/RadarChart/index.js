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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Axis, Line, Point, Tooltip, Legend } from '@antv/f2';
import BaseChart from '../BaseChart';
var RadarChart = function (_a) {
    var data = _a.data, angleField = _a.angleField, radiusField = _a.radiusField, _b = _a.showAxis, showAxis = _b === void 0 ? true : _b, _c = _a.showTooltip, showTooltip = _c === void 0 ? true : _c, _d = _a.showLegend, showLegend = _d === void 0 ? true : _d, color = _a.color, _e = _a.lineWidth, lineWidth = _e === void 0 ? 2 : _e, _f = _a.showPoint, showPoint = _f === void 0 ? true : _f, _g = _a.pointSize, pointSize = _g === void 0 ? 3 : _g, axisConfig = _a.axisConfig, tooltipConfig = _a.tooltipConfig, legendConfig = _a.legendConfig, restProps = __rest(_a, ["data", "angleField", "radiusField", "showAxis", "showTooltip", "showLegend", "color", "lineWidth", "showPoint", "pointSize", "axisConfig", "tooltipConfig", "legendConfig"]);
    // Handle multiple radius fields
    var radiusFields = Array.isArray(radiusField) ? radiusField : [radiusField];
    // Add onRender callback to configure the coordinate system
    var handleRender = function (chart) {
        // Get the chart instance from the Canvas
        var chartInstance = chart.getChildren()[0];
        // Configure coordinate system
        chartInstance.coord({
            type: 'polar'
        });
        // Call original onRender if provided
        if (restProps.onRender) {
            restProps.onRender(chart);
        }
    };
    return (_jsxs(BaseChart, __assign({ data: data, onRender: handleRender }, restProps, { children: [showAxis && (_jsx(Axis, __assign({ field: angleField, grid: {
                    lineDash: null,
                    line: {
                        style: {
                            stroke: '#e8e8e8',
                            lineWidth: 1
                        }
                    }
                } }, axisConfig))), radiusFields.map(function (field, index) { return (_jsxs(React.Fragment, { children: [_jsx(Line, { x: angleField, y: field, color: Array.isArray(color) ? color[index % color.length] : color, style: { lineWidth: lineWidth } }), showPoint && (_jsx(Point, { x: angleField, y: field, color: Array.isArray(color) ? color[index % color.length] : color, size: pointSize, shape: "circle" }))] }, field)); }), showTooltip && _jsx(Tooltip, __assign({}, tooltipConfig)), showLegend && _jsx(Legend, __assign({}, legendConfig))] })));
};
export default RadarChart;
