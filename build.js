var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var bro = browserify({ debug: true, cache: {}, packageCache: {}});

function update () {
  bro
    .transform(babelify)
    .external(['react', 'react-router'])
    .require("./src", { entry: true })
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(fs.createWriteStream("./dist/exim.js"));
}

update();
