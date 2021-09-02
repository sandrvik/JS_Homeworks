/***** Task 1 *****/

function Animal(name, age, colour) {
    if (!new.target) {
        return new Animal(name, age, colour);
    }

    this.name = name;
    this.age = age;
    this.colour = colour;
}

let cat = new Animal('bars', 4, 'black'); // cat --> { name: 'bars', age: 4, colour: 'black' } 

let dog = Animal('rex', 14, 'gold'); // dog --> { name: 'rex', age: 14, colour: 'gold' } 

/***** Task 2 *****/

function oneIsNaN(...args) {
    return args.some(item => isNaN(item));
}

function Calculator() {

    this.ops = [];

    this.read = function () {
        this.a = +prompt('Enter first num');
        this.b = +prompt('Enter second num');
    };

    this.setAction = function () {
        let operation = prompt('Enter operation');

        switch (operation) {
            case '+':
                this.ops.push(this.sum);
                break;
            case '*':
                this.ops.push(this.mul);
                break;
            case '-':
                this.ops.push(this.min);
                break;
            case '/':
                this.ops.push(this.div);
                break;
            default:
                alert('Does not match any available operation');
        }
    };

    this.doAction = function () {
        if (oneIsNaN(this.a, this.b)) {
            alert('Two operands needed. Please, call method "read()"')
        }

        else if (this.ops.length === 0) {
            alert('There is no actions available. Please, call method "setAction()"')
        }

        else {
            for (let action of this.ops) {
                action();
            }
        }
    };

    this.sum = () => {
        alert(`${this.a} + ${this.b} = ${this.a + this.b}`);
    };

    this.mul = () => {
        alert(`${this.a} * ${this.b} = ${this.a * this.b}`);
    };

    this.min = () => {
        alert(`${this.a} - ${this.b} = ${this.a - this.b}`);
    };

    this.div = () => {
        alert(`${this.a} / ${this.b} = ${this.a / this.b}`);
    };
}

// const calc = new Calculator();
// calc.read();
// calc.setAction();
// calc.doAction();

/***** Task 3 *****/

function Nums(...args) {
    this.args = args;
}

Nums.prototype.getSum = function () {
    return this.args.reduce((acc, item) => {
        if (Number.isInteger(item)) {
            return acc + item;
        }
        else return acc;
    }, 0)
};

Nums.prototype.myFilterReverse = function () {
    return this.args.reduceRight((acc, item) => {
        if (Number.isInteger(item)) {
            return [...acc, item];
        }
        else return acc;
    }, [])
};

const nums = new Nums(10, 20.2, 35, 0, 52, 176.4);
const sum = nums.getSum(); // 97
const newArr = nums.myFilterReverse(); // [52, 0, 35, 10]


/***** Task 4 *****/

Array.prototype.getUnique = function () {
    return this.reduce((acc, item) => {
        if (acc.includes(item)) {
            return acc;
        }
        else return [...acc, item]
    }, [])
};

const testArr = [15, 22, 56, 0, 0, 6, 98, 56];
const uniqueArr = testArr.getUnique(); // [15, 22, 56, 0, 6, 98]

/***** Task 5 *****/