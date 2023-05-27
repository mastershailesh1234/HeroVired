class SchoolIND {
  constructor(id, name, role) {
    this.id = id;
    this.name = name;
    this.role = role;
  }

  display() {
    console.log(
      `Hi I am ${this.name} and I am the ${this.role} in the DPS School`
    );
  }
}

class Student extends SchoolIND {
  constructor(id, name, role, percentage, std) {
    super(id, name, role);
    this.percentage = percentage;
    this.std = std;
  }

  marksDetails() {
    console.log(`My Marks is ${this.percentage}`);
  }

  displayStd() {
    console.log(`I am in ${this.std} std`);
  }
}

class Teacher extends Student {
  #number;
  constructor(id, name, role, number, subject) {
    super(id, name, role);
    this.#number = number;
    this.subject = subject;
  }

  subjectDetails() {
    console.log(`My subject is ${this.subject}`);
  }

  getDisplayNumber(id) {
    if (id === this.id) {
      console.log(`My number is ${this.#number}`);
    } else {
      console.log("Incorrect ID! you cant access this info!");
    }
  }
}

const T1 = new Teacher("T1", "Vamsi", "Teacher", 789787878788, "Sports");
const S1 = new Student("S1", "Sumit", "Student", "75%", "12th");

console.log("Teacher Details -----");
T1.display();
T1.subjectDetails();
T1.getDisplayNumber("T1");
T1.getDisplayNumber("S1");
//S1.getDisplayNumber("T1");
console.log("**************************************");
console.log("Student Details -----");
S1.display();
S1.displayStd();
S1.marksDetails();
//T1.displayStd();
