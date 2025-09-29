document.querySelector("#buktifollow").addEventListener("change", function (e) {
  if (e.target.files.length > 0) {
    var fileName = e.target.files[0].name;
    var nextSibling = e.target.nextElementSibling;
    nextSibling.innerText = fileName;

    // 🔥 Tambahan: preview gambar sebelum submit
    const preview = document.getElementById("preview-bukti");
    preview.src = URL.createObjectURL(e.target.files[0]);
    preview.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#register-form");
  const endpoint = `https://pendaftaran-seminar-api-production.up.railway.app/api/pendaftar/add`;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaLengkap = document.getElementById("nama-lengkap").value.trim();
    const email = document.getElementById("email").value.trim();
    const noTelp = document.getElementById("no-telp").value.trim();
    const buktifollow = document.getElementById("buktifollow").files[0];
    const asalSekolah = document.getElementById("asal-sekolah").value.trim();

    if (!namaLengkap || !email || !noTelp || !asalSekolah) {
      alert("Harap isi semua field dengan benar!");
      return;
    }
    if (!buktifollow) {
      alert("Harap upload bukti follow!");
      return;
    }

    const formData = new FormData();
    formData.append("nama-lengkap", namaLengkap);
    formData.append("email", email);
    formData.append("no-telp", noTelp);
    formData.append("bukti-follow", buktifollow);
    formData.append("asal-sekolah", asalSekolah);

    fetch(endpoint, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          alert("✅ " + data.message);
          form.reset();
          document.getElementById("preview-bukti").style.display = "none";
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
