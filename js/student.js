"use strict";
var Student = /** @class */ (function () {
    function Student(id, fname, favNumber, favColor) {
        this.id = id;
        this.fname = fname;
        this.favNumber = favNumber;
        this.favColor = favColor;
    }
    Student.prototype.print = function () {
        console.log(this.id + "|" + this.fname + "|" + this.favNumber + "|" + this.favColor);
    };
    return Student;
}());
var ron = new Student(1, "Ron", 7, "Green");
var chris = new Student(2, "Chris", 43, "Red");
var julie = new Student(3, "Julie", 15, "Pink");
var monroe = new Student(4, "Monroe", 17, "Forest Green");
var students = [
    ron, chris, julie, monroe
];
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    student.print();
}
