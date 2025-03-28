function createComputerHierarchy() {
    class ComputerManufacturer {
        constructor(manufacturer) {
            if (this.constructor == ComputerManufacturer) {
                throw new Error('Abstract class ComputerEssentials cannot be instantiated.');
            }

            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends ComputerManufacturer {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends ComputerManufacturer {
        constructor(manufacturer, width, height) {
            super (manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends ComputerManufacturer {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends ComputerManufacturer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            super(manufacturer);
            if (this.constructor == Computer) {
                throw new Error('Abstract class Computer cannot be instantiated.');
            }

            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (value instanceof Battery) {
                this._battery = value;
            } else {
                throw new TypeError('Passed instance is not correct!');
            }
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (value instanceof Keyboard) {
                this._keyboard = value;
            } else {
                throw new TypeError('Passed instance is not correct!');
            }
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (value instanceof Monitor) {
                this._monitor = value;
            }  else {
                throw new TypeError('Passed instance is not correct!');
            }
        }
    }

    return {
        ComputerManufacturer,
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;
let ComputerManufacturer = classes.ComputerManufacturer;

let battery = new Battery('Energy', 3);
console.log(battery);
// Battery {manufacturer: 'Energy', expectedLife: 3}

let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);
// Laptop  {manufacturer: 'Hewlett Packard', processorSpeed: 2.4, ram: 4, hardDiskSpace: 0.5, weight: 3.12, color: 'Silver', _battery: Battery {manufacturer: 'Energy', expectedLife: 3 }}