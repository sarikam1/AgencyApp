console.log("START!");

const urls=[];

//setting news objects
chrome.storage.local.get({urls: []}, function (result) {
  var urls = result.urls;
  urls.push(document.URL);
  chrome.storage.local.set({ urls: urls });
});

//setting counter variable
var newsCount = +localStorage.getItem('ncount') || 0;





// chrome.runtime.onMessage.addListener(
//   //https://developer.chrome.com/extensions/messaging
//   function(request, sender, sendResponse) {
//     //toggle on and off here-
 
//   }
// );


// function filter(target)
// {
//     for (var i = 0; i < triggers.length; i++)
//       {
//         console.log("filtering!");
//         if (target.innerHTML.indexOf(triggers[i]) !== -1)
//         {
//           target.style.display = "none";
//           break;
//         }
//       }        
// }





function nodeInsertedCallback(event) {
  // var tar = event.target;
  // var foo = document.getElementsByTagName("data-pagelet");
  // console.log(tar.className);
  Array.from(document.querySelectorAll('[id^=feed_sub_title], [data-testid^=story-subtilte], [data-pagelet^=FeedUnit]'))
  .map(e => { 
    let content = e.innerText
    let dynamic = Array.from(e.querySelectorAll('span:not([data-content=""])'))
    .filter(e => e.style.display != 'none')
    .map(e => {
      let hidden = window.getComputedStyle(e, ':before').getPropertyValue('content')
      return (hidden && hidden !== 'none' ? hidden : '') + e.innerText
    })
    .join('')
    .replace(/['"]+/g, '')


    if (content.toLowerCase().includes('coronavirus')) { //change includes notation to ML analysis

          localStorage.setItem('ncount', ++newsCount);

          console.log("found!");
          console.log(localStorage.getItem('ncount')); //get global variable
          save_elements = function (e) {
            var headstr = "<html><head><title>Saved Data</title></head><body>";
            var footstr = "</body>";
            var newstr = e.innerHTML;
            const saved_data = headstr + newstr + footstr;
            
            //var pop = window.open('about:blank', '_blank');
            //console.log(headstr + newstr + footstr);
            //pop.document.body.innerHTML = headstr + newstr + footstr; //--> to help visualize posts
            return false;

          }

          save_elements(e);
 
          e.closest('[data-pagelet^=FeedUnit]').remove(); //https://developer.mozilla.org/en-US/docs/Web/API/Element/closest (Blocks whole post)

        }
  })
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
