/* Insert After Function */
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

/* Header */
const header = document.createElement("div");
header.className = "header";
header.align = "center";

const title = document.createElement("h1");
title.innerHTML = "Porcentagem";
header.appendChild(title);

const subTitle = document.createElement("p");
subTitle.innerHTML = "Digite os valores para tirar a porcentagem!";

const i = document.createElement("i");
i.appendChild(subTitle);
header.appendChild(i);

/* Form */
const fDiv = document.createElement("div");
fDiv.align = "center";

const form = document.createElement("form");
form.className = "form";

const fullInput = document.createElement("input");
fullInput.type = "number";
fullInput.className = "input";
fullInput.placeholder = "Valor Total (100%)";
form.appendChild(fullInput);

const partInput = document.createElement("input");
partInput.type = "number";
partInput.className = "input";
partInput.placeholder = "Numero que representa a parte";
form.appendChild(partInput);

const caucButton = document.createElement("input");
caucButton.type = "button";
caucButton.className = "button";
caucButton.value = "Caucular";
caucButton.addEventListener("click", () => {active()}, false);
form.appendChild(caucButton);

const changeButton = document.createElement("input");
changeButton.type = "button";
changeButton.className = "button change";
changeButton.value = "Mudar";
changeButton.addEventListener("click", () => {
    if (porc) {
        porc = false;
        changeButton.className = "button porc";
        subTitle.innerHTML = "Digite os valores para tirar a parte!"
        partInput.placeholder = "Numero que representa a porcentagem (x%)";
    } else {
        porc = true
        changeButton.className = "button change";
        subTitle.innerHTML = "Digite os valores para tirar a porcentagem!";
        partInput.placeholder = "Numero que representa a parte";
    }
}, false);
form.appendChild(changeButton);

// Putting elements on the body
document.body.appendChild(header);

fDiv.appendChild(form);
document.body.appendChild(fDiv);

// Cauculate the percentage
function cauc(f, p) {
    return 100 * p / f;
}

function cauc1(f, p) {
    return p * f / 100;
}

// Control
let porc = true;

// Button - func
function active() {
    if (document.getElementById("result")) {
        document.getElementById("result").remove();
    }   

    let full = fullInput.value;
    let part = partInput.value;

    const rDiv = document.createElement("div");
    rDiv.id = "result";

    const rP = document.createElement("p");

    if (full == "" || part == "") {
        rDiv.className = "result result-error";

        rP.innerHTML = "Por favor insira um valor antes de continuar!";
    } else {
        rDiv.className = "result result-cauc";

        if (porc) {
            const result = cauc(full, part);
            rP.innerHTML = result + "%";
        } else {
            const result = cauc1(full, part);
            rP.innerHTML = result;
        }
    }
    
    rDiv.appendChild(rP)
    insertAfter(partInput, rDiv);
}