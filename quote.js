var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?"

function getQuote(data) {
    $("#quote_text").text(data.quoteText);
    $("#quote_author").text(data.quoteAuthor);
    if (data.quoteAuthor === "") {
        data.quoteAuthor = "Unknown";
    }
    var shareQuote = "https://twitter.com/intent/tweet?text=" + data.quoteText + " - " + data.quoteAuthor;
    $('.twitter-share-button').attr("href", shareQuote);
}

$(function() {
    $.getJSON(url, getQuote, "jsonp");
});

$("#quote").click(function() {
    var colors = ["#00AA55", "#1BA39C", "#345A5E", "#5A781D", "#E26A6A", "#AE59B6", "#4F5A65", "#AA8F00", "#856514", "#F64747"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
    document.body.style.color = randomColor;
    $(".twitter-share-button").css("backgroundColor", randomColor);
    $(this).css("backgroundColor", randomColor);

    $.getJSON(url, getQuote, "jsonp");
});