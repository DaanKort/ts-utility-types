
//Partial<T>
interface Office {
    name: string;
    closed: boolean;
}

const updateOffice = (office: Partial<Office>) => {
    return office;
}
let office: Office
updateOffice(office = {
    name: 'OfficeOne',
    closed: true
});

console.log(office);


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
        closed: true
    },
    Office2: {
        name: 'Office2',
        closed: false
    },
}


//Pick<T, K>
type OfficeNameOnly = Pick<Office, 'name'>

//Omit<T, K>
type OfficeNoName = Omit<Office, 'open'>

// Exclude<T, U>
type Rooms = 'Room1' | 'Room2' | 'Room3';
let MyRoom: Rooms;
MyRoom = 'Room1';

type UnavailableRooms = 'Room1';
type AvailableRooms = 'Room2' | 'Room3' | 'Room4';
// let BobsRoom: Exclude<Rooms, UnavailableRooms>; //Exclude
let BobsRoom: Extract<Rooms, AvailableRooms>;  //Extract
BobsRoom = 'Room2';

//NonNullable<T>
interface OfficeProperties {
    color?: 'blue' | 'green' | 'red';
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


//Mapped type
type Properties = 'propA' | 'propB';
type MappedType<T> = {
    [P in keyof T]: T[P];
}

type NewType = MappedType<{ a: 'a', b: 'b' }>

type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P]
};

type NewType2 = Pick1<NewType, 'a'>

//Doc Example

//Same properties, different typing
interface Person {
    id: string;
    name: string;
    age: number
}

type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P];
}

type PartialType<T> = {
    [P in keyof T]: T[P];
}

type PersonPartial = Partial<Person>;
type ReadonlyPerson = Readonly<Person>;


class MathMagic {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }

    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}

class BigMathMagic extends MathMagic {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}


let calc = new BigMathMagic(2)
    .add(5)
    .sin()
    .multiply(2)
    .currentValue();
console.log(calc);


//Index types
interface Phone {
    manufacturer: string;
    model: string;
    year: number;
}

let onePlus: Phone = {
    manufacturer: 'onePlus',
    model: '7t',
    year: 2019
};

const pluck = <T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] => {
    return propertyNames.map(n => o[n])
}
// Manufacturer and model are both of type string,
// so we can pluck them both into a typed string array
let makeAndModel: string[] = pluck(onePlus, ['manufacturer', 'model']);

// If we try to pluck model and year, we get an
// array of a union type: (string | number)[]
let modelYear = pluck(onePlus, ['model', 'year']);
console.log(modelYear);

//Conditional types

interface A2 {
    name: string;
}
interface A3 {
    yes: boolean;
}
const someFunction = <T>(value: T) => {
    type A = T extends boolean
        ? 'TYPE A'
        : T extends string
        ? 'TYPE B'
        : T extends number
        ? 'TYPE C'
        : "TYPE D"
    const someOtherFunction = (
        arg: T extends boolean ? A2 : A3
    ) => {
        const a: A2 | A3 = arg;
    }
    return someOtherFunction;
}

const result = someFunction(true);

type StringOrNot<T> = T extends string ? string : never;

type UnionType = string | boolean | never;

type Servers = 'EUW' | 'NA' | 'LAN';
type UnAvailableServers = 'LAN'

type ResultType = Exclude<Servers, UnAvailableServers>


/*
'EUW' extends LAN ? never : 'EUW' => never
'NA' extends LAN ? never : 'NA' => never
'LAN' extends LAN ? never : 'LAN' => 'LAN'
*/

type GenericType<T> = T extends string | number ? T : never;
type Result = GenericType<string | number | boolean>

const testType: Result = 'oi mate'
console.log(testType);

type InferSomething<T> = T extends infer U ? U : any
type Inferred = InferSomething<'oi mate im a string'>

type InferSomething2<T> = T extends { a: infer A; b: infer B } ? A & B : any;
type Inferred2 = InferSomething2<{ a: 'oi mate', b: 1 }>
