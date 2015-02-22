//// assuming there's a loaded image and a canvas element in the DOM.
//var my_image = document.getElementById('');
//var my_canvas = document.getElementById('my-canvas');
//var ctx = my_canvas.getContext('2d');
//
//// draw the image on the canvas
//ctx.drawImage(my_image, my_image);
//
//var my_image_data = ctx.getImageData( 0, 0, my_canvas.clientWidth, my_canvas.clientHeight );
//var parameters = { amount: 10, seed: 45, iterations: 30, quality: 30 };
//
//function drawGlitchedImageData(image_data) {
//    ctx.putImageData(image_data, 0, 0);
//}
//
//glitch(my_image_data, parameters, drawGlitchedImageData);