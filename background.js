// chrome.commands.onCommand.addListener(function(command) {

//     chrome.storage.local.get("definedURL", function(result){
//       if(result.definedURL!=undefined){
//         chrome.tabs.update({url:'http://'+result.definedURL});
//         _gaq.push(['_trackEvent', 'refresh', result.definedURL]);
//       }else{
//         chrome.tabs.update({url:'http://i.imgur.com/Jl1wSJi.jpg'});
//       }
//     });
  
//   });
  

console.log(localStorage.getItem('background!!'));
console.log(localStorage.getItem('ncount'));