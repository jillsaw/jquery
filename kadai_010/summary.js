$(function(){
  //要件１・・・色を変える
  $('#change-color').on('click',function(){
    $('#target').css('color','red');
  });
  //要件２・・・文字を変える
  $('#change-text').on('click',function(){
   $('#target').text('Hello!');
    });
  //要件３・・・フェードアウト
  $('#fade-out').on('click',function(){
    $('#target').css('opacity', 0);
  });
  //要件４・・・フェードイン
  $('#fade-in').on('click',function(){
    $('#target').css('opacity', 1);
  });
});