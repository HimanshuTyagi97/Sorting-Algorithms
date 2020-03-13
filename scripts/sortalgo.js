function callSortFunction(fName) {
    myArray = [];
    drawingStatus = true;
    loopStatus = "loop";
    switch (fName) {
        case 'bubbleSort':
            bubbleSort(arr.slice());
            break;
        case 'quickSort':
            quickSort(arr.slice(), 0, arr.length - 1);
            break;
        case 'mergeSort':
            mergeSort(arr.slice(), 0, arr.length - 1);
            break;
        case 'insertionSort':
            insertionSort(arr.slice());
            break;
        case 'selectionSort':
            selectionSort(arr.slice());
            break;
        case 'cocktailSort':
            cocktailSort(arr.slice());
            break;
        case 'heapSort':
            heapSort(arr.slice());
            break;
    }
}

function bubbleSort(a) {
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                myArray.push(a.slice());

                let tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
            }
        }
    }

    myArray.push(a.slice());
}

function quickSort(a, low, high) {
    if (low < high) {
        let pIndex = quickSortPartition(a, low, high);
        quickSort(a, low, pIndex - 1);
        quickSort(a, pIndex + 1, high);
    }
}

function quickSortPartition(a, low, high) {
    let pivot = a[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (a[j] < pivot) {
            myArray.push(a.slice());
            i++;

            let tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
    }

    myArray.push(a.slice());
    i++;

    let tmp = a[high];
    a[high] = a[i];
    a[i] = tmp;

    myArray.push(a.slice());

    return i;
}

function mergeSort(a, low, high) {
    if (low < high) {
        let mid = parseInt(((low + high) / 2).toString());
        mergeSort(a, low, mid);
        mergeSort(a, mid + 1, high);
        merge(a, low, mid, high);
    }
}

function merge(a, low, mid, high) {
    let n1 = mid - low + 1;
    let n2 = high - mid;

    let l = new Array(n1);
    let r = new Array(n2);

    for (let i = 0; i < n1; i++) {
        l[i] = a[low + i];
    }

    for (let i = 0; i < n2; i++) {
        r[i] = a[mid + i + 1];
    }

    let i = 0;
    let j = 0;
    let k = low;

    while (i < n1 && j < n2) {
        if (l[i] <= r[j]) {
            a[k] = l[i];
            i++;
        } else {
            a[k] = r[j];
            j++;
        }

        k++;

        myArray.push(a.slice());
    }

    while (i < n1) {
        a[k] = l[i];
        i++;
        k++;

        myArray.push(a.slice());
    }

    while (j < n2) {
        a[k] = r[j];
        j++;
        k++;

        myArray.push(a.slice());
    }
}



function insertionSort(a) {
    for (let i = 0; i < a.length; i++) {
        let current = a[i];
        let j = i - 1;

        while (j >= 0 && a[j] > current) {
            a[j + 1] = a[j];
            j--;

            myArray.push(a.slice());
        }

        a[j + 1] = current;
        myArray.push(a.slice());
    }
}

function selectionSort(a) {
    myArray.push(a.slice());

    for (let i = 0; i < a.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }

        let tmp = a[minIndex];
        a[minIndex] = a[i];
        a[i] = tmp;

        myArray.push(a.slice());
    }
}


function cocktailSort(a) {
    let swapped = true;
    let start = 0;
    let end = a.length - 1;
    myArray.push(a.slice());

    while (swapped) {
        swapped = false;

        for (let i = start; i < end; i++) {
            if (a[i] > a[i+1]) {
                let tmp = a[i];
                a[i] = a[i+1];
                a[i+1] = tmp;
                swapped = true;
                myArray.push(a.slice());
            }
        }

        if (swapped) {
            swapped = false;
            end--;
            for (let i = end - 1; i >= start; i--) {
                if (a[i] > a[i+1]) {
                    let tmp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = tmp;
                    swapped = true;
                    myArray.push(a.slice());
                }
            }
        }

        start++;
    }
}

function heapSort(a) {
    for (let i = Math.floor(a.length / 2) - 1; i >= 0; i--) {
        heap(a, a.length, i);
    }

    for (let i = a.length - 1; i >= 0; i--) {
        let tmp = a[0];
        a[0] = a[i];
        a[i] = tmp;

        myArray.push(a.slice());

        heap(a, i, 0);
    }
}

function heap(a, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && a[l] > a[largest]) {
        largest = l;
    }

    if (r < n && a[r] > a[largest]) {
        largest = r;
    }

    if (largest !== i) {
        let tmp = a[i];
        a[i] = a[largest];
        a[largest] = tmp;

        myArray.push(a.slice());

        heap(a, n, largest);
    }
}

