/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let initNum = init;
    let sum = initNum;
    return {
        increment: () => {
            return ++sum;
        },
        reset: () => {
            sum = initNum;
            return initNum;
        },
        decrement: () => {
            return --sum;
        },
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
