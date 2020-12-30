console.log('addEventMouse.js');
const port = chrome.runtime.connect();
var ChatTabs, I_ChatTabs, Chat_Tabs, I_Chat_Tabs, array_ChatTabName = [];
//---------------------------------------------------------------------------------------
//Add();
window.setInterval(function(){ // Set interval for checking 😑😐
  I_ChatTabs = document.querySelectorAll('[data-pagelet="ChatTab"]');
  I_ChatTabs = [...I_ChatTabs];
  if (I_ChatTabs.length === 0) {
    return;
  }
  I_Chat_Tabs = JSON.parse(localStorage.getItem('Chat_Tabs'));
  if (I_Chat_Tabs == "[]" || I_Chat_Tabs == null) {
    console.log('dayne')
    Add();
    return;
  }

  I_ChatTabs.forEach(element => {
    
  });
  I_ChatTabs.forEach(element => {//FIXME:
    console.log(element)
    if (!(I_Chat_Tabs.indexOf(element)+1)) {
      Add();
    }
  });
}, 500);
//----------------------------------------------------------------------------------------

function Add() {
  console.log('zo Add()')
  ChatTabs = document.querySelectorAll('[data-pagelet="ChatTab"]');
  ChatTabs = [...ChatTabs];
  array_ChatTabName = [];
  if(ChatTabs !== "[]"){
    localStorage.setItem('Chat_Tabs', JSON.stringify(ChatTabs));
    ChatTabs.forEach(element => {
      var ChatTabNames = element.querySelectorAll('[data-testid="messenger-chat-title-text"]');
      ChatTabNames = [...ChatTabNames];
      array_ChatTabName.push(ChatTabNames[0].textContent);//FIXME: trường hợp 2 tên giống nhau
      
      element.addEventListener('mouseenter', () => {//FIXME: check ton tai addEventListener
        port.postMessage({thaotac: "show"});
      });
      element.addEventListener('mouseleave', () => {
        port.postMessage({thaotac: "hide"});
      });
    });
    port.postMessage({ChatTabName: JSON.stringify(array_ChatTabName)});
  }
}

