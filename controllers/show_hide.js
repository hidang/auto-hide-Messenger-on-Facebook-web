// Lấy data đã lưu trong storage ra để xử lý
//[data-testid="messenger_incoming_text_row"]
//[data-testid="mwchat_outgoing_row"]
console.log('show_hide.js');
var thaotac, sh_ChatTabs, elements1, elements2, sh_ChatTabNames;
chrome.storage.local.get(["thaotac"], function(items) {
  thaotac = (items["thaotac"] || "");
  Show_Hide(thaotac);
});
function Show_Hide(thaotac){
  sh_ChatTabs = document.querySelectorAll('[data-pagelet="ChatTab"]');
  sh_ChatTabs.forEach(chattab => {
    sh_ChatTabNames = chattab.querySelectorAll('[data-testid="messenger-chat-title-text"]');
    //sh_ChatTabNames[0].textContent//FIXME: trường hợp 2 tên giống nhau
    
    elements1 = chattab.querySelectorAll('[data-testid="incoming_group"');//sender
    elements1.forEach(element => {
      element.style.visibility = thaotac;
    });
    elements2 = chattab.querySelectorAll('[data-testid="outgoing_group"');
    elements2.forEach(element => {
      element.style.visibility = thaotac;
    });
  });

}