//how to submit the form into an object
var seatsReserved={};


$(function(){
  $('td').click(function(){
    $(this).toggleClass('blue');
  });

$('form').submit(function(event){
	// prevent default stop the form from
	// refreshing the page
	event.preventDefault();
	// #name is the id of an input field
	// val is how you get the value
	var name  = $(this).find('#name').val();
  var mobile  = $(this).find('#mobile').val();
  var reservedSeats = '';
  var $tableData = $('td');
  // for (var i = 0; i < $tableData.length; i++) {
  //   if($($tableData[i]).hasClass('blue')){
  //     $($tableData[i]).removeClass('blue');
  //     $($tableData[i]).addClass('reserved');
  //     $($tableData[i]).html('X'); //taking the text out of the box, will show X
  //     reservedSeats += ' ' + $($tableData[i]).attr('id') + ',';
  //   }
  // }
  Array.from($('td')).forEach(function(seat) {
    if($(seat).hasClass('blue')){
      $(seat).removeClass('blue');
      $(seat).addClass('reserved');
      $(seat).html('X');
    }
  });

  alert(name + ' your reserved seats' + reservedSeats);
  // $(this).trigger("reset");  --to reset the form
});


});
