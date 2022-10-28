class Parent {
    constructor(a,b){
        console.log(a+b);
    }
}

class Child extends Parent{
    constructor(x,y){
        super(x,y);
    }
}

const child  = new Child(5,6)