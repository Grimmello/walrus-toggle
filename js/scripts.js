$(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
    $("#randompic").fadeToggle();
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
  $(".clickable5").click(function() {
    $("#paragraphtoggle").slideToggle();
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $(".panel").removeClass("walrus-info");
    $(".panel").addClass("walrus-info2");
  });
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
    $(".panel").removeClass("walrus-info2");
  });
});
