$(document).ready(() => {

    const main =() => {
    $("#grow-me").addClass('big');
    $("#shrink-me").removeClass('big');
    console.log($('ol').text());
    $('a').attr('href','https://www.example.com').text('somewhere');
    $('#hide-me').css('display', 'none');
    $('#show-me').css('display', 'block');
    $('h1').html('Welcome ' + $('input').val());
    };
    
    $("#action").on("click", main);
    });