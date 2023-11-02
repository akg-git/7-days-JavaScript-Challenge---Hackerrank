// 7 days of Javascript Challenge
// Day: 3
//Question-3: Second Largest Number
//@Asish_AKG

function processData(myArray) {
    
    let secondMax = myArray[0];
    let max = myArray[0];
    for(i=1;i<myArray.length;i++)
    {
        if( myArray[i] > max )
        {
            secondMax = max;
            max = myArray[i];
           
        }
        else if(myArray[i] < max && myArray[i] > secondMax)
        {
            secondMax = myArray[i];
        }
    }
    console.log(secondMax);
    
    
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});