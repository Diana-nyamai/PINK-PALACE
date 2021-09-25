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
        $(".navbar-fixed-top").css("background-color", "#e7bfc0"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      } else {
        $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
      }
    });
  });

  
  // swipper js
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 1,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    loop: true
  });

  // gallery js
  var fullimgbox = document.getElementById('fullimgbox');
    var fullimg = document.getElementById('fullimg'); 
    
    function openFullImg(picture){
       fullimgbox.style.display = 'flex';
        fullimg.src = picture;
    }

    function closeFullImg(){
      fullimgbox.style.display = 'none';
    }

    // animate text
    var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 1000
  });