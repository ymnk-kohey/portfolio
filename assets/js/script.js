/*
画面上部のヘッダー固定の記述
*/
// HTMLからヘッダー要素を取得
const header = document.getElementById("header");
// ヘッダー要素の初期位置(ページの一番上からの距離)を取得
const headerOffsetTop = header.offsetTop;

// スクロール時にヘッダーを固定する関数
function fixHeader() {
// 現在のスクロール位置 (window.scrollY) がヘッダーの初期位置よりも大きいかチェック
  if (window.scrollY > headerOffsetTop) {
    // trueの場合、ヘッダーを固定するためにスクロール位置とヘッダーの初期位置の差分を設定
    header.style.top = `${window.scrollY - headerOffsetTop}px`;
  } else {
    // falseの場合(スクロール位置がヘッダーの初期位置以下の場合)、ヘッダーのtopを"0"にリセット
    header.style.top = "0";
  }
}

// スクロールイベントリスナーを追加する
window.addEventListener("scroll", fixHeader);

document.addEventListener('DOMContentLoaded', function() {
  var items = document.querySelectorAll('.job-company1-contacttag ul li');
  items.forEach(function(item) {
      item.addEventListener('click', function() {
          this.classList.toggle('clicked');
      });
  });
});

