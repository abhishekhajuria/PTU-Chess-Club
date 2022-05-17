$(document).ready(function() {

    new WOW({mobile: false}).init();
    // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

    function scrollTo(div) {
        $('html, body').animate({
            scrollTop: $("#" + div).offset().top
        }, 500);
        // $('html, body').scrollTop($("#" + div).offset().top);

        if (div == 'intro') {
            window.location.hash = '';
        }
        else {
            window.location.hash = $("#" + div).attr("id");
        }
    };

    $( "a.scrollable" ).on('click', function(event) {
        scrollTo($(this).attr("href").substring(1));
    });

    $('.carousel').flickity({
        cellAlign: 'center',
        contain: true,
        imagesLoaded: true,
        lazyLoad: 2,
        fullscreen: true,
        // wrapAround: true,
        // pageDots: false
    });

    $('.collapse-button').on('click', function() {
        var name = $(this).attr('id').split('-')[0];
        var collapsible = $('#' + name + '-collapsible');
        collapsible.toggleClass('expanded');
        $(this).toggleClass('expanded');
        if (collapsible.hasClass('expanded')) {
            collapsible.css('max-height', collapsible[0].scrollHeight + 'px');
        } else {
            collapsible.css('max-height', '0px');
            scrollTo(name);
        }
    });

    $.get("grabber.php?url=https://raw.githubusercontent.com/PTU-Chess-Club/chess-club/master/members.txt", function(data) {
        data.split('\n').sort().filter( function(s) { return s.length > 0;}).forEach( function(name, index) {
            $('#members-list').append('<div>' + name + '</div>');
        });
    });
    $.get("grabber.php?url=https://raw.githubusercontent.com/PTU-Chess-Club/chess-club/master/hall-of-fame.txt", function(data) {
        data.split('\n').sort().filter( function(s) { return s.length > 0;}).forEach( function(name, index) {
            $('#hall-of-fame-list').append('<div>' + name + '</div>');
        });
    });

    // scrollTo(Url.hash() || 'intro');
});
