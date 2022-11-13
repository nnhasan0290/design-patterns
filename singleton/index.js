//single ton design consist of an object which is immutable.

class EternalTruth {
  first() {
    console.log("money doesn't buy happiness");
  }
  second() {
    console.log("Time and tide wait for none");
  }
}

const eternalTruth = new EternalTruth();

Object.freeze(eternalTruth);
eternalTruth.name = "nazmul";
console.log(eternalTruth);
eternalTruth.first();
