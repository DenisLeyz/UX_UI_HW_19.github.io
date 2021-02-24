

// $(".projectHomes").on('ready', function() {co})



/* jQuery code - animations */


// homesfirst

$(document).ready(function(){
    $('.projectHomes').mouseenter(function(){
        $('.projectHImage').animate({'background-position-x': '110%'}, 400, "swing");
    });
    $('.projectHomes').mouseleave(function(){
        $('.projectHImage').animate({'background-position-x': '1000%'});
    });})

// beauty

$(document).ready(function(){
    $('.projectBeauty').mouseenter(function(){
        $('.projectBImage').animate({'background-position-x': '0%'}, 400, "swing");
    });
    $('.projectBeauty').mouseleave(function(){
        $('.projectBImage').animate({'background-position-x': '-1000%'});
    });})


    // beelocal

$(document).ready(function(){
    $('.projectBeeL').mouseenter(function(){
        $('.projectBLImage').animate({'background-position-x': '100%'}, 400, "swing");
        });
    $('.projectBeeL').mouseleave(function(){
        $('.projectBLImage').animate({'background-position-x': '-1000%'});
        });})




// $('.projectHomes').on('mouseenter', function() {
//     $('.projectHImage').animate({
//         'background-position-x': '110%'}, {duration: 800, easing: "swing"}, {complete: function(){$('.projectHImage').animate({
//             'background-position-x': '100%'}, {duration: 100, easing:"linear"})}})}, );


// $('.projectHomes').on('mouseleave', function() {
//     $('.projectHImage').animate({
//         'background-position-x': '10%'}, {duration: 800, easing: "swing"}




//   h1.greeting {text-align: center;font-size: 27.5px;}
//   .heroImg{padding-left: 15%;padding-right: 15%;}


// $(h1'#connect').css('display', 'none');








//  $('projectHomes').on('mouseenter', function() {
//     $(projectHImage).css({
//        'background-position-x': '1000%'
//     });
//  });

//  $( ".projectHImage" ).animate({
//     left: "50px",
//      }, 2000);

// $('.projectHomes').on('click', function() {
//     $('.projectHImage').css({'background-position-x': '1%'},2000)
// })