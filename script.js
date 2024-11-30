console.log('basics of arrays')
const a = ['a', 'b', 'c', 'd'];
const secArray = [2, 4, 6, 8, 12]

// secArray.forEach(number => {console.log(number)})

//event delegation using the event bubling

let menu = document.getElementById('menu');

menu.addEventListener('click', (e)=>{
    let target = e.target;

    switch(target.id){
        case 'home':
            console.log('Home was clicked');
            target.target = '__blank'
            target.href = 'https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/'
            break;
        case 'dashboard':
            console.log('Dashboard');
            break;
        case 'report':
            console.log('Report was clicked')
            break;

    };

    
})
