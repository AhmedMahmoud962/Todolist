const button = document.querySelector("button");
const form = document.querySelector("form");
const Container = document.getElementById("conatiner");
const input = document.querySelector("input");








////////// the angry element //////////

// Container.addEventListener("click", (eo) => {


//     // when you click to bin to remove ////


//     if (eo.target.className == "icon-bin icon") {

//         eo.target.parentElement.parentElement.remove();
//     }

//     // when you click to angry to be a heart ////
//     else if (eo.target.className == "icon-angry2 icon") {

//         eo.target.classList.add("bin");
//         const heart = ` <span class="icon-heart icon">  </span> `

//         eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finish");


//         eo.target.parentElement.innerHTML += heart;
//     }



//     // when you click to heart to return for a new ////
//     else if (eo.target.className == "icon-heart icon") {

//         eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finish");

//         eo.target.classList.add("bin");

//         const AddAngry =
//             ` 
//         <span class="icon-angry2 icon">  </span>
//         `

//         eo.target.parentElement.innerHTML += AddAngry;

//     }

//     // with the orange star and put the task above ////
//     else if (eo.target.className == "icon-star-full") {


//         eo.target.classList.add("orange");
//         Container.prepend(eo.target.parentElement);

//     }
//     // to remove the color orange and return to the old //
//     else if (eo.target.className == "icon-star-full orange") {
//         eo.target.classList.remove("orange")
//     }
// });



////////// the CLICK ON angry element //////////
Container.addEventListener("click", (eo) => {

    switch (eo.target.className) {

        // when you click to bin to remove ////
        case "icon-bin icon":
            eo.target.parentElement.parentElement.remove();
            break;

            // when you click to angry to be a heart ////
        case "icon-angry2 icon":

            eo.target.classList.add("bin");
            const heart = ` <span class="icon-heart icon">  </span> `

            eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finish");


            eo.target.parentElement.innerHTML += heart;
            break;

            // when you click to heart to return for a new ////
        case "icon-heart icon":
            eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finish");

            eo.target.classList.add("bin");

            const AddAngry =
                ` 
        <span class="icon-angry2 icon">  </span>
        `

            eo.target.parentElement.innerHTML += AddAngry;

            break;

            // with the orange star and put the task above ////
        case "icon-star-full":
            eo.target.classList.add("orange");
            Container.prepend(eo.target.parentElement);
            break;

            // to remove the color orange and return to the old //  
        case "icon-star-full orange":
            eo.target.classList.remove("orange")
            break;

        default:
            break;
    }

});


////////// the value in the input //////////

form.addEventListener("submit", (eo) => {
    eo.preventDefault();
    const task = `
<div class="task">
    <span class="icon-star-full">  </span>
    <p class="task-text">${input.value}</p>
    <div>
        <span class="icon-bin icon">  </span>
        <span class="icon-angry2 icon">  </span>
</div>
`

    Container.innerHTML += task;


    input.value = ""
})