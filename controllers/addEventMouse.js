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
var port = chrome.runtime.connect({name: "user_addEventMouse"});
function Add() {
  var elements = document.querySelectorAll('[data-pagelet="ChatTab"]');
  for (let element of elements) {
    element.addEventListener('mouseenter', e => {
      //console.log(element)
      var ChatTab = element.querySelector('[data-testid="messenger-chat-title-text"]');
      ChatTab = ChatTab.getAttribute('class')
      console.log(ChatTab);
      port.postMessage({thaotac: "show"});//
      // port.onMessage.addListener(function(msg) {
      // });
    });
    element.addEventListener('mouseleave', e => {
      var ChatTab = element.querySelector('[data-testid="messenger-chat-title-text"]');
      port.postMessage({thaotac: "hide"});//
      // port.onMessage.addListener(function(msg) {
      // });
    });
  }
}

