// Lấy data đã lưu trong storage ra để xử lý
//[data-testid="messenger_incoming_text_row"]
//[data-testid="mwchat_outgoing_row"]
console.log('show_hide.js');

chrome.storage.local.get(["thaotac", "nameChatTab"], function(items) {
  var nameChatTab = (items["nameChatTab"] || "");
  var thaotac = (items["thaotac"] || "");
  Show_Hide(thaotac, nameChatTab);
});
function Show_Hide(thaotac, nameChatTab){
  console.log(nameChatTab);
  // if (chattab ==="") 
  //   var elements = document.querySelectorAll('[data-testid="incoming_group"');//sender
  // else
  //   var elements = chattab.querySelectorAll('[data-testid="incoming_group"');//sender
  var elements = document.querySelectorAll('[data-testid="incoming_group"');//sender
  for (let element of elements) 
    element.style.visibility = thaotac;
  
  // if (chattab ==="")
  //   var elements = document.querySelectorAll('[data-testid="outgoing_group"');//me
  // else
  //   var elements = chattab.querySelectorAll('[data-testid="outgoing_group"');//me
  var elements = document.querySelectorAll('[data-testid="outgoing_group"');
  for (let element of elements) 
    element.style.visibility = thaotac;
}