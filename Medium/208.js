/*
208. Implement Trie (Prefix Tree)

created by 2024/04/23
*/

var TrieNode = function () {
    this.children = new Array(26).fill(null);
    this.isLeave = false;
};

var Trie = function () {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let curr = this.root;
    for (const char of word) {
        const code = char.charCodeAt(0) - 97;
        if (!curr.children[code]) {
            curr.children[code] = new TrieNode();
        }
        curr = curr.children[code];
    }
    curr.isLeave = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let curr = this.root;
    for (const char of word) {
        const code = char.charCodeAt(0) - 97;
        if (!curr.children[code]) {
            return false;
        }
        curr = curr.children[code];
    }
    return curr.isLeave;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let curr = this.root;
    for (const char of prefix) {
        const code = char.charCodeAt(0) - 97;
        if (!curr.children[code]) {
            return false;
        }
        curr = curr.children[code];
    }
    return curr !== null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
trie.insert("app");
console.log(trie.search("app"));
