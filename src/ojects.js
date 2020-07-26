// literal object - using curly braces - JSON
let myBook = {
    title: 'The book moses',
    author: 'Bismark',
    numberOfPage: 300,
    isAvailable: false
};

const passengers = [
    {
        name: "Bismark Atta",
        ticketNumber: "45200A"
    },
    {
        name: "Margaret",
        ticketNumber: "45200B"
    },
    {
        name: "Dianah",
        ticketNumber: "45200C"
    },
]

for (let passenger of passengers) {
    console.log(passenger.name);
}

for (let i in passengers) {
    console.log(passengers[i].name);
}

console.log(myBook.title);

class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

let ourBook = new Book('The book of moses', 'Bismark', 300);