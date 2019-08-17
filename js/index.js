$(document).ready(function(){

  // Click fake-lottery to generate fake prize
  $('#fake-lottery-link').click(function() {
    $('#popup-backdrop').toggleClass('hide');
    $('#loading').toggleClass('hide');
    setTimeout(function() {
      $('#loading').toggleClass('hide');
      $('#first-prize').toggleClass('hide');
    }, 2000)
  })

  // Click popup-backdrop to hide
  $('#popup-backdrop').click(function(e) {
    $(this).toggleClass('hide')
    $('#first-prize').toggleClass('hide');
  })

  // Click popup itself won't close the popup
  $('#popup').click(function(e) {
    e.stopPropagation()
  })

});