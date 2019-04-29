// Get references to page elements
var scrapeWeb = $("scrapeButton");
var articlesDiv = $("#articlesDiv");

// Grab the articles as a json
$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
        // Display the information on the page
        // articlesDiv.append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
        articlesDiv.append("<div data-id='" + data[i]._id + "'>" + 
        "<h1>" + data[i].title + "</h1>" + 
        "<a href=" + data[i].link + ">" + data[i].link + "</a>" + "<br />" +
        "<p>" + data[i].published + "</p>" +
        "</div>");
    }
});