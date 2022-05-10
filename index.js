const quiz = [
  {
    question: "魚のタラは漢字で書くと魚へんに何と書く？",
    answers: [ "占", "念", "雪", "寒" ],
    correct: "雪"
  },{
    question: "突発的にキーンと高音の耳鳴りがする原因は？",
    answers: [ 
    "笑いすぎ",
    "過度なストレス",
    "暴飲暴食",
    "過眠" ],
    correct: "過度なストレス"
  },{
    question: "デトックス効果のある食材は？",
    answers: [ 
    "甘味のある食材",
    "辛味のある食材",
    "苦味のある食材",
    "塩味のある食材" ],
    correct: "苦味のある食材"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length

const setupQuiz = () => {
  document.getElementById("js_puestion").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
  buttonIndex++;
  }
}
console.log(quiz[2]);
setupQuiz();
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解");
    score++;
  } else {
    window.alert("不正解");
  }
  quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert("終了!あなたの正解数は" + score + "/" + quizLength + "です");
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
