const avatarImg = document.querySelector("#avatarImg");
const buttonEditName = document.querySelector(".button-change-name");
const spanName = document.querySelector("#name");
const divDescription = document.querySelector(".description")

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

