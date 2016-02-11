console.log("コンテンツスクリプトからのログ");

function convertElem(){
  $(".ranking-item").text("キタモト");
}

$(function() {
  convertElem();
  $('body').css('background', '#600');
});
 
// 対象ノードを選択
var target = document.querySelector('.ranking-items.adjust');
console.log(target);

// オブザーバインスタンスを作成
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation.type);
    $(function() {
      convertElem();
    });
  });    
});

// オブザーバの設定
var config = { attributes: true, childList: true, characterData: true }
 
// 対象ノードとオブザーバの設定を渡す
observer.observe(target, config);

alert("yaaa");