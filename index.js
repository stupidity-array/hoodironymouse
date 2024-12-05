const blud = document.getElementById("blud");
blud.style.position = "absolute";
const sub = document.getElementById("sub");
sub.style.position = "absolute";

document.addEventListener("mousemove", (e) => {
  blud.style.left = (e.clientX - 100) + "px";
  blud.style.top  = (e.clientY - 100) + "px";
});

setInterval(() => {
  const xMax = (window.innerWidth) - 240;
  const yMax = (window.innerHeight) - 135
  sub.style.left = Math.floor(Math.random() * xMax) + "px";
  sub.style.top  = Math.floor(Math.random() * yMax) + "px";
}, 1500);
