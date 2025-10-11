function saygiDurusu() {
  // Arka planı siyah yap
  document.body.style.backgroundColor = "#000";

  // Tüm metinleri beyaz yap
  const tumYazilar = document.querySelectorAll("body *");
  tumYazilar.forEach(el => {
    const computed = window.getComputedStyle(el).color;
    if (computed !== "rgb(255, 255, 255)") { // zaten beyazsa değiştirme
      el.style.color = "#fff";
    }
  });

  // Blockquote elementlerini vurgulu yap
  const alintilar = document.querySelectorAll("blockquote");
  alintilar.forEach(b => {
    b.style.color = "#ffeb3b"; // okunabilir sarı
    b.style.backgroundColor = "rgba(0,0,0,0.5)"; // yarı şeffaf siyah
    b.style.borderLeftColor = "#ffeb3b";
  });

  // Mesajı gösterme
  const mesaj = document.getElementById("anmaMesaji");
  mesaj.innerText = "Saygıyla anıyoruz...";
  mesaj.style.display = "block";

  // Butonu pasifleştirme
  const buton = document.querySelector("button");
  buton.disabled = true;
  buton.innerText = "Saygı duruşu yapıldı.";

  // Yavaş fade-in animasyonu
  mesaj.style.opacity = 0;
  let op = 0;
  const fade = setInterval(() => {
    if(op >= 1) clearInterval(fade);
    mesaj.style.opacity = op;
    op += 0.02;
  }, 20);
}
