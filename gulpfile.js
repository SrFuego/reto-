const gulp = require("gulp");
const del = require("del");
const shell = require("gulp-shell");
const plumber = require("gulp-plumber");
const stylus = require("gulp-stylus");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const pug = require("gulp-pug");
const watch = require("gulp-watch");
const server = require("gulp-server-livereload");


//----------------------------------------------------||
//  DELETE EVERY FILE, CREATE FOLDERS AND COPY FILES  ||
//----------------------------------------------------||

//Delete every file from ./public/ before compiling
gulp.task("remove", function () {
    return del(["public/**/*"]);
});

//Create folders on ./public
gulp.task("create", ["remove"], function () {
    return gulp.src("*.js", {read: false})
        .pipe(shell([
            "mkdir -p public/assets public/assets/icons public/assets/images public/assets/fonts public/assets/others public/css public/scripts"
        ]));
});

//Copy files from assets and fonts
gulp.task("copy", ["create"], function () {
    gulp.src(["source/assets/**/*"])
        .pipe(gulp.dest("public/assets/"));
});

//Globalize remove, create and copy tasks
gulp.task("start", ["remove", "create", "copy"]);


//--------------------------------------||
//  STYLUS, AUTOPREFIX AND MINIFY TASK  ||
//--------------------------------------||

//Compile stylus files
gulp.task("stylus", function () {
    return gulp.src("source/styles/main.styl")
        .pipe(plumber())
        .pipe(stylus({
            "include css": true
        }))
        .pipe(autoprefixer({
            browsers: ["> 5%"],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: "ie9"}))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("public/css"));
});

//Globalize stylus task
gulp.task("styles", ["stylus"]);


//----------------------------------||
//  CONCATENATE VENDORS, UGLIFY JS  ||
//----------------------------------||

//Process libraries js
gulp.task("concatenate", function () {
    return gulp.src(["source/scripts/vendor/*.js"])
        .pipe(plumber())
        .pipe(concat("vendor.js"))
        .pipe(uglify())
        .pipe(rename("vendor.min.js"))
        .pipe(gulp.dest("public/scripts/"));
});

//Process own js
gulp.task("ugly", function () {
    return gulp.src("source/scripts/app/*.js")
        .pipe(plumber())
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(rename("app.min.js"))
        .pipe(gulp.dest("public/scripts/"));
});

//Globalize scripts task
gulp.task("scripts", ["concatenate", "ugly"]);


//---------||
//  VIEWS  ||
//---------||

//Process pug templates
gulp.task("pug", function () {
    return gulp.src("source/templates/*.pug")
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest("public/"));
});


//------------||
//  WATCHERS  ||
//------------||
gulp.task("watch", ["webserver"], function () {
    gulp.watch("source/scripts/app/*.js", ["ugly"]);
    gulp.watch("source/styles/*.styl", ["stylus"]);
    gulp.watch("source/templates/*.pug", ["pug"]);
    watch("source/assets/**/*", function () {
        gulp.start("copy");
    });
    watch("source/scripts/vendor/*.js", function () {
        gulp.start("concatenate");
    });
});


//-----------------------||
//  LIVERELOAD & SERVER  ||
//-----------------------||
gulp.task("webserver", ["styles", "scripts", "pug"], function () {
    gulp.src("./public")
        .pipe(server({
            host: "0.0.0.0",
            livereload: true,
            defaultFile: "index.html",
            // directoryListing: {
            //     enable: true,
            //     path: './public'
            // },
            // fallback: 'index.html',
            open: true
        }));
});


//---------||
//  SERVE  ||
//---------||
gulp.task("default", ["styles", "scripts", "pug", "webserver", "watch"]);


// // Watch files to compile and reload
// gulp.task('watch', function () {
//     gulp.watch(['src/templates/*.pug'], ['inject', 'html']);
//     gulp.watch(['src/styles/*.styl'], ['css-dev']);
//     gulp.watch(['./bower.json'], ['wiredep']);
// });
//
//
// // gulp.task('default', [ 'html', 'css', 'js' ]);
// gulp.task('default', ['server', 'watch']);
// gulp.task('build', ['css-prod', 'html']);
