"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throttle(func, threshhold, scope) {
    if (threshhold === void 0) { threshhold = 250; }
    var last, deferTimer;
    return function () {
        var context = scope || this;
        var now = Date.now(), args = arguments;
        if (last && now < last + threshhold) {
            clearTimeout(deferTimer);
            deferTimer = window.setTimeout(function () {
                last = now;
                func.apply(context, args);
            }, threshhold);
        }
        else {
            last = now;
            func.apply(context, args);
        }
    };
}
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map