let slider = document.getElementById("slider");
let valueShow = document.getElementById("value");
let button = document.getElementById("length-picker-button");

let revealText = document.getElementById("reveal");
let password = document.getElementById("password");

revealText.style.display = "none";
password.style.display = "none";

valueShow.textContent = "Length = " + Number(slider.value);
slider.oninput = () => {valueShow.textContent = "Length = " + Number(slider.value);};

button.onclick = () => {
    let passwordLength = Number(slider.value);

    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "1234567890";
    let punctuation = "!@#$%^&*";

    let realPassword = "";
    let store = "";

    store += lowerCase;
    store += upperCase;
    store += punctuation;
    store += numbers;


    for(let i = 0; i < passwordLength; i++)
    {
        let rand = Math.floor(Math.random() * store.length);
        realPassword += store.charAt(rand);
    }

    password.textContent = realPassword;

    revealText.style.display = "inline";
    password.style.display = "inline";
    button.style.margin = "0px 0px 0px 0px";
}