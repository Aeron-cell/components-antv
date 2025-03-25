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
import { Axis, Point, Tooltip, Legend } from '@antv/f2';
import BaseChart from '../BaseChart';
var ScatterChart = function (_a) {
    var data = _a.data, xField = _a.xField, yField = _a.yField, colorField = _a.colorField, sizeField = _a.sizeField, _b = _a.size, size = _b === void 0 ? 5 : _b, _c = _a.showAxis, showAxis = _c === void 0 ? true : _c, _d = _a.showTooltip, showTooltip = _d === void 0 ? true : _d, _e = _a.showLegend, showLegend = _e === void 0 ? true : _e, color = _a.color, xAxisConfig = _a.xAxisConfig, yAxisConfig = _a.yAxisConfig, tooltipConfig = _a.tooltipConfig, legendConfig = _a.legendConfig, restProps = __rest(_a, ["data", "xField", "yField", "colorField", "sizeField", "size", "showAxis", "showTooltip", "showLegend", "color", "xAxisConfig", "yAxisConfig", "tooltipConfig", "legendConfig"]);
    return (_jsxs(BaseChart, __assign({ data: data }, restProps, { children: [showAxis && (_jsxs(_Fragment, { children: [_jsx(Axis, __assign({ field: xField }, xAxisConfig)), _jsx(Axis, __assign({ field: yField }, yAxisConfig))] })), _jsx(Point, { x: xField, y: yField, color: colorField, colors: color, size: sizeField || (typeof size === 'number' ? size : 4), shape: "circle" }), showTooltip && _jsx(Tooltip, __assign({}, tooltipConfig)), showLegend && colorField && _jsx(Legend, __assign({}, legendConfig))] })));
};
export default ScatterChart;
