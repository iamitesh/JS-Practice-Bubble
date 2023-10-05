//maximum number of an array

let marks = [100, 30, 321, 261, 42, 265];
let number = 5;
const findMax = (arr) => {
    if (!arr.length) {
        return "Empty Arr"
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            // console.log(max)
            max = arr[i];
        }
    }
    return max;
}
// console.log(findMax(marks))

const findSecondMax = (arr) => {
    if (!arr.length) {
        return "Empty Arr"
    }
    let max = arr[0];
    let secMax = arr[1]

    if (secMax > max) {
        [max, secMax] = [secMax, max];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            secMax = max;
            max = arr[i]
            // console.log(max)
        }
        else if (arr[i] > secMax && arr[i] != max) {
            secMax = arr[i];
        }
    }
    return secMax;
}
// console.log(findSecondMax(marks))

const commonEle = (arr1, arr2) => {
    const common = [];
    for (let i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                common.push(arr1[i])
            }
        }
    }
    return common
}
// console.log(commonEle([1, 2, 3, 5], [3, 4, 5]))

const removeDup = (arr) => {
    const unique = [arr[0]];
    const inc = (arr, num) => {
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] === num) {
                return true;
            }
        }
        return false;
    }
    for (let i = 1; i < arr.length; i++) {
        if (!inc(unique, arr[i])) {
            unique.push(arr[i])
        }
    }
    return unique;
}
// console.log(removeDup([1, 2, 3, 2, 4, 5, 5]));

const rotateArr = (arr) => {
    const rotated = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        rotated[rotated.length] = arr[i];
    }
    return rotated;
}
// console.log(rotateArr([1, 3, 5, 7, 9]))

const rotateArrOptmz = (arr) => {

    for (let i = arr.length - 1, j = 0; i >= (arr.length - 1) / 2; i--, j++) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}
// console.log(rotateArr([1, 3, 5, 7, 9,11]))

const arrRearrange = (arr) => {
    const arrEven = [];
    const arrOdd = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            arrEven[arrEven.length] = arr[i];
        else { arrOdd[arrOdd.length] = arr[i]; }
    }
    return [...arrEven, ...arrOdd];
}
// console.log(arrRearrange([1, 2, 3, 5, 6, 7, 8, 9]))

// isArray
// console.log([marks.constructor===Array]) //true
// console.log(Object.prototype.toString.call(marks))//Array

const twoDArr = [1, [2, 3, [5]]]
//cloning
// console.log([...twoDArr])

//BubbleSort
const BubbleSort = (arr) => {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
}
// console.log(BubbleSort(marks))
const InsertionSort = (arr) => {
    for (i = 1; i < arr.length; i++) {
        key = arr[i]
        for (j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = key
    }
    return arr;
}
console.log(InsertionSort(marks))



