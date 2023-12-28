//-------------------------------Slide bottom des titres ------------------------------
    ( function($) {
        let titreStory = $('.story h2')
        titreStory.addClass('titre-story')
        titreStory.html("<span class=\"titre-histoire titre-histoire-hide\">L'histoire</span>")
        
    } )(jQuery);


    ( function($) {
        let titreStudio = $('#studio h2')
        titreStudio.addClass('titre-studio')
        titreStudio.html("<span class=\"mot3\">Studio</span> <span class=\"mot4\">Koukaki</span>")
        
    } )(jQuery);

    //---------------------Video en background titre ----------------------


     ( function($) {
        $(".banner").append("<video id=\"background-video\" autoplay loop muted><source src=\"wp-content/themes/foce-child/VideoKoukaki.mp4\" type=\"video/mp4\"></video>")
        $("#background-video").append("<img src=\"wp-content/themes/foce-child/banner.png\"</img>")
        
    } )(jQuery);

    //---------------------Parallaxe titre ---------------------------------

    ( function($) {
        $(window).scroll(function() {
          const titreSite = $('.block-img');
          const scrollPosition = $(window).scrollTop(); 
          if (scrollPosition <= 200) {
            titreSite.css('transform', `translateY(${scrollPosition}px)`);
          }
            });
            
         
    } )(jQuery);

    //----------------------Deplacement des nuages -----------------------------------

    ( function($) {
      $("#place").append("<img id=\"gros-nuage\" src=\"wp-content/themes/foce-child/sass/lieu/big_cloud.png\">")
      $("#place").append("<img id=\"nuage\" src=\"wp-content/themes/foce-child/sass/lieu/little_cloud.png\">")
      $(document).ready(function() {
        let animationDejaDeclenchee = false;
      
        function estVisible(element) {
          let windowHeight = $(window).height();
          let scrollTop = $(window).scrollTop();
          let elementOffset = $(element).offset().top;
      
          return (elementOffset < (scrollTop + windowHeight));
        }
      
        function animerObjet() {
          if (!animationDejaDeclenchee) {
            animationDejaDeclenchee = true;
            $("#gros-nuage").animate({
              left: "-=300px"
            }, 3000);
            $("#nuage").animate({
              left: "-=300px"
            }, 3000); 
          }
        }
      
        $(window).scroll(function() {
          if (estVisible("#gros-nuage")) {
            animerObjet();
          }
        });
      });
  } )(jQuery);

  //--------------------Rotattion des fleurs en fonction du scroll------------------------------

  ( function($) {
  $(window).on('scroll', function() {
    $('body').css('--scroll', $(window).scrollTop() / ($('body').height() - $(window).height()));
  });
} )(jQuery);


//----------------------------------------------Menu-------------------------------------------

( function($) {
  $(".menu-toggle").click(function() {
      $('.line1').toggleClass("line1-croix");
      $('.line2').toggleClass("line2-croix");
      $('.line3').toggleClass("line3-croix");
  });
})(jQuery);
    

( function($) {
  $("#site-navigation a").click(function() {
      $('#site-navigation').removeClass("toggled");
      $('.line1').removeClass("line1-croix");
      $('.line2').removeClass("line2-croix");
      $('.line3').removeClass("line3-croix");

  });
})(jQuery);

//-----------------------------Titre scroll------------------------------------------------

( function($) {
  $(document).ready(function() {
    let animationDejaDeclenchee = false;
  
    function estVisible(element) {
      let windowHeight = $(window).height();
      let scrollTop = $(window).scrollTop();
      let elementOffset = $(element).offset().top;
  
      return (elementOffset < (scrollTop + windowHeight));
    }

    function animerTitre() {
      if (!animationDejaDeclenchee) {
        animationDejaDeclenchee = true;
        $(".mot3").addClass("mot3-anim");
        $(".mot4").addClass("mot4-anim");
      }
    }
    $(window).scroll(function() {
      if (estVisible(".mot3")) {
        animerTitre();
      }
    });
  });
} )(jQuery);




( function($) {
  $(document).ready(function() {
    let animationDejaDeclenchee = false;
      
        function estVisible(element) {
          let windowHeight = $(window).height();
          let scrollTop = $(window).scrollTop();
          let elementOffset = $(element).offset().top;
      
          return (elementOffset < (scrollTop + windowHeight));
        }
  
    function animerTitre2() {
      if (!animationDejaDeclenchee) {
        animationDejaDeclenchee = true;
        $(".titre-histoire").removeClass("titre-histoire-hide");
        $(".titre-histoire").addClass("titre-histoire-anim");
      }}

    $(window).scroll(function() {
      if (estVisible(".titre-histoire")) {
        animerTitre2();
      }
    });

  
  });
} )(jQuery);