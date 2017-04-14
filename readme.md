# gulp-gfmtoconf
> Github flavoured markdown to Confluence Wiki markup.

## Install
```sh
npm install --save gulp-gfmtoconf
```

## Usage
```js
let gulp = require("gulp");
let converter = require("gulp-gfmtoconf");

gulp.task("plugin", ()=> {
    gulp.src("./**/*.md")
        .pipe(converter())
        .pipe(gulp.dest("converted/"));
})
```
## License
MIT @ [Praveen Puglia](http://praveenpuglia.com) 

## Thanks
- [chunpu](https://github.com/chunpu/) - https://github.com/chunpu/markdown2confluence