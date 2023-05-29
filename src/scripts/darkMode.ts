export const setUpDarkMode = () => {
  const darkModeBtn = document.getElementById("dark-mode-toggle");

  darkModeBtn!.addEventListener("click", () =>
    document.body.classList.toggle("dark-mode")
  );
};
