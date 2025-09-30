(function () {
  "use strict";

  // Tunggu hingga DOM benar-benar siap
  document.addEventListener("DOMContentLoaded", function () {
    // === Toggle Password Visibility ===
    const passwordInput = document.getElementById("login-password");
    const passwordToggle = document.getElementById("password-toggle");

    if (passwordToggle && passwordInput) {
      passwordToggle.addEventListener("click", function () {
        const isPassword = passwordInput.getAttribute("type") === "password";
        passwordInput.setAttribute("type", isPassword ? "text" : "password");
        this.classList.toggle("fa-eye", !isPassword);
        this.classList.toggle("fa-eye-slash", isPassword);
      });
    }

    // === Fungsi Login ke API ===
    async function loginUser(username, password) {
      // 🔴 Perbaikan: Hapus spasi di akhir URL!
      const url =
        "https://pendaftaran-seminar-api-production.up.railway.app/api/admin/login";
      const form = document.getElementById("login-form");
      const usernameInput = document.getElementById("login-username");
      const passwordInput = document.getElementById("login-password");

      // Reset validasi visual
      form.classList.remove("was-validated");
      usernameInput.classList.remove("valid");
      passwordInput.classList.remove("valid");

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.ok) {
          console.log("Login successful:", result);
          // Tandai input sebagai valid
          usernameInput.classList.add("valid");
          passwordInput.classList.add("valid");
          // Simpan token (jika ada)
          if (result.token) {
            localStorage.setItem("authToken", result.token);
          }
          // Redirect ke halaman pendaftar
          window.location.href = "pendaftar.html";
        } else {
          console.error("Login failed:", result);
          const message = result.message || "Username atau password salah.";
          alert("Login gagal: " + message);

          // Tandai form sebagai tidak valid
          form.classList.add("was-validated");
          usernameInput.setCustomValidity("Invalid");
          passwordInput.setCustomValidity("Invalid");
        }
      } catch (error) {
        console.error("Network or parsing error:", error);
        alert("Gagal terhubung ke server. Periksa koneksi internet Anda.");
        form.classList.add("was-validated");
        usernameInput.setCustomValidity("Invalid");
        passwordInput.setCustomValidity("Invalid");
      }
    }

    // === Event Listener Submit Form ===
    const loginForm = document.getElementById("login-form");
    if (!loginForm) {
      console.warn(
        "Form login tidak ditemukan. Pastikan ID 'login-form' ada di HTML."
      );
      return;
    }

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const usernameInput = document.getElementById("login-username");
      const passwordInput = document.getElementById("login-password");

      // Reset custom validity agar validasi HTML5 bekerja ulang
      usernameInput.setCustomValidity("");
      passwordInput.setCustomValidity("");

      // Validasi HTML5 bawaan
      if (!loginForm.checkValidity()) {
        event.stopPropagation();
        loginForm.classList.add("was-validated");
        return;
      }

      const username = usernameInput.value.trim();
      const password = passwordInput.value;

      if (username && password) {
        loginUser(username, password);
      } else {
        alert("Username dan password tidak boleh kosong.");
      }
    });
  });
})();
