console.log("Testing!!");

 window.onload = function() {
    console.log("Testing!!");
    //document.getElementById("counter").innerHTML = "Public Offers";

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {type: "getCount"}, function(response) {
          var res = response.result;
          var res2 = response.result2;
          //alert(response.result);
          document.getElementById("counter").innerHTML = "Total number of filtered posts is " + res;
          document.getElementById("counter2").innerHTML = "Number of filtered posts in current session is " + res2;
          const urls_array = response.result_array;

      });

      

      //document.getElementById("counter").innerHTML = "Public Offers";
  });

  }

  document.addEventListener('DOMContentLoaded', function () {
      var link = document.getElementById('button_one');
      // onClick's logic below:
      link.addEventListener('click', function() { //view a post'
        alert("Viewing saved post");

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {type: "viewPost"}, function(response) {
    
          });
          window.close();
    
          
    
          //document.getElementById("counter").innerHTML = "Public Offers";
      });
      });
 });



 


  //CHANGE:




  // chrome.runtime.onMessage.addListener(
  //   //https://developer.chrome.com/extensions/messaging
  //   function(request, sender, sendResponse) {

  //       console.log("RECEIVED!");
  //   }
  // );

  function main() {
      // Initialization work goes here.
      console.log("Um!!");
  }