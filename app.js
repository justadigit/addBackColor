const addbg = document.querySelector('.addbg');
const bgcolor = Array.from(document.getElementsByClassName('bgcolor'));
let i = 0;
addbg.addEventListener('click', () => {
  bgcolor[i++].style.backgroundColor = 'yellow';
});

// const addbg = document.querySelector('.addbg');
// const bgcolor = Array.from(document.getElementsByClassName('bgcolor'));
// const colorArr = ['red', 'green', 'blue', 'yellow'];
// let i = 0;
// let y = 0;
// addbg.addEventListener('click', () => {
//   bgcolor[i++].style.backgroundColor = colorArr[y++];
// });
