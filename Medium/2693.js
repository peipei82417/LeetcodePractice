// 2693. Call Function with Custom Context

/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function (context, ...args) {
    const key = Symbol();
    context[key] = this;
    return context[key](...args);
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */

function tax(price, taxRate) {
    return `The cost of the ${this.item} is ${price * taxRate}`;
}

console.log(tax.callPolyfill({ item: 'burger' }, 10, 1.1));
