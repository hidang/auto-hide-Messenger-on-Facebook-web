console.log('addEventMouse.js');
const port = chrome.runtime.connect();
var ChatTabs, I_ChatTabs, Chat_Tabs, I_Chat_Tabs, array_ChatTabName = [], 
    arrayChatTabName = [], flag = true, ChatTabNames;
//---------------------------------------------------------------------------------------

window.setInterval(function(){ // Set interval for checking 😑😐
  //console.log('ne!')
  I_ChatTabs = document.querySelectorAll('[data-testid="messenger-chat-title-text"]');
  if (I_ChatTabs.length === 0) {//TH: khi các chattab được đóng hết phải reset các giá trị lại
    if(flag){// length === 0 phải reset các giá trị.. 
      console.log('just one');
      localStorage.setItem('Chat_Tabs', '[]');
      port.postMessage({ChatTabName: '[]'});
    }
    flag = false;
    return;
  }
  flag = true;// set lại flag: các tab vẫn còn
  I_Chat_Tabs = JSON.parse(localStorage.getItem('Chat_Tabs'));
  if (I_Chat_Tabs === "[]" || I_Chat_Tabs === null) {//trường hợp I_ChatTab.length >0 và I_Chat_Tabs chưa được set Item
    //console.log('dayne')
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
      Add(element);
    }
  });
  I_Chat_Tabs.forEach(element => {
    //console.log(I_Chat_Tabs)
    if (!arrayChatTabName.includes(element)) {
      Add(element);
    }
  });

}, 500);
//----------------------------------------------------------------------------------------

function Add(ChatTabName_New = true) {
  console.log('add() ne');
  ChatTabs = document.querySelectorAll('[data-pagelet="ChatTab"]');//FIXME: trường hợp 2 tên giống nhau
  array_ChatTabName = [];
  if(ChatTabs !== "[]"){
    ChatTabs.forEach(element => {
      ChatTabNames = element.querySelector('[data-testid="messenger-chat-title-text"]');
      array_ChatTabName.push(ChatTabNames.textContent);
      //TODO: check ton tai addEventListener
      if (ChatTabName_New === true) {// TH: lần đầu tiên
        element.addEventListener('mouseenter', () => {
          port.postMessage({thaotac: "show"});
        });
        element.addEventListener('mouseleave', () => {
          port.postMessage({thaotac: "hide"});
        });
      }else{
        if (ChatTabNames.textContent == ChatTabName_New) {//TH xuất hiện chattab mới khi đang tồn tại chattab cũ
          //console.log('them ne');
          element.addEventListener('mouseenter', () => {
            port.postMessage({thaotac: "show"});
          });
          element.addEventListener('mouseleave', () => {
            port.postMessage({thaotac: "hide"});
          });
        }
      }
    });
    //console.log(array_ChatTabName)
    port.postMessage({ChatTabName: JSON.stringify(array_ChatTabName)});
    localStorage.setItem('Chat_Tabs', JSON.stringify(array_ChatTabName));
  }
}

