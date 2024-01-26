import "./../scss/style.scss";

// global scope (Gültigkeitsbereich)
var x = "Hello, Geat day";

function example() {
  console.log(x);
}
example();
console.log(x); //geht weil var x global definiert ist

//function scope
function example2() {
  var fs = "Hallo greater";
  console.log(fs);
}
example2();
//console.log(fs); // geht nicht weil fs nur innerhalb der funktion definiert ist

// Block Scope
function example3() {
  if (true) {
    let bv = "hallo welt";
    console.log(bv);
  }
  //console.log(bv); geht nicht weil bv nur innerhalb des Blocks definiert ist
}
example3();
//console.log(bv); geht dementsprechend auch nicht.
