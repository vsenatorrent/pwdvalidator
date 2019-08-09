// $(function () {
//   $('input[type=password]').keyup(function () {
//     var pwds = $(this).val();
//     if (pwds.length < 8) {
//       $('.length').removeClass('green').addClass('red');
//     } else {
//       $('.length').removeClass('red').addClass('green');
//     }

//     var small = '[a-z]+',
//       large = '[A-Z]+',
//       number = '[0-9]+';

//     if (pwds.match(small)) {
//       $('.mbukva').removeClass('red').addClass('green');
//     } else {
//       $('.mbukva').removeClass('green').addClass('red');
//     }
    
//     if (pwds.match(large)) {
//       $('.Bbukva').removeClass('red').addClass('green');
//     } else {
//       $('.Bbukva').removeClass('green').addClass('red');
//     }
//     if (pwds.match(number)) {
//       $('.numb').removeClass('red').addClass('green');
//     } else {
//       $('.numb').removeClass('green').addClass('red');
//     }


//   }).focus(function () {
//     $('.popup').show();
//   }).blur(function () {
//     $('.popup').hide();
//   });









// })

const form = $('.form');
const passwordInput = $('#userpwd');
const popup = $('.form__popup');

// condition field nodes

const oneLetterNode = $('.form__condition--oneLetter');
const oneUpperLetterNode = $('.form__condition--oneUpperLetter');
const oneNumNode = $('.form__condition--oneNum');
const lengthNode = $('.form__condition--length');

const highlightError = (node, removeClass, addClass) => {
  node.removeClass(removeClass).addClass(addClass);
}

let success = false;

passwordInput.on('keyup', function(){
  const inputValue = $(this).val();
  console.log(inputValue);
  // oneLetter check
  const oneLetterCondition = inputValue.match(/[a-z]/);
  oneLetterCondition ? highlightError(oneLetterNode, 'red', 'green') : highlightError(oneLetterNode, 'green', 'red');
    
  // oneUpperLetter check
  const oneUpperLetterCondition = inputValue.match(/[A-Z]/);
  oneUpperLetterCondition ? highlightError(oneUpperLetterNode, 'red', 'green') : highlightError(oneUpperLetterNode, 'green', 'red'); 

  // oneNum check
  const oneNumCondition = inputValue.match(/[0-9]/);
  oneNumCondition ? highlightError(oneNumNode, 'red', 'green') : highlightError(oneNumNode, 'green', 'red');

  // length check
  const lengthCondition = inputValue.length > 7;
  lengthCondition ? highlightError(lengthNode, 'red', 'green') : highlightError(lengthNode, 'green', 'red');
   
  if(oneLetterCondition && oneUpperLetterCondition && oneNumCondition && lengthCondition){
    popup.hide();
    success = true;
  } else {
    popup.show()
    success = false;
  }
})

form.on('submit', function(e){
  e.preventDefault();
  success ? alert('success') : alert('fail');
})