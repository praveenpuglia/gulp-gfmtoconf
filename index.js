'use strict';
let through = require('through2');
let converter = require("markdown2confluence");
let util = require('gulp-util');

module.exports = function() {
    return through.obj(function(file, enc, cb) {

        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new util.PluginError('markdown2confluence', 'Does not support streams!'));
            return;
        }

        let content = converter(file.contents.toString());
        file.contents = new Buffer(content);
        cb(null, file);
    });
};
