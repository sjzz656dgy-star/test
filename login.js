const passwordInput = document.querySelector("#password");
const showPasswordButton = document.querySelector(".show-password");
const loginForm = document.querySelector("#login-form");
const formMessage = document.querySelector("#form-message");

showPasswordButton.addEventListener("click", () => {
  const isPasswordVisible = passwordInput.type === "text";
  passwordInput.type = isPasswordVisible ? "password" : "text";
  showPasswordButton.textContent = isPasswordVisible ? "Show" : "Hide";
  showPasswordButton.setAttribute("aria-pressed", String(!isPasswordVisible));
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Login successful! (Demo only — no authentication was performed.)";
});
