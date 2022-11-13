class Factory {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  identity() {
    console.log(
      `Hello I am ${this.fname} ${this.lname}. I am ${this.age} yearns old`
    );
  }
}

const myFactory = new Factory("nazmul", "hasan", 23);
myFactory.identity();
