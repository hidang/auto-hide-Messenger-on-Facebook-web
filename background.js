chrome.runtime.onConnect.addListener(function(port) {
  //console.assert(port.name == "user_addEventMouse");
  port.onMessage.addListener(function(msg) { 
    //console.log(msg.nameChatTab)
    if (msg.thaotac == "show"){
      chrome.storage.local.set({
        "thaotac": ''
      }, function() {
        console.log("Settings saved");
      });
      chrome.tabs.executeScript(null, {file: './controllers/show_hide.js'});
    }
    else if (msg.thaotac == "hide"){
      chrome.storage.local.set({
        "thaotac": 'hidden'
      }, function() {
        //console.log("Settings saved");
      });
      chrome.tabs.executeScript(null, {file: './controllers/show_hide.js'});
    }
    
  });
});
//TODO:ONStart();
