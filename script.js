const screens = [...document.querySelectorAll('.screen')];
const show = id => {
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
};

document.querySelectorAll('[data-next]').forEach(btn => {
  btn.addEventListener('click', () => show(btn.dataset.next));
});

document.getElementById('enterScary').addEventListener('click', () => {
  const scary = document.getElementById('scary');
  scary.classList.add('scare');
  setTimeout(() => {
    scary.classList.remove('scare');
    show('kiss');
  }, 900);
});

document.getElementById('poopReveal').addEventListener('click', () => {
  document.getElementById('poopText').classList.remove('hidden');
  setTimeout(() => show('romance'), 1800);
});

const questions = [
  {
    title: 'Where did our story begin?',
    answers: ['On Holi ❤️', 'At an amusement park 🎢', 'In Delhi 🌆'],
    correct: 0
  },
  {
    title: 'Where did our first kiss happen?',
    answers: ['On a ride 🎢', 'In the scary house 👻', 'At home 🏠'],
    correct: 1
  },
  {
    title: 'What do I secretly love when you do it?',
    answers: ['Care about me ❤️', 'Get jealous 👀', 'Act like a Dumbo 🐘', 'All of them 😌'],
    correct: 3
  }
];

let q = 0;
const renderQuestion = () => {
  const item = questions[q];
  document.getElementById('questionTitle').textContent = item.title;
  const box = document.getElementById('answers');
  const feedback = document.getElementById('questionFeedback');
  feedback.textContent = '';
  box.innerHTML = '';
  item.answers.forEach((answer, i) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => {
      feedback.textContent = i === item.correct ? 'Okayyy… you remember. ❤️' : 'Hmm… nice try 😂';
      setTimeout(() => {
        q++;
        if (q < questions.length) renderQuestion();
        else show('photos');
      }, 850);
    });
    box.appendChild(button);
  });
};
renderQuestion();

function launchConfetti(){
  const box = document.getElementById('confetti');
  box.innerHTML='';
  const symbols=['❤️','✨','🎉','💖','🌸','⭐'];
  for(let i=0;i<55;i++){
    const piece=document.createElement('span');
    piece.className='confetti-piece';
    piece.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    piece.style.left=Math.random()*100+'%';
    piece.style.animationDelay=Math.random()*1.5+'s';
    piece.style.fontSize=(12+Math.random()*14)+'px';
    box.appendChild(piece);
  }
}
document.querySelector('[data-next="finale"]').addEventListener('click', () => {
  show('finale');
  launchConfetti();
});
