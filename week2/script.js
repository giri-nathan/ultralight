// getting the time //
let current_time = new Date();
let h = current_time.getHours();
let m = current_time.getMinutes();
let s = current_time.getSeconds();

console.log(current_time);

// show us the time //
console.log(h);
console.log(m);
console.log(s);

//if hours and minutes match, display the eyes//
if ((h === 1 || h === 13) && m === 11) {
  console.log("it's 1:11");
  document.body.className = "open";
  document.getElementById("one").style.display = "block";
}


if ((h === 2 || h === 14) && m === 22) {
  console.log("it's 2:22");
  document.body.className = "open";
  document.getElementById("two").style.display = "block";
}


if ((h === 3 || h === 15) && m === 33) {
  console.log("it's 3:33");
  document.body.className = "open";
  document.getElementById("three").style.display = "block";
}


if ((h === 4 || h === 16) && m === 44) {
  console.log("it's 4:44");
  document.body.className = "open";
  document.getElementById("four").style.display = "block";
}


if ((h === 5 || h === 17) && m === 55) {
  console.log("it's 5:55");
  document.body.className = "open";
  document.getElementById("five").style.display = "block";
}

