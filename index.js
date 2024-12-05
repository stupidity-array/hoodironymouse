const blud = document.getElementById("blud");
blud.style.position = "absolute"

document.addEventListener("mousemove", (e) => {
  blud.style.left = (e.clientX - 100) + "px";
  blud.style.top  = (e.clientY - 100) + "px";
});

setInterval(() => {
  const sub = document.createElement("img");
  sub.src = "https://media1.tenor.com/images/75502f3c757d3096182ce7aca7f2d01e/tenor.gif?itemid=14347319";
  sub.style.position = "absolute";
  const xMax = (window.innerWidth) - 240;
  const yMax = (window.innerHeight) - 135
  sub.style.left = Math.floor(Math.random() * xMax) + "px";
  sub.style.top  = Math.floor(Math.random() * yMax) + "px";
  document.body.prepend(sub);
  setTimeout(() => {sub.remove();}, 4000);
}, Math.floor(Math.random() * 5001));
