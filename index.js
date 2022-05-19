const quiz = [
  {
    question: "魚のタラは漢字で書くと魚へんに何と書く？",
    answers: [ "占", "周", "雪", "寒" ],
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



// let mes = 'Hello';

// const mess = 'hey';
// let inoki = ['いち', 'に', 'さん']
// let six = ['1', '2', '3', '4', '5', '6', '7']
// //let index = 0;
// //while(index < inoki.length){
// //  console.log(inoki[index]);
// //  index++;
  
// //}

// // if(inoki.length > 5){
// //   console.log("woo!")

// // } else {
// //   console.log("!")
// // }

// //関数　同じ命令を何度も使いたい　特定の条件で使いたい
// const test = (arg) => {
//   if(arg.length > 5){
//     console.log("woo!")
  
//   } else {
//     console.log("!")
//   }
// };
// test(inoki);

// //オブジェクト
// // const cat = {
// //   color: 'pink'
// //   size: 'big'
// //   purfume: 'mint'
// // };


// console.log(document.getElementsByTagName("button")[0].addEventListener("click", ()=> {
//   window.alert("hey");
// }));