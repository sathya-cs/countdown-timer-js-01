function UpdateTime() {
  const currentDate = new Date();
  const newYear = new Date("january 1 2023 00:00:00");
  const diff = newYear - currentDate;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.querySelector("#days").innerHTML = d < 10 ? "0" + d : d;
  document.querySelector("#hours").innerHTML = h < 10 ? "0" + h : h;
  document.querySelector("#minutes").innerHTML = m < 10 ? "0" + m : m;
  document.querySelector("#seconds").innerHTML = s < 10 ? "0" + s : s;
}
setInterval(UpdateTime, 1000);
