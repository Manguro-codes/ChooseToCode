var app = angular.module("angularApp", ['ngSanitize']);
function onLoad() {
    //This is an example of an alert function
  // alert("function onLoad() called");
//getting element that has the timestamp
   getAPIBadge();
    }

    function checkNumber() {
        //lets add variables to get our data
        var theNumber, theMessage;
//Get the value of the input field with id="numb"
theNumber = $('#smallnumber').val();
        
        //If x is Not a Number or less than one or greater than 10
        if (isNaN(theNumber) || theNumber < 1 || theNumber > 10) {
            theMessage = "Number was expected to be between 1 and 10";
        } else {
            theMessage = "Number is Good";
        }
        $('#numberMessage').text(theMessage);
    }