const text = "Happy Birthday, My Doct...";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
}
window.onload = typeWriter;
