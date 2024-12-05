const blud = document.getElementById("blud");
blud.style.position = "absolute"

document.addEventListener("mousemove", (e) => {
  blud.style.left = (e.clientX - 100) + "px";
  blud.style.top  = (e.clientY - 100) + "px";
});

function randomImageSpam( src, resW, resH, stayTime, intervalMin, intervalMax ) { 
  setInterval(() => {
    const spam = document.createElement("img");
    spam.src = src;
    spam.style.position = "absolute";
    const xMax = (window.innerWidth) - Math.floor(resW * 0.5);
    const yMax = (window.innerHeight) - Math.floor(resH * 0.5);
    spam.style.left = Math.floor(Math.random() * xMax) + "px";
    spam.style.top  = Math.floor(Math.random() * yMax) + "px";
    document.body.prepend(spam);
    setTimeout(() => {spam.remove();}, stayTime);
  }, Math.floor(Math.random() * (intervalMax + 1 - intervalMin)));
}

randomImageSpam("https://media1.tenor.com/images/75502f3c757d3096182ce7aca7f2d01e/tenor.gif?itemid=14347319", 480, 270, 4000, 2000, 5000);
randomImageSpam("https://cdn.pixabay.com/animation/2023/01/20/02/36/02-36-45-286_512.gif", 512, 512, 3000, 1000, 3000);
