
document.addEventListener('DOMContentLoaded', function () {
    main();
 });

 window.onload = function() {
    console.log("Loaded!!");

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



  chrome.runtime.onMessage.addListener(
    //https://developer.chrome.com/extensions/messaging
    function(request, sender, sendResponse) {

        console.log("RECEIVED!");
    }
  );

  function main() {
      // Initialization work goes here.
      console.log("Um!!");
  }