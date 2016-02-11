// 動いてる証、背景色を変更する
$('body').css('background', '#600');

// 前日にランクインしていたものを削除する
function convertElem(){
  $.each( $(".ranking-item:contains('位前日')"), function(){
    $(this).remove();
  });

  // 表示しているランキングのアイテム数を通知したい
}

convertElem();

// ランキング要素を格納する要素を監視する。
// ランキング情報が追加されたらランクイン経験のあるものは削除する
var target = document.querySelector('.ranking-items.adjust');

// オブザーバインスタンスを作成
var observer = new MutationObserver(function(mutations) {
  console.log(mutations);
  convertElem();
});

// オブザーバの設定
var config = { childList: true }
 
// 対象ノードとオブザーバの設定を渡す
observer.observe(target, config);
