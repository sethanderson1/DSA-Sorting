// Understanding merge sort

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
}

// Merge function

function merge(left, right, array) {
    let leftIdx = 0;
    let rightIdx = 0;
    let outputIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            array[outputIdx++] = left[leftIdx++];
        } else {
            array[outputIdx++] = right[rightIdx++];
        }
    }

    for (let i = leftIdx; i < left.length; i++) {
        array[outputIdx++] = left[i];
    }

    for (let i = rightIdx; i < right.length; i++) {
        array[outputIdx++] = right[i];
    }

    return array;
}

const myArray = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

console.log('mergeSort(myArray)', mergeSort(myArray))
// logs [ 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49 ]

// First 2 lists to be merged are [1] and [21]
// 2 lists merged on the 7th merge:
//  [ 2, 9, 28, 29 ] and [ 1, 21, 26, 45 ]

// Understanding Quicksort

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}

// There are a few partition algorithsm, but this is common in-place algorithm called "Lomuto's" algorithm:

function partition(array, start, end) {

    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);
    return j;
}

let testArray = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];

console.log('quickSort(testArray)', quickSort(testArray))

// Output: [ 10, 3, 9, 12, 19, 14, 17, 16, 13, 15 ]

// Implementing Quicksort

const qSort = array => {
    quickSort(array);
};

const testArray2 = [89,
    30,
    25,
    32,
    72,
    70,
    51,
    42,
    25,
    24,
    53,
    55,
    78,
    50,
    13,
    40,
    48,
    32,
    26,
    2,
    14,
    33,
    45,
    72,
    56,
    44,
    21,
    88,
    27,
    68,
    15,
    62,
    93,
    98,
    73,
    28,
    16,
    46,
    87,
    28,
    65,
    38,
    67,
    16,
    85,
    63,
    23,
    69,
    64,
    91,
    9,
    70,
    81,
    27,
    97,
    82,
    6,
    88,
    3,
    7,
    46,
    13,
    11,
    64,
    76,
    31,
    26,
    38,
    28,
    13,
    17,
    69,
    90,
    1,
    6,
    7,
    64,
    43,
    9,
    73,
    80,
    98,
    46,
    27,
    22,
    87,
    49,
    83,
    6,
    39,
    42,
    51,
    54,
    84,
    34,
    53,
    78,
    40,
    14,
    5

];


// Implementing Merge Sort

const mSort = array => {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return myMerge(left, right, array);
};

const myMerge = (left, right, array) => {
    let leftI = 0;
    let rightI = 0;
    let outputI = 0;
    while (leftI < left.length && rightI < right.length) {
        if (left[leftI] < right[rightI]) {
            array[outputI++] = left[leftI++];
        } else {
            array[outputI++] = right[rightI++];
        }
    }

    for (let i = leftI; i < left.length; i++) {
        array[outputI++] = left[i];
    }

    for (let i = rightI; i < right.length; i++) {
        array[outputI++] = right[i];
    }

    return array;
};


// Sorting a Linked List using merge sort

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertBefore(key, item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== key) {
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        let newNode = new _Node(item, currNode.next);
        currNode.next = newNode;
    }

    insertAfter(key, item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== key) {
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        let newNode = new _Node(item, currNode.next);
        currNode.next = newNode;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    findLast() {
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.next !== null) {
            if (currNode.next === null) {
                return currentNode;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
                     and the item is not on the list */
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== item) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log("Item not found");
            return;
        }
        previousNode.next = currNode.next;
    }
}

const myList = new LinkedList();

myList.insertFirst(22);
myList.insertLast(4);
myList.insertLast(13);
myList.insertLast(14);
myList.insertLast(22);
myList.insertLast(3);
myList.insertLast(33);
myList.insertLast(43);

// Need to obtain values of each node in an array
const valueArray = linkedList => {
    let values = [];
    let currNode = linkedList.head;
    while (currNode.next !== null) {
        values.push(currNode.value);
        currNode = currNode.next;
    }
    return values;
};

// Sorted Lilnked List values:
// [3, 4, 13, 14, 22, 43];

// Bucket sort:

const buckets = (array, bucketSize) => {
    if (array.length === 0) {
        return array;
    }

    // Find min and max values
    let i;
    let minVal = array[0];
    let maxVal = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < minVal) {
            minVal = array[i];
        } else if (array[i] > maxVal) {
            maxVal = array[i];
        }
    }

    // Create buckets
    let default_bucket = 5;
    bucketSize = bucketSize || default_bucket;
    let bucketCount = Math.floor(maxVal - minVal / bucketSize) + 1;
    let buckets = new Array(bucketCount);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    // Place array values in buckets
    for (let i = 0; i < buckets.length; i++) {
        buckets[Math.floor((array[i] - minVal) / bucketSize)].push(array[i]);
    }

    // Sort buckets and add to array
    array.length = 0;
    for (let i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);
        for (let j = 0; j < buckets[i].length; j++) {
            array.push(buckets[i][j]);
        }
    }
    return array;
};

const insertionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > el; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = el;
    }
    return arr;
};

// console.log(buckets(testArray2));

// Sort in place

const shuffle = arr => {
    let currI = arr.length;
    let tempVal;
    let randomI;

    while (currI !== 0) {
        randomI = Math.floor(Math.random() * currI);
        currI -= 1;

        // Swap
        tempVal = arr[currI];
        arr[currI] = arr[randomI];
        arr[randomI] = tempVal;
    }
    return arr;
};

// console.log(shuffle(testArray2));

// Sorting Books
const titles = [
    "Jurassic Park",
    "Dog book",
    "Car book",
    "Cat book",
    "shark book",
    "book book"
];

titles.sort(function (a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});

console.log('titles', titles)