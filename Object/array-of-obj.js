// const p1 = {
//   name: 'HM Nayem',
//   email: 'hmnayem@gmail.com',
// }

// const p2 = {
//   name: 'Tanjir Hasan',
//   email: 'tanjirhc@gmail.com',
// }

// const p3 = {
//   name: 'Segufta Yesmin',
//   email: 'segufta01@gmail.com',
// }

//const people = [p1, p2, p3];

// console.log(people[0].name);
// console.log(people[1].name);

const people = [
  {
    name: 'HM Nayem',
    email: 'hmnayem@gmail.com',
  },

  {
    name: 'Tanjir Hasan',
    email: 'tanjirhc@gmail.com',
  },

  {
    name: 'Segufta Yesmin',
    email: 'segufta01@gmail.com',
    friends: ['HM Nayem', 'Tanjir Hasan'],
  },
];

// console.log(people[0].name);
// console.log(people[1].name);

//loop
for (let p of people) {
  console.log(`${p.name} (${p.email})`);
}

console.log(people);