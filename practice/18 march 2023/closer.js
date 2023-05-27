let clos = 45;
// let clos2 = "";

function fun1(){
    let clos2 = 100;

    console.log(clos2);
    function fun2(){
        let clos3 = 200;
        console.log(clos3)
    }
    fun2();

}
// console.log(clos2);

fun1();

// function fun2(){
//     let clos3 = 200;
//     console.log(clos2)
// }

// fun2()

for (var id = 0; id < 3; id++) {
  setTimeout(function () {
    console.log("seconds: " + id);
  }, id * 1000);
}

for (var id = 1; id <= 3; id++) {
  (function (id) {
    setTimeout(function () {
      console.log("seconds: " + id);
    }, id * 1000);
  })(id);
}