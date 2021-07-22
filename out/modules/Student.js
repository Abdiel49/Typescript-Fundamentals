"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentC = void 0;
var StudentC = /** @class */ (function () {
    // private _fName:string;
    // private _lName:string;
    // constructor(fName:string, lName:string = 'No last name'){
    //     this._fName = fName;
    //     this._lName = lName;
    // }
    // fullName():string {
    //     return `name: '${this._fName}' last name: '${this._lName}'`;
    //     // return 10+6;
    // }
    function StudentC(fName, lName) {
        if (lName === void 0) { lName = 'No last name'; }
        this.fName = fName;
        this.lName = lName;
    }
    StudentC.prototype.fullName = function () {
        return "name: '" + this.fName + "' last name: '" + this.lName + "'";
    };
    return StudentC;
}());
exports.StudentC = StudentC;
//# sourceMappingURL=Student.js.map