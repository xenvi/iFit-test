window.onload = function() {
    // Fade in on load
    const landingtext = document.querySelector("#landingtext");
    const landingbtn = document.querySelector("#landingbtn");
    setTimeout(function(){ landingtext.classList.add('revealtext')}, 600);
    setTimeout(function(){ landingbtn.classList.add('revealbtn')}, 1800);
    
    // Hamburger nav open
    const mobilenav = document.querySelector("#mobilenav");
    document.querySelector("#hamburger").addEventListener('click', function() {
        this.classList.toggle('open');
        mobilenav.classList.toggle('slidein');
    })

    // Mousemove parallax card effect
    document.querySelectorAll('.exercise-card').forEach((card) => {
        const height = card.clientHeight;
        const width = card.clientWidth;

        card.addEventListener('mousemove', handleMouseMove)

        function handleMouseMove(e) {
            // store x-y values of mouse
            const xValue = e.layerX;
            const yValue = e.layerY;
            
            // calculate x-y rotation values
            const yRotation = 20 * ((xValue - width / 2) / width);
            const xRotation = -20 * ((yValue - height / 2) / height);
            
            /* apply css transformation property */
            const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';

            card.style.transform = string;
        };

        card.addEventListener('mouseout', function() {
        card.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
        });

        card.addEventListener('mouseup', function() {
        card.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
        });
    });
    
carouselize(document.querySelector('#slider'));
    function carouselize(carousel) {
      var wrapper = document.getElementById("slides")
        slides = document.getElementsByClassName('slide'),
        slideWidth = slides[0].offsetWidth + 24,
        slideLen = slides.length,
        currentSlide = 3,
        carouselNext = carousel.querySelector("#next"),
        carouselPrev = carousel.querySelector("#prev"),
        last = slides[slides.length - 1],
        first = slides[0];

  
      function transition(currentSlideInput, slideWidthInput) {
        var pxValue = -(currentSlideInput - 1) * slideWidthInput;
        wrapper.style.transition = "all 0.3s ease-in-out";
        wrapper.style.left = pxValue + "px";
      }
  
      carouselNext.addEventListener('click', function () {
        var slides = document.getElementsByClassName('slide'),
        last = slides[slides.length - 1],
        first = slides[0];

        last.after(first);
      });
      carouselPrev.addEventListener('click', function () {
        var slides = document.getElementsByClassName('slide'),
        last = slides[slides.length - 1],
        first = slides[0];
        
        first.after(last);
      });
  }
}

window.onscroll = function () {
    // Nav position and visibility on scroll
    var nav = document.querySelector("#nav");
    var mobilenav = document.querySelector("#mobilenav");
    var productnav = document.querySelector("#productnav");
      if (window.pageYOffset > 919) {
        nav.classList.add("hidenav");
        mobilenav.classList.add("hidenav");
        productnav.style.display = "none";
      } else if (window.pageYOffset < 46) {
        productnav.style.display = "flex";
      } else {
        nav.classList.remove("hidenav");
        mobilenav.classList.remove("hidenav");
      }
  };
  