function sum(a){ 
    return function sum2(b){
        console.log(a+b);
    }
    sum2();
}
sum(1)(2);

function Count() {
    var count = 1;

    return { 
        getValue: function() {
            return count ++;
        }, 

        setValue: function(value) {
            count = value;
        }, 

        reset: function() {
            count = 1;
        } 
    }; 
} 

let counter = Count();

console.log(counter.getValue());
console.log(counter.getValue());

counter.setValue(7); 
console.log(counter.getValue());