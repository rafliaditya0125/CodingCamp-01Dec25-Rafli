document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault(); // biar gak reload halaman

  // ambil data
  let name = document.getElementById("nameInput").value.trim();
  let email = document.getElementById("emailInput").value.trim();
  let phone = document.getElementById("phoneInput").value.trim();
  let message = document.getElementById("messageInput").value.trim();

  // kalau nama kosong → visitor
  if (name === "") {
    name = "Visitor";
  }

  // update greeting
  const greeting = document.getElementById("greeting");
  greeting.textContent = `Hi ${name}, Welcome to our website!`;

  // tampilkan hasil input
  const resultBox = document.getElementById("resultContainer");
  resultBox.innerHTML = `
        <div class="card p-3 shadow-sm mt-3">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        </div>
    `;
});
