chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color: '#f9f9f9'}, () => {
        console.log("The color is something now");
    });
});