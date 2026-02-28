//your JS code here. If required
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const existingBtn = document.getElementById("existing");

    const STORAGE_KEY = "rememberMeUser";
    window.addEventListener("DOMContentLoaded", () => {
      const savedUser = localStorage.getItem(STORAGE_KEY);

      if (savedUser) {
        existingBtn.style.display = "block";
      }
    });

    // Handle form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = usernameInput.value;
      const password = passwordInput.value;

      alert(`Logged in as ${username}`);

      if (checkbox.checked) {
        const userData = {
          username,
          password
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
        existingBtn.style.display = "block";
      } else {
        localStorage.removeItem(STORAGE_KEY);
        existingBtn.style.display = "none";
      }
    });

    // Login as existing user
    existingBtn.addEventListener("click", function () {
      const savedUser = JSON.parse(localStorage.getItem(STORAGE_KEY));

      if (savedUser) {
        alert(`Logged in as ${savedUser.username}`);
      }
    });
  
