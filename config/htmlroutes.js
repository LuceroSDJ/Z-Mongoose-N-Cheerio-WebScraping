// module.exports to export routes to the Server.js file 
//in order to  ==== render handlebars templates ========
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("home");
        // return "hello saved";
    });
    //render saved handlebars page which I don't have yet
    app.get("/saved", function(req, res) {
        res.render("saved");
        // return "hello saved";
    });
}

// Then, require this route in the server.js file