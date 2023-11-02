// 7 days of Javascript Challenge
// Day: 3
//Question-1: Display Information from an Object
//@Asish_AKG

function displayInformation() {
    // var library is defined, use it to print the information
       library.forEach(function(obj)
       {
           if(obj.readingStatus)
           {
               console.log("Already read \'"+obj.title+"\' by "+obj.author+".");   
           }
           else
           {
               console.log("You still need to read \'"+obj.title+"\' by "+obj.author+".");
           }
       });
       
            
   
   
} 

// tail starts here
var library = [ 
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       readingStatus: true
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       readingStatus: true
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       readingStatus: false
   }
];

displayInformation();