'use strict';

function checkValidUser(value) {
  return /^[a-zA-Z0-9 ]+$/.test(value);
}

$('.invalid-username').hide();

$('#input2').bind('propertychange change click keyup input paste', function(event) {
  event.preventDefault();
  $('.invalid-username').hide();
  if (checkValidUser($('#input2').val())) {
    $('.ivalid-username').hide();
  } else if (!checkValidUser($('#input2').val())) {
    $('.invalid-username').show();
  }
});