// type Car = {
//     name: string
// }

// type RaceCar = {
//     speed: number
// } & Car


type RaceCar = {
    name: string
    maxSpeed: 200
    team: string
}

type CityCar = {
    name: string
    maxSpeed: 100
    space: string
}

type Car = RaceCar | CityCar;

interface Person {
    kind: "bussines" | 'academic'
    name: string
    age: number
}

interface BussinestPerson extends Person {
    kind: "bussines"
    salary: number
}

interface AcademicPerson extends Person {
    kind: "academic"
    publications: string[]
}

type Human = BussinestPerson | AcademicPerson;




export default function play() {
    const car: RaceCar = {
        name: "Race Car",
        maxSpeed: 200,
        team: "Super"
    }

    function printInfo(someObj: { [key: string]: number | string }) {

    }

    printInfo({
        age: 5,
        salary: "hello"
    });

    function logCarInfo(car: Car) {
        console.log((car as RaceCar).team);
        console.log((<CityCar>car).space);

        switch (car.maxSpeed) {
            case 100:
                console.log(car.space);
                break;
            case 200:
                console.log(car.team);
                break;
            default:
                const _never: never = car;
                console.log("Not found", _never);
        }
    }

    function personInfo(human: Human) {

        if (human.kind === 'academic') {
            console.log(human.publications);
        } else {
            console.log(human.salary);
        }
    }

}

class Logger<T> {
    log(items: Array<T>, callback: (item: T) => void) {
        items.forEach(item => {
            callback(item)
        })
    }
}

interface User {
    name: string
    age: number
}

class StudentsUser<T extends User = User> {
    log(items: Array<T>) {
        items.forEach(item => {
            console.log(item);

        })
    }
}

class SmallUser implements User {
    name = "Kate"
    age = 26
}

type MyUser<T extends User = User> = {
    data: T
    city?: string
}

function foo(info: MyUser) {
    console.log(info.data.age);

}

const info = {
    data: {
        name: "Alice",
        age: 30
    },
    city: "Dnipro"
}

foo(info)

const students = new StudentsUser()

students.log([{ name: "lalala", age: 27 }])

function test() {

    const logger = new Logger<string>();
    const cars = ['audi', 'bmw', 'volvo']


    logger.log(cars, (car) => {
        console.log(car);
    })


    const logger2 = new Logger<number>();
    const numbers = [1, 2, 3]

    logger2.log(numbers, (number) => {
        console.log(number);
    })


    const persons = new Logger<Person>()
    persons.log([
        { name: "Petya", age: 30, kind: "academic" },
        { name: "Kate", age: 32, kind: "bussines" },
    ], (item) => {
        console.log(item);

    })
}



interface SinglePersone {
    name: string
}

type SingleType<T> = T extends any[] ? T[number] : unknown;

function test2() {

    type Type1 = SingleType<string[]>
    type Type2 = SingleType<number[]>
    type Type3 = SingleType<SinglePersone>

}

type CustomArray = {
    [index: number]: string
}

type MyCustomArray<T = string> = T extends any[] ? {
    [index: number]: T[number]
} : {
    [index: number]: T
}

function test3() {
    const items: CustomArray = ["lala", "adsasd", "asd"];

    type Single = CustomArray[number]

    const items2: MyCustomArray<number[]> = [1, 2];
    console.log(items2);
}

type CustomObject = {
    [key: string]: string | number | Person
}

function test4() {
    const obj: CustomObject = {
        name: "Alice",
        age: 23,
        user: {
            name: "Alice",
            age: 25,
            kind: "bussines"
        }
    }
}


function test5() {

    function logger(a: string) {
        return "Hello world"
    }

    const kindOfLogger: typeof logger = (name) => "hello"


    const persone = {
        name: "Kate",
        age: 30
    }

    const persone2: typeof persone = {
        age: 25,
        name: "Alice"
    }
}


type ReturnType<T> = T extends () => string ? string : number;

function test6() {

    function logger() {
        return "Hello"
    }

    const loggerReturn: ReturnType<typeof logger> = "lalala"

}


type ReturnType2<T> = T extends () => infer R ? R : number;

function test7() {

    function logger() {
        return "hello"
    }

    const loggerReturn: ReturnType2<typeof logger> = "lalala";
}

interface Persone {
    name: string
    age: number
}

type PersoneKey = keyof Persone;

function test8() {
    const personeKey: PersoneKey = "name"
}



type Logger2<FP, SP, RT> = (param1: FP, param2: SP) => RT;

function test9() {

    const superLogger: Logger2<string, number, string> = (name, age) => {
        return "Hello"
    }
}


type Greeting = { message: string }

type InferHelloProps<T> = T extends () => Promise<{ props: infer Props }> ? Props : never;

async function test10() {

    const getHelloProps = async () => {
        const greeting: Greeting = { message: "Hello" };

        return {
            props: {
                greeting,
                data: {
                    cars: ["audi", "toyota"]
                }
            }
        }
    }

    function sayHello(props: InferHelloProps<typeof getHelloProps>) {
        console.log(props.data.cars);

    }

    const data = await getHelloProps()
    sayHello(data.props)
}
