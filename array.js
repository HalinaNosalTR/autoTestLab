let arrFirstTask = ['Audi', 'BMW', 'Hyundai'];
for (let i = 0; i<arrFirstTask.length; i++) {
    console.log(arrFirstTask[i]);
}


let arrSecondTask = [1, 2, 3];
arrSecondTask = ''+ arrSecondTask;
console.log(arrSecondTask);
arrSecondTask = arrSecondTask.split(',');
console.log(arrSecondTask);


let arrThirdTask = ['a', 'b', 'c'];
for (let i = 0; i<arrThirdTask.length; i++) {
    arrThirdTask[i] = arrThirdTask[i]+'hello';
    console.log(arrThirdTask[i]);
}


let arrFourthTask = [0,1,2,0,3,0];
arrFourthTask = arrFourthTask.map(val => !!val);
console.log(arrFourthTask);
