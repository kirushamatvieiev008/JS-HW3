// перше завдання
let result = 5 + 5 + `5`;
console.log(result);


// друге завдання
const email = `mkiril087@gmail.com`;
console.log(`${email.includes(`@`)}, кількість символів: ${email.length}`);

// третє завдання
const my = `My `;
const name = `name `;
const is = `is `;
const fullName = my + name + is + `Victor`;
console.log(fullName);


// четверте завдання
const userName = prompt(`введіть ваше ім'я`);
let payment = Math.round(Math.random() * 1000);
console.log(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
