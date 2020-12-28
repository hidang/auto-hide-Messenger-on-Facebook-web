console.log('addEventMouse.js');
Add();
//TODO: check chattab
var elements;
var temp = 0;
window.setInterval(function(){ // Set interval for checking
  elements = document.querySelectorAll('[data-pagelet="ChatTab"]');
  if (elements.length != temp) {
    temp = elements.length;
    Add();
  }
  console.log(elements.length);
}, 500);
//-------------------------------------------------------------------------
var port = chrome.runtime.connect();
function Add() {
  var elements = document.querySelectorAll('[data-pagelet="ChatTab"]');
  //localStorage.setItem('ChatTab', 'dang dep trai');

  elements.forEach(element => {
    var ChatTab = element.querySelectorAll('[data-testid="messenger-chat-title-text"]');
    port.postMessage({thaotac: "show"});
    element.addEventListener('mouseenter', () => {
      //console.log(element)=
      // ChatTab = element.querySelectorAll('[data-testid="messenger-chat-title-text"]');
      // console.log(ChatTab[0].textContent);//FIXME: trường hợp 2 tên giống nhau
      port.postMessage({thaotac: "show"});
    });
    element.addEventListener('mouseleave', () => {
      // ChatTab = element.querySelectorAll('[data-testid="messenger-chat-title-text"]');
      // console.log(ChatTab[0].textContent);
      port.postMessage({thaotac: "hide"});
    });
  });
}

