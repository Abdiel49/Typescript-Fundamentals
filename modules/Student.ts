class StudentC{

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

    constructor( private fName:string, private lName:string = 'No last name'){
    }

    fullName():string {
        return `name: '${this.fName}' last name: '${this.lName}'`;
    }
}

export { StudentC }