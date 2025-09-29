(function () {
  "use strict";

  // Password toggle functionality
  const passwordInput = document.getElementById("login-password");
  const passwordToggle = document.getElementById("password-toggle");

  passwordToggle.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
})();

async function loginUser(username, password) {
  const url = "https://pendaftaran-coc-api.up.railway.app/api/admin/login";
  const data = { username, password };
  const form = document.getElementById("login-form");
  const usernameInput = document.getElementById("login-username");
  const passwordInput = document.getElementById("login-password");

  // Reset validation classes
  form.classList.remove("was-validated");
  usernameInput.classList.remove("valid");
  passwordInput.classList.remove("valid");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      console.log("Login successful:", result);
      // Apply valid styles only on success
      usernameInput.classList.add("valid");
      passwordInput.classList.add("valid");
      localStorage.setItem("authToken", result.token);
      window.location.href = "pendaftar.html";
    } else {
      console.error("Login failed: ", result);
      alert("Login failed: " + result.message);
      // Mark inputs as invalid
      form.classList.add("was-validated");
      usernameInput.setCustomValidity("Invalid");
      passwordInput.setCustomValidity("Invalid");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred during login. Please try again later.");
    // Mark inputs as invalid
    form.classList.add("was-validated");
    usernameInput.setCustomValidity("Invalid");
    passwordInput.setCustomValidity("Invalid");
  }
}

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = this;

  // Reset custom validity
  document.getElementById("login-username").setCustomValidity("");
  document.getElementById("login-password").setCustomValidity("");

  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add("was-validated");
  } else {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    loginUser(username, password);
  }
});
