export const setUpDarkMode = () => {
  const darkModeBtn = document.getElementById("dark-mode-toggle");

  darkModeBtn!.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  });
};
