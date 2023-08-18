const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

let monthInx = new Date().getMonth();
let lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
let firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthEl.innerText = months[monthInx];
fullDateEl.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div class="others">${i}</div>`;
  }
}

daysEl.innerHTML = days;

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", changeMonth);
nextBtn.addEventListener("click", changeMonth);

function changeMonth(e) {
  if (e.target.classList.contains("prev")) {
    monthInx--;
    fullDateEl.innerText = "";
  }
  if (e.target.classList.contains("next")) {
    monthInx++;
    fullDateEl.innerText = "";
  }

  //if month is Date.getMonth() , then fullDateEl.innerText = new Date().toDateString();
  if (monthInx === new Date().getMonth()) {
    fullDateEl.innerText = new Date().toDateString();
  }

  const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
  const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;

  if (monthInx < 0) {
    monthInx = 11;
  }

  if (monthInx > 11) {
    monthInx = 0;
  }

  monthEl.innerText = months[monthInx];
  let days = "";
  for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && monthInx === new Date().getMonth()) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div class="others">${i}</div>`;
    }
  }
  daysEl.innerHTML = days;
}

daysEl.addEventListener("click", (e) => {
  //add today class on the element that is clicked
  // then remove today from the previous element
  let today = document.querySelector(".today");
  today.classList.remove("today");
  // add today class to only days div with class others
  if (e.target.classList.contains("others")) {
    e.target.classList.add("today");
    //fullEl will be equal to the date that is clicked
    let fullEl = new Date(
      new Date().getFullYear(),
      monthInx,
      e.target.innerText
    ).toDateString();
    fullDateEl.innerText = fullEl;
  }
});
