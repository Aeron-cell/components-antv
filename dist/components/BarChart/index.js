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
import { Axis, Interval, Tooltip, Legend } from '@antv/f2';
import BaseChart from '../BaseChart';
var BarChart = function (_a) {
    var data = _a.data, xField = _a.xField, yField = _a.yField, _b = _a.isStack, isStack = _b === void 0 ? false : _b, _c = _a.isGroup, isGroup = _c === void 0 ? false : _c, _d = _a.showAxis, showAxis = _d === void 0 ? true : _d, _e = _a.showTooltip, showTooltip = _e === void 0 ? true : _e, _f = _a.showLegend, showLegend = _f === void 0 ? true : _f, color = _a.color, barWidth = _a.barWidth, xAxisConfig = _a.xAxisConfig, yAxisConfig = _a.yAxisConfig, tooltipConfig = _a.tooltipConfig, legendConfig = _a.legendConfig, restProps = __rest(_a, ["data", "xField", "yField", "isStack", "isGroup", "showAxis", "showTooltip", "showLegend", "color", "barWidth", "xAxisConfig", "yAxisConfig", "tooltipConfig", "legendConfig"]);
    // Handle multiple y fields
    var yFields = Array.isArray(yField) ? yField : [yField];
    // Determine adjust type - use undefined instead of null
    var adjustType = undefined;
    if (isStack)
        adjustType = 'stack';
    else if (isGroup)
        adjustType = 'dodge';
    return (_jsxs(BaseChart, __assign({ data: data }, restProps, { children: [showAxis && (_jsxs(_Fragment, { children: [_jsx(Axis, __assign({ field: xField }, xAxisConfig)), _jsx(Axis, __assign({ field: yFields[0] }, yAxisConfig))] })), _jsx(Interval, { x: xField, y: yFields[0], adjust: adjustType, color: Array.isArray(color) ? color[0] : color, style: { width: barWidth } }), showTooltip && _jsx(Tooltip, __assign({}, tooltipConfig)), showLegend && _jsx(Legend, __assign({}, legendConfig))] })));
};
export default BarChart;
