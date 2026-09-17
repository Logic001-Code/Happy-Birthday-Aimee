// CHANGE THESE TWO NUMBERS to her birthday.
const birthdayMonth = 9; // September = 9
const birthdayDay = 24;  // Change this

function nextBirthday(){
  const now=new Date(); let y=now.getFullYear();
  let d=new Date(y,birthdayMonth-1,birthdayDay,0,0,0);
  if(d<=now)d=new Date(y+1,birthdayMonth-1,birthdayDay,0,0,0);
  return d;
}
function countdown(){
  const diff=nextBirthday()-new Date();
  const vals=[Math.floor(diff/86400000),Math.floor(diff/3600000)%24,Math.floor(diff/60000)%60,Math.floor(diff/1000)%60];
  ["days","hours","minutes","seconds"].forEach((id,i)=>document.getElementById(id).textContent=String(vals[i]).padStart(2,"0"));
  document.getElementById("countdownNote").textContent="Counting down to "+nextBirthday().toLocaleDateString(undefined,{month:"long",day:"numeric",year:"numeric"});
}
countdown();setInterval(countdown,1000);

const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));

function heart(x=Math.random()*innerWidth){
 const h=document.createElement("span");h.className="heart";h.textContent=Math.random()>.5?"♥":"♡";
 h.style.left=x+"px";h.style.fontSize=12+Math.random()*18+"px";h.style.setProperty("--drift",(Math.random()*160-80)+"px");
 document.getElementById("hearts").appendChild(h);setTimeout(()=>h.remove(),4500);
}
setInterval(()=>{if(document.visibilityState==="visible")heart()},1500);

document.getElementById("loveBtn").onclick=()=>{for(let i=0;i<10;i++)setTimeout(()=>heart(innerWidth/2+(Math.random()*180-90)),i*70)};
document.getElementById("secretBtn").onclick=()=>{document.getElementById("secret").classList.toggle("open")};
document.getElementById("bigHeart").onclick=()=>{
 document.getElementById("finalSecret").textContent="No matter how many worlds there are, somehow I'd still find my way to you. 💜";
 document.getElementById("finalSecret").classList.add("show");
 for(let i=0;i<18;i++)setTimeout(()=>heart(innerWidth/2+(Math.random()*220-110)),i*60);
};
