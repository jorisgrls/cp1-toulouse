const avatarImg = document.querySelector("#avatarImg");
const buttonEditName = document.querySelector(".button-change-name");
const spanName = document.querySelector("#name");
const divDescription = document.querySelector(".description");
const frontDevList = document.querySelectorAll("#front-dev-tools li");
const frontDevTools = ["VSCode", "GitHub", "Terminal"];
const buttonModify = document.querySelector("#button-modify");
const submitForm = document.querySelector("#submit-form");

avatarImg.addEventListener('click', () => {
    avatarImg.src = "image/avatar.svg"
})

buttonEditName.addEventListener('click', () => {
    const newColor = prompt("Enter a color");
    const newName = prompt("Enter your name");
    spanName.innerHTML = newName;

    const pinkElement = document.querySelectorAll(".pink-text, .pink-bg");
    pinkElement.forEach(element => {
        if (element.classList.contains("pink-bg")){
            element.style.cssText += `background-color: ${newColor}`
        }
        else{
            element.style.cssText += `color: ${newColor}`
        }  
    })
})


buttonModify.addEventListener('click', () => {
    frontDevList.forEach(function callback(value, index){
        value.innerHTML = frontDevTools[index];
    })
})


submitForm.addEventListener('click', (event) => {
    event.preventDefault();
    const inputForm = document.querySelector("#input-form");
    const devToolsBe = document.querySelector("#be-devtools");
    if(inputForm != ""){
        const newElement = document.createElement("li");
        newElement.textContent += inputForm.value;
        devToolsBe.appendChild(newElement); 
        inputForm.value = "";
    }
})
