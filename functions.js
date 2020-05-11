let calcNumbers = (a, b) => {
    return a + b;
}

function isMyName (userName) {
    if (userName === 'Halina') {
       console.log('Hello ' + userName);
    }
}

function typeArg (arg) {
    console.log(typeof(arg));
}

checkEvenNumbers([1,2,5,7,8,4,10,6,8,4]);

function checkEvenNumbers (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

