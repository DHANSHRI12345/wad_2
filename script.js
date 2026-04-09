 function toggleForm() {
    const form = document.getElementById("userForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
  }

  const form = document.getElementById("userForm");
  const table = document.getElementById("userTable");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    table.innerHTML += `
      <tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
      </tr>
    `;

    form.reset();
    form.style.display = "none";
  });