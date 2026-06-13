const card = document.getElementById("card");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    card.classList.add("open");

    music.play();

    setTimeout(() => {

        const images =
            document.querySelectorAll(".gallery img");

        images.forEach((img,index)=>{

            setTimeout(()=>{

                img.classList.add("show");

            },index*400);

        });

    },1000);

});

/* ======================
   TIM RƠI
====================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        Math.random()*15 + 15 + "px";

    heart.style.animationDuration =
        Math.random()*4 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,250);