const sex = document.querySelector("#sex");
const previousSex = document.querySelector("#previousSex");
const nextSex = document.querySelector("#nextSex");
const skin = document.querySelector("#skin");
const previousSkin = document.querySelector("#previousSkin");
const nextSkin = document.querySelector("#nextSkin");
const hair = document.querySelector("#hair");
const previousHair = document.querySelector("#previousHair");
const nextHair = document.querySelector("#nextHair");
const characterImg = document.querySelector("#characterImg");

const force = document.querySelector("#force");
const upForce = document.querySelector("#upForce");
const downForce = document.querySelector("#downForce");
const defense = document.querySelector("#defense");
const upDefense = document.querySelector("#upDefense");
const downDefense = document.querySelector("#downDefense");
const life = document.querySelector("#life");
const upLife = document.querySelector("#upLife");
const downLife = document.querySelector("#downLife");
const mana = document.querySelector("#mana");
const upMana = document.querySelector("#upMana");
const downMana = document.querySelector("#downMana");

const options = {
    sex: ["Homem", "Mulher"],
    skin: ["Preta", "Branca"],
    hair: ["Preto", "Branco"]
};

let currentIndex = {
    sex: 0,
    skin: 0,
    hair: 0,
};

// Função para atualizar o texto exibido
function updateDisplay(element, category) {
    element.textContent = options[category][currentIndex[category]];
}

// Event listeners para os botões de sexo
previousSex.addEventListener("click", () => {
    currentIndex.sex = (currentIndex.sex - 1 + options.sex.length) % options.sex.length;
    updateDisplay(sex, "sex");
    updateCharacterImg ();
});

nextSex.addEventListener("click", () => {
    currentIndex.sex = (currentIndex.sex + 1) % options.sex.length;
    updateDisplay(sex, "sex");
    updateCharacterImg ();
});

// Event listeners para os botões de cor de pele
previousSkin.addEventListener("click", () => {
    currentIndex.skin = (currentIndex.skin - 1 + options.skin.length) % options.skin.length;
    updateDisplay(skin, "skin");
    updateCharacterImg ();
});

nextSkin.addEventListener("click", () => {
    currentIndex.skin = (currentIndex.skin + 1) % options.skin.length;
    updateDisplay(skin, "skin");
    updateCharacterImg ();
});

// Event listeners para os botões de cabelo
previousHair.addEventListener("click", () => {
    currentIndex.hair = (currentIndex.hair - 1 + options.hair.length) % options.hair.length;
    updateDisplay(hair, "hair");
    updateCharacterImg ();
});

nextHair.addEventListener("click", () => {
    currentIndex.hair = (currentIndex.hair + 1) % options.hair.length;
    updateDisplay(hair, "hair");
    updateCharacterImg ();
});

// Inicializa os valores exibidos
updateDisplay(sex, "sex");
updateDisplay(skin, "skin");
updateDisplay(hair, "hair");

function updateCharacterImg () {
    if (sex.textContent === "Homem" && skin.textContent === "Preta" && hair.textContent === "Preto") {
        characterImg.src = "Characters/Char_man_black_blackhair.png"
    } else if (sex.textContent === "Homem" && skin.textContent === "Preta" && hair.textContent === "Branco") {
        characterImg.src = "Characters/Char_man_black_whitehair.png"
    } else if (sex.textContent === "Homem" && skin.textContent === "Branca" && hair.textContent === "Preto") {
        characterImg.src = "Characters/Char_man_white_blackhair.png"
    } else if (sex.textContent === "Homem" && skin.textContent === "Branca" && hair.textContent === "Branco") {
        characterImg.src = "Characters/Char_man_white_whitehair.png"
    } else if (sex.textContent === "Mulher" && skin.textContent === "Preta" && hair.textContent === "Preto") {
        characterImg.src = "Characters/Char_woman_black_blackhair.png"
    } else if (sex.textContent === "Mulher" && skin.textContent === "Preta" && hair.textContent === "Branco") {
        characterImg.src = "Characters/Char_woman_black_whitehair.png"
    } else if (sex.textContent === "Mulher" && skin.textContent === "Branca" && hair.textContent === "Preto") {
        characterImg.src = "Characters/Char_woman_white_blackhair.png"
    } else if (sex.textContent === "Mulher" && skin.textContent === "Branca" && hair.textContent === "Branco") {
        characterImg.src = "Characters/Char_woman_white_whitehair.png"
    } else {
        characterImg.src = ""
    }
}