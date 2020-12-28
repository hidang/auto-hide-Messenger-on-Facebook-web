(function() {
  //chrome.tabs.executeScript(null, {file: './controllers/addEventMouse.js'});
  //var port = chrome.runtime.connect({name: "user_addEventMouse"});
  var listChat = document.getElementById("listChat");



  document.getElementById("show").onclick = function() {
    chrome.storage.local.set({
      "thaotac": ''
    }, function() {
      //console.log("Settings saved");
    });
    chrome.tabs.executeScript(null, {file: './controllers/show_hide.js'});
  }
  document.getElementById("hide").onclick = function() {
    chrome.storage.local.set({
      "thaotac": 'hidden'
    }, function() {
      //console.log("Settings saved");
    });
    chrome.tabs.executeScript(null, {file: './controllers/show_hide.js'});
  }
})();
