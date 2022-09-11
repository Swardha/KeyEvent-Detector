//declaring the elements
const para = document.querySelector("#key");


//adding event listener to keydown for detecting keys
window.addEventListener('keydown', (e)=>{
    para.innerHTML = 
    `<p> You have pressed:
    ${e.key}</p>`;

})