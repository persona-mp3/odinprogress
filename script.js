console.log('Linkin Park')
//etch a sketch

//callbac function that has event listner for mouseout
function callBack(element) {

    //add event listener to the element
    element.addEventListener('scroll', ()=>{
        element.classList.toggle('.trail')
    })
}
//creat 16 divs, i want to try using a for loop
const container = document.querySelector('.container')

document.addEventListener('DOMContentLoaded', ()=>{

    for (i=1; i <= (16*16); i++){

        const newDiv = document.createElement('div');
        container.appendChild(newDiv);

        //add a mouseout event listener
        
    }



})

function promptFunc(){
    let question = prompt('How many squares you want boi?');
    let i = 0;
    let start = question;

    if (start < 0 || !start || start >= 100){
        alert('Invalid choice')
        
        return;
    }
    container.innerHTML= '';


    for(i=0; i<=start; i++){

        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        


    }
    return question;
}

const btn = document.querySelector('button');
btn.addEventListener('click', promptFunc)
