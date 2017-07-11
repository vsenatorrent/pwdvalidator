$(function () {
  $('input[type=password]').keyup(function () {
    var pwds = $(this).val();
    if (pwds.length < 8) {
      $('.length').removeClass('green').addClass('red');
    } else {
      $('.length').removeClass('red').addClass('green');
    }

    var small = '[a-z]+',
      large = '[A-Z]+',
      number = '[0-9]+';

    if (pwds.match(small)) {
      $('.mbukva').removeClass('red').addClass('green');
    } else {
      $('.mbukva').removeClass('green').addClass('red');
    }
    
    if (pwds.match(large)) {
      $('.Bbukva').removeClass('red').addClass('green');
    } else {
      $('.Bbukva').removeClass('green').addClass('red');
    }
    if (pwds.match(number)) {
      $('.numb').removeClass('red').addClass('green');
    } else {
      $('.numb').removeClass('green').addClass('red');
    }


  }).focus(function () {
    $('.popup').show();
  }).blur(function () {
    $('.popup').hide();
  });









})
