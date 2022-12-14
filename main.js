const canvas = document.getElementById('canvas');
canvas.width = 600;

// getContext method returns an object that provides methods and properties for drawing on the canvas.
const ctx = canvas.getContext('2d');
const car = new Car(canvas.width/2, canvas.width/2, 30, 55);
car.draw(ctx);

animate();

// The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
function animate() {
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate); // requestAnimationFrame(callback)
}