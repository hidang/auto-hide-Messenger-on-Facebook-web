// Lấy data đã lưu trong storage ra để xử lý
//[data-testid="messenger_incoming_text_row"]
//[data-testid="mwchat_outgoing_row"]
console.log('show_hide.js');

chrome.storage.local.get(["thaotac"], function(items) {
  var thaotac = (items["thaotac"] || "");
  Show_Hide(thaotac);
});
function Show_Hide(thaotac){

  
  var elements = document.querySelectorAll('[data-testid="incoming_group"');//sender
  for (let element of elements) 
    element.style.visibility = thaotac;

  var elements = document.querySelectorAll('[data-testid="outgoing_group"');
  for (let element of elements) 
    element.style.visibility = thaotac;
}