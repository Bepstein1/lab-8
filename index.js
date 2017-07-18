$(function(){
$('td').click(function(){
  $(this).toggleClass('blue');
});
  $('#submitbutton').on('click', function(){
    delay(1500).remove();
    //  alert('Your seat is reserved');
  });
});
