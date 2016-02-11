
function update(cnt){
  console.log("back");
  console.log(cnt);
  var counter = 0;
   
  chrome.browserAction.setBadgeText({text:String(cnt)});
   
  chrome.browserAction.onClicked.addListener(
    function(tab){
      counter++;
      chrome.browserAction.setBadgeText({text:String(cnt)});
    }
  );
  console.log("ya");
}
