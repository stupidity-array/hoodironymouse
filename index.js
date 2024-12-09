const blud = document.getElementById("blud");
blud.style.position = "absolute";

document.addEventListener("mousemove", (e) => {
  blud.style.left = (e.clientX - 100) + "px";
  blud.style.top  = (e.clientY - 100) + "px";
});

function randomImageSpam( src, resW, resH, stayTime, intervalMin, intervalMax ) { 
  setTimeout(() => {
    const spam = document.createElement("img");
    spam.src = src;
    spam.style.position = "absolute";
    spam.style.width  = resW + "px";
    spam.style.height = resH + "px";
    
    const xMax = (window.innerWidth) - Math.floor(resW * 0.5);
    const yMax = (window.innerHeight) - Math.floor(resH * 0.5);
    
    spam.style.left = Math.floor(Math.random() * xMax) + "px";
    spam.style.top  = Math.floor(Math.random() * yMax) + "px";
    
    document.body.prepend(spam);
    setTimeout(() => {spam.remove();}, stayTime);
    
    randomImageSpam( src, resW, resH, stayTime, intervalMin, intervalMax );
  }, Math.floor(intervalMin + Math.random() * (intervalMax - intervalMin)));
}

randomImageSpam("/hoodironymouse/sub.gif", 480, 270, 4000, 2000, 5000);
randomImageSpam("/hoodironymouse/like.webp", 170, 170, 3000, 1000, 3000);
