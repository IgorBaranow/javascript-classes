class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(value) {
        if (!value) {
            console.log('Enter first name!');
            return;
        }
        this._firstName = value;
    }

    set lastName(value) {
        if(!value) {
            console.log('Enter last name!');
            return;
        }
        this._lastName = value;
    }

    set age(value) {
        if(!value) {
            console.log('Enter age!');
            return;
        } 
        this._age = value;
    }

    get birthYear() {
        return (new Date().getFullYear() - this._age);
    }

    get fullName() {
        return  (this._firstName + ' ' + this._lastName);
    }
}

class Teacher extends User {
    constructor(firstName, lastName, age, groups, yearsOfExperience) {
        super(firstName, lastName, age);
        this.groups = groups;
        this.yearsOfExperience = yearsOfExperience;
    }

    set groups(value) {
        if(!value) {
            console.log('Enter teachers groups!');
            return;
        }
        this._groups = value;
    }

    set yearsOfExperience(value) {
        if(!value) {
            console.log('Enter teachers  years of experience');
            return;
        }
        this._yearsOfExperience = value;
    }

    get groups() {
        return this._groups;
    }

    get yearsOfExperience() {
        return this._yearsOfExperience;
    }

    isGroupTeacher(group) {
        return this.groups.includes(group);
    }
}

class Student extends User {
    static MIN_GRADE_FOR_SCHOLARSHIP = 4;
    constructor(firstName, lastName, age, group, averageGrade) {
        super(firstName, lastName, age);
        this.group = group;
        this.averageGrade = averageGrade;
    }

    set group(value) {
    
        if(!value) {
            console.log('Enter students group!');
            return;
        } 
        else if (value.length > 1) {  
            console.log('Student can only be in one group!');
        }
        this._group = value;
    }

    set averageGrade(value) {
        if(!value) {
            console.log('Enter students average grade!');
            return;
        }
        this._averageGrade = value;
    }

    get group() {
        return this._group;
    }

    get averageGrade() {
        return this._averageGrade;
    }

    isEligibleForScholarship() {
        return (this.averageGrade > Student.MIN_GRADE_FOR_SCHOLARSHIP);
    }
}

const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
const student2 = new Student('Leonardo', 'DiCaprio', 49, '62c', 3.9);

console.log(student1.fullName); // Tom Cruise
console.log(student2.birthYear); // 1975
console.log(student1.isEligibleForScholarship()); // true
console.log(student2.isEligibleForScholarship()); // false
console.log(teacher1.isGroupTeacher(student1.group)); // true
console.log(teacher1.isGroupTeacher(student2.group)); // false
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4