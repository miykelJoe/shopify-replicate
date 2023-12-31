const cancel = document.querySelector('.close-cont');
const aside = document.querySelector('aside');
const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');
const collapsibleTrigger = document.querySelector('.collapsible-trigger');
const options = document.querySelector('.options');
const steps = document.querySelectorAll('.steps');


// steps[0].classList.add('active');

// function toggleCard(clickedCard) {

//     // If the clicked card is already active, return
//     if (clickedCard.classList.contains('active')) return


//     // Loop through all cards to deactivate other active cards
//     steps.forEach((card) => {
//         if (card !== clickedCard && card.classList.contains('active')) {
//             card.classList.remove('active');
//         }
//     });

//      // Toggle the 'active' class for the clicked card
//   clickedCard.classList.add('active');
// }

// steps.forEach((card) => {
//     card.addEventListener('click', function() {
//         toggleCard(card);
//     }) 
// })


steps.forEach( function(card){
    
    card.onclick = function(event){

        // this code checks if the card that was clicked on have the active class
        if(card.classList.contains("active")) return 

        // this code removes the active class from all steps element
        steps.forEach( card => card.classList.remove("active"))

        // this code adds the active class to the card (step) click on
        card.classList.add("active")
    }

} )




cancel.onclick = function () {
    aside.style.display = 'none'
}


const collapsContainer = document.querySelector("main")



collapsibleTrigger.onclick = function () {
    // collapsContainer.classList.toggle("hide")

    // if(collapsContainer.classList.contains("hide")){
    //     collapsContainer.classList.remove("hide")
    // }else{
    //     collapsContainer.classList.add("hide")
    // }

    if (arrowDown.style.display == 'block') {
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
        options.style.display = 'none';
    } else if (arrowDown.style.display == 'none') {
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
        options.style.display = 'block';
    }
}
