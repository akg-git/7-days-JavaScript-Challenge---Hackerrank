// 7 days of Javascript Challenge
// Day: 1
//Question-1: Hello World
//@Asish_AKG


function processData(input) {
    var outputString = "Hello World!";
    console.log(outputString);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});