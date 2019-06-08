function handleClick(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "copyReadability"
        });
    });
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