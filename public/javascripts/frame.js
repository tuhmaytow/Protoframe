// get references to the canvas and its context
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
// get the offset position of the canvas
var $canvas = $("#myCanvas");
var canvasOffset = $canvas.offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;

for (var x = 0.5; x < 500; x += 10) { //vertical
  ctx.moveTo(x, 0);
  ctx.lineTo(x, 400); //bottom
}
for (var y = 0.5; y < 500; y += 10) { //horizontal
  ctx.moveTo(0, y);
  ctx.lineTo(500, y); //side
  ctx.strokeStyle = "#DEE0DF";
  ctx.stroke();
}

var $icons = $(".icon");

$icons.each(function(index, element) {
  $(this).data("iconsIndex", index);
});

// make all draggable
$(function() {
  $(".icon").draggable({
    helper: 'clone',
    cursor: 'move',
  });
  $('#myCanvas').droppable({
    accept: '.icon',
    drop: function(event, ui) {
      // var $canvas = $(this);
      $.ui.ddmanager.current.cancelHelperRemoval = true;
    }
  });
});

// $('.icon').draggable({
//   helper: function() {
//     return "<img class="icon"></img>";
//   }
// });
