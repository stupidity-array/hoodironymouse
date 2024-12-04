const blud = document.getElementById("blud");
blud.style.position = "absolute";
const sub = document.getElementById("sub");
sub.style.position = "absolute";

document.addEventListener("mousemove", (e) => {
  blud.style.left = (e.clientX - 100) + "px";
  blud.style.top  = (e.clientY - 100) + "px";
});

setInterval(() => {
  sub.style.left = (window.innerWidth) - 240 + "px";
  sub.style.top = (window.innerHeight) - 135 + "px";
}, 500);
