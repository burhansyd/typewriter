const sentence = "hello there from lighthouse labs";
const sentArr = sentence.split("");

sentArr.forEach((letter, index) => {
  setTimeout(() => process.stdout.write(letter), index * 300);
});
setTimeout(() => console.log("\n"), sentArr.length * 300);