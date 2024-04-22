/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let count = functions.length;
        for (let i = 0; i < functions.length; i++) {
            const fn = functions[i];
            fn()
                .then((res) => {
                    results[i] = res;
                    count -= 1;
                    if (count === 0) {
                        resolve(results);
                    }
                })
                .catch(reject);
        }
    });
};
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
