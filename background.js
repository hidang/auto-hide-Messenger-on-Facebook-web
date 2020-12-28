console.log('background.js')
chrome.runtime.onConnect.addListener(function(port) {
  //console.assert(port.name == "user_addEventMouse");
  port.onMessage.addListener(function(msg) { 
    //console.log(msg.nameChatTab)
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
