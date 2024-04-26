var TrieNode = function () {
    this.children = new Map();
    this.isLeave = false;
};

var WordDictionary = function () {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let curr = this.root;
    for (const char of word) {
        if (!curr.children.has(char)) {
            curr.children.set(char, new TrieNode());
        }
        curr = curr.children.get(char);
    }
    curr.isLeave = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    var backtrack = function (root, j) {
        let curr = root;
        for (let i = j; i < word.length; i++) {
            const char = word[i];
            if (char === ".") {
                for (const node of curr.children.values()) {
                    return backtrack(node, i + 1);
                }
            } else {
                if (!curr.children.has(char)) {
                    return false;
                }
                curr = curr.children.get(char);
            }
        }
        return curr.isLeave;
    };
    return backtrack(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True
