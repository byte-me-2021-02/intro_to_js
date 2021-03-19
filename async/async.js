function firstTask() {
  console.log("first task done");
}

function secondTask() {
  console.log("second task done");
}

// firstTask();
// setTimeout(firstTask, 2000);
// secondTask();

setTimeout(function() {
  console.log("I am on line 14")
}, 1000);

console.log("I am on line 17")