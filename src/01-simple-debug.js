console.log('Simple debugging example running.')
debugger

let x = 99;
let y = 55;

x--; y++;
debugger
console.log("x: ", --x, ", y: ", y++)

let oo = { foo: 42, bar: 83, baz: 79 };
for (let key in oo) {
  let value = oo[key];
  console.log("key:", key, "value:", value);
}
debugger
let pp = { foo: 42, bar: 83, baz: 79 };
console.log("   Object.keys(pp) =>", Object.keys(pp));
console.log(" Object.values(pp) =>", Object.values(pp));
console.log("Object.entries(pp) =>", Object.entries(pp));
