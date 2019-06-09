function handleClick(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.executeScript(null, { file: "Readability.js" }, function () {
            chrome.tabs.executeScript(null, { file: "myscript.js" });
        });
    }
    )
}


var contexts = ["page", "selection", "link", "editable", "image", "video",
    "audio"];
for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "使用Readability复制网页内容";
    var id = chrome.contextMenus.create({
        "title": title,
        "contexts": [context],
        "onclick": handleClick
    });
    console.log("'" + context + "' item:" + id);
}