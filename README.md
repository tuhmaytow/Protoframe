# Protoframe
A tool that enables designers and developers to envision how their web applications will look like.

# Description
A click-and-drop app where the user can grab an image from the selection of images on the navbar, and drop it on the canvas. Once images are placed on the canvas, it can be dragged and resize as the user pleases.

The user has the option to login and signup to access their saved templates or they can simply start creating their template without the hassle of logging in/signing up, but won't be able to save their works.

<img width="1440" alt="screen shot 2016-10-02 at 1 19 57 pm" src="https://cloud.githubusercontent.com/assets/16325330/19023517/9ecc986e-88a4-11e6-92c8-09fee04d4dc5.png">


<img width="1440" alt="screen shot 2016-10-02 at 1 20 23 pm" src="https://cloud.githubusercontent.com/assets/16325330/19023542/7d6e0422-88a5-11e6-9f9a-551719bc6721.png">


# Challenges
One of the biggest challenges I encountered when building this project was how to have the SVG images be placed on the canvas, resize, and drag around the canvas. My initial approach was implementing jQueryUI library to achieve the dragging and dropping of the images. The results were promising. My next task was to be able to resize the images once placed on canvas. Then there came the conflict. I realized that in order to be able to resize the images, I have to know the coordinates of the images that is placed on the canvas. I had to scratch everything that I have done using the library and instead opt for the OOP approach and do everything manually without any library. Instead of having a drag-and-dropping of images, it is a click-and-drop.


# Technologies Implemented
* JavaScript
* HTML5 Canvas
* CSS
* PostgreSQL
* Node.js & Express

# Things to work on/improve
* Have Login and Signup up and runnning
* Have "Save" button working and be able to save wireframes
