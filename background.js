chrome.browserAction.onLoad.addListener(function(tab) {
    chrome.tabs.executeScript(null, { file: "backend.js" })
})