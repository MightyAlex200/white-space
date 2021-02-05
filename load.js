const intro = `Welcome to White Space. \
Anything you type becomes true.

You know when people say "You can play any game \
in your head if you just close your eyes"? This is that. \
But with text. Go ahead, don't be shy!

Your text is automatically saved in the \
browser. Have fun writing :)\n\n`;

window.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementById("maintext");
    text.value = localStorage.getItem("text") || intro;
    text.addEventListener("input", function () {
        localStorage.setItem("text", text.value);
    });
});