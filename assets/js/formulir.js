document.querySelector("#buktifollow").addEventListener("change", function (e) {
  var fileName = e.target.files[0].name;
  var nextSibling = e.target.nextElementSibling;
  nextSibling.innerText = fileName;
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const endpoint = `https://pendaftaran-coc-api.up.railway.app/api/pendaftar/add`;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaLengkap = document.getElementById("nama-lengkap").value;
    const email = document.getElementById("email").value;
    const noTelp = document.getElementById("no-telp").value;
    const buktifollow = document.getElementById("buktifollow").files[0];
    const asalKampus = document.getElementById("asal-kampus").value;
      document.querySelector('input[name="punya_laptop"]:checked')?.value || "";

    const formData = new FormData();
    formData.append("nama-lengkap", namaLengkap);
    formData.append("email", email);
    formData.append("no-telp", noTelp);
    formData.append("bukti-follow", buktifollow);
    formData.append("asal-kampus", asalKampus);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch(endpoint, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.code === 200) alert(data.message);
        if (data.code === 400) alert(data.message);
        if (data.code === 500) alert(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
