let counter = document.querySelector(".cont-top");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const stopBtn = document.getElementById("stop-btn");
const getTime = document.getElementById("get-time");
const clearTime = document.getElementById("clear-time");
let getCountValue = document.querySelector(".cont-bottom");
let count = 1;
let interval;


let startCount = () => {
  interval = setInterval(() => {
    counter.innerText = `${count++}`;
  },1000);
};
startBtn.addEventListener("click",startCount);



let resetCount = () => {
  clearInterval(interval);
  count = 0;
  counter.innerText = `${count}`;
};
resetBtn.addEventListener("click", () => {
  resetCount();
});



let stopCount = () => {
  clearInterval(interval);
  counter.innerText = `${count-1}`;
}
stopBtn.addEventListener("click",()=>{
  stopCount();
})


let getCount = () => {
  let times = document.createElement("p");
  times.classList.add("bottom-items");
  times.innerHTML = `The stop time is ${count-1}`;
  getCountValue.append(times);
}
getTime.addEventListener("click",()=>{
  getCount();
})


let clearCount = () => {
  getCountValue.innerHTML = '';
}
clearTime.addEventListener("click",()=>{
  clearCount();
})