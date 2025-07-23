document.addEventListener("DOMContentLoaded", () => {
  const metin = "Merhaba, ben Muhammed Said";
  const hedef = document.getElementById("baslik");
  let i = 0;

  function yazdir() {
    if (i < metin.length) {
      hedef.textContent += metin.charAt(i);
      i++;
      setTimeout(yazdir, 100);
    }
  }

  yazdir();
});