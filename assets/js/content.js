// デフォルト値
var DEFAULT_LATEST = 1;
var DEFAULT_PERIOD = 5;
var DEFAULT_SUBSCRIBE = 1;

// 書籍情報の抜き取り
function scrapeBookInfo() {
    var title = $("#productTitle").text();
    var authors =
        $("#bylineInfo > .author a.a-link-normal")
            .map(function () {
                return this.textContent;
            }).get().join(",");

    var published =
        $("#booksTitle .a-size-medium").map(function () {
            return this.textContent && this.textContent.match(/\d{4}\/\d{1,2}\/\d{1,2}/);
        })
            .get()
            .find(Boolean)
            .replace(/\//g, "-");
    return { title, authors, published };
}

// クリップボードへのテキストコピー
function copyToClipboard(text) {
    var input = document.createElement("input");
    input.style.position = "fixed";
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    document.body.removeChild(input);
};

// 書籍情報のコピー
function copyBookInfo() {
    var bookInfo = scrapeBookInfo();
    var copiedText = [
        bookInfo.title,
        DEFAULT_LATEST,
        DEFAULT_PERIOD,
        DEFAULT_SUBSCRIBE,
        bookInfo.published,
        bookInfo.authors
    ].join("\t");
    copyToClipboard(copiedText);
}

// ロード時
$(function () {

    // ボタンの作成
    var copyButton = $("<button/>",
        {
            text: "Copy",
            click: function () {
                copyBookInfo();
            }
        });

    // ボタンの設置
    $("#productTitle").before(copyButton);

});