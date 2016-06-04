// この拡張機能が動いてる目印として、背景色を変更する
$('body').css('background', '#600');

// 前日にランクインしていたものを削除する
function convertElem(){
  // ランキング作品かどうかを判断するパーサー。変更される機会が多いと思われる
  $.each( $(".ranking-item:contains('位前日')"), function(){
    $(this).remove();
  });

  // TODO: 表示しているランキングのアイテム数を通知したい
}

convertElem();

// ランキング要素を格納する要素を監視する。
// ランキング情報が追加されたらランクイン経験のあるものは削除する
var target = document.querySelector('.ranking-items.adjust');

// オブザーバインスタンスを作成
var observer = new MutationObserver(function(mutations) {
  convertElem();
});

// 子要素の変更を監視する
var config = { childList: true }
 
// 監視対象ノードと監視内容をオブザーバに渡す
observer.observe(target, config);
