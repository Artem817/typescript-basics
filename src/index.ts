
const userName: string = "Артем";
const userAge: number = 20;
const isActive: boolean = true;

function greetUser(name: string, age: number, active: boolean): string {
  const status = active ? "активний" : "неактивний";
  return `Привіт, ${name}! Вам ${age} років. Статус: ${status}`;
}

console.log(greetUser(userName, userAge, isActive));

const numbers: number[] = [1, 2, 3, 4, 5];
const sum: number = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Сума чисел: ${sum}`);
