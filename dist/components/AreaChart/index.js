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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Axis, Area, Line, Tooltip, Legend } from '@antv/f2';
import BaseChart from '../BaseChart';
var AreaChart = function (_a) {
    var data = _a.data, xField = _a.xField, yField = _a.yField, _b = _a.smooth, smooth = _b === void 0 ? false : _b, _c = _a.showAxis, showAxis = _c === void 0 ? true : _c, _d = _a.showTooltip, showTooltip = _d === void 0 ? true : _d, _e = _a.showLegend, showLegend = _e === void 0 ? true : _e, color = _a.color, _f = _a.lineWidth, lineWidth = _f === void 0 ? 2 : _f, _g = _a.isStack, isStack = _g === void 0 ? false : _g, xAxisConfig = _a.xAxisConfig, yAxisConfig = _a.yAxisConfig, tooltipConfig = _a.tooltipConfig, legendConfig = _a.legendConfig, restProps = __rest(_a, ["data", "xField", "yField", "smooth", "showAxis", "showTooltip", "showLegend", "color", "lineWidth", "isStack", "xAxisConfig", "yAxisConfig", "tooltipConfig", "legendConfig"]);
    // Handle multiple y fields
    var yFields = Array.isArray(yField) ? yField : [yField];
    // Determine adjust type - don't use null, use undefined instead when not stacking
    var adjustType = isStack ? 'stack' : undefined;
    return (_jsxs(BaseChart, __assign({ data: data }, restProps, { children: [showAxis && (_jsxs(_Fragment, { children: [_jsx(Axis, __assign({ field: xField }, xAxisConfig)), _jsx(Axis, __assign({ field: yFields[0] }, yAxisConfig))] })), yFields.map(function (field, index) { return (_jsxs(React.Fragment, { children: [_jsx(Area, { x: xField, y: field, shape: smooth ? 'smooth' : 'area', color: Array.isArray(color) ? color[index % color.length] : color, adjust: adjustType }), _jsx(Line, { x: xField, y: field, shape: smooth ? 'smooth' : 'line', color: Array.isArray(color) ? color[index % color.length] : color, style: { lineWidth: lineWidth }, adjust: adjustType })] }, field)); }), showTooltip && _jsx(Tooltip, __assign({}, tooltipConfig)), showLegend && _jsx(Legend, __assign({}, legendConfig))] })));
};
export default AreaChart;
