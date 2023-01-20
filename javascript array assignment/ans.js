function one() {
  var year = document.getElementById("one").value;
  if (year == "" || year.length != 2) {
    alert("Please enter a valid number in question one");
  } else {
    year = Number(year);
    if (year < 35) {
      year += 2000;
    } else {
      year += 1900;
    }
    document.getElementById("oneans").innerHTML = year;
    document.getElementById("one").value = "";
  }
}
function two() {
  var aa = document.getElementById("two1");
  var bb = document.getElementById("two2");
  var ans = false;
  if ((aa.value.length = 0 || bb.value.length == 0)) {
    alert("Please enter both the position in question two");
  } else {
    var a = Number(aa.value);
    var b = Number(bb.value);
    if (b - a >= 1 && b - a <= 6) {
      ans = true;
    }
    document.getElementById("twoans").innerHTML = ans;
    aa.value = "";
    bb.value = "";
  }
}
function three() {
  var aa = document.getElementById("three1");
  var bb = document.getElementById("three2");
  var ans = false;
  if ((aa.value.length = 0 || bb.value.length == 0)) {
    alert("Please enter both the value in question three");
  } else {
    var a = Number(aa.value);
    var b = Number(bb.value);
    var arr = [];
    for (var i = 1; i <= b; i++) {
      arr.push(a * i);
    }
    document.getElementById("threeans").innerHTML = arr;
    aa.value = "";
    bb.value = "";
  }
}
function four() {
  var aa = document.getElementById("four1");
  var bb = document.getElementById("four2");
  var ans = false;
  if ((aa.value.length = 0 || bb.value.length == 0)) {
    alert("Please enter both the value in question four");
  } else {
    var a = Number(aa.value);
    var b = bb.value.split(",");
    for (var i = 0; i < a; i++) {
      b[i] = Number(b[i]);
    }
    b.sort();
    console.log(b);
    var ans = 0,
      ctr = 1;
    for (var i = 1; i < a; i++) {
      if (b[i] - b[i - 1] == 1) {
        ctr++;
      } else {
        ans = Math.max(ans, ctr);
        ctr = 1;
      }
    }

    document.getElementById("fourans").innerHTML = ans;
    aa.value = "";
    bb.value = "";
  }
}
function five() {
  var a = document.getElementById("five");
  var ans = 0;
  if (a.value.length == 0) {
    alert("Please enter the value in question five");
  } else {
    for (var i = 0; i < a.value.length; i++) {
      if (a.value[i] == "[") {
        ans++;
      }
    }
    document.getElementById("fiveans").innerHTML = ans;
    a.value = "";
  }
}
function six() {
  // var a = document.getElementById("six");
  // var ans = 0;
  // if (a.value.length == 0) {
  //   alert("Please enter the value in question six");
  // } else {
  //   for (var i = 0; i < a.value.length; i++) {

  //   }
  //   document.getElementById("sixans").innerHTML = ans;
  //   a.value = "";
  // }
}
