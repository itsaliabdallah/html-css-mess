const root = document.querySelector(":root"),
  inputs = document.querySelectorAll("input[name='theme']");

for (const input of inputs) {
  input.onchange = (e) => {
    root.style.setProperty("--theme-color", `var(--${e.target.value})`);
  };
}
