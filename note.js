var elements = document.querySelectorAll('[data-scope="messages_table"]');//sender
for (let element of elements) {
  element.style.display = "none";//block
  //data-testid="messenger_incoming_text_row"
}


var elements = document.querySelectorAll('[data-testid="mwchat_outgoing_row"]');//me
for (let element of elements) {
  //element.style.display = "none";//block
  element.style.backgroundColor= '#fdffff';
}
//check querySelectorAll bang length 
// them event mouts
//mouseover di chuot vao//data-testid="mwchat-tab"
elements.addEventListener('mouseenter', e => {
  
});


//data-testid="mwchat-tab" | data-pagelet="ChatTab"
var elements = document.querySelector('[data-testid="mwchat-tab"]');//sender
var elements = elements.querySelectorAll('svg');//sender
elements

// mouseenter	Sự kiện xẩy ra khi con trỏ (pointer) di chuyển vào một phần tử.
// mouseleave	Sự kiện xẩy ra khi con trỏ (pointer) di chuyển ra khỏi một phần tử.
