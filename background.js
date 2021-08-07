chrome.runtime.onInstalled.addListener(() => {
  console.log("extension is installed");
});

chrome.action.onClicked.addListener(function (tab) {
    console.log("extension icon is clicked");
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        console.log("url: ", url);
    });
    chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, 
            {
                todo: "updateLocalStroage", 
                data:{
                    a:"a",
                } 
            });
    });
});

