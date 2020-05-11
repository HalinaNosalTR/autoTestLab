let obj1 = {
    firstElement: 1,
    thirdElement: 3,
};

obj1.secondElement = 2; 
obj1.firstElement = 'ChangedProperty'; 
obj1.thirdElement = function sum(x, y){
    return x+y;
}

console.log(obj1);