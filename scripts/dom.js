let algSelect;
let nSelect;
let startButton;
let randomButton;
let resetButton;


function initializeDOM() {
    algSelect = document.getElementById('alg-select');
    nSelect = document.getElementById('n-select');
    startButton = document.getElementById('start-button');
    randomButton = document.getElementById('random-button');
    resetButton = document.getElementById('reset-button');


    algSelect.onchange = () => {
        reset();
        updateCurrentAlgorithm(algSelect);
        generateRandomArray();
    };

    nSelect.onchange = () => {
        reset();
        updateElementCount(nSelect);
        generateRandomArray();
    };

    for (let a in algorithmNames) {
        if (algorithmNames.hasOwnProperty(a)) {
            let opt = document.createElement('option');
            opt.appendChild(document.createTextNode(a));
            opt.value = algorithmNames[a];
            opt.classList.add('nav-bar-select-item');
            algSelect.appendChild(opt);

        }
    }

    for (let i = 2; i <= 1024; i *= 2) {
        let opt = document.createElement('option');
        opt.appendChild(document.createTextNode(i.toString()));
        opt.value = i.toString();
        opt.classList.add('nav-bar-select-item');
        nSelect.appendChild(opt);
    }

    updateCurrentAlgorithm(algSelect);
    updateElementCount(nSelect);

    startButton.onclick = function () {
        reset();
        callSortFunction(currAlg);
        drawingStatus = true;
    };

    randomButton.onclick = () => {
        generateRandomArray();
        reset();
    };

    resetButton.onclick = reset;
}

function generateOrderedArray() {
    if (loopStatus !== 'loop') {
        arr = orderedArray(elementCount);
        calculateArray(arrayExt(arr));
    }
}

function generateRandomArray() {
    if (loopStatus !== 'loop') {
        arr = randomArray(elementCount, 1, 50);
        calculateArray(arrayExt(arr));
    }
}

function updateElementCount(selector) {
    elementCount = getElementCount(selector);
}

function getElementCount(selector) {
    return parseInt(selector.value);
}

function updateCurrentAlgorithm(selector) {
    currAlg = getAlgorithmName(selector)
}

function getAlgorithmName(selector) {
    return selector.value;
}
