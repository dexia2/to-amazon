var title = $("#productTitle").text();
var authors = $("#bylineInfo .author .contributorNameID").map(function () {
    return this.textContent;
}).get();
var published =
    $("#booksTitle .a-size-medium").map(function () {
        return this.textContent && this.textContent.match(/\d{4}\/\d{1,2}\/\d{1,2}/);
    })
    .get()
    .find(Boolean);