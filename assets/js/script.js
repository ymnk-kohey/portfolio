/*
ページリロード時のスクロール保持の記述
*/
// ページのDOMが読み込まれる前にスクロール位置を復元する
document.addEventListener('DOMContentLoaded', function() {
  const scrollPosition = localStorage.getItem('scrollPosition');
  if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
  }
});
// ページが完全に読み込まれた後にスクロールを有効にする
window.addEventListener('load', function() {
  document.documentElement.style.overflow = 'auto';
  document.body.style.overflow = 'auto';
});
// ページがスクロールされたときにスクロール位置を保存する
window.addEventListener('scroll', function() {
  localStorage.setItem('scrollPosition', window.scrollY);
});

/*
画面上部ヘッダー固定の記述
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

/*
splideの記述
*/
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
      type: 'fade',
      autoplay: true, 
      pauseOnHover: false,
      rewind: true, //画像が最後まで行った場合、巻き戻って初めからスライドさせるかどうかの設定
      rewindByDrag: true, //ドラッグまたはスワイプ操作でもスライダーを巻き戻せるかどうかの設定。「rewind」オプションを有効にしないと動作しない。
      speed: number = 1200 //画像と画像が切り替わるときのスピード設定
  }).mount();
});

/*
サイト内画像の右クリックを禁止
*/
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('img').forEach((img) => {
      img.addEventListener('contextmenu', (e) => {
          e.preventDefault();
      });
  });
});