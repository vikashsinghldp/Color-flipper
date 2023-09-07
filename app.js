const hex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
var color=document.querySelector(".color");
var btn = document.getElementById('btn');
btn.addEventListener("click",function(){
  var hexColor="#";
  for(let i=0;i<6;i++){
    hexColor += hex[randomNum()]
  }
  document.body.style.backgroundColor=(hexColor);
  color.textContent=hexColor;
} );
function randomNum(){
  return Math.floor(Math.random()*hex.length);
}