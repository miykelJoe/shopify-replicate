const cancel = document.querySelector('.close-cont');
const aside = document.querySelector('aside');
const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');
const collapsibleTrigger = document.querySelector('.collapsible-trigger');
const options = document.querySelector('.options');

let tog  = true
cancel.onclick = function () {
    if (tog){
        tog = false
        aside.style.display = 'none'
    }
}

collapsibleTrigger.onclick = function (){
    if (arrowDown.style.display == 'block'){
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
        options.style.display = 'none';
    }else if (arrowDown.style.display == 'none'){
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
        options.style.display = 'block';
    }
}
