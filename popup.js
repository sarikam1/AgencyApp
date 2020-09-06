console.log("Testing!!");
document.addEventListener('DOMContentLoaded', function () {
    main();
 });

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

  //CHANGE:
  function clickHandler(element) { //For Asma-->modify function to toggle filtering on/off
      //var keywords = document.getElementById('toggle').value;
      //https://stackoverflow.com/questions/31111721/pass-a-variable-from-content-script-to-popup/31112456
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
          chrome.storage.local.set({'filter': 'News'}, function() {
            message('Settings saved');
          });
            window.close();
           });
  }



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