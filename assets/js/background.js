chrome.contextMenus.create({
    title: "Amazonで検索",
    contexts: ["selection"],
    type: "normal",
    onclick: function (info) {
        var keyword = encodeURI(info.selectionText);
        chrome.tabs.create({
            url: "https://www.amazon.co.jp/s/?field-keywords=" + keyword
        });
    }
});