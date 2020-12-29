class Student {
    id: number;
    fname:string;
    favNumber:number;
    favColor:string;

    constructor(id:number, fname:string, favNumber:number, favColor:string) {
        this.id = id;
        this.fname = fname;
        this.favNumber = favNumber;
        this.favColor = favColor;
    }
    print(): void {
        console.log(`${this.id}|${this.fname}|${this.favNumber}|${this.favColor}`)
    }
}
let ron = new Student(1, "Ron", 7, "Green");
let chris = new Student(2, "Chris", 43, "Red");
let julie = new Student(3, "Julie", 15, "Pink");
let monroe = new Student(4, "Monroe", 17, "Forest Green");

let students: Student[] = [
    ron,chris,julie,monroe 
];for(let student of students) {
    student.print();
}