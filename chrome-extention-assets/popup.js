document.getElementById('get').addEventListener("click", function(){
    console.log("get");
    chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {todo: "getLocalStorage"});
    });
});
document.getElementById('set').addEventListener("click", function(){
    chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {todo: "setLocalStorage"});
    });
});