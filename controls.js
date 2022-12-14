class Controls {
    constructor() {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;
        this.boost = false

        // Private methods in JavaScript classes can be defined inside the class definition, as well as inside the class constructor method
        this.#addKeyboardListeners();
    }

    #addKeyboardListeners() {
        // the this keyword behaves differently in arrow functions and regular functions within classes, depending on how the this keyword is bound. In regular functions, the this keyword is bound to the current instance of the class, while in arrow functions, the this keyword is bound to the context in which the function was defined.
        document.onkeydown = (event) => {
            switch(event.key) {
                case 'ArrowUp':
                    this.forward = true;
                    break;
                case 'ArrowLeft':
                    this.left = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                    break;
                case 'ArrowDown':
                    this.reverse = true;
                    break;
                case 'q':
                    this.boost = true;
                    break;
            }
            // console.table(this);
        }
        
        document.onkeyup = (event) => {
            switch(event.key) {
                case 'ArrowUp':
                    this.forward = false;
                    break;
                case 'ArrowLeft':
                    this.left = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
                case 'ArrowDown':
                    this.reverse = false;
                    break;
                case 'q':
                    this.boost = false;
                    break;
            }
            // console.table(this);
        }
    }
}