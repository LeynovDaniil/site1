// const textDoc = document.getElementById("h1")
// const textDoc2 = document.querySelector("h2")

// // const tetxDoc4 = document.querySelector("p_1")
// // textDoc.innerHTML = "new"
// function styleSet (name) {
// 	textDoc.textContent = "old"
// 	name.textContent = 'new_h2'
// 	name.style.color = 'green'
// }
// styleSet(textDoc2)
// setTimeout(() => {
// 	textDoc2.style.color = 'red'
// },1500)



// const doc5 = document.getElementById("bt1")
// doc5.addEventListener('click', function (event) {
//   alert('События вызвано функцией!');
// }); 
// var doc7 = document.getElementById("p_1")
// const doc6 = document.getElementById("bt")
// doc6.addEventListener('click', function (event) {
  
//   doc7.textContent = 'your tap on b-t'
// }); 

// const doc8 = document.getElementById("check1")
// doc8.addEventListener('click', function (event) {
//   const doc9 = document.getElementById("selected")
//   doc9.textContent = "Ты выбрал Катю!"
// }); 

// const doc10 = document.getElementById("clear")
// doc10.addEventListener('click', function (event) {
  
//   doc7.textContent = ""
// }); 
let i = 0
const check1 = document.getElementById("check_1")
check1.addEventListener('click', function (event) {
  
  i++
  console.log(i)
  
}); 

const check2 = document.getElementById("check_2")
check2.addEventListener('click', function (event) {
  
  i++
  console.log(i)
  
}); 

const href = document.getElementById("href")
href.addEventListener('click', function (event) {
  	
  	window.open('https://www.youtube.com/watch?v=XbnAKjjlgc4&t=788s')
  	 // window.location.href = 'https://www.youtube.com/watch?v=XbnAKjjlgc4&t=788s';
}); 
