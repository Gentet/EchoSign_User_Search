chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.id, {
        "file": "contentscript.js"
    }, function () {
        console.log("Script Executed .. ");
    });
});