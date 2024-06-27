// gulpプラグインを読み込みます
const { src, dest, watch } = require("gulp");
// Sassをコンパイルするプラグインを読み込みます
const sass = require("gulp-sass")(require("sass"));

/*
 * Sassをコンパイルするタスクです
 */
const compileSass = () =>
  // style.scssファイルを取得
  src("assets/scss/style.scss")
    // Sassのコンパイルを実行
    .pipe(
      // コンパイル後のCSSを展開
      sass({
        outputStyle: "expanded"
      })
    )
    // 下記のフォルダー配下にコンパイルされたstyle.cssを保存します
    .pipe(dest("assets/css"));

// Sassファイルを監視し、変更があったらSassを変換します
const watchSassFiles = () => watch("assets/scss/style.scss", compileSass);

// npx gulpというコマンドを実行した時、watchSassFilesが実行されるようにします
exports.default = watchSassFiles;