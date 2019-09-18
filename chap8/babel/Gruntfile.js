grunt.loadNpmTasks('grunt-babel');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.initConfig({
  babel: {
    options: {
      /* ソースマップを出力させる場合はtrueにする */
      sourceMap: true
    },
    dist: {
      files: {
        /* 変換後のJSファイル: 変換前のJSファイル */
        "./lib/bundle.js": "./src/begin.es6.js"
      }
    }
  },
  watch: {
    js: {
      files: ["src/*.js"],
      tasks: ["babel"]
    }
  }
});

grunt.registerTask("default", ["babel"]);
