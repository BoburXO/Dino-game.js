

let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");
function jump (){
    if (dispatchEvent.classList != "jump"){
        dino.classList.add("jump");
        setTimeout(function(){
            dino.classList.remove("jump");
        },500);     
    }
} 
const funcLive = setInterval(function(){
   let dinoTepaga = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
   );
   let cactusChapga = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
   );
   if (cactusChapga > 0 && cactusChapga < 70 && dinoTepaga >= 150){
    dino.style.animationPlayState = "paused";
    cactus.style.animationPlayState = "paused";
    alert("GAME OVER!");
    window.location.reload();
   }
});

document.addEventListener("keydown",function(){
    jump();
});


function func() {
    alert("Ok ni bosing va oyinni boshlang")
}
func()

const counterCon = document.getElementById('counter')
let number = 0;
function increament(){
  cactus++
  counterCon.innerHTML = cactus 
 

}

// const counterCon = document.getElementById('counter')
// let number = 0;
// function increament(){
//   number++
//   counterCon.innerHTML = number
 
//}
// imgc.addEventListener("click", () => {
//   //     card.removeChild(imgc);
//   //     alert("img deleted");
//   //   })
 
