

$('#workTitle').on('click', function() {console.log('it worked');});

// $(".projectHomes").on('ready', function() {co})



/* jQuery code - animations */

// $('projectHomes').on('hover', function() {
//     $(projectHImage).animate({
//        'background-position-x': '1000%'
//     });
//  });


//  $('projectHomes').on('mouseenter', function() {
//     $(projectHImage).css({
//        'background-position-x': '1000%'
//     });
//  });

//  $( ".projectHImage" ).animate({
//     left: "50px",
//      }, 2000);

$('.projectHomes').on('click', function() {
    $('.projectHImage').css({'background-position-x': '1%'},2000)
})