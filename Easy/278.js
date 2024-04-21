// 278. First Bad Version

// created by 2022/06/24

// Time complexity
//     total : O(log n)
// Space complexity
//     total : O(1)

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 0,
            r = n;
        while (l < r) {
            const mid = Math.floor((r + l) / 2);
            const isBad = isBadVersion(mid);
            if (isBad) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return r;
    };
};
