const port = chrome.runtime.connect();
const listChat = document.getElementById("listChat");
listChat.innerHTML = '';
var array_ChatTabName = JSON.parse(localStorage.getItem('ChatTabName'));
array_ChatTabName.forEach(element => {
  listChat.innerHTML += 
`<li>
  <label><input type="checkbox" class="checkbox" value="${element}">${element}</label>
</li>`;
});
var checkboxs = document.getElementsByClassName('checkbox');
checkboxs = [...checkboxs];
// []?true:false   -> true but it's object
// "[]"?true:false -> true but it's string
//check !Array_Show
if (localStorage.getItem('Array_Show') && localStorage.getItem('Array_Show') != "[]") {
  var array_show = JSON.parse(localStorage.getItem('Array_Show'));
}else{
  var array_show = null;
}
//click checkbox after check Array_Show
if (array_show) {
  checkboxs.forEach(checkbox => {
    if (array_show.indexOf(checkbox.value) + 1) {//+1 because array[0] -> 0 ->false ||-1+1=0->false
      checkbox.checked = false;
    }else{
      checkbox.checked = true;
    }
  });
}else{
  checkboxs.forEach(checkbox => {
    checkbox.checked = true;
  });
}
//add event click for checkbox
checkboxs.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      var index = array_show.indexOf(checkbox.value);
      if (index !== -1) {
        array_show.splice(index, 1);//splice one index element from array
      }
    }else{
      if(!array_show) array_show = [];
      array_show.push(checkbox.value);
    }
    //TODO:send background array_show
    if(!array_show) array_show = [];
    localStorage.setItem('Array_Show', JSON.stringify(array_show));
  });
});
if(!array_show) array_show = [];
localStorage.setItem('Array_Show', JSON.stringify(array_show));
//------------------------------------------------------------------
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

