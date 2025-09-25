function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Manual username & password (idhar apna fix id-password daalo)
  const ADMIN_USER = "vipin";
  const ADMIN_PASS = "12345";

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    // LocalStorage me ek flag set karo
    localStorage.setItem("isAdmin", "true");
    window.location.href = "admin.html"; // Redirect to admin page
  } else {
    alert("Invalid credentials!");
  }
}
