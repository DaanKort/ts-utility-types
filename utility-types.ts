
//Partial<T>
interface Office {
  name: string;
  open: boolean;  
}

const updateOffice = (id: number, office: Partial<Office>) => {}

updateOffice(1, {
    name: 'OfficeOne'
});

//Required<T>
interface A {
    x?: number;
    y?: number;
}

const test: Required<A> = {
    x: 2,
    y: 3
}

//Readonly<T>
interface readOnlyA {
    x: number;
    y: number;
}

const readOnlyTest: Readonly<readOnlyA> = {
    x: 3,
    y: 4
}

// readOnlyTest.x = 4 Error: cannot reassign a readonly property

//Record<K,T> 1
 type Name = 'Office1' | 'Office2';

const offices: Record<Name, Office> = {
    Office1: {
        name: 'Office1',
        open: true
    },
    Office2: {
        name: 'Office2',
        open: false
    },
}


//Pick<T, K>
type OfficeNameOnly = Pick<Office, 'name'>

//Omit<T, K>
type OfficeNoName = Omit<Office, 'open'>

// Exclude<T, U>
type Rooms =  'Room1' | 'Room2' | 'Room3';
let MyRoom: Rooms;
MyRoom = 'Room1';

type UnavailableRooms = 'Room1';
type AvailableRooms = 'Room2' | 'Room3' | 'Room4';
// let BobsRoom: Exclude<Rooms, UnavailableRooms>; //Exclude
let BobsRoom: Extract<Rooms, AvailableRooms>;  //Extract
BobsRoom = 'Room2';

//NonNullable<T>
interface OfficeProperties {
   color? : 'blue' | 'green' | 'red'; 
}

const paintOffice = (id: number, color: NonNullable<OfficeProperties['color']>) => {
    return {
        id,
        color
    }
};

//ReturnType<T>
type paintOfficeReturn = ReturnType<typeof paintOffice>

paintOffice(1, 'red');

//instanceType<T>
// le heck?

//ThisType<T>
interface MyObject {
    sayHello(): void;
}

interface MyObjectThis {
    helloWorld(): string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
    sayHello() {
        return this.helloWorld();
    }
}

myObject.sayHello = myObject.sayHello.bind({
    helloWorld() {
        return 'Hello World!';
    }
})

console.log(myObject.sayHello());


type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>;  // Type of 'this' in methods is D & M
}

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
}

let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx;  // Strongly typed this
            this.y += dy;  // Strongly typed this
        }
    }
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
