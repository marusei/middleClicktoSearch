chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    chrome.tabs.create({url: "http://www.google.com/search?q=" + message.text, selected: true});
});
