// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap

$(function () {
  //職員登録 - かな氏名「検索」ボタン
  $('#add-btn-search').click(function(){
      $('#modalAddpatientSearch').fadeIn();
  });
  //職員登録 - モーダル画面を閉じる
  $('#addpatientModalButtonCancel , #addpatientModalButtonOK').click(function(){
    $('#modalAddpatientSearch').fadeOut();
  });

  //職員登録 - モーダル画面 - テーブルレコード選択
  $("#addpatientTableSearch").on("click",function(e){
    $("#tableEventShifter").focus();
  });

  //職員登録 - モーダル画面 - 行選択
  $("#addpatientTableSearch tbody tr").on("click",function(e){
    // 選択されている他の行があれば選択解除
    $(this).siblings().removeClass("selected");
    // クリックされた行を選択
    $(this).addClass("selected");
  });

  // Tableタグではkey系のイベントが拾えないので、textboxのイベントとしてバインドする
  $("#tableEventShifter").on("keydown", function(e) {
      switch (e.keyCode) {
        case 38: // ↑キー
          // 上の行を選択
          $('#addpatientTableSearch tbody tr:not(:first).selected')
            .removeClass('selected')
            .prev().addClass('selected')
          break;

        case 40: // ↓キー
          // 下の行を選択
          $('#addpatientTableSearch tbody tr:not(:last).selected')
            .removeClass('selected')
            .next().addClass('selected')
          break;
      }
    // スクロールさせない
    e.preventDefault();
  });

});
