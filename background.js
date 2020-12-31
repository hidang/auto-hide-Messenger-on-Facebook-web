console.log('background.js')
//vì ở môi trường riêng biệt với các scripts trong controllers nên phải dùng mesage để nhận event-data
chrome.runtime.onConnect.addListener(function(port) {
  //console.assert(port.name == "user_addEventMouse");
  port.onMessage.addListener(function(msg) { 
    //console.log(msg.nameChatTab)
    if(msg.ChatTabName){
      localStorage.setItem('ChatTabName', msg.ChatTabName);
    }
    switch (msg.thaotac) {
      case 'show':{
        chrome.storage.local.set({
          "thaotac": ''
        }, function() {
          chrome.tabs.executeScript(null, {file: './controllers/show_hide.js'});
          //console.log("Settings saved");
        });
        break;
      }
      case 'hide':{
        chrome.storage.local.set({
          "thaotac": 'hidden'
        }, function() {
          chrome.tabs.executeScript(null, {file: './controllers/show_hide.js'});
          //console.log("Settings saved");
        });
        break;
      }
      default: break;
    }
  });
});
//TODO: ONStart();
