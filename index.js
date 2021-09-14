$(function() {
    $('.toggle').on('click', function(){

        if($('.item').hasClass('active')){
            $('.item').removeClass('active')          
        }
        else{
            $('.item').addClass('active')
        }
    })
});

// transparent navbar to colored when scrolled
$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar-fixed-top").css("background-color", "#f8bbd0"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      } else {
        $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
      }
    });
  });

