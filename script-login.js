const loginBtn = document.querySelector("#loginBtn");
const newuserBtn = document.querySelector("#newuserBtn");

loginBtn.addEventListener("click", async () => {
    const username = document.querySelector("#user-area input").value;
    const password = document.querySelector("#password-area input").value;

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok) {
        alert(data.message);
        localStorage.setItem('username', username); // Salva usuário logado
        window.location.href = "character.html";
    } else {
        alert(data.message);
    }
});

newuserBtn.addEventListener("click", () => {
    window.location.href = "register.html";
});
