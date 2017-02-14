$(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $(".panel2").toggle();
    $(".panel").toggle();
  });
  $(".clickable3").click(function(){
    $(".randomimage").slideUp();
  });
  $(".clickable4").click(function(){
    $(".randomimage").slideDown();
  });
});
