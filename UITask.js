var dragging = false;

$('#dragbar').mousedown(function(e){
  e.preventDefault();
  dragging = true;
  var side = $('#side');
  var bottom = $('#bottom');
  var main = $('#main');
  $(document).mousemove(function(ex){
    side.css("width", ex.pageX +2);
  });

  $(document).mousemove(function(ex){
    bottom.css("height", ex.pageX +1);
  });

  $(document).mousemove(function(ex){
    main.css("width", ex.pageX +2);
  });
});

$(document).mouseup(function(e){
  if (dragging) 
  {
    $(document).unbind('mousemove');
    dragging = false;
  }
});

