console.log('addEventMouse.js');
const port = chrome.runtime.connect();
var ChatTabs, I_ChatTabs, Chat_Tabs, I_Chat_Tabs, array_ChatTabName = [];
var arrayChatTabName = [];
//---------------------------------------------------------------------------------------
window.setInterval(function(){ // Set interval for checking 😑😐
  I_ChatTabs = document.querySelectorAll('[data-testid="messenger-chat-title-text"]');
  I_ChatTabs = [...I_ChatTabs];
  if (I_ChatTabs.length === 0) {
    return;
  }
  I_Chat_Tabs = JSON.parse(localStorage.getItem('Chat_Tabs'));
  if (I_Chat_Tabs === "[]" || I_Chat_Tabs === null) {
    console.log('dayne')
    Add();
    return;
  }
  arrayChatTabName = [];
  I_ChatTabs.forEach(element => {
    arrayChatTabName.push(element.textContent);
  });
  arrayChatTabName.forEach(element => {
    //console.log(I_Chat_Tabs)
    if (!I_Chat_Tabs.includes(element)) {
      Add();
    }
  });
}, 500);
//----------------------------------------------------------------------------------------

function Add() {
  ChatTabs = document.querySelectorAll('[data-pagelet="ChatTab"]');
  ChatTabs = [...ChatTabs];
  array_ChatTabName = [];
  if(ChatTabs !== "[]"){
    ChatTabs.forEach(element => {
      var ChatTabNames = element.querySelectorAll('[data-testid="messenger-chat-title-text"]');
      ChatTabNames = [...ChatTabNames];
      array_ChatTabName.push(ChatTabNames[0].textContent);//FIXME: trường hợp 2 tên giống nhau
      //console.log(ChatTabNames[0].textContent)
      element.addEventListener('mouseenter', () => {//FIXME: check ton tai addEventListener
        port.postMessage({thaotac: "show"});
      });
      element.addEventListener('mouseleave', () => {
        port.postMessage({thaotac: "hide"});
      });
    });
    //console.log(array_ChatTabName)
    port.postMessage({ChatTabName: JSON.stringify(array_ChatTabName)});
    localStorage.setItem('Chat_Tabs', JSON.stringify(array_ChatTabName));
  }
}

