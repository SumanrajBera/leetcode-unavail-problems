/**
 * @title Counting Sort
 * @description This is a sorting algorithm which doesn't use comparision for sorting and rather does it by counting. We count the numbers make a range array where we can store the count and use that array to arrange numbers which are actually there.
 * @contraints n must be given which is number of elements and k must be given which is a range. And k must smaller than or equal to k.
 * @tc Time complexity they procure is O(n + k)
 * @difficulties Sometimes the ranges can be big like 2000 between 1 to 5 so we may need to create a range from 1 to 2000 which is some waste space. Here we will prefer some other algorithm such as Radix sort.
 * @usage When we are given a range and range is smaller than or equal to n. The numbers are duplicates can also be a sign.
 */

let arr1 = [7, 2, 1, 6, 2, 5, 3, 4]
let arr2 = [3, 2, 1, 5, 2, 5, 3]
let arr3 = [7, 2, 6, 4, 2, 5, 3]

function countingSort(arr) {
    let max = Math.max(...arr)
    let countArr = new Array(max + 1).fill(0);
    let res = new Array(arr.length).fill(0)

    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i]] += 1
    }

    let ptr = 0;
    for (let i = 0; i < countArr.length; i++) {
        while (countArr[i] > 0) {
            res[ptr] = i;
            countArr[i]--;
            ptr++
        }
    }

    console.log(res)
}

countingSort(arr1);
countingSort(arr2)
countingSort(arr3)