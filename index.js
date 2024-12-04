const blud = document.querySelector("img");
blud.style.position = "absolute";

document.addEventListener("mousemove", (e) => {
  blud.style.left = e.clientX + "px";
  blud.style.top  = e.clientY + "px";
});
