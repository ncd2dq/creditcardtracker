When require is given the path of a folder, it'll look for an index.js file in that folder; if there is one, it uses that, and if there isn't, it fails.

It would probably make most sense (if you have control over the folder) to create an index.js file and then assign all the "modules" and then simply require that.

*yourfile.js*

    var routes = require("./routes");

*index.js*

    exports.something = require("./routes/something.js");
    exports.others = require("./routes/others.js");

If you don't know the filenames you should write some kind of loader.

Working example of a loader:

    var normalizedPath = require("path").join(__dirname, "routes");

    require("fs").readdirSync(normalizedPath).forEach(function(file) {
      require("./routes/" + file);
    });

    // Continue application logic here
