// Get references to page elements
var scrapeWeb = $("scrapeButton");
var articlesDiv = $("#articlesDiv");

// scrape website on click
$(document).on("click", scrapeWeb, function() {
    // Grab the articles as a json
    $.getJSON("/articles", function(data) {
        // For each one
        for (var i = 0; i < data.length; i++) {
            // Display the information on the page
            // articlesDiv.append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
            articlesDiv.append("<div id='articleBox'  data-saved='false' data-id='" + data[i]._id + "'>" + 
            "<h2>" + data[i].title + "</h1>" + 
            "<a href=" + data[i].link + ">" + data[i].link + "</a>" + "<br />" +
            "<p>" + data[i].published + "</p>" +
            "<button id='saveArticle'>Save</button>" +
            "</div>" +
            "<br /><br />");
        }
    });
});
// var articleBox = $("#articleBox");

// Whenever someone clicks an articlesDiv display a modal for the user to add a note for the clicked article
$(document).on("click", "#saveArticle", function() {
     // Save the id from the p tag
    var thisId = $(this).attr("data-id");

    // Now make an ajax call for the Article
    $.ajax({
        method: "GET",
        url: "/articles/" + thisId
  })

});
