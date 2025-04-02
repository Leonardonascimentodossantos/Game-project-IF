const loginBtn = document.querySelector("#loginBtn");
const newuserBtn = document.querySelector("#newuserBtn");

loginBtn.addEventListener("click", () => {
    window.location.href = "character.html";
});

newuserBtn.addEventListener("click", () => {
    window.location.href = "register.html";
});
