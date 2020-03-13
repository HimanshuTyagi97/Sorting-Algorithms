let arr = [];
let minElement;
let maxElement;
let elementCount;
let myArray;
let k;
let drawingStatus;
let loopStatus;
let cnv;
let algorithmNames;


function setup() {
    const navBar = document.getElementById('nav-bar');
    const h = window.innerHeight - 1.2*navBar.offsetHeight;
    const w = 2.25 * h;
    cnv = createCanvas(w,h);
    cnv.parent('container');
    myArray = [];


    algorithmNames = {
        'Bubble Sort': 'bubbleSort',
        'Cocktail Sort': 'cocktailSort',
        'Heap Sort': 'heapSort',
        'Insertion Sort': 'insertionSort',
        'Merge Sort': 'mergeSort',
        'Quick Sort': 'quickSort',
        'Selection Sort': 'selectionSort'
    };

    initializeDOM();
    elementCount = 2;
    arr = randomArray(elementCount, 1, 50);
    calculateArray(arrayExt(arr));
    k = 0;
    frameRate(25);
    drawingStatus = false;
    loopStatus = "noLoop";
}

function reset() {
    drawingStatus = false;
    loopStatus = 'noLoop';
    k = 0;
}

function draw() {
    clear();
    background(255);

    if (drawingStatus) {
            if (loopStatus === "loop") {
                drawArray(myArray[k++], minElement, maxElement);
                if (k >= myArray.length) {
                    k = 0;
                    loopStatus = "noLoop";
                }
            } else {
                drawArray(myArray[myArray.length -1], minElement, maxElement);
            }
        }
     else {
        drawArray(arr, minElement, maxElement);
    }
}


function drawArray(a, min, max) {
    let r = width / a.length;
    for (let i = 0; i < a.length; i++) {
        fill(253,140,51);
        let yy = map(a[i], min, max, r / 2, height);
        rect(i*r, height - yy, r-2, yy);
    }
}