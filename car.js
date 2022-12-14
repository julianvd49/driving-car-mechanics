class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = 'black'

        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 4;
        this.friction = 0.05;
        this.angle = 0;

        this.controls = new Controls();
    }

    update() {
        this.#move();
        // console.log(`maxSpeed: ${this.maxSpeed}`)
        console.log(`speed: ${this.speed}`)
    }

    #boost = () => this.controls.boost ? (this.maxSpeed = 7, this.color = 'red') : (this.maxSpeed = 4, this.color = 'black');

    #move() {
        this.#boost();

        // Increase or decrease speed
        if (this.controls.forward) {
            this.speed += this.acceleration;
        }
        if (this.controls.reverse) {
            this.speed -= this.acceleration;
        }

        // MaxSpeed
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if (this.speed < -this.maxSpeed/2) {
            this.speed = -this.maxSpeed/2;
        }

        // Friction
        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }

        // Correction minimal movement because the friction bouncing
        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }

        // Here we flip direction going backwards
        if (this.speed != 0) {
            const flip = this.speed > 0 ? 1:-1;
            if (this.controls.left) {
                this.angle += 0.04*flip;
            }
            if (this.controls.right) {
                this.angle -= 0.04*flip;
            }
        }
           
        // Update position
        // this.y -= this.speed;
        this.x -= Math.sin(this.angle)*this.speed;
        this.y -= Math.cos(this.angle)*this.speed;
    }

    draw(ctx) {
        ctx.save(); // Save the drawing state

        // The translate method in the canvas rendering context is used to move the origin point of the canvas to a new location. his can make it easier to position and manipulate objects on the canvas, as you can simply use the new origin point as the reference point for your drawings.
        ctx.translate(this.x, this.y);

        // The rotate method takes a single parameter, which is the angle (in radians) by which you want to rotate the current drawing. This angle is measured clockwise, so a positive value will rotate the drawing to the right, and a negative value will rotate the drawing to the left.
        ctx.rotate(-this.angle);

        // The CanvasRenderingContext2D.beginPath() method of the Canvas 2D API starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
        ctx.beginPath();

        ctx.fillStyle = this.color;
        // The CanvasRenderingContext2D.rect() method of the Canvas 2D API adds a rectangle to the current path.
        ctx.fillRect(
            // this.x - this.width/2,
            // this.y - this.height/2,
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );

        // Like other methods that modify the current path, rect method does not directly render anything. To draw the rectangle onto a canvas, you can use the fill() or stroke() methods.
        // ctx.fill();

        ctx.restore(); // Restore state
    }
}