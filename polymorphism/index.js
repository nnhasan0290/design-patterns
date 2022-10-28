class Addition{
    solve(a,b){
        console.log(a+b);
    }
}
class Multiply extends Addition{
    solve(a,b){
        console.log(a*b);
    }
}
const multiply = new Multiply()
console.log(multiply.solve(5,6));

const add = new Addition();
console.log(add.solve(5,6));