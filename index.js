let time = new Date();
let theTime = time.getTime();

let timeDetails = {
  year: time.getFullYear(),
  month: time.getMonth() + 1,
  date: time.getDate(),
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds(),
};

document.querySelector(
  ".time"
).innerHTML = `<p>GMT+8  ${time.toLocaleString()}</p>`; 


AOS.init(2500);
