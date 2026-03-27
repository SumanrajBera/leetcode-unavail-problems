/**
 * 
 * @problem Longest Substring with At Most K Distinct Characters 
 * @level Medium 
 * @desctiption Given a string s and an integer k, return the length of the longest substring that contains at most k distinct characters. 
 */

function solution(str, k) {
    let i = 0, j = 0;
    let maxStr = "";
    let map = new Map();
    while (j < str.length) {
        let char = str[j];
        map.set(char, (map.get(char) || 0) + 1);
        while (map.size > k) {
            let oldChar = str[i];
            map.set(oldChar, map.get(oldChar) - 1);
            if (map.get(oldChar) === 0) map.delete(oldChar)
            i++
        }
        let len = j - i + 1;
        if (len > maxStr.length) maxStr = str.substring(i, j + 1)
        j++
    }
    return maxStr;
}

console.log("Answer:", solution("abcaccc", 2))
console.log("Answer:", solution("abccdeefff", 4))
console.log("Answer:", solution("avcofs", 0))