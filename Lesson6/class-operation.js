$(function(){
  $('#add').on('click',function(){
    $('#target').addClass('sample');
  });
  $('#remove').on('click',function(){
    $('#target').removeClass('sample');
  });
  $('#toggle').on('click', function(){
    $('#target').toggleClass('sample');
  });
  $('#has').on('click',function(){
    let reslt=$('#target').hasClass('sample');
    if(reslt){
      console.log('sampleクラスがあります');
    }else{
      console.log('sampleクラスがありません');
    }
  });
});