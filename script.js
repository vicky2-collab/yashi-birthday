const screens=[...document.querySelectorAll('.screen')];
const show=id=>{screens.forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active')};
document.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.next)));
document.getElementById('scareBtn').addEventListener('click',()=>{const s=document.getElementById('park');s.animate([{filter:'brightness(1)'},{filter:'brightness(.2)'},{filter:'brightness(1)'},{filter:'brightness(.1)'}],{duration:850});setTimeout(()=>show('kiss'),900)});
document.getElementById('revealFunny').addEventListener('click',()=>{
  document.getElementById('funnyReveal').style.display='block';
});
const questions=[{title:'Where did our story begin?',a:['On Holi ❤️','At the amusement park 🎢','Somewhere in Delhi 🌆'],c:0},{title:'Where did our first kiss happen?',a:['On a ride 🎢','Inside the scary house 👻','At home 🏠'],c:1},{title:'What do I secretly love about you?',a:['When you care ❤️','When you get jealous 👀','When you act like a Dumbo 🐘','All of them 😌'],c:3}];
let qi=0;
function renderQ(){const q=questions[qi];document.getElementById('qTitle').textContent=q.title;const box=document.getElementById('answers');box.innerHTML='';document.getElementById('feedback').textContent='';document.getElementById('progress').style.width=(qi/questions.length*100)+'%';q.a.forEach((x,i)=>{const b=document.createElement('button');b.textContent=x;b.onclick=()=>{document.getElementById('feedback').textContent=i===q.c?'You remember. ❤️':'Nice try, Dumbo 😂';setTimeout(()=>{qi++;if(qi<questions.length)renderQ();else show('photos')},750)};box.appendChild(b)})}renderQ();
function confetti(){const box=document.getElementById('confetti');box.innerHTML='';const symbols=['❤️','✨','🎉','💖','🌸','⭐'];for(let i=0;i<65;i++){const x=document.createElement('span');x.className='confetti-piece';x.textContent=symbols[Math.floor(Math.random()*symbols.length)];x.style.left=Math.random()*100+'%';x.style.animationDelay=Math.random()*1.6+'s';x.style.fontSize=(12+Math.random()*15)+'px';box.appendChild(x)}}
const happyBirthdaySong = document.getElementById("happyBirthdaySong");
const birthdayMusicButton = document.getElementById("birthdayMusicButton");

document.querySelector('[data-next="finale"]').addEventListener('click', () => {

  // Pause the romantic song
  if (birthdaySong) {
    birthdaySong.pause();
  }

  // Open the birthday finale
  show('finale');
  confetti();

  // Start the birthday song
  if (happyBirthdaySong) {
    happyBirthdaySong.currentTime = 0;

    happyBirthdaySong.play().catch(() => {
      // If the browser blocks autoplay,
      // she can use the Play Birthday Song button.
    });
  }

});

if (birthdayMusicButton && happyBirthdaySong) {
  birthdayMusicButton.addEventListener("click", () => {

    if (happyBirthdaySong.paused) {
      happyBirthdaySong.play();
      birthdayMusicButton.textContent = "⏸ Pause birthday song";
    } else {
      happyBirthdaySong.pause();
      birthdayMusicButton.textContent = "🎵 Play birthday song";
    }

  });
}

const birthdaySong = document.getElementById("birthdaySong");
const playSong = document.getElementById("playSong");
const pauseSong = document.getElementById("pauseSong");
const vinyl = document.querySelector(".vinyl");

if (birthdaySong && playSong && pauseSong) {

  playSong.addEventListener("click", () => {
    birthdaySong.play();
  });

  pauseSong.addEventListener("click", () => {
    birthdaySong.pause();
  });

  birthdaySong.addEventListener("play", () => {
    if (vinyl) {
      vinyl.style.animationPlayState = "running";
    }
  });

  birthdaySong.addEventListener("pause", () => {
    if (vinyl) {
      vinyl.style.animationPlayState = "paused";
    }
  });

  birthdaySong.addEventListener("ended", () => {
    if (vinyl) {
      vinyl.style.animationPlayState = "paused";
    }
  });

}