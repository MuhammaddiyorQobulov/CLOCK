const hour = document.querySelector(".hour");
const minut = document.querySelector(".minut");
const sekund = document.querySelector(".sekund");
const startBtn = document.querySelector(".startBtn");
const refreshBtn = document.querySelector(".refreshBtn");

let sekundVal = -1;
let minutVal = 0;
let hourVal = 0;
startBtn.addEventListener("click", function sekundCount() {
  startBtn.style.display = "none";
  refreshBtn.style.display = "block";

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
    minutVal = -1;
    hourVal = -1;
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
