// Script for Dark mode
const toggleButton = document.getElementById("darkModeToggle");
const icon = toggleButton.querySelector("i");
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

toggleButton.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");

  icon.classList.toggle("fa-moon", !isDark);
  icon.classList.toggle("fa-sun", isDark);

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
