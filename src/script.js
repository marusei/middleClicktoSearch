window.addEventListener('click', function (e) {
    if (e.button == 1) { //middle click
        var selectedText = window.getSelection().toString().trim();
        if (selectedText == "")
            return;

        e.preventDefault(); // prevent opening a hyperlink
        chrome.runtime.sendMessage({text: selectedText});
    }
}, true);
