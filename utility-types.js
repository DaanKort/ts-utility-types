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
var updateOffice = function (id, office) { };
updateOffice(1, {
    name: 'OfficeOne'
});
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
        open: true
    },
    Office2: {
        name: 'Office2',
        open: false
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
