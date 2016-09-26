'use strict';

$(".icon").on("click",(event) => {
  var tempSprite = new Sprite(event.target.src);
  canvas.grabbedElements.push(tempSprite);
});

class LHCanvas {
  constructor(selector="canvas") {

   this.canvas = document.querySelectorAll(selector)[0];
   this.ctx = this.canvas.getContext("2d");
   this.width = this.canvas.width;
   this.height = this.canvas.height;
   this.visibleElements = [];
   this.grabbedElements = [];
   this.canvas.addEventListener("click",(event) => {
     var poppedElements = this.grabbedElements.pop();
     poppedElements.x = event.layerX;
     poppedElements.y = event.layerY;
     this.addNewSprite(poppedElements);
   });

   this.mouseIsDown = false;
   this.draggingIndex = 0;
   this.resize = false;
   this.dX = 0;
   this.dY = 0;

   this.canvas.addEventListener("mousedown",(event) => {
    this.mouseIsDown = true;
    var mouseX = event.offsetX;
    var mouseY = event.offsetY;
    for(var i = 0; i < this.visibleElements.length; i++) {
      var top = this.visibleElements[i].y;
      var left = this.visibleElements[i].x;
      var bottom = this.visibleElements[i].y + this.visibleElements[i].height;
      var right = this.visibleElements[i].x + this.visibleElements[i].width;
      if(top <= mouseY) {
        if(left <= mouseX) {
          if(bottom >= mouseY) {
            if(right >= mouseX) {
              this.dX = mouseX - left;
              this.dY = mouseY - top;
              this.draggingIndex = i;
            }
          }
        }
      }
      var resizeTop = bottom - this.visibleElements[i].height / 4;
      var resizeLeft = right - this.visibleElements[i].width / 4;
      var resizeBottom = bottom;
      var resizeRight = right;
      if(resizeTop <= mouseY) {
        if(resizeLeft <= mouseX) {
          if(resizeBottom >= mouseY) {
            if(resizeRight >= mouseX) {
              this.resize = true;
            }
          }
        }
      }
    }
  });

  this.canvas.addEventListener("mouseup",(event) => {
    this.mouseIsDown = false;
    this.resize = false;
  });

  this.canvas.addEventListener("mousemove",(event) => {
    var mouseX = event.offsetX;
    var mouseY = event.offsetY;
    var element = this.visibleElements[this.draggingIndex];
    if(this.mouseIsDown) {
      if(this.resize === false) {
        element.x = mouseX - this.dX;
        element.y = mouseY - this.dY;
      }
      if(this.resize) {
        element.width = mouseX - element.x;
        element.height =  mouseY - element.y;
      }
    }
  });
}

makeGrid() {
  this.ctx.strokeStyle = "#DEE0DF";
  for (var x = 0.5; x < 1000; x += 18) { //vertical
    this.ctx.beginPath();
    this.ctx.moveTo(x, 0);
    this.ctx.lineTo(x, 1000); //bottom
    this.ctx.stroke();
  }
  for (var y = 0.5; y < 1000; y += 18) { //horizontal
    this.ctx.beginPath();
    this.ctx.moveTo(0, y);
    this.ctx.lineTo(1000, y); //side
    this.ctx.stroke();
  }
}

render() {
  this.ctx.clearRect(0, 0, this.width, this.height);
  this.makeGrid();
  this.visibleElements.forEach((element) => {
    element.render(this.ctx);
  });
}

addNewSprite(sprite) {
  this.visibleElements.push(sprite);
}
}

class Sprite {
  constructor(img, height = 30, width = 30, x = 0, y = 0) {
    this.img = document.createElement("img");
    this.img.src = img;
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  render(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

var canvas = new LHCanvas();

setInterval(function () {
  canvas.render();
}, 10);
