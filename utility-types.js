var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var updateOffice = function (office) {
    return office;
};
var office;
updateOffice(office = {
    name: 'OfficeOne',
    closed: true
});
console.log(office);
var test = {
    x: 2,
    y: 3
};
var readOnlyTest = {
    x: 3,
    y: 4
};
var offices = {
    Office1: {
        name: 'Office1',
        closed: true
    },
    Office2: {
        name: 'Office2',
        closed: false
    }
};
var MyRoom;
MyRoom = 'Room1';
// let BobsRoom: Exclude<Rooms, UnavailableRooms>; //Exclude
var BobsRoom; //Extract
BobsRoom = 'Room2';
var paintOffice = function (id, color) {
    return {
        id: id,
        color: color
    };
};
paintOffice(1, 'red');
var myObject = {
    sayHello: function () {
        return this.helloWorld();
    }
};
myObject.sayHello = myObject.sayHello.bind({
    helloWorld: function () {
        return 'Hello World!';
    }
});
console.log(myObject.sayHello());
function makeObject(desc) {
    var data = desc.data || {};
    var methods = desc.methods || {};
    return __assign(__assign({}, data), methods);
}
var obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy: function (dx, dy) {
            this.x += dx; // Strongly typed this
            this.y += dy; // Strongly typed this
        }
    }
});
obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
var MathMagic = /** @class */ (function () {
    function MathMagic(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    MathMagic.prototype.currentValue = function () {
        return this.value;
    };
    MathMagic.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    MathMagic.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return MathMagic;
}());
var BigMathMagic = /** @class */ (function (_super) {
    __extends(BigMathMagic, _super);
    function BigMathMagic(value) {
        if (value === void 0) { value = 0; }
        return _super.call(this, value) || this;
    }
    BigMathMagic.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this;
    };
    return BigMathMagic;
}(MathMagic));
var calc = new BigMathMagic(2)
    .add(5)
    .sin()
    .multiply(2)
    .currentValue();
console.log(calc);
var onePlus = {
    manufacturer: 'onePlus',
    model: '7t',
    year: 2019
};
var pluck = function (o, propertyNames) {
    return propertyNames.map(function (n) { return o[n]; });
};
// Manufacturer and model are both of type string,
// so we can pluck them both into a typed string array
var makeAndModel = pluck(onePlus, ['manufacturer', 'model']);
// If we try to pluck model and year, we get an
// array of a union type: (string | number)[]
var modelYear = pluck(onePlus, ['model', 'year']);
console.log(modelYear);
//Conditional types
var someFunction = function (value) {
    var someOtherFunction = function (arg) {
        var a = arg;
    };
    return someOtherFunction;
};
var result = someFunction(true);
var testType = 'oi mate';
console.log(testType);
