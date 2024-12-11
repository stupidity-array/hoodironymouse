const blud = document.getElementById("blud");
blud.style.position = "absolute";

document.addEventListener("mousemove", (e) => {
  blud.style.left = (e.clientX - 100) + "px";
  blud.style.top  = (e.clientY - 100) + "px";
});

function randomImageSpam( src, resW, resH, stayTime, intervalMin, intervalMax, circleChance ) { 
  setTimeout(() => {
    const spam = document.createElement("img");
    spam.src = src;
    spam.style.position = "absolute";
    spam.style.width  = resW + "px";
    spam.style.height = resH + "px";
    
    const xMax = (window.innerWidth) - Math.floor(resW * 0.5);
    const yMax = (window.innerHeight) - Math.floor(resH * 0.5);

    const left = Math.floor(Math.random() * xMax) + "px";
    const top = Math.floor(Math.random() * yMax) + "px";
    
    spam.style.left = left;
    spam.style.top  = top;
    
    document.body.prepend(spam);
    setTimeout(() => {spam.remove();}, stayTime);

    if(circleChance && Math.floor(Math.random() * (circleChance + 1)) == 1) {
      const circle = document.createElement("img");
      circle.src = "/hoodironymouse/img/circle.webp";
      circle.className = "circle";
      circle.style.position = "absolute";
      circle.style.left = (left - 112) + Math.floor(resW * 0.5) + "px";
      circle.style.top = (top - 112) + Math.floor(resH * 0.5) + "px";
      document.body.prepend(circle);
      
      setTimeout(() => {circle.remove();}, 2000);
    }
    
    randomImageSpam( src, resW, resH, stayTime, intervalMin, intervalMax, circleChance );
  }, Math.floor(intervalMin + Math.random() * (intervalMax - intervalMin)));
}

randomImageSpam("/hoodironymouse/img/sub.gif", 480, 270, 4000, 2000, 5000, 7);
randomImageSpam("/hoodironymouse/img/like.webp", 170, 170, 3000, 1000, 3000, false);
randomImageSpam("/hoodironymouse/img/toddlers.jpg", 352, 466, 5000, 5000, 10000, 3);
