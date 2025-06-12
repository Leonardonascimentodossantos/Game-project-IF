// Constantes character
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

// Constantes attributes
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


   window.addEventListener('DOMContentLoaded', function() {
        const audio = document.getElementById('bg-music');
        // Tenta tocar automaticamente
        audio.volume = 0.4; // ajuste o volume se quiser
        audio.play().catch(() => {
            // Se o navegador bloquear, toca ao primeiro clique em qualquer lugar
            document.body.addEventListener('click', () => {
                audio.play();
            }, { once: true });
        });
    });
//FUNÇÃO CHARACTER
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
        characterImg.src = "Characters/primeiro_personagemM.gif"
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

//FUNÇÃO ATTRIBUTES
//Constantes Attributes
const attributes = {
    force: ["1", "2", "3", "4", "5"],
    defense: ["1", "2", "3", "4", "5"],
    life: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    mana: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
};

let indexAttributes = {
    force: 2,
    defense: 2,
    life: 4,
    mana: 4,
};

// Função para atualizar os displays
function updateDisplays() {
    force.textContent = attributes.force[indexAttributes.force];
    defense.textContent = attributes.defense[indexAttributes.defense];
    life.textContent = attributes.life[indexAttributes.life];
    mana.textContent = attributes.mana[indexAttributes.mana];
}

// Função para ajustar força/defesa (soma = 6)
function adjustForceDefense(changedAttr, direction) {
    if (changedAttr === 'force') {
        if (direction === 'up' && indexAttributes.force < 4) { // 4 porque o array vai de 0 a 4 (valores 1-5)
            indexAttributes.force++;
            indexAttributes.defense--;
        } else if (direction === 'down' && indexAttributes.force > 0) {
            indexAttributes.force--;
            indexAttributes.defense++;
        }
    } else if (changedAttr === 'defense') {
        if (direction === 'up' && indexAttributes.defense < 4) {
            indexAttributes.defense++;
            indexAttributes.force--;
        } else if (direction === 'down' && indexAttributes.defense > 0) {
            indexAttributes.defense--;
            indexAttributes.force++;
        }
    }
}

// Função para ajustar vida/mana (soma = 10)
function adjustLifeMana(changedAttr, direction) {
    if (changedAttr === 'life') {
        if (direction === 'up' && indexAttributes.life < 8) { // 8 porque o array vai de 0 a 8 (valores 1-9)
            indexAttributes.life++;
            indexAttributes.mana--;
        } else if (direction === 'down' && indexAttributes.life > 0) {
            indexAttributes.life--;
            indexAttributes.mana++;
        }
    } else if (changedAttr === 'mana') {
        if (direction === 'up' && indexAttributes.mana < 8) {
            indexAttributes.mana++;
            indexAttributes.life--;
        } else if (direction === 'down' && indexAttributes.mana > 0) {
            indexAttributes.mana--;
            indexAttributes.life++;
        }
    }
}

// Event listeners
upForce.addEventListener('click', () => {
    adjustForceDefense('force', 'up');
    updateDisplays();
});
downForce.addEventListener('click', () => {
    adjustForceDefense('force', 'down');
    updateDisplays();
});

upDefense.addEventListener('click', () => {
    adjustForceDefense('defense', 'up');
    updateDisplays();
});
downDefense.addEventListener('click', () => {
    adjustForceDefense('defense', 'down');
    updateDisplays();
});

upLife.addEventListener('click', () => {
    adjustLifeMana('life', 'up');
    updateDisplays();
});
downLife.addEventListener('click', () => {
    adjustLifeMana('life', 'down');
    updateDisplays();
});

upMana.addEventListener('click', () => {
    adjustLifeMana('mana', 'up');
    updateDisplays();
});
downMana.addEventListener('click', () => {
    adjustLifeMana('mana', 'down');
    updateDisplays();
});

// Inicialização
updateDisplays();

// Função para obter usuário logado
function getLoggedUser() {
    return localStorage.getItem('username');
}

// Função para carregar personagem salvo
async function loadCharacter() {
    const username = getLoggedUser();
    if (!username) return;
    const response = await fetch('/api/get-character', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
    });
    if (response.ok) {
        const data = await response.json();
        if (data.character) {
            // Atualize os campos com os dados salvos
            currentIndex.sex = options.sex.indexOf(data.character.sex);
            currentIndex.skin = options.skin.indexOf(data.character.skin);
            currentIndex.hair = options.hair.indexOf(data.character.hair);
            indexAttributes.force = attributes.force.indexOf(data.character.force);
            indexAttributes.defense = attributes.defense.indexOf(data.character.defense);
            indexAttributes.life = attributes.life.indexOf(data.character.life);
            indexAttributes.mana = attributes.mana.indexOf(data.character.mana);
            updateDisplay(sex, "sex");
            updateDisplay(skin, "skin");
            updateDisplay(hair, "hair");
            updateDisplays();
            updateCharacterImg();
        }
    }
}

// Salvar personagem
document.getElementById('save-btn').addEventListener('click', async () => {
    const username = getLoggedUser();
    if (!username) {
        alert('Usuário não logado!');
        return;
    }
    const character = {
        sex: options.sex[currentIndex.sex],
        skin: options.skin[currentIndex.skin],
        hair: options.hair[currentIndex.hair],
        force: attributes.force[indexAttributes.force],
        defense: attributes.defense[indexAttributes.defense],
        life: attributes.life[indexAttributes.life],
        mana: attributes.mana[indexAttributes.mana]
    };
    const response = await fetch('/api/save-character', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, character })
    });
    const data = await response.json();
    alert(data.message);
});

// Carregar personagem ao abrir a página
window.addEventListener('DOMContentLoaded', loadCharacter);