const hour = document.querySelector(".hour");
const minut = document.querySelector(".minut");
const sekund = document.querySelector(".sekund");
const startBtn = document.querySelector(".startBtn");
const refreshBtn = document.querySelector(".refreshBtn");
const sekundMili = document.querySelector(".sekundMili");
const minutMili = document.querySelector(".minutMili");
const soatMili = document.querySelector(".soatMili");

let sekundVal = -1;
let minutVal = 0;
let hourVal = 0;

startBtn.addEventListener("click", function sekundCount() {
  sekundMili.classList.add("animation1");
  minutMili.classList.add("animation2");
  soatMili.classList.add("animation3");

  refreshBtn.style.display = "block";
  startBtn.style.display = "none";

  if (sekundVal == 59) {
    minutVal++;
    if (minutVal < 10) {
      minutVal = "0" + minutVal;
    }
    minut.innerHTML = minutVal;
    sekundVal = -1;
  }

  if (minutVal == 59) {
    hourVal++;
    if (hourVal < 10) {
      hourVal = "0" + hourVal;
    }
    hour.innerHTML = hourVal;
    minutVal = 0;
  }

  if (hourVal == 23) {
    sekundVal = -1;
    minutVal = 0;
    hourVal = 0;
  }

  setTimeout(() => {
    sekundCount();
  }, 1000);
  sekundVal++;

  if (sekundVal < 10) {
    sekundVal = "0" + sekundVal;
  }
  sekund.innerHTML = sekundVal;
});

refreshBtn.onclick = () => {
  window.location.reload();
};
