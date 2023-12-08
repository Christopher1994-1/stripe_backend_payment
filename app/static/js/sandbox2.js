"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var _a;
    const data = (_a = localStorage.getItem('data')) === null || _a === void 0 ? void 0 : _a.toString().split(':');
    let cart = document.getElementById('cartNum');
    let l = data === null || data === void 0 ? void 0 : data.length.toString();
    cart.innerHTML = l;
});
