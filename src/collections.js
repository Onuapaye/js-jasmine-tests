// array
let guests = ['Bismark', 'Lawrencia', 'Margaret'];
console.log(guests);
console.log(guests[0]);

let firstGuest = 'Nana';
let secondGuest = 'Fremah';

let ourGuests = [firstGuest, secondGuest];

let obj = { name: "Atta", vip: true};
let obj2 = { name: "Kwasi", vip: true};
let yourGuest = [obj, obj2];

// 3 useful tools with arrays
console.log(guests.length);
guests.push('Dianah');
guests.unshift('Boasiako'); // to push it in the beginning
guests.pop() // removes the last element in the array

for (const i in guest) {
    console.log('User is ' + guest[i])   ;
}
// sets
// maps

// numbers, booleans, and strings are parsed by values where as
// objects and arrays are parsed by reference