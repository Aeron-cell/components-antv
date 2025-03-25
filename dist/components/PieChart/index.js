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
import { Interval, Tooltip, Legend } from '@antv/f2';
import BaseChart from '../BaseChart';
var PieChart = function (_a) {
    var data = _a.data, angleField = _a.angleField, colorField = _a.colorField, _b = _a.radius, radius = _b === void 0 ? 0.85 : _b, _c = _a.innerRadius, innerRadius = _c === void 0 ? 0 : _c, _d = _a.showTooltip, showTooltip = _d === void 0 ? true : _d, _e = _a.showLegend, showLegend = _e === void 0 ? true : _e, color = _a.color, tooltipConfig = _a.tooltipConfig, legendConfig = _a.legendConfig, _f = _a.labelConfig, labelConfig = _f === void 0 ? { visible: true } : _f, restProps = __rest(_a, ["data", "angleField", "colorField", "radius", "innerRadius", "showTooltip", "showLegend", "color", "tooltipConfig", "legendConfig", "labelConfig"]);
    // Add onRender callback to configure the coordinate system
    var handleRender = function (chart) {
        // Get the chart instance from the Canvas
        var chartInstance = chart.getChildren()[0];
        // Configure coordinate system
        chartInstance.coord({
            type: 'polar',
            transposed: true,
            radius: radius,
            innerRadius: innerRadius
        });
        // Call original onRender if provided
        if (restProps.onRender) {
            restProps.onRender(chart);
        }
    };
    return (_jsxs(BaseChart, __assign({ data: data, onRender: handleRender }, restProps, { children: [_jsx(Interval, { x: "1", y: angleField, adjust: "stack", color: colorField, colors: color, style: {
                    lineWidth: 1,
                    stroke: '#fff',
                }, children: labelConfig.visible && {
                    label: __assign({ visible: true, formatter: labelConfig.formatter || (function (val) { return "".concat(val); }) }, labelConfig.style),
                } }), showTooltip && _jsx(Tooltip, __assign({}, tooltipConfig)), showLegend && _jsx(Legend, __assign({}, legendConfig))] })));
};
export default PieChart;
