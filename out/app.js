"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./modules/Student");
var LanguagesKnow;
(function (LanguagesKnow) {
    LanguagesKnow[LanguagesKnow["Spanish"] = 0] = "Spanish";
    LanguagesKnow[LanguagesKnow["English"] = 1] = "English";
})(LanguagesKnow || (LanguagesKnow = {}));
;
var student = {
    Name: 'smog',
    Age: 26,
    Phone: 77775556,
    address: {
        street: 'calle olivos',
        num: 0,
        location: 'sacaba'
    },
    language: LanguagesKnow[LanguagesKnow.English]
};
var students = [
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
];
students.push(student);
/************** NO Generig array ************* */
function printStudents(stds) {
    stds.forEach(function (s) {
        var Age = s.Age, Name = s.Name, Phone = s.Phone, language = s.language;
        var _a = s.address, street = _a.street, num = _a.num, location = _a.location;
        console.log("name: " + Name + " age: " + Age + " phone: " + Phone + " address -> street: " + street + " num: " + num + " location: " + location + " idiom: " + language);
    });
}
// printStudents(students);
var s = new Student_1.StudentC('smog', 'fired');
console.log(s.fullName());
/*********************Generig Array ********************* */
var studentsG = [
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
];
function printStudentsGenerig(stds) {
    stds.forEach(function (s) {
        var Age = s.Age, Name = s.Name, Phone = s.Phone, language = s.language, address = s.address;
        var street = address.street, num = address.num, location = address.location;
        console.log("name: " + Name + " age: " + Age + " phone: " + Phone + " address -> street: " + street + " num: " + num + " location: " + location + " idiom: " + language);
    });
}
printStudentsGenerig(studentsG);
//# sourceMappingURL=app.js.map