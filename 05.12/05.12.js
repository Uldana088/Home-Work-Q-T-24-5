//task1
const person1 =  {
    name: prompt("1 адамнын атын енгізіңіз"), 
    age: prompt("1 адамнын жасын енгізіңіз"), 
}

const person2 =  {
    name: prompt("2 адамнын атын енгізіңіз"), 
    age: prompt("2 адамнын жасын енгізіңіз"), 
}

const person3 =  {
    name: prompt("3 адамнын атын енгізіңіз"), 
    age: prompt("3 адамнын жасын енгізіңіз"), 
}

const people = [person1, person2, person3];

function personn() {
    people.forEach((person) => {alert(person.name + " - Жасы: " + person.age);});
}

//task2
const books = [
    { title: "Book 1", author: "author 1", year: 1978 },
    { title: "Book 2", author: "author 2", year: 2022 },
    { title: "Book 3", author: "author 3", year: 2008 }
];

let bookTitle = prompt("Керек к3таптын атын енгызыныз:");

for (let i = 0; i < books.length; i++) {
    if (books[i].title === bookTitle) {
        let newYear = prompt("Жылын жаңартыныз:");
        books[i].year = newYear;
        break;
    }
}
function alertbooks(){
    books.forEach(book => {
        alert(`Атауы: ${book.title}, Авторы: ${book.author}, Жылы: ${book.year}`);
    });
}


//task3
let students = [
    { name: "Айғаным", age: 14, grade: "90" },
    { name: "Айя", age: 18, grade: "93" },
    { name: "Бақберген", age: 13, grade: "95" },
    { name: "Алихан", age: 15, grade: "62" },
    { name: "Бекарыс", age: 15, grade: "45" }
];

students.sort((a, b) => a.age - b.age);

alert(`Ең жас студент: ${students[0].name}, Жасы: ${students[0].age}`);
alert(`Ең үлкен студент: ${students[students.length - 1].name}, Жасы: ${students[students.length - 1].age}`);