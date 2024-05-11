const result = document.querySelector(".result");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multi = document.querySelector("#multi");
const division = document.querySelector("#division");
const enter = document.querySelector("#enter");
const ce = document.querySelector("#ce");

let s = "";

one.addEventListener("click", () => {
  s = s.concat(one.value);
  result.textContent = s;
});
plus.addEventListener("click", () => {
  s = s.concat(plus.value);
  result.textContent = s;
});
two.addEventListener("click", () => {
  s = s.concat(two.value);
  result.textContent = s;
});
three.addEventListener("click", () => {
  s = s.concat(three.value);
  result.textContent = s;
});
minus.addEventListener("click", () => {
  s = s.concat(minus.value);
  result.textContent = s;
});
four.addEventListener("click", () => {
  s = s.concat(four.value);
  result.textContent = s;
});
five.addEventListener("click", () => {
  s = s.concat(five.value);
  result.textContent = s;
});
six.addEventListener("click", () => {
  s = s.concat(six.value);
  result.textContent = s;
});
seven.addEventListener("click", () => {
  s = s.concat(seven.value);
  result.textContent = s;
});
eight.addEventListener("click", () => {
  s = s.concat(eight.value);
  result.textContent = s;
});
nine.addEventListener("click", () => {
  s = s.concat(nine.value);
  result.textContent = s;
});
zero.addEventListener("click", () => {
  s = s.concat(zero.value);
  result.textContent = s;
});
division.addEventListener("click", () => {
  s = s.concat(division.value);
  result.textContent = s;
});
expo.addEventListener("click", () => {
  s = s.concat(expo.value);
  result.textContent = s;
});
mod.addEventListener("click", () => {
  s = s.concat(mod.value);
  result.textContent = s;
});
multi.addEventListener("click", () => {
  s = s.concat(multi.value);
  result.textContent = s;
});
enter.addEventListener("click", () => {
  result.textContent = eval(s);
});
ce.addEventListener("click", () => {
  s = "";
  result.textContent = "Result";
});
back.addEventListener("click", () => {
  s = s.slice(0, -1);
  result.textContent = s;
});
lbracket.addEventListener("click", () => {
  s = s.concat(lbracket.value);
  result.textContent = s;
});
rbracket.addEventListener("click", () => {
  s = s.concat(rbracket.value);
  result.textContent = s;
});
