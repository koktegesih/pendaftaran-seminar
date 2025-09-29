// Preview file + update label
document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.querySelector("#buktifollow");
  const fileLabel = document.querySelector("label[for='buktifollow']");
  const preview = document.getElementById("preview-bukti");
  const form = document.querySelector("#register-form");

  const endpoint =
    "https://pendaftaran-seminar-api-production.up.railway.app/api/pendaftar/add";

  // Preview dan update label saat upload file
  fileInput.addEventListener("change", function (e) {
    if (e.target.files.length > 0) {
      const fileName = e.target.files[0].name;
      fileLabel.innerText = fileName;

      preview.src = URL.createObjectURL(e.target.files[0]);
      preview.style.display = "block";
    } else {
      fileLabel.innerText = "Upload bukti follow Instagram";
      preview.style.display = "none";
    }
  });

  // Submit form
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaLengkap = document.getElementById("nama-lengkap").value.trim();
    const email = document.getElementById("email").value.trim();
    const noTelp = document.getElementById("no-telp").value.trim();
    const asalSekolah = document.getElementById("asal-sekolah").value.trim();
    const buktifollow = fileInput.files[0];

    // validasi
    if (!namaLengkap || !email || !noTelp || !asalSekolah) {
      alert("⚠️ Harap isi semua field dengan benar!");
      return;
    }
    if (!buktifollow) {
      alert("⚠️ Harap upload bukti follow!");
      return;
    }

    // buat form data
    const formData = new FormData();
    formData.append("nama-lengkap", namaLengkap);
    formData.append("email", email);
    formData.append("no-telp", noTelp);
    formData.append("asal-sekolah", asalSekolah);
    formData.append("bukti-follow", buktifollow);

    // kirim ke server
    fetch(endpoint, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server error " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        if (data.code === 200) {
          alert("✅ " + data.message);
          form.reset();
          preview.style.display = "none";
          fileLabel.innerText = "Upload bukti follow Instagram";
        } else {
          alert("⚠️ " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("❌ Gagal mengirim data, coba lagi nanti!");
      });
  });
});
