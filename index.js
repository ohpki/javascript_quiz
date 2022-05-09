let mes = 'Hello';

const mess = 'hey';
let inoki = ['いち', 'に', 'さん']
let six = ['1', '2', '3', '4', '5', '6', '7']
//let index = 0;
//while(index < inoki.length){
//  console.log(inoki[index]);
//  index++;
  
//}

// if(inoki.length > 5){
//   console.log("woo!")

// } else {
//   console.log("!")
// }

//関数　同じ命令を何度も使いたい　特定の条件で使いたい
const test = (arg) => {
  if(arg.length > 5){
    console.log("woo!")
  
  } else {
    console.log("!")
  }
};
test(inoki);

//オブジェクト
// const cat = {
//   color: 'pink'
//   size: 'big'
//   purfume: 'mint'
// };


console.log(document.getElementsByTagName("button")[0].addEventListener("click", ()=> {
  window.alert("hey");
}));