/* eslint-disable */
class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() { // Getter for year attribute (private)
    return this._year;
  }

  get location() { // Getter for location attribute ()
    return this._location;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName; // Setter for firstName attribute (private)
    this._lastName = lastName; // Setter for lastName attribute (private)
    this._holbertonClass = holbertonClass; // Setter for holbertonClass attribute (private)
  }

  get fullName() { // Getter for fullName attribute (public)
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() { // Getter for holbertonClass attribute (public)
    return `${this._holbertonClass}`;
  }

  get fullStudentDescription() { // Getter for fullStudentDescription attributes
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5]; // create an array of students

export default listOfStudents; // export the array of students
