const registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener("click", async () => {
    const username = document.querySelector("#user-area input").value;
    const email = document.querySelector("#email-area input").value;
    const password = document.querySelector("#password-area input").value;
    const passwordConfirm = document.querySelector("#passwordconfirm-area input").value;

    if (!username || !email || !password || !passwordConfirm) {
        alert("Preencha todos os campos!");
        return;
    }
    if (password !== passwordConfirm) {
        alert("As senhas não coincidem!");
        return;
    }

    const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    if (response.ok) {
        alert(data.message);
        window.location.href = "login.html";
    } else {
        alert(data.message);
    }
});