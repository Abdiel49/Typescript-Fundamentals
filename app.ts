import { IStudent } from './modules/IStudentInfo'
import { StudentC } from "./modules/Student";

enum LanguagesKnow { Spanish, English};

let student:IStudent = {
    Name: 'smog',
    Age: 26,
    Phone: 77775556,
    address: {
        street: 'calle olivos',
        num: 0,
        location: 'sacaba'
    },
    language: LanguagesKnow[LanguagesKnow.English]
}

let students:IStudent[]= [
    {
        Name: 'smog',
        Age: 26,
        Phone: 77775556,
        address: {
            street: 'calle olivos',
            num: 0,
            location: 'sacaba'
        },
        language: LanguagesKnow[LanguagesKnow.English]
    },
    {
        Name: 'bob',
        Age: 26,
        Phone: 77775556,
        address: {
            street: 'pinia',
            num: 0,
            location: 'fondo de bikini'
        },
        language: LanguagesKnow[LanguagesKnow.Spanish]
    }
]

students.push(student);

/************** NO Generig array ************* */
function printStudents(stds: IStudent[]){
    stds.forEach(s => {
        let {Age, Name, Phone, language} = s;
        let {street, num, location} = s.address;
        console.log(`name: ${Name} age: ${Age} phone: ${Phone} address -> street: ${street} num: ${num} location: ${location} idiom: ${language}`)
    })
}

// printStudents(students);


let s = new StudentC('smog', 'fired');

console.log(s.fullName());

/*********************Generig Array ********************* */

let studentsG:Array<IStudent> = [
    {
        Name: 'smog',
        Age: 26,
        Phone: 77775556,
        address: {
            street: 'calle olivos',
            num: 0,
            location: 'sacaba'
        },
        language: LanguagesKnow[LanguagesKnow.English]
    },
    {
        Name: 'bob',
        Age: 26,
        Phone: 77775556,
        address: {
            street: 'pinia',
            num: 0,
            location: 'fondo de bikini'
        },
        language: LanguagesKnow[LanguagesKnow.Spanish]
    }
]

function printStudentsGenerig(stds: Array<IStudent>){
    stds.forEach(s => {
        let {Age, Name, Phone, language, address} = s;
        let {street, num, location} = address;
        console.log(`name: ${Name} age: ${Age} phone: ${Phone} address -> street: ${street} num: ${num} location: ${location} idiom: ${language}`)
    })
}

printStudentsGenerig(studentsG);