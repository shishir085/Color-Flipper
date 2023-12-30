let clickbtn = document.querySelector('.clickbtn')

let colorchange = () => {

   let randomclr = '#' + Math.floor(Math.random() * 16777215).toString(16);
   document.body.style.backgroundColor = randomclr;
   document.getElementById('color').innerHTML = 'Background Color : ' + randomclr;
}


clickbtn.addEventListener('click', colorchange);




// let clickbtn = document.querySelector('.clickbtn')
// let colorchange = () => {
//    document.body.style.backgroundColor = "#4AAAF0"
//    document.getElementById('color').innerHTML = 'Background Color :' + 'Blue'

// }
// clickbtn.addEventListener('click', colorchange);