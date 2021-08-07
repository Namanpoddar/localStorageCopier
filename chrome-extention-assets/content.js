chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "updateLocalStroage"){
        console.log(request.data);
        Object.keys(request.data).forEach(el=>{
            localStorage.setItem(el, request.data[el]);
        })
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "getLocalStorage"){
        let data = {};
        Object.keys(localStorage).forEach(el=>{
            data[el]=localStorage.getItem(el);
        })
        chrome.storage.local.set({localStorageData: data}, function() {
            console.log('Local Storage is copied', data);
        });
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "setLocalStorage"){
        console.log("setLocalStorage");
        chrome.storage.local.get(['localStorageData'], function(result) {
            Object.keys(result.localStorageData).forEach(el=>{
                localStorage.setItem(el , result.localStorageData[el]);
            })                
        });
    }
});

