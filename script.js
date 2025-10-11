function saygiDurusu() {
  // Sayfanın arka planı ve yazısını değiştirme
  document.body.style.backgroundColor = "#000"; // siyah arka plan
  document.body.style.color = "#fff"; // tüm yazılar beyaz

  // Blockquote elementlerini vurgulu yap
  const alintilar = document.querySelectorAll("blockquote");
  alintilar.forEach(b => {
    b.style.color = "#ffeb3b"; // sarı gibi okunabilir bir renk
    b.style.backgroundColor = "rgba(0,0,0,0.5)"; // siyaha yakın yarı şeffaf
    b.style.borderLeftColor = "#ffeb3b"; // vurgulu
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
