let title = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjectiveInput = document.getElementById("adjective");
let submitBtn = document.getElementById("submit_button");

function updateTitle(event) {
    event.preventDefault();
    let userInput = titleInput.value;
    title.innerText = userInput;
}

function submit(event){
    event.preventDefault();
    if (titleInput.value == "" || nounInput.value == "" || verbInput.value == "" || adjectiveInput.value == "" ){
        window.alert("Please fill out all fields")
    }
}

titleInput.addEventListener("input", updateTitle);
submitBtn.addEventListener("click", submit);
