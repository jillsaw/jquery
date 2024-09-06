$(function(){
  const text='クリックしました！';
  $('.btn').on('click',function(){
   $('.text-box').val(text);
  });
});