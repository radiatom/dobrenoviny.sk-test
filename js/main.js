// $('.navbar-header .open-icon, .navbar-header .close-icon').click(function(){
// 	$('nav').toggleClass('active');
// });


$(document).ready(function() {
 
  $("#owl-tv").owlCarousel({
  	navigation : true,
    navigationText: [
      " ",
      " "
      ],
    rewindNav : true,
    scrollPerPage : false,
    pagination: false,
  });

  $("#owl-tv-narrow").owlCarousel({
  	items: 3,
  	navigation : true,
    navigationText: [
      " ",
      " "
      ],
    rewindNav : true,
    scrollPerPage : false,
    pagination: false,
  });

  $("#owl-tv-gallery").owlCarousel({
  	items: 3,
  	navigation : true,
    navigationText: [
      " ",
      " "
      ],
    rewindNav : true,
    scrollPerPage : false,
    pagination: false,
  });

  $("#owl-tv-gallery-mobile").owlCarousel({
  	items: 3,
  	navigation : true,
    navigationText: [
      " ",
      " "
      ],
    rewindNav : true,
    scrollPerPage : false,
    pagination: false,
  });    
 
});



$('#owl-tv-gallery-mobile a').click(function(e) {
	e.preventDefault();

	var pswpElement = document.querySelectorAll('.pswp')[0];

	var photoswipeItems = new Array();
	$('#owl-tv-gallery-mobile a').each(function() {
		photoswipeItems.push({
	    'src': $(this).find("img").data('gallery-src'),
	    'w': 1300,
	    'h': 900,
      'title': $(this).find("img").data('gallery-title')
		});

	});


	// define options (if needed)
	var photoswipeOptions = {
	    index: $('#owl-tv-gallery-mobile a').index($(this)), // start at first slide

      // Share buttons
      // 
      // Available variables for URL:
      // {{url}}             - url to current page
      // {{text}}            - title
      // {{image_url}}       - encoded image url
      // {{raw_image_url}}   - raw image url
      shareButtons: [
          {id:'facebook', label:'Zdieľať na Facebooku', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
          {id:'twitter', label:'Twitter', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
          {id:'pinterest', label:'Pinterest', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'}
          //{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
      ]
	};

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, photoswipeItems, photoswipeOptions);	
	gallery.init();
});


// apply fancybox to images
$( document ).ready(function() {
   // fancyAjax, use for images and/or other links
   $(".fancyAjax").fancybox({
      "type" : "ajax",
      "padding" : 0,
       openEffect: 'fade',
       prevEffect: 'none',
       nextEffect: 'none',
       width: '100%',
       minWidth: '100%',
       afterLoad: function(){
           var screenHeight = $(window).height();
           var updateInterval = setInterval(function(){
               $.fancybox.update();
               var fancyboxTop = $('.fancybox-wrap').offset().top - $(window).scrollTop();
               if(fancyboxTop < screenHeight / 4) {
                   clearInterval(updateInterval);
               }
           }, 100);
           setTimeout(function(){clearInterval(updateInterval);}, 6000);
       },
       tpl: {
        closeBtn  : '<a title="Zatvoriť" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next      : '<a title="Ďalej" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev      : '<a title="Späť" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
        error     : '<p class="fancybox-error"><strong>Ľutujeme...</strong><br/>Požadovaný obsah sa nepodarilo otvoriť. Skúste to neskôr, prosím.</p>',
       }
   });
});




$(window).scroll(function(){
    if ($(this).scrollTop() > 171) {
        $('header').addClass("scroll-menu");
        $('body').addClass("scroll-menu");        
    } else {
        $('header').removeClass("scroll-menu");
        $('body').removeClass("scroll-menu");
    }
});

$( document ).ready(function() {
	$(".most-read-switch a").click(function(e) {
		e.preventDefault();
		$(".most-read-switch a").removeClass("active");
		$(this).addClass("active");
		$(".most-read-tab").css("display", "none");
		$(".most-read-tab.tab-"+$(this).index()).css("display", "block");		
	});
});

$('.cookie button').click(function() {
  $('.cookie').hide();
});


$('#main-menu').on('show.bs.collapse', function () {
  //if ($('#main-menu').height() > ($( window ).height() + 55)) {
    $('#main-menu').height($( window ).height()+100); //55    
    //$('body > header').css("border-bottom", "none");
  //}
});
$('#main-menu').on('shown.bs.collapse', function () {
  $('#main-menu').height($( window ).height()+100); //55
});

$('#main-menu').on('hide.bs.collapse', function () {
});



$( window ).resize(function() {
  if ($('nav.navbar-collapse').hasClass('in')) {
    if ($('#main-menu').height() > ($( window ).height() + 55)) {
      $('#main-menu').height($( window ).height() - 55);    
      $('body > header').css("border-bottom", "none");
   } else {
      $('#main-menu').removeAttr( 'style' );
      $('body > header').removeAttr( 'style' );
    }
  }
});


$('.open-icon, .close-icon').click(function(){
    $('body').toggleClass('mobile-menu-active');
    $('body').toggleClass('body-noscroll');
});




// SCROLL METER   &   ARTICLE NAME ------------------------------------------------------------------------------------------------------ //
$(window).scroll(function(){
    // SCROLL METER
    // sets elementID's width to percentage of scrolled window
    var elementID = '.scrollToWidth';
    var scrollMax = $(document).height() - $(window).height();
    var scrollActual = $(window).scrollTop();
    var scrollPercentage = Math.round(scrollActual/scrollMax*100);
    $(elementID).css('width', scrollPercentage+'%');


    // ARTICLE NAME
    // show / hide article name when scrolling
    if ($(this).scrollTop() > 300) {
        if(!$('body').hasClass("article-mobile-name-fixed")) {
            $('body').addClass("article-mobile-name-fixed");
            $('.the-name').css('visibility', 'visible');
            shortenArticleName();
        }
    } else {
        $('body').removeClass("article-mobile-name-fixed");
        $('.the-name').css('visibility', 'hidden');
    }
});


// shorten article name
function shortenArticleName() {
    $('.the-name').each(function(){
        // save the original title to make sure it's not lost
        if(!$(this).data('original-title')) {
            $(this).data('original-title', $(this).html().trim());
        }
        var originalTitle = $(this).data('original-title');

        // retrieve the original title if it's already been shortened
        if($(this).html() != originalTitle) {
            $(this).html(originalTitle);

        }

        // get the allowed height of the element
        var allowedHeight = parseInt($(this).css('min-height'), 10);

        // make the title shorter if the div is higher than allowedHeight
        if($(this).outerHeight() > allowedHeight) {
            var currentTitle = $(this).html;
            var cutWords = 0;
            while($(this).outerHeight() > allowedHeight) {
                cutWords++;
                currentTitle = originalTitle;
                for(i=0; i<cutWords; i++) {
                    currentTitle = currentTitle.substring(0, currentTitle.lastIndexOf(" "));
                }
                $(this).html(currentTitle + '...');
            }
        }
    });
}
// END scroll meter and article name ---------------------------------------------------------------------------------------------------- //





//// NEARBY SMART COMMUNICATION S.R.O. 

function newsletterSubmit(inputID) {
  var emailmsg = validateNewsletterEmail($('input#'+inputID).val());
  
  if (emailmsg != 'OK')
  {
    if (emailmsg == 'NOTOK')
    {
      alert('Zadajte platnú e-mailovú adresu!');
    }
    else if (emailmsg == 'REGISTERED')
    {
      alert('Zadaná e-mailová adresa je už zaregistrovaná.');
    }

    $('input#'+inputID).focus();
    return false;
  }
  else
  {
    var email = $('input#'+inputID).val();
    var newsletter = $.ajax({
      type: "POST",
      url: "/newsletter/subscribe",
      data: "email="+email,
      async: false
    }).responseText;

    if (newsletter == 'OK')
    {     
      alert('Ďakujeme za registráciu! Aktivujte svoju registráciu, inštrukcie sme vám poslali e-mailom.');
      return false;
    }
    else
    {
      alert('E-mail sa nepodarilo zaregistrovať pre chybu v systéme. Skúste to neskôr, prosím.');
      return false;
    }
  }
};

function validateNewsletterEmail(email) {
  return $.ajax({
    type: "POST",
    url: "/newsletter/email_check",
    data: "email="+email,
    async: false
  }).responseText;
};

// BRANDING BANNERY onScroll
// set everything outside the onscroll event (less work per scroll)
var left      = document.getElementById("js-branding-sky-left"),
    // -60 so it won't be jumpy
    stop      = 180 - 60,
    docBody   = document.documentElement || document.body.parentNode || document.body,
    hasOffset = window.pageYOffset !== undefined,
    scrollTop;

var right      = document.getElementById("js-branding-sky-right"),
    // -60 so it won't be jumpy
    stop      = 180 - 60,
    docBody   = document.documentElement || document.body.parentNode || document.body,
    hasOffset = window.pageYOffset !== undefined,
    scrollTop;

window.addEventListener("scroll", function(e){
  // cross-browser compatible scrollTop.
  scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;

  // if user scrolls to 180px from the top of the left and right div
  if (scrollTop >= stop) {
    // stick the div
    left.className = 'branding-sky-left-sticky';
    right.className = 'branding-sky-right-sticky';
  } else {
    // release the div
    left.className = 'branding-sky-left'; 
    right.className = 'branding-sky-right'; 
  }
});

// jQuery funkcie
$( document ).ready(function() {

    // OPEN COMMENTS MODAL IF URL PARAMETER IS SET
    var url = window.location.href;
    if(url.indexOf("?fb_comment_id=") != -1) {
      $('#comments').modal('show');
    }

    // COMMENTS MODAL OPEN - TRACK PAGEVIEW
    $('#comments').on('shown.bs.modal', function () {
      // Google Analytics
      ga('set', 'page', window.location.pathname+'#comments');
      ga('set', 'title', 'Diskusia: '+document.title);
      ga('send', 'pageview');

      // Gemius
      pp_gemius_hit('..tKhnAVh5tPW8AWTpHLTOTkXoaRnDskMM0v6zOQSKT.17');

      // Piwik
      _paq.push(['setCustomUrl', window.location.pathname+'#comments']);
      _paq.push(['setDocumentTitle', document.title]);
      _paq.push(['trackPageView']);
    });    

    // ------------------------------------

    // SHARE COUNT & COMMENTS COUNT
    var pathArray = window.location.pathname.split( '/' );
    var module = pathArray[1];
    var id = pathArray[2];

    if (module == "c")
    {
      $.getJSON('//www.dobrenoviny.sk/sharecount/' + id, function (data) {
          // share count
          service = "fb_total";
          count = data[service];
          if(count>1000) {
              var morethankilo = 1;
              count = (count / 1000).toFixed(1);
              if(count>1000) count = (count / 1000).toFixed(1) + " mil.";
              else count = count + " tis.";
          }
          /*
          if (count < 100)
          {
            if (count < 20) { count = count + 50; }
            else if (count > 20 && count < 50) { count = count + 30; }
            else if (count > 50 && count < 80) { count = count + 20; }
            else if (count > 80 && count < 100) { count = count + 10; }
          }
          */
          if (morethankilo == 1 || count >= 50) {
              // informaciu zverejnime, len ak je viac ako 50 zdielani
              $( ".share_count" ).each(function() {
                  $( this ).fadeIn(1500);
              });
              $( ".share_num" ).each(function() {
                  if (morethankilo == 1)
                  {
                      $( this ).html( count );
                  }
                  else
                  {
                      $(this).animateNumber({ number: count }, 3000);
                  }
              });
          }

          // comment count
          service = "fb_comments_plugin";
          count = data[service];
          if(count>1000) {
              var morethankilo = 1;
              count = (count / 1000).toFixed(1);
              if(count>1000) count = (count / 1000).toFixed(1) + " mil.";
              else count = count + " tis.";
          }
          /*
          if (count < 100)
          {
            if (count < 20) { count = count + 50; }
            else if (count > 20 && count < 50) { count = count + 30; }
            else if (count > 50 && count < 80) { count = count + 20; }
            else if (count > 80 && count < 100) { count = count + 10; }
          }
          */
          if (morethankilo == 1 || count > 0) {
              // informaciu zverejnime, len ak je viac ako 0 komentarov
              $( ".comment_count" ).each(function() {
                  $( this ).show();
              });
              $( ".comment_num" ).each(function() {
                  $( this ).html( count );
              });
          }    
      });
    }
});



var currentDate = new Date();

  // Отримуємо компоненти дати (рік, місяць, день)
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; // Місяці в JavaScript починаються з 0
  var day = currentDate.getDate();
  var dayName = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'][currentDate.getDay()];
  
  // Форматуємо місяць та день, щоб завжди було двоцифрове число
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }

  // З'єднуємо компоненти дати у рядок у форматі "рік-місяць-день"
  var formattedDate =day+'.'+month+'.'+year;

  // Встановлюємо відформатовану дату у вміст параграфа з id "currentDate"
  document.getElementById('data').textContent = formattedDate;
  document.getElementById('dayWeek').textContent =dayName+" " ;

//// TO BE REMOVED:::: JUST FOR DEBUGGING

// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );